"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Wrench, Gauge, ShieldCheck, Sparkles, TrendingUp, Warehouse, Phone, Bike } from "lucide-react";
import BuildingHero3D from "@/components/building-hero-3d";
import { brand } from "@/lib/brand";

// ============================================
// MĂRCI DESERVITE
// ============================================
const partners = [
  { name: "Aprilia", logo: "/motorax/brands/aprilia.png" },
  { name: "BMW", logo: "/motorax/brands/bmw.png" },
  { name: "Harley-Davidson", logo: "/motorax/brands/harley.png" },
  { name: "Honda", logo: "/motorax/brands/honda.png" },
  { name: "Kawasaki", logo: "/motorax/brands/kawa.png" },
  { name: "KTM", logo: "/motorax/brands/ktm.png" },
  { name: "Suzuki", logo: "/motorax/brands/suzuki.png" },
  { name: "Triumph", logo: "/motorax/brands/triumph.png" },
  { name: "Yamaha", logo: "/motorax/brands/yamaha.png" },
];

// ============================================
// SERVICII PRINCIPALE
// ============================================
const coreServices = [
  {
    icon: Wrench,
    title: "Operații Service Motociclete",
    text: "Reparații, revizii și mentenanță pentru motociclete, scutere, ATV-uri și biciclete — de la schimb de ulei la mecanică de motor.",
    link: "/servicii",
    cta: "Vezi operațiile",
  },
  {
    icon: Gauge,
    title: "Service Amortizoare",
    text: "Diagnoză, curățare, schimb de ulei și reglaje personalizate ale suspensiilor pentru fiecare tip de motocicletă.",
    link: "/servicii/service-amortizoare",
    cta: "Detalii amortizoare",
  },
  {
    icon: Warehouse,
    title: "Hotel Motociclete",
    text: "Depozitare de iarnă în spațiu privat, la 15–20°C, cu contract, proces-verbal și îngrijire a bateriei.",
    link: "/evenimente",
    cta: "Vezi pachetele",
  },
];

// ============================================
// HOTEL MOTOCICLETE
// ============================================
const hotelPackages = [
  {
    name: "Pachet Standard",
    price: "600 Lei",
    features: [
      "Depozitare spațiu privat",
      "Temperatură ambientală 15–20°C",
      "Contract, proces-verbal de predare și fotografii",
      "Deconectare și încărcare baterie",
    ],
    link: "/evenimente",
  },
  {
    name: "Pachet Premium",
    price: "2000 Lei",
    features: [
      "Tot ce include pachetul Standard",
      "Vizite de întreținere la fiecare 3 săptămâni",
      "Punerea motocicletei pe centrați",
      "Reducere 20% la manoperă",
      "Consultanță telefonică gratuită",
    ],
    link: "/evenimente",
  },
];

// ============================================
// GALLERY
// ============================================
const galleryImages = [
  { src: "/motorax/gallery/gallery-2.jpg", alt: `${brand.name} — service motociclete` },
  { src: "/motorax/gallery/gallery-3.jpg", alt: `${brand.name} — service motociclete` },
  { src: "/motorax/gallery/gallery-4.jpg", alt: `${brand.name} — service motociclete` },
  { src: "/motorax/gallery/gallery-5.jpg", alt: `${brand.name} — service motociclete` },
  { src: "/motorax/gallery/gallery-6.jpg", alt: `${brand.name} — service motociclete` },
  { src: "/motorax/gallery/gallery-7.jpg", alt: `${brand.name} — service motociclete` },
];

// ============================================
// DE CE MOTORAX
// ============================================
const values = [
  { icon: Sparkles, title: "Fiecare job este personal", text: "Pentru că avem o mică echipă, fiecare job este personal. Ne menținem concentrarea și asigurăm servicii de înaltă calitate." },
  { icon: ShieldCheck, title: "Autorizație R.A.R.", text: "Service-ul nostru are autorizația Registrului Auto Român, ceea ce îți garantează că motocicleta ta este pe mâini bune." },
  { icon: TrendingUp, title: "Faci economie", text: "Ne străduim să îți oferim cele mai bune prețuri la service pentru motocicleta ta și îți recomandăm doar reparațiile de care ai nevoie." },
  { icon: Bike, title: "Motoare, scutere, ATV-uri", text: "Deservim majoritatea mărcilor — de la motociclete de stradă la enduro, scutere, ATV-uri și biciclete." },
];

