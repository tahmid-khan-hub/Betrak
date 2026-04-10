export interface DatabaseUser {
  id: string;
  name: string;
  email: string;
  password: string;
  image: string | null;
  role: "user" | "admin";
  created_at: Date;
  updated_at: Date;
}
