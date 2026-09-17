"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import { brand } from "@/lib/brand";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted");
    setSubmitted(true);
  };

  return (
    <main className="pt-20">
      {/* ============================================ */}
      {/* HERO */}
      {/* ============================================ */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-ink">
        <div className="absolute inset-0 opacity-30">
          <img src="/das/contact/contact-img.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-canvas" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-canvas" />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center max-w-3xl"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Contact</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6 leading-tight">
              Connect With Our <span className="gold-text">Engineers</span>
            </h1>
            <p className="text-lg text-ash max-w-2xl mx-auto">
              We're here to help. Let's discuss your best path forward, from hardware and tuning to long-term care for your vehicle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CONTACT INFO */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Get in touch</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Contact Information</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="glass rounded-2xl p-8 hover:border-gold/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <Phone size={20} className="text-gold" />
              </div>
              <h3 className="font-display text-sm font-bold text-cream mb-2 tracking-wide uppercase">Phone</h3>
              <div className="flex flex-col gap-1">
                <a
                  href={`tel:${brand.phone.replace(/\s/g, "")}`}
                  className="text-sm text-ash hover:text-gold transition-colors"
                >
                  {brand.phone}
                </a>
                <a
                  href={`tel:${brand.phone2.replace(/\s/g, "")}`}
                  className="text-sm text-ash hover:text-gold transition-colors"
                >
                  {brand.phone2}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="glass rounded-2xl p-8 hover:border-gold/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <Mail size={20} className="text-gold" />
              </div>
              <h3 className="font-display text-sm font-bold text-cream mb-2 tracking-wide uppercase">Email</h3>
              <a
                href={`mailto:${brand.email}`}
                className="text-sm text-ash hover:text-gold transition-colors break-all"
              >
                {brand.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="glass rounded-2xl p-8 hover:border-gold/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <MapPin size={20} className="text-gold" />
              </div>
              <h3 className="font-display text-sm font-bold text-cream mb-2 tracking-wide uppercase">Address</h3>
              <p className="text-sm text-ash leading-relaxed">{brand.address}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* GET IN TOUCH — FORM */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Get in Touch</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
              We'll take it from <span className="gold-text">here.</span>
            </h2>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="glass rounded-2xl p-12 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                <Send size={24} className="text-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold text-cream mb-3">Message Sent!</h3>
              <p className="text-ash max-w-md mx-auto">
                Thank you for reaching out. Our team will get back to you as soon as possible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 inline-flex items-center gap-2 text-gold hover:gap-3 transition-all text-sm"
              >
                Send another message <ArrowRight size={14} />
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ willChange: "transform, opacity" }}
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-ash mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-ink/50 border border-gold/10 rounded-lg px-4 py-3 text-cream focus:border-gold/40 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-ash mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-ink/50 border border-gold/10 rounded-lg px-4 py-3 text-cream focus:border-gold/40 focus:outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-ash mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full bg-ink/50 border border-gold/10 rounded-lg px-4 py-3 text-cream focus:border-gold/40 focus:outline-none transition-colors"
                    placeholder="+971 xx xxx xxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm text-ash mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-ink/50 border border-gold/10 rounded-lg px-4 py-3 text-cream focus:border-gold/40 focus:outline-none transition-colors"
                    placeholder="What can we help with?"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-ash mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-ink/50 border border-gold/10 rounded-lg px-4 py-3 text-cream focus:border-gold/40 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your vehicle and what you're looking for..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={16} />
              </button>
            </motion.form>
          )}
        </div>
      </section>

      {/* ============================================ */}
      {/* OUR LOCATION */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Visit us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">Our Location</h2>
            <p className="text-ash max-w-2xl mx-auto">
              {brand.address}, {brand.country}
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-stone">
              <Clock size={16} className="text-gold" />
              <span>{brand.program}</span>
            </div>
            <a
              href={brand.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
            >
              Get Directions <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="glass rounded-2xl overflow-hidden"
          >
            <iframe
              src={brand.mapEmbed}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${brand.name} Location`}
            />
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA */}
      {/* ============================================ */}
      <section className="py-32 px-6 bg-surface">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ willChange: "transform, opacity" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
            Go from fast to <span className="gold-text">faster</span>
          </h2>
          <p className="text-lg text-ash mb-10">
            Have a question about tuning, upgrades, or maintenance? Chat with us on WhatsApp or send a message and we'll get back to you right away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 text-lg"
            >
              Chat on WhatsApp <ArrowRight size={20} />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 glass text-cream font-semibold rounded-lg hover:border-gold/50 transition-all duration-300 text-lg"
            >
              Send a message
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
