"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SendHorizonal } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("✅ Message Sent Successfully!");
      form.reset();
    } else {
      setStatus("❌ Something went wrong.");
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gray-900 text-white" // 👈 only background changed
    >
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-5xl font-extrabold mb-14 text-yellow-400"
        >
          Let’s Work Together
        </motion.h2>

        {/* Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative bg-white shadow-2xl rounded-3xl p-10 flex flex-col gap-6 text-black"
        >
          {/* Input Fields */}
          <div className="flex flex-col gap-5">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 transition"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 transition"
              required
            />
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              name="message"
              placeholder="Your Message"
              rows={5}
              className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 resize-none transition"
              required
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 font-semibold text-white shadow-lg hover:shadow-pink-500/30 transition-all"
          >
            <SendHorizonal className="w-5 h-5" />
            Send Message
          </motion.button>

          {/* Status message */}
          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm mt-4 text-yellow-500 font-medium"
            >
              {status}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
