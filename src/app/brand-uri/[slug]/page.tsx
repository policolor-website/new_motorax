"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Wrench,
  ShieldCheck,
  ArrowRight,
  Star,
  Quote,
  Check,
  ChevronDown,
  Droplets,
  MoveVertical,
  RefreshCw,
  Phone,
} from "lucide-react";
import { brand } from "@/lib/brand";

// ============================================
// BRAND DATA
// ============================================
type BrandData = {
  name: string;
  logo: string;
  title: string;
  subtitle: string;
};

const brandsData: Record<string, BrandData> = {
  aprilia: {
    name: "Aprilia",
    logo: "/motorax/brands/aprilia.png",
    title: "Service și reparații pentru motociclete Aprilia",
    subtitle:
      "De la RSV4 și Tuono la modelele mai mici — revizii, reparații și reglaje pentru motocicletele tale Aprilia.",
  },
  bmw: {
    name: "BMW Motorrad",
    logo: "/motorax/brands/bmw.png",
    title: "Service și reparații pentru motociclete BMW",
    subtitle:
      "Mentenanță și reparații pentru gama BMW Motorrad — de la GS la modelele sport și de stradă.",
  },
  "harley-davidson": {
    name: "Harley-Davidson",
    logo: "/motorax/brands/harley.png",
    title: "Service și reparații pentru motociclete Harley-Davidson",
    subtitle:
      "Îngrijire și reparații pentru Harley-uri — de la revizii periodice la operații mecanice complexe.",
  },
  honda: {
    name: "Honda",
    logo: "/motorax/brands/honda.png",
    title: "Service și reparații pentru motociclete Honda",
    subtitle:
      "Revizii, reparații și mentenanță pentru motocicletele și scuterele Honda — fiabilitate menținută corect.",
  },
  kawasaki: {
    name: "Kawasaki",
    logo: "/motorax/brands/kawa.png",
    title: "Service și reparații pentru motociclete Kawasaki",
    subtitle:
      "De la Ninja la modelele naked și adventure — service complet pentru motocicleta ta Kawasaki.",
  },
  ktm: {
    name: "KTM",
    logo: "/motorax/brands/ktm.png",
    title: "Service și reparații pentru motociclete KTM",
    subtitle:
      "Enduro, adventure sau stradă — reparații și mentenanță pentru motocicletele KTM.",
  },
  suzuki: {
    name: "Suzuki",
    logo: "/motorax/brands/suzuki.png",
    title: "Service și reparații pentru motociclete Suzuki",
    subtitle:
      "GSX-R, V-Strom sau modele clasice — service autorizat R.A.R. pentru motocicleta ta Suzuki.",
  },
  triumph: {
    name: "Triumph",
    logo: "/motorax/brands/triumph.png",
    title: "Service și reparații pentru motociclete Triumph",
    subtitle:
      "Bonneville, Tiger, Street Triple — îngrijire atentă pentru motocicletele britanice.",
  },
  yamaha: {
    name: "Yamaha",
    logo: "/motorax/brands/yamaha.png",
    title: "Service și reparații pentru motociclete Yamaha",
    subtitle:
      "De la R1 la MT și TMAX — revizii și reparații pentru motocicletele și scuterele Yamaha.",
  },
};

// ============================================
// OPERAȚII FRECVENTE
// ============================================
const operations = [
  { icon: Droplets, title: "Schimbare ulei și filtru", link: "/servicii/schimbare-ulei-si-filtru" },
  { icon: MoveVertical, title: "Service amortizoare", link: "/servicii/service-amortizoare" },
  { icon: RefreshCw, title: "Schimbare kit transmisie", link: "/servicii/schimbare-kit-transmisie" },
  { icon: Wrench, title: "Mecanică motor", link: "/servicii/mecanica-motor" },
];

// ============================================
// CE INCLUDE
// ============================================
const capabilities = [
  "Diagnoză și inspecție completă",
  "Revizii și mentenanță periodică",
  "Reparații ambreiaj și kit transmisie",
  "Service amortizoare și reglaje suspensii",
  "Operații de mecanică a motorului",
];

// ============================================
// TESTIMONIALE
// ============================================
const testimonials = [
  {
    name: "Cristi",
    model: "Client service",
    text: "Super profesioniști! Au reușit să repare și să facă să funcționeze perfect și super bine. Recomand cu căldură!",
  },
  {
    name: "Costel",
    model: "Client service",
    text: "Totul este atât de profesional încât nu îmi pot imagina să merg cu motocicleta în altă parte. Acesta este locul!",
  },
];

// ============================================
// GALLERY
// ============================================
const galleryImages = [
  "/motorax/gallery/gallery-2.jpg",
  "/motorax/gallery/gallery-3.jpg",
  "/motorax/gallery/gallery-4.jpg",
  "/motorax/gallery/gallery-5.jpg",
];

