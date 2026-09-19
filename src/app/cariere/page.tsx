"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Wrench, Award, Users, Sparkles, MapPin, Briefcase, Phone } from "lucide-react";
import { brand } from "@/lib/brand";

// ============================================
// CE NE DIFERENȚIAZĂ
// ============================================
const differentiators = [
  {
    icon: Award,
    title: "Autorizat R.A.R.",
    text: "Lucrăm într-un service autorizat de Registrul Auto Român — proceduri clare și lucrări documentate.",
  },
  {
    icon: Wrench,
    title: "Echipă mică, job personal",
    text: "Fiecare job este personal. Înveți direct alături de mecanici cu experiență, fără birocrație.",
  },
  {
    icon: Sparkles,
    title: "Pasiune pentru motociclete",
    text: "Motoare, scutere, ATV-uri și biciclete — varietate în fiecare zi, nu rutină.",
  },
];

// ============================================
// CE CĂUTĂM
// ============================================
const jobs = [
  {
    title: "Mecanic motociclete",
    location: `${brand.area}, ${brand.city}`,
    type: "Full-time",
    description:
      "Căutăm un mecanic cu experiență în service de motociclete — revizii, transmisie, suspensii și mecanică de motor. Atenția la detalii și seriozitatea contează mai mult decât CV-ul.",
  },
  {
    title: "Ajutor mecanic",
    location: `${brand.area}, ${brand.city}`,
    type: "Full-time",
    description:
      "Dacă ești pasionat de motociclete și vrei să înveți meserie într-un atelier adevărat, te ajutăm să crești alături de echipa noastră.",
  },
];

export default function CareersPage() {
  return (
    <main className="pt-20">
      {/* ============================================ */}
      {/* HERO */}
      {/* ============================================ */}
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/motorax/gallery/gallery-4.jpg"
            alt={`${brand.name} echipa`}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-ink/75" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center max-w-3xl"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Cariere</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">
              Hai în <span className="gold-text">echipa noastră</span>
            </h1>
            <p className="text-lg text-ash leading-relaxed">
              La {brand.name} căutăm oameni pasionați de motociclete și de munca bine făcută.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* INTRO */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center"
          >
            <p className="text-lg text-ash leading-relaxed">
              Suntem o echipă mică, în care fiecare job este personal. Dacă îți plac motocicletele,
              meșteșugul și lumea service-ului — și vrei să lucrezi într-un atelier autorizat R.A.R.
              din {brand.city} — ne-ar plăcea să te cunoaștem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CE NE DIFERENȚIAZĂ */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">De ce noi</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Ce ne diferențiază?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 hover:border-gold/30 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                  <item.icon size={28} className="text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-cream mb-4">{item.title}</h3>
                <p className="text-sm text-ash leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CE CĂUTĂM */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Poziții</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Ce căutăm</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 hover:border-gold/30 transition-all duration-500 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <Briefcase size={22} className="text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-cream mb-5">{job.title}</h3>
                <div className="space-y-2 mb-6 text-sm">
                  <span className="flex items-center gap-2 text-ash">
                    <MapPin size={15} className="text-gold" /> {job.location}
                  </span>
                  <span className="flex items-center gap-2 text-ash">
                    <Briefcase size={15} className="text-gold" /> {job.type}
                  </span>
                </div>
                <p className="text-sm text-ash leading-relaxed mb-6 flex-grow">{job.description}</p>
                <a
                  href={brand.phoneLink}
                  className="inline-flex items-center gap-2 text-gold text-sm hover:gap-3 transition-all mt-auto"
                >
                  Sună-ne <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* APLICAȚIE SPONTANĂ */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="glass rounded-2xl p-10 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 mx-auto">
              <Users size={28} className="text-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-5">
              Ne-ar plăcea să auzim de tine!
            </h2>
            <p className="text-ash leading-relaxed mb-8">
              Ești pasionat de motociclete dar nu vezi o poziție potrivită? Sună-ne sau scrie-ne —
              vorbim și vedem ce putem construi împreună.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={brand.phoneLink}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
              >
                <Phone size={18} /> {brand.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 glass text-cream font-semibold rounded-lg hover:border-gold/50 transition-all duration-300"
              >
                Scrie-ne <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
