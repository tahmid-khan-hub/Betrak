"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuChevronDown } from "react-icons/lu";

interface DropdownProps {
  name: string;
  options: string[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Dropdown = ({ name, options, placeholder = "Select your gender", value, onChange, }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  return (
    <div className="relative">
      {/* hidden input to carry value in form */}
      <input type="hidden" name={name} value={value} />

      {/* trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left transition focus:border-indigo-500/60 focus:outline-none focus:ring-1 focus:ring-indigo-500/40"
      >
        <span className={value ? "text-gray-100" : "text-gray-500"}>
          {value || placeholder}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400"
        >
          <LuChevronDown size={18} />
        </motion.span>
      </button>

      {/* options */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute z-10 mt-2 w-full max-h-48 overflow-y-auto rounded-xl border border-white/10 bg-gray-900 shadow-xl"
          >
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className="cursor-pointer px-4 py-3 text-gray-300 transition hover:bg-indigo-500/10 hover:text-indigo-300"
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;