"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Wrench, ShieldCheck, TrendingUp, Phone } from "lucide-react";
import { brand } from "@/lib/brand";

const principles = [
  {
    icon: Sparkles,
    title: "Fiecare job este personal",
    text: "Pentru că avem o mică echipă, fiecare job este personal și primește atenția cuvenită.",
  },
  {
    icon: ShieldCheck,
    title: "Autorizație R.A.R.",
    text: "Service autorizat de Registrul Auto Român — lucrări conforme și documentate.",
  },
  {
    icon: TrendingUp,
    title: "Faci economie",
    text: "Îți recomandăm doar reparațiile de care ai cu adevărat nevoie, la prețuri corecte.",
  },
  {
    icon: Wrench,
    title: "Meșteșug",
    text: "Fiecare intervenție este executată cu grijă, precizie și uneltele potrivite.",
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
          <img src="/motorax/gallery/gallery-6.jpg" alt="" className="w-full h-full object-cover" />
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-6 block">Despre {brand.name}</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-8 leading-tight">
              Din pasiune <span className="gold-text">pentru motociclete</span>
            </h1>
            <p className="text-lg md:text-xl text-ash leading-relaxed max-w-3xl mx-auto">
              Unde experiența, grija pentru motociclist și respectul pentru fiecare mașină se întâlnesc într-un service autorizat R.A.R.
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
              {brand.name} este un service de motociclete autorizat R.A.R. din {brand.city}, care oferă reparații, revizii și mentenanță pentru motociclete, scutere, ATV-uri și biciclete. Credem că motocicleta ta merită atenție completă și cunoștințe solide — de aceea îți recomandăm doar reparațiile de care ai cu adevărat nevoie.
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
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Povestea noastră</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
                Un service din <span className="gold-text">{brand.city}</span>
              </h2>
              <p className="text-lg text-ash leading-relaxed">
                Service-ul {brand.name} a luat naștere din pasiune pentru motociclete și pentru munca bine făcută. Suntem un atelier din {brand.area}, {brand.city}, unde fiecare motocicletă este tratată cu atenție — de la revizii simple la operații complexe de mecanică a motorului.
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
                  src="/motorax/gallery/gallery-3.jpg"
                  alt={`${brand.name} Atelier`}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="glass rounded-2xl p-6 mt-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                    <ShieldCheck size={24} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-cream">Autorizat R.A.R.</p>
                    <p className="text-sm text-stone">{brand.area}, {brand.city}</p>
                  </div>
                </div>
                <div className="h-px hairline mb-6" />
                <ul className="space-y-4">
                  {[
                    "Motociclete, scutere, ATV-uri și biciclete",
                    "Autorizație Registrul Auto Român",
                    "Echipă mică, atenție la detalii",
                    "Hotel motociclete pentru depozitare de iarnă",
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
              className="glass rounded-2xl p-10 order-2 lg:order-1 flex flex-col items-center justify-center text-center"
            >
              <img
                src="/autorizat-rar.png"
                alt={`${brand.name} — autorizat R.A.R.`}
                className="h-20 object-contain mb-6"
              />
              <p className="font-display text-lg font-bold text-cream mb-2">Autorizație R.A.R.</p>
              <p className="text-sm text-ash leading-relaxed">
                Service-ul nostru este autorizat de Registrul Auto Român — garanția unor lucrări conforme și documentate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="order-1 lg:order-2"
            >
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Încredere</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
                Pe mâini <span className="gold-text">bune</span>
              </h2>
              <p className="text-lg text-ash leading-relaxed">
                {brand.name} este condus direct de mecanici pasionați, cu o abordare practică și atenție la detalii. Fiecare motocicletă este tratată ca și cum ar fi a noastră — preferăm să facem lucrurile corect, nu repede.
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Ce ne ghidează</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
              Patru <span className="gold-text">principii</span>
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Astăzi și mai departe</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              Service-ul tău de încredere <span className="gold-text">din București</span>
            </h2>
            <p className="text-lg text-ash leading-relaxed">
              Astăzi, {brand.name} deservește motocicliști din tot Bucureștiul — cu reparații, revizii, reglaje de suspensie și depozitare de iarnă în Hotelul Motociclete. Concentrarea noastră rămâne aceeași: muncă bine făcută și recomandări oneste.
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
            Lasă reparațiile <span className="gold-text">în grija noastră</span>
          </h2>
          <p className="text-lg text-ash mb-10">
            Vrei să cunoști echipa? Sună-ne sau treci pe la service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 text-lg"
            >
              Contactează-ne <ArrowRight size={18} />
            </Link>
            <a
              href={brand.phoneLink}
              className="inline-flex items-center gap-2 px-8 py-4 glass text-cream font-semibold rounded-lg hover:border-gold/50 hover:shadow-[0_4px_30px_rgba(255,107,0,0.25)] transition-all duration-300 text-lg"
            >
              <Phone size={18} /> {brand.phone}
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
