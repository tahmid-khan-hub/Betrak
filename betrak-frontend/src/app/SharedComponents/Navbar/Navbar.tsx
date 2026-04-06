"use client"
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Menu from "@/app/hooks/Menu";

const Navbar = () => {
  const { isOpen, setIsOpen, menuRef } = Menu();
  const links = (
    <>
      <li className="hover:text-indigo-500">
        <Link href="/">Home</Link>
      </li>
      <li className="hover:text-indigo-500">
        <Link href="/assessment">Assessment</Link>
      </li>
      <li className="hover:text-indigo-500">
        <Link href="/result">Result</Link>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-10 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto w-full flex items-center justify-between px-2 md:px-3 h-16">
        {/* Left side */}
        <div
          className="jakartaSans inline-flex items-center justify-center text-xl font-bold"
        >
          Betrak
        </div>

        {/* Center links */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="lato flex gap-8 text-white">{links}</ul>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Mobile menu */}
          <div className="lg:hidden relative" ref={menuRef}>
            <label
              tabIndex={0}
              className="cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  key="mobile-menu"
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
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
