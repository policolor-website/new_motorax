"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Wrench, Gauge, Settings, ShieldCheck, Award } from "lucide-react";
import { brand } from "@/lib/brand";

// ============================================
// BRAND CARDS
// ============================================
const brandCards = [
  {
    name: "BMW",
    tagline: "BMW Performance Engineering",
    description:
      "Enhancing performance in ways that stay true to BMW's sporty DNA while refining response and everyday usability.",
    link: "/brand-uri/bmw",
    image: "/das/gallery/bmw-1.jpg",
  },
  {
    name: "Audi",
    tagline: "Audi Performance Engineering",
    description:
      "Performance engineering for Audi vehicles, shaped around confidence and effortless all-wheel-drive composure.",
    link: "/brand-uri/audi",
    image: "/das/gallery/audi-1.jpg",
  },
  {
    name: "Mercedes-Benz",
    tagline: "Mercedes-Benz Performance Engineering",
    description:
      "Engineering solutions that enhance Mercedes-Benz capability without compromising its signature luxury feel.",
    link: "/brand-uri/mercedes-benz",
    image: "/das/gallery/featured-1.png",
  },
  {
    name: "Volkswagen",
    tagline: "Volkswagen Performance Engineering",
    description:
      "A thoughtful approach to Volkswagen performance focused on smart gains, everyday practicality, and enjoyable driving.",
    link: "/brand-uri/volkswagen",
    image: "/das/gallery/featured-2.png",
  },
];

// ============================================
// PILLARS
// ============================================
const pillars = [
  {
    icon: Wrench,
    title: "Hardware",
    text: "Purpose-built performance parts chosen for compatibility, balance, and long-term vehicle health.",
  },
  {
    icon: Gauge,
    title: "Tuning",
    text: "Engineering-led calibration focused on controlled power and results that feel rewarding to drive.",
  },
  {
    icon: Settings,
    title: "Maintenance",
    text: "Routine service and care tailored for performance vehicles and long-term ownership.",
  },
];

export default function BrandsPage() {
  return (
    <main>
      {/* ============================================ */}
      {/* HERO */}
      {/* ============================================ */}
      <section className="relative py-32 px-6 bg-ink overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              {brand.name}
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6 leading-tight">
              Expertise Across <span className="gold-text">Leading Brands</span>
            </h1>
            <p className="text-lg md:text-xl text-ash leading-relaxed max-w-3xl mx-auto">
              Trusted service and performance upgrades spanning world-class automotive marques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BRAND CARDS */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brandCards.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={b.link} className="block group">
                  <div className="glass rounded-2xl overflow-hidden h-full hover:border-gold/40 transition-all duration-500">
                    <div className="relative h-56 bg-ink/40 overflow-hidden">
                      <img
                        src={b.image}
                        alt={b.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="text-xs tracking-[0.2em] uppercase text-gold mb-1 block">
                          {b.tagline}
                        </span>
                        <h3 className="font-display text-3xl font-bold text-cream">{b.name}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-ash leading-relaxed mb-5">{b.description}</p>
                      <span className="inline-flex items-center gap-2 text-gold text-sm group-hover:gap-3 transition-all">
                        Explore {b.name} <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHAT EFFECTIVE CAR TUNING LOOKS LIKE */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block text-center">
              The Standard
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-8 leading-tight text-center">
              What Effective Car Tuning <span className="gold-text">Looks Like</span>
            </h2>
            <div className="space-y-6 text-lg text-ash leading-relaxed">
              <p>
                Effective car tuning is not about chasing peak numbers on a spec sheet. It is about
                delivering measurable, repeatable gains that translate into a car that feels more
                capable every time you drive it. The right tune respects the engineering already built
                into the vehicle and works within safe, validated limits.
              </p>
              <p>
                That means controlled power delivery, smooth throttle response, consistent behaviour
                across conditions, and a setup that holds up over time. Whether the goal is a
                refined Stage 1 upgrade or a more involved hardware build, the outcome should always
                be a car that is more enjoyable and more confidence-inspiring to drive.
              </p>
              <p>
                At {brand.name}, every calibration is backed by data, validated on our AWD dyno, and
                shaped by years of experience across the brands we specialise in. The result is
                performance you can feel and reliability you can trust.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* HOW OUR CAR TUNING SHOP DELIVERS IT */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block text-center">
              The Process
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-8 leading-tight text-center">
              How Our Car Tuning Shop <span className="gold-text">Delivers it</span>
            </h2>
            <div className="space-y-6 text-lg text-ash leading-relaxed">
              <p>
                Every project starts with understanding the car and the driver. We assess the
                vehicle's current state, discuss goals and expectations, and recommend the right
                combination of hardware and calibration for the intended use.
              </p>
              <p>
                From there, work is carried out using brand-specific diagnostics, proven hardware
                from trusted partners, and calibration developed through dyno validation. Nothing is
                left to guesswork. Every change is measured, every result is recorded, and every
                vehicle leaves with a setup that has been properly tested.
              </p>
              <p>
                The same standard applies whether the work is a simple ECU remap, a full hardware
                build, or routine maintenance on a performance vehicle. One team, one integrated
                approach, one place to trust with your car.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* THREE PILLARS */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Our Approach
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
              Built on Three <span className="gold-text">Pillars</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 text-center hover:border-gold/30 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 mx-auto">
                  <p.icon size={28} className="text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-cream mb-4">{p.title}</h3>
                <p className="text-sm text-ash leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-stone"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-gold" /> Reliability-First Calibration
            </span>
            <span className="flex items-center gap-2">
              <Award size={16} className="text-gold" /> Trusted Partner Brands
            </span>
            <span className="flex items-center gap-2">
              <Gauge size={16} className="text-gold" /> Dyno-Validated Results
            </span>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-10 md:p-16 text-center"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              Go from fast to <span className="gold-text">faster</span>
            </h2>
            <p className="text-lg text-ash leading-relaxed mb-10 max-w-2xl mx-auto">
              Book a session with {brand.name} and experience tuning engineered for real-world
              performance and long-term reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
              >
                Book Tuning <ArrowRight size={18} />
              </Link>
              <Link
                href="/servicii"
                className="inline-flex items-center gap-2 px-8 py-4 glass text-cream font-semibold rounded-lg hover:border-gold/50 transition-all duration-300"
              >
                Shop Parts
              </Link>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 glass text-cream font-semibold rounded-lg hover:border-gold/50 transition-all duration-300"
              >
                Contact a Technician
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
