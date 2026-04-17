"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TbError404 } from "react-icons/tb";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <TbError404 size={222} className="text-indigo-500" />

      <h1 className="jakartaSans text-4xl font-bold text-gray-50">Page not <span className="bg-linear-to-r from-indigo-200 to-indigo-500 bg-clip-text text-transparent">found</span></h1>
      <p className="text-gray-400 mt-5">
        The page you’re looking for doesn’t exist.
      </p>

      <Link href="/" >
        <Button className={"mt-7 bg-indigo-500/70 text-white hover:bg-indigo-600/70 px-8 py-6 text-md font-semibold"}>Go back home</Button>
      </Link>
    </div>
  );
}