// ============================================
// TESTIMONIALE
// ============================================
const testimonials = [
  {
    name: "Cristi",
    text: "Super profesioniști! Au reușit să repare și să facă să funcționeze perfect și super bine. Recomand cu căldură!",
  },
  {
    name: "Costel",
    text: "Totul este atât de profesional încât nu îmi pot imagina să merg cu motocicleta în altă parte. Acesta este locul!",
  },
  {
    name: "Alex",
    text: "Tot ce pot spune este că este superb! Au lucrat în detaliu totul, de la cele mai mici piese la sistemul complex de răcire. Recomand!",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const scrollable = hero.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // WELCOME: visible at progress 0, fades out by progress 0.05
  const welcomeOpacity = scrollProgress < 0.05 ? 1 - scrollProgress / 0.05 : 0;
  const welcomeScale = 1 - (scrollProgress < 0.05 ? scrollProgress / 0.05 : 1) * 0.1;
  const welcomeY = -(scrollProgress < 0.05 ? scrollProgress / 0.05 : 1) * 30;

  // Brand name: appears at ~0.58 (assembly done, tour starts), fully visible at 0.68
  const tuningOpacity = scrollProgress > 0.58 ? Math.min(1, (scrollProgress - 0.58) / 0.1) : 0;
  const tuningY = scrollProgress > 0.58 ? (1 - Math.min(1, (scrollProgress - 0.58) / 0.1)) * 40 : 40;

  // Subtitle appears slightly after
  const subtitleOpacity = scrollProgress > 0.62 ? Math.min(1, (scrollProgress - 0.62) / 0.08) : 0;
  const subtitleY = scrollProgress > 0.62 ? (1 - Math.min(1, (scrollProgress - 0.62) / 0.08)) * 20 : 20;

  // CTA buttons appear last
  const ctaOpacity = scrollProgress > 0.65 ? Math.min(1, (scrollProgress - 0.65) / 0.05) : 0;
  const ctaY = scrollProgress > 0.65 ? (1 - Math.min(1, (scrollProgress - 0.65) / 0.05)) * 20 : 20;

  return (
    <main>
      {/* ============================================ */}
      {/* HERO — 3D Car animation */}
      {/* ============================================ */}
      <section ref={heroRef} className="relative h-[600vh] bg-ink">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <BuildingHero3D />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/40 via-transparent to-ink/80 pointer-events-none" />

          {/* WELCOME — visible at load, fades on scroll */}
          <div
            style={{
              opacity: welcomeOpacity,
              transform: `translateY(${welcomeY}px) scale(${welcomeScale})`,
            }}
            className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none transition-opacity duration-100"
          >
            <h1 className="px-4 text-center">
              {["MOTOARE.", "PRECIZIE.", "PASIUNE."].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                  className={`font-display block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[0.08em] sm:tracking-[0.12em] leading-tight ${i === 2 ? "gold-text" : "text-cream"}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* BRAND NAME — appears when animation completes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-4xl text-center px-6 pointer-events-none">
            <h1
              style={{ opacity: tuningOpacity, transform: `translateY(${tuningY}px)` }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-cream tracking-[0.08em] sm:tracking-[0.12em] mb-4 sm:mb-6 whitespace-nowrap"
            >
              {brand.name.toUpperCase()}
            </h1>

            <p
              style={{ opacity: subtitleOpacity, transform: `translateY(${subtitleY}px)` }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-cream italic font-light mb-6 sm:mb-8 md:mb-10 px-4"
            >
              {brand.tagline}
            </p>

            <div
              style={{ opacity: ctaOpacity, transform: `translateY(${ctaY}px)` }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pointer-events-auto px-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 glass text-gold text-sm sm:text-base font-semibold rounded-lg hover:border-gold/50 hover:shadow-[0_4px_30px_rgba(255,107,0,0.25)] transition-all duration-300"
              >
                Vreau programare service <ArrowRight size={16} />
              </Link>
              <a
                href={brand.phoneLink}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 glass text-cream text-sm sm:text-base font-semibold rounded-lg hover:border-gold/50 hover:shadow-[0_4px_30px_rgba(255,107,0,0.25)] transition-all duration-300"
              >
                <Phone size={16} /> Sună acum
              </a>
            </div>
          </div>

          {/* Scroll indicator — only at start */}
          <div
            style={{ opacity: welcomeOpacity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-stone">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TRUSTED PARTNERS */}
      {/* ============================================ */}
      <section className="py-16 px-6 bg-canvas border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-2 block">Deservim majoritatea mărcilor de motociclete</span>
          </motion.div>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 items-center justify-items-center">
            {partners.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <img src={p.logo} alt={p.name} className="h-12 md:h-14 object-contain invert mix-blend-screen" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHO WE ARE */}
      {/* ============================================ */}
      <section className="py-24 px-6 relative bg-surface">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Cine suntem</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              Lasă reparațiile <span className="gold-text">în grija noastră</span>
            </h2>
            <p className="text-lg text-ash leading-relaxed mb-8 max-w-3xl mx-auto">
              {brand.name} este un service autorizat R.A.R. pentru motociclete, scutere, ATV-uri și biciclete, situat în Sector 6, București. Credem că motocicleta ta merită atenție completă și cunoștințe solide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Cum lucrăm</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6 leading-tight">
              Din pasiune <span className="gold-text">pentru motociclete</span>
            </h3>
            <p className="text-lg text-ash leading-relaxed max-w-3xl mx-auto">
              Pentru că avem o mică echipă, fiecare job este personal. Ne menținem concentrarea și asigurăm servicii de înaltă calitate, recomandându-ți doar reparațiile de care ai cu adevărat nevoie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CORE SERVICES */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Servicii</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Serviciile noastre</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreServices.map((srv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 hover:border-gold/30 transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 mx-auto">
                  <srv.icon size={28} className="text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-cream mb-4">{srv.title}</h3>
                <p className="text-sm text-ash leading-relaxed mb-6">{srv.text}</p>
                <Link href={srv.link} className="text-gold text-sm flex items-center gap-1 hover:gap-2 transition-all justify-center">
                  {srv.cta} <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* HOTEL MOTOCICLETE */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Hotel Motociclete</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">Depozitare de iarnă pentru motocicleta ta</h2>
            <p className="text-ash max-w-2xl mx-auto">
              Lăsăm motocicleta ta peste iarnă în spațiul nostru privat, la temperatură ambientală de 15–20°C. Perioada de depozitare: 1 noiembrie – 28 februarie.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {hotelPackages.map((pkg, i) => (
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
                <Link href={pkg.link} className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">
                  Detalii și rezervare <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* VALUES */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">De ce {brand.name}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">De ce să ne alegi</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-gold/20 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <val.icon size={20} className="text-gold" />
                  </div>
                  <span className="font-display text-2xl font-bold text-stone">0{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-cream mb-3">{val.title}</h3>
                <p className="text-xs text-ash leading-relaxed">{val.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* GALLERY */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Galerie</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">Din atelierul nostru</h2>
            <p className="text-ash max-w-2xl mx-auto">
              Motociclete reparate, revizate și îngrijite în service-ul nostru din București.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-xl group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TESTIMONIALE */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Testimoniale</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Ce spun clienții</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 hover:border-gold/30 transition-all duration-500 h-full"
              >
                <p className="text-sm text-ash leading-relaxed mb-6 italic">„{t.text}”</p>
                <span className="font-display text-lg font-bold text-gold">{t.name}</span>
              </motion.div>
            ))}
          </div>
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
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
            Ai nevoie de <span className="gold-text">service?</span>
          </h2>
          <p className="text-lg text-ash mb-10">
            Sună-ne pentru o programare rapidă sau treci pe la service — suntem în Sector 6, pe Str. Cetatea de Baltă.
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
