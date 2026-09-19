"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Thermometer, FileText, BatteryCharging, Wrench, Phone, Warehouse } from "lucide-react";
import { brand } from "@/lib/brand";

// ============================================
// PACHETE HOTEL MOTOCICLETE
// ============================================
const packages = [
  {
    name: "Pachet Standard",
    price: "600 Lei",
    features: [
      "Depozitare în spațiu privat",
      "Temperatură ambientală 15–20°C",
      "Contract și proces-verbal de predare cu fotografii",
      "Deconectare și încărcare periodică a bateriei",
      "Verificare presiune anvelope",
    ],
  },
  {
    name: "Pachet Premium",
    price: "2000 Lei",
    features: [
      "Tot ce include pachetul Standard",
      "Vizite de întreținere la fiecare 3 săptămâni",
      "Punerea motocicletei pe centrați",
      "Verificări de funcționare periodice",
      "Reducere 20% la manoperă",
      "Consultanță telefonică gratuită",
    ],
  },
];

// ============================================
// CE INCLUDE
// ============================================
const included = [
  { icon: Warehouse, title: "Spațiu privat", text: "Motocicleta ta stă în spațiul nostru privat, în siguranță pe toată perioada depozitării." },
  { icon: Thermometer, title: "15–20°C", text: "Temperatură ambientală constantă, ideală pentru baterie, cauciucuri și componente." },
  { icon: FileText, title: "Contract și proces-verbal", text: "Predarea se face cu contract, proces-verbal și fotografii — totul documentat." },
  { icon: BatteryCharging, title: "Îngrijire baterie", text: "Deconectăm și încărcăm periodic bateria ca motocicleta să pornească din prima în primăvară." },
  { icon: Wrench, title: "Întreținere", text: "La pachetul Premium facem vizite de întreținere la fiecare 3 săptămâni și o punem pe centrați." },
  { icon: ShieldCheck, title: "Reducere la manoperă", text: "Clienții Premium beneficiază de 20% reducere la manoperă pentru lucrările de pregătire." },
];

export default function EventsPage() {
  return (
    <main className="pt-20">
      {/* ============================================ */}
      {/* HERO */}
      {/* ============================================ */}
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/motorax/gallery/gallery-7.jpg"
            alt={`${brand.name} — Hotel Motociclete`}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Hotel Motociclete</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">
              Iarna, motocicleta ta <span className="gold-text">doarme la noi</span>
            </h1>
            <p className="text-lg text-ash leading-relaxed">
              Depozitare de iarnă în spațiu privat, la temperatură controlată, cu contract și îngrijire completă — între 1 noiembrie și 28 februarie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CE INCLUDE */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Ce include</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Îngrijire completă pe timpul iernii</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 hover:border-gold/20 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-gold" />
                </div>
                <h3 className="font-display text-lg font-bold text-cream mb-2">{item.title}</h3>
                <p className="text-sm text-ash leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PACHETE */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Pachete</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">Alege pachetul potrivit</h2>
            <p className="text-ash max-w-2xl mx-auto">
              Perioada de depozitare: 1 noiembrie – 28 februarie. Locurile sunt limitate — rezervă din timp.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass rounded-2xl p-8 transition-all duration-500 ${i === 1 ? "border-gold/40" : "hover:border-gold/20"}`}
              >
                {i === 1 && (
                  <span className="inline-block text-xs tracking-[0.2em] uppercase text-ink bg-gold rounded-full px-3 py-1 mb-4">Recomandat</span>
                )}
                <h3 className="font-display text-2xl font-bold text-cream mb-2">{pkg.name}</h3>
                <p className="font-display text-4xl font-bold gold-text mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-ash">
                      <ShieldCheck size={16} className="text-gold mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={brand.phoneLink} className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">
                  Rezervă un loc <ArrowRight size={16} />
                </a>
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
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
            Rezervă locul <span className="gold-text">motocicletei tale</span>
          </h2>
          <p className="text-lg text-ash mb-10">
            Sună-ne pentru detalii și rezervări sau treci pe la service în Sector 6, București.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={brand.phoneLink}
              className="inline-flex items-center gap-2 px-10 py-5 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 text-lg"
            >
              <Phone size={20} /> {brand.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 glass text-cream font-semibold rounded-lg hover:border-gold/50 transition-all duration-300 text-lg"
            >
              Pagina de contact <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
