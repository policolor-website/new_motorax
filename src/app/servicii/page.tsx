"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Gauge, Wrench, Droplets, MoveVertical, RefreshCw, Timer, Cog, ShieldCheck, Sparkles, Phone } from "lucide-react";
import { brand } from "@/lib/brand";

// ============================================
// OPERAȚII SERVICE
// ============================================
const services = [
  {
    slug: "reparatie-ambreiaje",
    icon: Cog,
    title: "Reparație ambreiaje",
    text: "Diagnoză și reparații profesionale ale ambreiajului — plăci, arcuri, cabluri și reglaje pentru o cuplare perfectă.",
    image: "/motorax/gallery/gallery-2.jpg",
  },
  {
    slug: "schimbare-ulei-si-filtru",
    icon: Droplets,
    title: "Schimbare ulei și filtru",
    text: "Revizie completă cu uleiuri și filtre potrivite motocicletei tale, pentru longevitatea motorului.",
    image: "/motorax/gallery/gallery-3.jpg",
  },
  {
    slug: "service-amortizoare",
    icon: MoveVertical,
    title: "Service amortizoare",
    text: "Desfacere, curățare, schimb de ulei și reglaje personalizate ale suspensiilor pentru confort și siguranță.",
    image: "/motorax/gallery/gallery-4.jpg",
  },
  {
    slug: "schimbare-kit-transmisie",
    icon: RefreshCw,
    title: "Schimbare kit transmisie",
    text: "Înlocuirea lanțului și a pinioanelor, cu reglare și lubrifiere corectă pentru o transmisie silențioasă.",
    image: "/motorax/gallery/gallery-5.jpg",
  },
  {
    slug: "sincronizare-carburatoare",
    icon: Gauge,
    title: "Sincronizare carburatoare",
    text: "Echilibrarea carburatoarelor pentru ralanti stabil, consum corect și răspuns lin al accelerației.",
    image: "/motorax/gallery/gallery-6.jpg",
  },
  {
    slug: "schimbare-distributie",
    icon: Timer,
    title: "Schimbare distribuție",
    text: "Înlocuirea lanțului de distribuție și a componentelor asociate, la timp și cu piese de calitate.",
    image: "/motorax/gallery/gallery-7.jpg",
  },
  {
    slug: "mecanica-motor",
    icon: Wrench,
    title: "Operații de mecanică a motorului",
    text: "De la schimb de bujii și supape la reparații complete — segmenti, pistoane, garnituri și teste de compresie.",
    image: "/motorax/gallery/gallery-2.jpg",
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
          <img src="/motorax/gallery/gallery-4.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Operații service</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6 leading-tight">
              Service motociclete <span className="gold-text">autorizat R.A.R.</span>
            </h1>
            <p className="text-lg text-ash max-w-2xl mx-auto leading-relaxed">
              Reparații, revizii și mentenanță pentru motociclete, scutere, ATV-uri și biciclete în București.
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Filosofia noastră</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6 leading-tight">
              Fiecare job <span className="gold-text">este personal</span>
            </h2>
            <p className="text-lg text-ash leading-relaxed">
              Service-ul {brand.name} a luat naștere din pasiune pentru motociclete. Pentru că avem o mică echipă, fiecare job este personal — ne menținem concentrarea și asigurăm servicii de înaltă calitate pentru fiecare motocicletă care intră pe poarta atelierului.
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Abordarea noastră</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6 leading-tight">
              Faci economie și câștigi <span className="gold-text">un mecanic de încredere</span>
            </h2>
            <p className="text-lg text-ash leading-relaxed">
              Ne străduim să îți oferim cele mai bune prețuri la service și să îți recomandăm doar reparațiile de care ai cu adevărat nevoie. Fie că e vorba de o revizie periodică sau de o reparație complexă a motorului, motocicleta ta este pe mâini bune.
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Explorează</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Operațiile noastre</h2>
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
                      Află mai multe <ArrowRight size={14} />
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
            Lasă reparațiile <span className="gold-text">în grija noastră</span>
          </h2>
          <p className="text-lg text-ash mb-10">
            Programează o vizită la {brand.name} și lasă motocicleta pe mâini bune.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
            >
              Vreau programare service <ArrowRight size={18} />
            </Link>
            <a
              href={brand.phoneLink}
              className="inline-flex items-center gap-2 px-8 py-4 glass text-cream font-semibold rounded-lg hover:border-gold/50 hover:shadow-[0_4px_30px_rgba(255,107,0,0.25)] transition-all duration-300"
            >
              <Phone size={18} /> {brand.phone}
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
