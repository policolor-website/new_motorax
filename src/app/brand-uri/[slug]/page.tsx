"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Gauge,
  Wrench,
  Settings,
  ShieldCheck,
  Award,
  ArrowRight,
  Star,
  Quote,
  Check,
  ChevronDown,
} from "lucide-react";
import { brand } from "@/lib/brand";

// ============================================
// BRAND DATA
// ============================================
type BrandData = {
  name: string;
  title: string;
  subtitle: string;
  capabilities: string[];
  dyno: {
    stage: string;
    model: string;
    stockPower: string;
    stockTorque: string;
    tunedPower: string;
    tunedTorque: string;
  };
  testimonials: { name: string; model: string; text: string }[];
  gallery: string[];
};

const brandsData: Record<string, BrandData> = {
  audi: {
    name: "Audi",
    title: "Audi Service Center Dubai, Engineered for Performance",
    subtitle:
      "Expert Audi servicing, performance tuning, and upgrades delivered by a specialised Audi service center Dubai drivers trust.",
    capabilities: [
      "Audi ECU calibration expertise",
      "Brand-specific diagnostics systems",
      "Performance hardware integration",
      "Thermal and drivetrain optimisation",
      "Dyno-validated tuning processes",
    ],
    dyno: {
      stage: "Stage 1",
      model: "AUDI RS3 8Y",
      stockPower: "400 BHP",
      stockTorque: "500 NM",
      tunedPower: "450 BHP",
      tunedTorque: "580 NM",
    },
    testimonials: [
      {
        name: "Alan Labussiere",
        model: "Audi S3",
        text: "I came to do some modifications and repairs on my Audi S3 and everything went really well. The team handled everything professionally. Highly recommend their trustworthy service.",
      },
      {
        name: "Ribal Talal",
        model: "Audi RS7",
        text: "Highly underrated tuning shop in Dubai. Virtually anything is possible with them. Very reasonable pricing considering the quality and the speed of the service provided.",
      },
    ],
    gallery: Array.from({ length: 7 }, (_, i) => `/das/gallery/audi-${i + 1}.jpg`),
  },
  bmw: {
    name: "BMW",
    title: "BMW Service Center for Total Performance Engineering",
    subtitle:
      "Precision BMW tuning in Dubai, with expert performance upgrades and servicing, delivered by specialists who understand BMW engineering deeply.",
    capabilities: [
      "BMW ECU calibration expertise",
      "Advanced BMW diagnostics systems",
      "OEM+ performance hardware integration",
      "Cooling and drivetrain optimization",
      "AWD dyno performance validation",
    ],
    dyno: {
      stage: "Stage 2",
      model: "G87 BMW M2",
      stockPower: "453 BHP",
      stockTorque: "550 NM",
      tunedPower: "680 BHP",
      tunedTorque: "900 NM",
    },
    testimonials: [
      {
        name: "BMW Client",
        model: "BMW M2",
        text: "The level of detail and care that went into my M2 build was outstanding. The team understood exactly what I wanted and delivered beyond expectations. The car feels completely transformed.",
      },
      {
        name: "BMW Client",
        model: "BMW M3",
        text: "Professional, knowledgeable, and honest. They took the time to explain every step of the process and the dyno results spoke for themselves. Highly recommend for any BMW owner in Dubai.",
      },
    ],
    gallery: Array.from({ length: 3 }, (_, i) => `/das/gallery/bmw-${i + 1}.jpg`),
  },
  "mercedes-benz": {
    name: "Mercedes-Benz",
    title: "Mercedes Benz Service Center, Focused on Driving Excellence",
    subtitle:
      "Specialist Mercedes-Benz service center delivering precision tuning, upgrades, and expert maintenance built for long-term performance.",
    capabilities: [
      "Mercedes ECU calibration expertise",
      "Brand-specific diagnostics systems",
      "OEM+ performance hardware integration",
      "Thermal and drivability optimisation",
      "AWD dyno performance validation",
    ],
    dyno: {
      stage: "Stage 1",
      model: "Mercedes E63 AMG",
      stockPower: "603 BHP",
      stockTorque: "850 NM",
      tunedPower: "720 BHP",
      tunedTorque: "1,000 NM",
    },
    testimonials: [
      {
        name: "David Whitelaw",
        model: "Mercedes-AMG C63 S",
        text: "Great team of guys who are very knowledgeable. Great service and very reliable. Highly recommend them to anyone driving a European car.",
      },
      {
        name: "Oz Sheikh",
        model: "Mercedes-Benz E-Class",
        text: "Excellent service here! Very professional advice given on the issue I was having with my car. Highly recommend this place to anyone.",
      },
    ],
    gallery: [
      "/das/gallery/mercedes-1.jpg",
      "/das/gallery/mercedes-2.jpg",
      "/das/gallery/mercedes-3.jpg",
    ],
  },
  volkswagen: {
    name: "Volkswagen",
    title: "Volkswagen Service Center, Engineered the Right Way",
    subtitle:
      "Specialist Volkswagen service center delivering tuning, repairs, and upgrades built for performance, safety, and long-term reliability.",
    capabilities: [
      "Volkswagen ECU calibration expertise",
      "Advanced Volkswagen diagnostics",
      "Performance hardware installation",
      "OEM-compliant servicing standards",
      "Data-driven testing validation",
    ],
    dyno: {
      stage: "Stage 2",
      model: "MK8 Volkswagen GTI",
      stockPower: "245 BHP",
      stockTorque: "370 NM",
      tunedPower: "330 BHP",
      tunedTorque: "475 NM",
    },
    testimonials: [
      {
        name: "Alexandre Poussardin",
        model: "VW Golf R",
        text: "Brought my Golf R in to fix a boost leak and get a remap. I'm more than happy with what I got in return, feels as if I'm driving a different car in itself.",
      },
      {
        name: "Harry Politis",
        model: "VW Golf GTI",
        text: "Amazingly priced considering how professional and experienced these guys are. Been with them exclusively for all maintenance and performance related stuff for my golf for over 3 years.",
      },
    ],
    gallery: [
      "/das/gallery/volkswagen-1.jpg",
      "/das/gallery/volkswagen-2.png",
      "/das/gallery/volkswagen-3.png",
      "/das/gallery/volkswagen-4.png",
    ],
  },
};

