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
            "SELECT * FROM user WHERE email = $1", [credentials.email]
        );

        if(userExists.rows.length === 0) throw new Error("No user found");

        const user = userExists.rows[0];

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


};
