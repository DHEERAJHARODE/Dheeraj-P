import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer"; // 👈 Footer import kiya

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />

      {/* Contact Section */}
      <section id="contact" className="pt-16 pb-1">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