// ============================================
// FAQ
// ============================================
const generateFaqs = (brandName: string) => [
  {
    q: `Lucrați la motociclete ${brandName}?`,
    a: `Da. Deservim majoritatea mărcilor, inclusiv ${brandName} — de la revizii simple la reparații complexe de motor, ambreiaj și suspensii.`,
  },
  {
    q: "Sunteți autorizați R.A.R.?",
    a: "Da. Service-ul nostru are autorizația Registrului Auto Român, deci toate lucrările sunt conforme și documentate.",
  },
  {
    q: "Folosiți piese originale?",
    a: "Lucrăm cu piese și consumabile de calitate, potrivite modelului tău. Îți spunem de fiecare dată ce montăm și de ce.",
  },
  {
    q: "Am nevoie de programare?",
    a: `Recomandăm să ne suni înainte la ${brand.phone} pentru o programare rapidă, ca să nu aștepți în service.`,
  },
  {
    q: "Pot lăsa motocicleta la voi peste iarnă?",
    a: "Da. Hotelul nostru de motociclete oferă depozitare în spațiu privat la 15–20°C, cu contract și îngrijire a bateriei, între 1 noiembrie și 28 februarie.",
  },
];

// ============================================
// FAQ ITEM
// ============================================
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-display text-lg font-semibold text-cream">{q}</span>
        <ChevronDown
          size={20}
          className={`text-gold shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-ash leading-relaxed text-sm">{a}</p>
      </motion.div>
    </motion.div>
  );
}

// ============================================
// PAGE
// ============================================
export default function BrandDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = brandsData[slug];

  if (!data) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-cream mb-4">Marca nu a fost găsită</h1>
          <Link href="/brand-uri" className="text-gold hover:underline">
            ← Înapoi la mărci
          </Link>
        </div>
      </main>
    );
  }

  const faqs = generateFaqs(data.name);

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
            <img
              src={data.logo}
              alt={data.name}
              className="h-14 md:h-16 object-contain mx-auto mb-8 invert mix-blend-screen"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <h1 className="font-display text-3xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="text-lg text-ash leading-relaxed max-w-3xl mx-auto mb-10">
              {data.subtitle}
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
                className="inline-flex items-center gap-2 px-8 py-4 glass text-cream font-semibold rounded-lg hover:border-gold/50 transition-all duration-300"
              >
                <Phone size={18} /> {brand.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CAPABILITIES + OPERAȚII */}
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
              Service {data.name}
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream leading-tight">
              Experiență. <span className="gold-text">Rezultate reale.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Capabilities */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-2xl font-bold text-cream mb-8">
                Ce facem pentru {data.name}-ul tău
              </h3>
              <div className="space-y-4">
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-gold" />
                    </span>
                    <span className="text-cream leading-relaxed">{cap}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Operații */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {operations.map((op, i) => (
                <Link
                  key={i}
                  href={op.link}
                  className="block glass rounded-2xl p-6 hover:border-gold/30 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <op.icon size={24} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-cream mb-2">{op.title}</h4>
                      <span className="text-sm text-gold inline-flex items-center gap-1">
                        Detalii <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* RAR BADGE */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-surface border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <img
              src="/autorizat-rar.png"
              alt={`${brand.name} — autorizat R.A.R.`}
              className="h-20 object-contain mx-auto mb-6"
            />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">
              Service autorizat <span className="gold-text">R.A.R.</span>
            </h2>
            <p className="text-ash max-w-2xl mx-auto">
              Autorizația Registrului Auto Român îți garantează că motocicleta ta este pe mâini bune —
              lucrări conforme, documentate și executate corect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* GALLERY */}
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
              Din atelier
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream">
              <span className="gold-text">Galerie</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative aspect-square rounded-xl overflow-hidden glass group"
              >
                <img
                  src={src}
                  alt={`${brand.name} atelier ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TESTIMONIALS */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Testimoniale
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream">
              Ce spun <span className="gold-text">clienții</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 hover:border-gold/30 transition-all duration-500"
              >
                <Quote size={32} className="text-gold/40 mb-4" />
                <p className="text-cream leading-relaxed mb-6 italic">„{t.text}"</p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-cream">{t.name}</p>
                  <p className="text-sm text-gold">{t.model}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Întrebări frecvente
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream">
              Service {data.name} — <span className="gold-text">FAQ</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
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
            <ShieldCheck size={40} className="text-gold mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              Lasă {data.name}-ul tău <span className="gold-text">în grija noastră</span>
            </h2>
            <p className="text-lg text-ash leading-relaxed mb-10 max-w-2xl mx-auto">
              Programează o vizită la {brand.name} — service autorizat R.A.R. în {brand.area}, {brand.city}.
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
