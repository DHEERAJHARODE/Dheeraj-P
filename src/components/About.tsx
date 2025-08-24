"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiTypescript, SiJavascript } from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <Image
            src="/me.jpeg" // 👈 yaha apni photo ka naam rakho (public folder me dalna)
            alt="My Photo"
            width={350}
            height={350}
            className="rounded-2xl shadow-lg border-4 border-purple-500"
          />
        </motion.div>

        {/* Right Side - About Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">About Me</h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            Hi, I’m a passionate <span className="text-yellow-300">Web Developer & Programmer</span> 🚀 
            who loves building modern, responsive, and high-performance websites.
            I’ve worked with <span className="text-purple-400">clients & startups</span> to create 
            portfolios, business solutions, and scalable applications.  
          </p>

          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            My technical expertise includes{" "}
            <span className="font-semibold text-white">
              JavaScript, TypeScript, Python, React, Next.js, Node.js, Express.js, Tailwind CSS, and MongoDB
            </span>.  
            I focus on writing clean, efficient code and delivering solutions that truly add value.
          </p>

          {/* Skills Icons */}
          <div className="flex flex-wrap gap-6 text-5xl mt-6">
            <SiJavascript className="text-yellow-400" title="JavaScript" />
            <SiTypescript className="text-blue-400" title="TypeScript" />
            <FaPython className="text-green-400" title="Python" />
            <FaReact className="text-cyan-400" title="React" />
            <SiNextdotjs className="text-white" title="Next.js" />
            <FaNodeJs className="text-green-500" title="Node.js" />
            <SiMongodb className="text-green-400" title="MongoDB" />
            <SiTailwindcss className="text-sky-400" title="Tailwind CSS" />
            <FaHtml5 className="text-orange-500" title="HTML5" />
            <FaCss3Alt className="text-blue-500" title="CSS3" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
