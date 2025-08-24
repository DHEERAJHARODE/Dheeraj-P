"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          Dheeraj.dev
        </Link>

        {/* Nav Links */}
        <div className="space-x-8 hidden md:flex">
          <Link href="#about" className="hover:text-yellow-400 transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-yellow-400 transition">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
        </div>

        {/* Call to Action */}
        <Link
          href="#contact"
          className="hidden md:inline-block px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Hire Me
        </Link>
      </div>
    </nav>
  );
}