// ============================================
// PILLARS
// ============================================
const pillars = [
  {
    icon: Wrench,
    title: "Hardware Upgrades",
    text: "Purpose-built performance parts chosen for compatibility, balance, and long-term vehicle health.",
  },
  {
    icon: Gauge,
    title: "Performance Tuning",
    text: "Engineering-led calibration focused on controlled power and results that feel rewarding to drive.",
  },
  {
    icon: Settings,
    title: "Vehicle Maintenance",
    text: "Routine service and care tailored for performance vehicles and long-term ownership.",
  },
];

// ============================================
// PARTNER LOGOS
// ============================================
const partnerLogos = [
  { name: "Akrapovic", logo: "/das/logos/akrapovic-2025.png" },
  { name: "CSF", logo: "/das/logos/csf-2025.png" },
  { name: "Eventuri", logo: "/das/logos/eventuri-2025.png" },
];

// ============================================
// FAQ
// ============================================
const generateFaqs = (brandName: string) => [
  {
    q: "Is the tune safe for daily driving?",
    a: "Yes. All our calibrations are engineered for reliability in the UAE and beyond. We operate within safe limits validated on our dyno, so your car remains dependable for everyday use while delivering the performance gains you expect.",
  },
  {
    q: `Will tuning affect ${brandName} reliability or warranty?`,
    a: `When performed correctly, ${brandName} tuning can maintain reliability by operating within safe limits. Our approach is conservative and data-driven, prioritising long-term engine health. We recommend discussing warranty considerations with our team before proceeding.`,
  },
  {
    q: `Is The Car Dr's Garage a ${brandName} service center?`,
    a: `Yes. The Car Dr's Garage operates as a specialized ${brandName} service center, offering expert servicing, diagnostics, and performance upgrades carried out by technicians who understand ${brandName} engineering in depth.`,
  },
  {
    q: `Can I service and tune my ${brandName} together?`,
    a: "Yes. Many clients combine servicing and tuning in one visit. This is often the most efficient approach, as we can ensure the vehicle is in optimal condition before calibration and validate everything together on the dyno.",
  },
  {
    q: "What fuel is required for your tunes?",
    a: "We recommend high-octane petrol, 98 RON or above, for all our performance calibrations. This ensures the engine runs safely at the tuned parameters and delivers consistent results in UAE conditions.",
  },
  {
    q: "Do you offer dyno verification?",
    a: "Absolutely. Every tune can be verified on our AWD dyno. We record before and after figures so you can see exactly what the calibration delivers, with real numbers rather than estimates.",
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
          <h1 className="font-display text-3xl text-cream mb-4">Brand not found</h1>
          <Link href="/brand-uri" className="text-gold hover:underline">
            ← Back to brands
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              {brand.name} · Specialist Service Center
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight">
              {data.name}
            </h1>
            <h2 className="font-display text-xl md:text-2xl font-medium text-cream/90 mb-6 max-w-3xl mx-auto leading-snug">
              {data.title}
            </h2>
            <p className="text-lg text-ash leading-relaxed max-w-3xl mx-auto mb-10">
              {data.subtitle}
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* DECADES OF EXPERIENCE — CAPABILITIES + PILLARS */}
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
              {data.name} Expertise
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream leading-tight">
              Decades of Experience. <span className="gold-text">Engineered for Results.</span>
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
                {data.name} Capabilities
              </h3>
              <div className="space-y-4">
                {data.capabilities.map((cap, i) => (
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

            {/* Pillars */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="glass rounded-2xl p-6 hover:border-gold/30 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <p.icon size={24} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-cream mb-2">{p.title}</h4>
                      <p className="text-sm text-ash leading-relaxed">{p.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TRUSTED BY LEADING PERFORMANCE BRANDS */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-surface border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Performance Partners
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream">
              Trusted by the World's <span className="gold-text">Leading Performance Brands</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
            {partnerLogos.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img src={p.logo} alt={p.name} className="h-16 md:h-20 object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* DYNO RESULTS — THE NUMBERS DON'T LIE */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Dyno Validated
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream">
              The Numbers <span className="gold-text">Don't Lie</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 md:p-12"
          >
            <div className="text-center mb-10">
              <span className="text-xs tracking-[0.2em] uppercase text-gold mb-2 block">
                {data.dyno.stage} · {data.dyno.model}
              </span>
              <h3 className="font-display text-2xl font-bold text-cream">
                Performance Collection / {data.dyno.model}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Power */}
              <div className="rounded-xl bg-ink/50 p-6 text-center">
                <p className="text-xs text-stone uppercase tracking-wide mb-4">Power</p>
                <div className="flex items-center justify-center gap-6">
                  <div>
                    <p className="text-sm text-stone mb-1">Stock</p>
                    <p className="font-display text-3xl font-bold text-cream">{data.dyno.stockPower}</p>
                  </div>
                  <ArrowRight size={24} className="text-gold" />
                  <div>
                    <p className="text-sm text-gold mb-1">Tuned</p>
                    <p className="font-display text-3xl font-bold gold-text">{data.dyno.tunedPower}</p>
                  </div>
                </div>
              </div>

              {/* Torque */}
              <div className="rounded-xl bg-ink/50 p-6 text-center">
                <p className="text-xs text-stone uppercase tracking-wide mb-4">Torque</p>
                <div className="flex items-center justify-center gap-6">
                  <div>
                    <p className="text-sm text-stone mb-1">Stock</p>
                    <p className="font-display text-3xl font-bold text-cream">{data.dyno.stockTorque}</p>
                  </div>
                  <ArrowRight size={24} className="text-gold" />
                  <div>
                    <p className="text-sm text-gold mb-1">Tuned</p>
                    <p className="font-display text-3xl font-bold gold-text">{data.dyno.tunedTorque}</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-stone mt-8 text-center">
              * Results represent typical {data.dyno.stage.toLowerCase()} hardware builds.
            </p>
          </motion.div>
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              {data.name} Builds
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream">
              The <span className="gold-text">Gallery</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.gallery.map((src, i) => (
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
                  alt={`${data.name} build ${i + 1}`}
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
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Client Feedback
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream">
              What {data.name} Owners <span className="gold-text">Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 hover:border-gold/30 transition-all duration-500"
              >
                <Quote size={32} className="text-gold/40 mb-4" />
                <p className="text-cream leading-relaxed mb-6 italic">"{t.text}"</p>
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
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Frequently Asked
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream">
              {data.name} Tuning <span className="gold-text">FAQ</span>
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
      <section className="py-24 px-6 bg-canvas">
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
              Ready to Unlock Your <span className="gold-text">{data.name}'s</span> Potential?
            </h2>
            <p className="text-lg text-ash leading-relaxed mb-10 max-w-2xl mx-auto">
              Book a session with {brand.name} and experience {data.name} tuning engineered for
              real-world performance and long-term reliability.
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
