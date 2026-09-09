"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Brain, Wrench, ShieldCheck, Repeat, MessageCircle } from "lucide-react";
import { brand } from "@/lib/brand";

const principles = [
  {
    icon: Brain,
    title: "Expertise",
    text: "Every decision is guided by technical understanding and measured outcomes.",
  },
  {
    icon: Wrench,
    title: "Craftsmanship",
    text: "Every upgrade is measured, refined, and executed with precision.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "Work is carried out transparently, with respect and restraint for the vehicle.",
  },
  {
    icon: Repeat,
    title: "Consistency",
    text: "The same standards apply across every brand, platform, and project.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* ============================================ */}
      {/* HERO */}
      {/* ============================================ */}
      <section className="relative py-32 px-6 bg-ink overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="/das/gallery/featured-1.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-canvas/50 to-ink pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ willChange: "transform, opacity" }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-6 block">About {brand.name}</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-8 leading-tight">
              Discover the <span className="gold-text">DAS Tuning</span> Difference
            </h1>
            <p className="text-lg md:text-xl text-ash leading-relaxed max-w-3xl mx-auto">
              Where engineering, care for the driver experience, and respect for the vehicle come together to shape a more considered approach to performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ABOUT TEXT */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ willChange: "transform, opacity" }}
          >
            <p className="text-lg md:text-xl text-ash leading-relaxed">
              {brand.name} is a performance-focused automotive specialist delivering all-in-one tuning, hardware upgrades, and specialist servicing for luxury and sports vehicles. Our work is rooted in deep experience with European platforms, and our approach blends technical discipline with a measured respect for each vehicle's character and the principles that define its design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BUILT ON EUROPEAN CRAFT */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ willChange: "transform, opacity" }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Our Origins</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
                Built on <span className="gold-text">European Craft</span>
              </h2>
              <p className="text-lg text-ash leading-relaxed">
                We began our journey in the United Kingdom, with specialist work on Fiat and Lancia platforms. In 2013, our expertise led us to Dubai, where DAS Tuning was established. We've been a performance workshop working on European and other premium platforms ever since, with a focus on thoughtful engineering and careful execution, leading to powerful results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden glass">
                <img
                  src="/das/gallery/featured-2.png"
                  alt="DAS Tuning Workshop"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="glass rounded-2xl p-6 mt-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                    <span className="font-display text-2xl font-bold gold-text">2013</span>
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-cream">Established in Dubai</p>
                    <p className="text-sm text-stone">Al Quoz Industrial Area 3</p>
                  </div>
                </div>
                <div className="h-px hairline mb-6" />
                <ul className="space-y-4">
                  {[
                    "Rooted in UK specialist work on Fiat & Lancia",
                    "European platform expertise since the beginning",
                    "Premium and sports vehicle focus",
                    "Thoughtful engineering, careful execution",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-ash">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* LED WITH TECHNICAL ACCOUNTABILITY */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="glass rounded-2xl p-10 order-2 lg:order-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <ShieldCheck size={22} className="text-gold" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-cream">Ilyas Sheikh</p>
                  <p className="text-xs text-stone tracking-wide uppercase">Co-Owner / Operator</p>
                </div>
              </div>
              <div className="h-px hairline mb-6" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Wrench size={22} className="text-gold" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-cream">Baber Sheikh</p>
                  <p className="text-xs text-stone tracking-wide uppercase">Co-Owner / Operator</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="order-1 lg:order-2"
            >
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Leadership</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
                Led with <span className="gold-text">Technical Accountability</span>
              </h2>
              <p className="text-lg text-ash leading-relaxed">
                Owned and operated by Ilyas Sheikh and Baber Sheikh, {brand.name} is led with direct oversight and a hands-on approach. The culture is practical, detail-driven, and engineering-led, with a focus on doing things properly rather than quickly. Every project reflects a mindset shaped by experience, not trends.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOUR PRINCIPLES */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">What Guides Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
              Four <span className="gold-text">Principles</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="glass rounded-2xl p-6 hover:border-gold/20 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <principle.icon size={20} className="text-gold" />
                  </div>
                  <span className="font-display text-2xl font-bold text-stone">0{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-cream mb-3">{principle.title}</h3>
                <p className="text-sm text-ash leading-relaxed">{principle.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CLOSING */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ willChange: "transform, opacity" }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Today & Beyond</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              A Complete <span className="gold-text">Performance Engineering Partner</span>
            </h2>
            <p className="text-lg text-ash leading-relaxed">
              Today, {brand.name} operates as a complete performance engineering partner, supporting vehicles through tuning, upgrades, and long-term maintenance care. Our focus remains unchanged: data-led engineering and proven processes that earn the confidence of drivers who demand the best from their machines.
            </p>
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
            Ready to experience the difference? Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 text-lg"
            >
              Get in touch! <ArrowRight size={18} />
            </Link>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 glass text-cream font-semibold rounded-lg hover:border-gold/50 hover:shadow-[0_4px_30px_rgba(255,107,0,0.25)] transition-all duration-300 text-lg"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
