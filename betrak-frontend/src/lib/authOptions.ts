import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import pool from "./postgresql";
import { DatabaseUser } from "@/types/DatabaseUser";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null>{
        if (!credentials?.email || !credentials?.password) throw new Error("Invalid credentials");

        const userExists = await pool.query<DatabaseUser>(
            "SELECT * FROM users WHERE email = $1", [credentials.email]
        );

        if(userExists.rows.length === 0) throw new Error("No user found");

        const user = userExists.rows[0];

        // compare the bcrypt passwrod from db with user given password
        const isPassword = await bcrypt.compare(credentials.password, user.password);
        if (!isPassword) throw new Error("Incorrect password");

        // save the user data to session
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
        }
      },
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/sign-in", // our own customized sign in page
  },
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({user}: {user: User}) {
        try {
            const userExists = await pool.query<DatabaseUser>(
                "SELECT * FROM users WHERE email = $1", [user?.email]
            )
            // if new user then insert the new user data in db
            if(userExists.rows.length === 0){
                await pool.query(
                    "INSERT INTO users (name, email, image, role) VALUES ($1, $2, $3)",
                    [user.name, user.email, user.image]
                )
            }
            return true;
        } catch (error) {
            console.error(error)
            return false;
        }
    },
    async jwt({token}) {
        if(token.email){
            const userIdAndRole = await pool.query("SELECT id, role FROM users WHERE email = $1", [ token.email]);

            const dbUser = userIdAndRole.rows as {id: string; role: string}[];

            // set token id and role from db id and role (users table )
            if(dbUser.length > 0) {
                token.userId = dbUser[0].id;
                token.role = dbUser[0].role;
            }
        }
        return token;
    },
    async session({session, token}) {
        if(session.user && token.userId){
            // set session user id and role from token user id and role
            if(token.userId) session.user.id = String(token.userId)
            if(token.role) session.user.role = token.role; 
        }
        // if user has no image then return null
        if (!session.user.image || session.user.image.trim() === "") session.user.image = null;
        
        return session;
    },
  },
};
