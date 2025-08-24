"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-0 relative">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Left - Branding & tagline */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">Dheeraj.dev</h2>
          <p className="text-gray-400 text-sm mt-2">
            Crafting modern websites with ❤️ & code.
          </p>
          <p className="text-gray-500 text-xs mt-3">
            © {new Date().getFullYear()} Dheeraj.dev. All rights reserved.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="flex justify-center space-x-6">
          <Link href="#about" className="hover:text-white transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* Right - Social Icons */}
        <div className="flex justify-center md:justify-end gap-6 text-2xl">
          <motion.a
            href="https://www.instagram.com/dheeraj_harode"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-pink-500 hover:text-pink-400 transition"
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/dheerajharode"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-blue-400 hover:text-blue-300 transition"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://github.com/DHEERAJHARODE"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-300 hover:text-white transition"
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>

      {/* Bottom line - Tech stack */}
      <div className="text-center text-gray-500 text-xs mt-8">
        Built with Next.js, Tailwind CSS & Framer Motion 🚀
      </div>

      {/* Scroll to top button */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-5 right-5 bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-yellow-400 transition"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
}
