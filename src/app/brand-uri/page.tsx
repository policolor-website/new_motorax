"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Wrench, ShieldCheck, Award, Bike, Warehouse, Phone } from "lucide-react";
import { brand } from "@/lib/brand";

// ============================================
// MĂRCI DESERVITE
// ============================================
const brandCards = [
  { name: "Aprilia", slug: "aprilia", logo: "/motorax/brands/aprilia.png" },
  { name: "BMW", slug: "bmw", logo: "/motorax/brands/bmw.png" },
  { name: "Harley-Davidson", slug: "harley-davidson", logo: "/motorax/brands/harley.png" },
  { name: "Honda", slug: "honda", logo: "/motorax/brands/honda.png" },
  { name: "Kawasaki", slug: "kawasaki", logo: "/motorax/brands/kawa.png" },
  { name: "KTM", slug: "ktm", logo: "/motorax/brands/ktm.png" },
  { name: "Suzuki", slug: "suzuki", logo: "/motorax/brands/suzuki.png" },
  { name: "Triumph", slug: "triumph", logo: "/motorax/brands/triumph.png" },
  { name: "Yamaha", slug: "yamaha", logo: "/motorax/brands/yamaha.png" },
];

// ============================================
// PILARI
// ============================================
const pillars = [
  {
    icon: Wrench,
    title: "Reparații",
    text: "De la ambreiaje și transmisie la mecanică de motor — reparații complete cu piese de calitate.",
  },
  {
    icon: Bike,
    title: "Revizii",
    text: "Ulei, filtre, bujii, frâne și verificări periodice pentru motociclete, scutere și ATV-uri.",
  },
  {
    icon: Warehouse,
    title: "Depozitare",
    text: "Hotel Motociclete — depozitare de iarnă în spațiu privat, la 15–20°C, cu îngrijire completă.",
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
              Deservim majoritatea <span className="gold-text">mărcilor</span>
            </h1>
            <p className="text-lg md:text-xl text-ash leading-relaxed max-w-3xl mx-auto">
              Service și reparații pentru motociclete, scutere, ATV-uri și biciclete — indiferent de marcă.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BRAND CARDS */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brandCards.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <Link href={`/brand-uri/${b.slug}`} className="block group">
                  <div className="glass rounded-2xl overflow-hidden h-full hover:border-gold/40 transition-all duration-500">
                    <div className="relative h-40 bg-ink/40 flex items-center justify-center p-8">
                      <img
                        src={b.logo}
                        alt={b.name}
                        className="max-h-16 object-contain invert mix-blend-screen transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-cream mb-2">{b.name}</h3>
                      <span className="inline-flex items-center gap-2 text-gold text-sm group-hover:gap-3 transition-all">
                        Service {b.name} <ArrowRight size={16} />
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
      {/* EXPERIENȚA NOASTRĂ */}
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
              Standardul nostru
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-8 leading-tight text-center">
              Același standard, <span className="gold-text">oricare ar fi marca</span>
            </h2>
            <div className="space-y-6 text-lg text-ash leading-relaxed">
              <p>
                Fie că ai o motocicletă de stradă, un enduro, un scuter sau un ATV, la {brand.name}{" "}
                primește aceeași atenție. Fiecare job este personal — ne menținem concentrarea și
                asigurăm servicii de înaltă calitate pentru fiecare vehicul.
              </p>
              <p>
                Service-ul nostru este autorizat R.A.R., ceea ce înseamnă lucrări conforme,
                documentate și executate cu piese și consumabile potrivite fiecărui model.
              </p>
              <p>
                Nu recomandăm reparații inutile. Îți explicăm ce este urgent, ce poate aștepta și
                cât costă — ca să faci economie și să ai un mecanic de încredere.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TREI PILARI */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Abordarea noastră
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
              Construit pe trei <span className="gold-text">piloni</span>
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
              <ShieldCheck size={16} className="text-gold" /> Autorizat R.A.R.
            </span>
            <span className="flex items-center gap-2">
              <Award size={16} className="text-gold" /> Piese și consumabile de calitate
            </span>
            <span className="flex items-center gap-2">
              <Bike size={16} className="text-gold" /> Motoare, scutere, ATV-uri, biciclete
            </span>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-10 md:p-16 text-center"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              Lasă reparațiile <span className="gold-text">în grija noastră</span>
            </h2>
            <p className="text-lg text-ash leading-relaxed mb-10 max-w-2xl mx-auto">
              Indiferent de marcă, motocicleta ta este pe mâini bune la {brand.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
              >
                Vreau programare service <ArrowRight size={18} />
              </Link>
              <Link
                href="/servicii"
                className="inline-flex items-center gap-2 px-8 py-4 glass text-cream font-semibold rounded-lg hover:border-gold/50 transition-all duration-300"
              >
                Vezi operațiile
              </Link>
              <a
                href={brand.phoneLink}
                className="inline-flex items-center gap-2 px-8 py-4 glass text-cream font-semibold rounded-lg hover:border-gold/50 transition-all duration-300"
              >
                <Phone size={18} /> {brand.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
