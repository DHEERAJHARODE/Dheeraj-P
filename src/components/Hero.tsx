"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">
      {/* 🌈 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient" />

      {/* ✨ Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-50"
            initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
            animate={{ y: -50 }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* 🎯 Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6 relative z-10"
      >
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Hi, I’m{""}
          <span className="text-yellow-300 glow-text">
            <Typewriter
              words={[" Dheeraj Harode", " A Web Developer", " A Freelancer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="text-lg mb-6 text-white/90">
          A Passionate Web Developer 🚀
        </p>

        <a
          href="#contact"
          className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold shadow-lg hover:scale-105 transition"
        >
          Get In Touch
        </a>
        <a
          href="/resume.pdf"
          download
          className="ml-4 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold shadow-lg hover:scale-105 transition"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Extra CSS */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 10s ease infinite;
        }
      `}</style>
    </section>
  );
}
