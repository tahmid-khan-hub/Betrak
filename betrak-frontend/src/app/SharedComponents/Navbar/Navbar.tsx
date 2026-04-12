"use client"
import { motion, AnimatePresence } from "framer-motion";
import Menu from "@/app/hooks/Menu";
import NavLink from "@/app/hooks/NavLinks";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session, status} = useSession();
  console.log(session);
  const { isOpen, setIsOpen, menuRef } = Menu();
  const links = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/assessment">Assessment</NavLink>
      </li>
      <li>
        <NavLink href="/result">Result</NavLink>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-10 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto w-full flex items-center justify-between px-2 md:px-3 h-16">
        {/* Left side */}
        <div
          className="jakartaSans inline-flex items-center justify-center text-xl font-bold bg-linear-to-r from-indigo-200 to-indigo-500 bg-clip-text text-transparent"
        >
          <span className="lobster text-[28px] -mt-1">B</span>etrak
        </div>

        {/* Center links */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex gap-6 text-white">{links}</ul>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {status === "loading" ? (
            <div className="h-10 w-22 bg-gray-800 rounded-md animate-pulse"></div>
          ) : session ? (
            <Button onClick={() => signOut()}
            className={"bg-indigo-500/70 text-white hover:bg-indigo-600/70 px-4 py-5"}>Sign Out</Button>
          ) : (
            <Link href={"/sign-in"}>
              <Button className={"bg-indigo-500/70 text-white hover:bg-indigo-600/70 px-4 py-5"}>Sign In</Button></Link>
          )}
          {/* Mobile menu */}
          <div className="lg:hidden relative" ref={menuRef}>
            <label tabIndex={0}
              className="cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path  strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>

            <AnimatePresence>
              {isOpen && (
                <motion.ul key="mobile-menu"
                  initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }}
                  tabIndex={0}
                  className="lato absolute right-0 mt-3 w-60 p-4 rounded-2xl shadow-lg bg-gray-900 border border-white/20 flex flex-col gap-4 z-50 text-white"
                >
                  {links}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
