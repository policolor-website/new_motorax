"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Gauge, Zap, Wrench, TrendingUp, Settings, ShieldCheck, Sparkles } from "lucide-react";
import { brand } from "@/lib/brand";

// ============================================
// SERVICES
// ============================================
const services = [
  {
    slug: "engine-tuning",
    icon: Gauge,
    title: "Engine & ECU Tuning",
    text: "ECU calibration focused on how the car delivers power in real driving, not just peak numbers.",
    image: "/das/services/engine-tuning-banner.png",
  },
  {
    slug: "dyno-testing",
    icon: Zap,
    title: "Dyno Testing",
    text: "Independent dyno validation that shows exactly how a vehicle performs before and after tuning adjustments.",
    image: "/das/services/dyno-testing-banner.png",
  },
  {
    slug: "exhaust-brake-upgrades",
    icon: Wrench,
    title: "Exhaust & Brake Upgrades",
    text: "Hardware upgrades that improve breathing and stopping performance, designed to match increased power and driving demands.",
    image: "/das/services/exhaust-banner.png",
  },
  {
    slug: "turbo-upgrades",
    icon: TrendingUp,
    title: "Turbo Upgrades",
    text: "Upgraded turbo systems engineered to support higher output while maintaining balance, control, and long-term engine health.",
    image: "/das/services/turbo-banner.png",
  },
  {
    slug: "maintenance",
    icon: Settings,
    title: "Maintenance",
    text: "Routine service and care tailored for performance vehicles and long-term ownership.",
    image: "/das/services/maintenance-banner.png",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* ============================================ */}
      {/* HERO */}
      {/* ============================================ */}
      <section className="relative py-32 px-6 bg-canvas overflow-hidden">
        <div className="absolute inset-0 noise" />
        <div className="absolute inset-0 opacity-20">
          <img src="/das/services/engine-tuning-banner.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Our Services</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6 leading-tight">
              Car Tuning Services for <span className="gold-text">Real-World Results</span>
            </h1>
            <p className="text-lg text-ash max-w-2xl mx-auto leading-relaxed">
              Professional car tuning in Dubai focused on measurable gains and long-term reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHAT EFFECTIVE CAR TUNING LOOKS LIKE */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ willChange: "transform, opacity" }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">The Philosophy</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6 leading-tight">
              What Effective Car Tuning <span className="gold-text">Looks Like</span>
            </h2>
            <p className="text-lg text-ash leading-relaxed">
              Effective car tuning is about how a vehicle behaves as a whole, not isolated power figures. Tuning car systems properly focuses on real-world performance and drivability across everyday conditions. Successful vehicle tuning respects mechanical limits, considers platform behaviour, and aims for results that feel natural, predictable, and usable over time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* HOW OUR CAR TUNING SHOP DELIVERS IT */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ willChange: "transform, opacity" }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">The Approach</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6 leading-tight">
              How Our Car Tuning Shop <span className="gold-text">Delivers it</span>
            </h2>
            <p className="text-lg text-ash leading-relaxed">
              As a leading specialist of car tuning in the UAE, {brand.name} applies this philosophy through structured testing, platform-specific knowledge, and disciplined calibration processes. Every tuning project is approached with restraint and intent, improving power delivery and response while maintaining safe operating margins, long-term reliability, and confidence behind the wheel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SERVICES GRID */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Explore</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Our Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv, i) => (
              <motion.div
                key={srv.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ willChange: "transform, opacity" }}
              >
                <Link
                  href={`/servicii/${srv.slug}`}
                  className="group block glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 h-full"
                >
                  <div className="relative h-48 overflow-hidden bg-ink/50">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                        <srv.icon size={20} className="text-gold" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-cream">{srv.title}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-ash leading-relaxed mb-4">{srv.text}</p>
                    <span className="text-gold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA */}
      {/* ============================================ */}
      <section className="py-32 px-6 bg-canvas">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ willChange: "transform, opacity" }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles size={20} className="text-gold" />
            <ShieldCheck size={20} className="text-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
            Go from fast to <span className="gold-text">faster</span>
          </h2>
          <p className="text-lg text-ash mb-10">
            Book a session with {brand.name} and experience tuning done right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
            >
              Book Appointment <ArrowRight size={18} />
            </Link>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 glass text-cream font-semibold rounded-lg hover:border-gold/50 hover:shadow-[0_4px_30px_rgba(255,107,0,0.25)] transition-all duration-300"
            >
              Contact a Technician
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
