"use client";
import { useState } from "react";

// ✅ Projects Data (6 Web, 2 Mobile, 2 UI)
const projects = [
  // --- Web Projects ---
  { id: 1, title: "Portfolio Website", category: "Web", video: "/videos/portfolio.mp4", link: "https://example.com/portfolio" },
  { id: 2, title: "E-commerce Store", category: "Web", video: "/videos/ecommerce.mp4", link: "https://example.com/ecommerce" },
  { id: 3, title: "Blog Platform", category: "Web", video: "/videos/blog.mp4", link: "https://example.com/blog" },
  { id: 4, title: "SaaS Dashboard", category: "Web", video: "/videos/dashboard.mp4", link: "https://example.com/dashboard" },
  { id: 5, title: "Learning Platform", category: "Web", video: "/videos/learning.mp4", link: "https://example.com/learning" },
  { id: 6, title: "Booking Website", category: "Web", video: "/videos/booking.mp4", link: "https://example.com/booking" },

  // --- Mobile Projects ---
  { id: 7, title: "Fitness Tracker App", category: "Mobile", video: "/videos/fitness.mp4", link: "https://example.com/fitness" },
  { id: 8, title: "Food Delivery App", category: "Mobile", video: "/videos/food.mp4", link: "https://example.com/food" },

  // --- UI Projects ---
  { id: 9, title: "Landing Page UI", category: "UI", video: "/videos/landing.mp4", link: "https://example.com/landing" },
  { id: 10, title: "Dashboard UI Kit", category: "UI", video: "/videos/uikit.mp4", link: "https://example.com/uikit" },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {["All", "Web", "Mobile", "UI"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full transition ${
              filter === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {filtered.map((p) => (
          <a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
          >
            {/* Project Video */}
            <video
              src={p.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover"
            />

            {/* Project Info */}
            <div className="p-4">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{p.category}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
