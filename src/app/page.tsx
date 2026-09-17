"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Wrench, Gauge, Settings, Zap, ShieldCheck, Award, Sparkles, TrendingUp } from "lucide-react";
import BuildingHero3D from "@/components/building-hero-3d";
import { brand } from "@/lib/brand";

// ============================================
// TRUSTED PARTNERS
// ============================================
const partners = [
  { name: "ECS Tuning", logo: "/das/logos/ecs-tuning.png" },
  { name: "Akrapovic", logo: "/das/logos/akrapovic.png" },
  { name: "Valvetronic", logo: "/das/logos/valvetronic.png" },
  { name: "Armaspeed", logo: "/das/logos/armaspeed.png" },
  { name: "KW Suspensions", logo: "/das/logos/kw-suspensions.png" },
  { name: "IE", logo: "/das/logos/ie.png" },
  { name: "do88", logo: "/das/logos/do88.png" },
  { name: "Pure Turbos", logo: "/das/logos/pure-turbos.png" },
  { name: "Novitec", logo: "/das/logos/novitec.png" },
];

// ============================================
// CORE SERVICES
// ============================================
const coreServices = [
  {
    icon: Wrench,
    title: "Hardware Upgrades",
    text: "Purpose-built performance parts chosen for compatibility, balance, and long-term vehicle health.",
    link: "/servicii",
    cta: "Explore Parts",
  },
  {
    icon: Gauge,
    title: "Performance Tuning",
    text: "Engineering-led calibration focused on controlled power and results that feel rewarding to drive.",
    link: "/servicii/engine-tuning",
    cta: "Explore Tuning",
  },
  {
    icon: Settings,
    title: "Vehicle Maintenance",
    text: "Routine service and care tailored for performance vehicles and long-term ownership.",
    link: "/servicii/maintenance",
    cta: "View Maintenance",
  },
];

// ============================================
// BRAND BLUEPRINTS
// ============================================
const blueprints = [
  {
    brand: "Audi",
    model: "AUDI RS3 8Y",
    collection: "Performance Collection / AUDI RS3 8Y",
    description: "The RS3 8Y rewards precise calibration. Our Stage 1 build sharpens throttle response and broadens the torque band, turning the 2.5TFSI platform into a smoother, more confident performer on the road and on the dyno.",
    stockPower: "400 BHP",
    potentialPower: "450 BHP",
    stockTorque: "500 NM",
    potentialTorque: "580 NM",
    note: "Stage 1 hardware builds",
    link: "/brand-uri/audi",
  },
  {
    brand: "BMW",
    model: "G87 BMW M2",
    collection: "Performance Collection / G87 BMW M2",
    description: "The G87 M2's S58 engine is built for more. Our Stage 2 hardware package pairs upgraded cooling, intake, and downpipes with a custom calibration that transforms the M2 into a focused, rear-driven track weapon without losing everyday usability.",
    stockPower: "453 BHP",
    potentialPower: "680 BHP",
    stockTorque: "550 NM",
    potentialTorque: "900 NM",
    note: "Stage 2 hardware builds",
    link: "/brand-uri/bmw",
  },
  {
    brand: "Mercedes",
    model: "Mercedes E63 AMG",
    collection: "Performance Collection / Mercedes E63 AMG",
    description: "The M177 4.0L V8 BiTurbo has serious headroom. Our Stage 1 calibration refines boost delivery and ignition timing, lifting the E63 AMG from a fast saloon to a measured, devastatingly quick performance car with the refinement Mercedes owners expect.",
    stockPower: "603 BHP",
    potentialPower: "720 BHP",
    stockTorque: "850 NM",
    potentialTorque: "1,000 NM",
    note: "Stage 1 hardware builds",
    link: "/brand-uri/mercedes-benz",
  },
  {
    brand: "Volkswagen",
    model: "MK8 Volkswagen GTI",
    collection: "Performance Collection / MK8 Volkswagen GTI",
    description: "The MK8 GTI's EA888 2.0 TSI is a proven tuning platform. Our Stage 2 build combines hardware upgrades with precise ECU calibration, delivering stronger mid-range pull and sharper response while keeping the GTI's everyday practicality intact.",
    stockPower: "245 BHP",
    potentialPower: "330 BHP",
    stockTorque: "370 NM",
    potentialTorque: "475 NM",
    note: "Stage 2 hardware builds",
    link: "/brand-uri/volkswagen",
  },
];

// ============================================
// GALLERY
// ============================================
const galleryImages = [
  { src: "/das/gallery/featured-1.png", alt: `${brand.name} Build` },
  { src: "/das/gallery/featured-2.png", alt: `${brand.name} Build` },
  { src: "/das/gallery/featured-3.png", alt: `${brand.name} Build` },
  { src: "/das/gallery/featured-4.png", alt: `${brand.name} Build` },
  { src: "/das/gallery/audi-1.jpg", alt: "Audi Performance Build" },
  { src: "/das/gallery/bmw-1.jpg", alt: "BMW Performance Build" },
];

// ============================================
// VALUES
// ============================================
const values = [
  { icon: ShieldCheck, title: "Expertise", text: "Every decision is guided by technical understanding and measured outcomes." },
  { icon: Award, title: "Craftsmanship", text: "Every upgrade is measured, refined, and executed with precision." },
  { icon: Sparkles, title: "Integrity", text: "Work is carried out transparently, with respect and restraint for the vehicle." },
  { icon: TrendingUp, title: "Consistency", text: "The same standards apply across every brand, platform, and project." },
];

// ============================================
// BLOG PREVIEW
// ============================================
const blogPosts = [
  {
    slug: "how-to-choose-a-car-tuning-shop-in-dubai",
    title: "How to Choose a Car Tuning Shop in Dubai",
    date: "June 30, 2026",
    excerpt: "Choosing the right tuning garage matters for safety, reliability, drivability, and long-term performance. Here is what European performance car owners in Dubai should check before tuning.",
  },
  {
    slug: "best-performance-upgrades-for-bmw-m5-f90-owners-in-dubai",
    title: "Best Performance Upgrades for BMW M5 F90 Owners in Dubai",
    date: "June 30, 2026",
    excerpt: "Own a BMW M5 F90 in Dubai? Learn which upgrades to consider first, from ECU tuning and exhaust systems to cooling, suspension, brakes, and supporting maintenance.",
  },
  {
    slug: "performance-exhaust-systems-dubai-european-cars",
    title: "What to Know Before Upgrading Your European Car",
    date: "May 25, 2026",
    excerpt: "Thinking about a performance exhaust upgrade in Dubai? Here is what European performance car owners should consider before choosing an exhaust system.",
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
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-cream tracking-[0.1em] sm:tracking-[0.15em] px-4 text-center">
              WELCOME
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
                Book Appointment <ArrowRight size={16} />
              </Link>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 glass text-cream text-sm sm:text-base font-semibold rounded-lg hover:border-gold/50 hover:shadow-[0_4px_30px_rgba(255,107,0,0.25)] transition-all duration-300"
              >
                Contact a Technician
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-2 block">Trusted Partner with Industry Leaders</span>
          </motion.div>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 items-center justify-items-center">
            {partners.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img src={p.logo} alt={p.name} className="h-12 md:h-14 object-contain" />
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Who we are</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              Your Complete <span className="gold-text">Performance Partner</span>
            </h2>
            <p className="text-lg text-ash leading-relaxed mb-8 max-w-3xl mx-auto">
              One team, one integrated approach. We bring together performance hardware, car tuning, and specialist servicing under one roof for long-term vehicle confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">How we work</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6 leading-tight">
              Where Engineering Meets <span className="gold-text">Experience</span>
            </h3>
            <p className="text-lg text-ash leading-relaxed max-w-3xl mx-auto">
              Our work is grounded in decades of data-led decisions and proven processes, delivering performance that holds up over time, not just on paper.
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Services</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Our Core Services</h2>
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
      {/* BRAND BLUEPRINTS */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Shop the Build</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Performance Blueprints</h2>
          </motion.div>

          <div className="space-y-8">
            {blueprints.map((bp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="glass rounded-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className={`p-8 lg:p-12 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <span className="text-xs tracking-[0.2em] uppercase text-gold mb-2 block">{bp.collection}</span>
                    <h3 className="font-display text-3xl font-bold text-cream mb-4">The {bp.model} Blueprint</h3>
                    <p className="text-sm text-ash leading-relaxed mb-6">
                      {bp.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 rounded-xl bg-ink/50">
                        <p className="text-xs text-stone uppercase tracking-wide mb-1">Stock Power</p>
                        <p className="font-display text-2xl font-bold text-cream">{bp.stockPower}</p>
                        <p className="text-xs text-gold mt-2">→ {bp.potentialPower}</p>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-ink/50">
                        <p className="text-xs text-stone uppercase tracking-wide mb-1">Stock Torque</p>
                        <p className="font-display text-2xl font-bold text-cream">{bp.stockTorque}</p>
                        <p className="text-xs text-gold mt-2">→ {bp.potentialTorque}</p>
                      </div>
                    </div>
                    <Link href={bp.link} className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">
                      Browse {bp.brand} parts <ArrowRight size={16} />
                    </Link>
                    <p className="text-xs text-stone mt-3">* Results represent typical {bp.note}.</p>
                  </div>
                  <div className={`relative min-h-[300px] bg-ink/30 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <img
                      src={`/das/gallery/${bp.brand.toLowerCase()}-1.jpg`}
                      alt={bp.model}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                </div>
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Why choose us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Our Principles</h2>
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Gallery</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">Moments From the Garage Community</h2>
            <p className="text-ash max-w-2xl mx-auto">
              Explore the highlights, relive the energy, and see the builds that stole the spotlight. Tag your photos and videos with {brand.hashtag} for a chance to be featured.
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
      {/* BLOG PREVIEW */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Our Blogs</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Discover Industry Insights</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 h-full"
                >
                  <div className="p-6">
                    <span className="text-xs text-gold tracking-wide">{post.date}</span>
                    <h3 className="font-display text-lg font-bold text-cream mt-3 mb-3 group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-ash leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="text-gold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ArrowRight size={14} />
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
      <section className="py-32 px-6 bg-surface">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
            Go from fast to <span className="gold-text">faster</span>
          </h2>
          <p className="text-lg text-ash mb-10">
            Have a question about tuning, upgrades, or maintenance? Visit our contact page or chat on WhatsApp and we'll get back to you right away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 text-lg"
            >
              Get in touch! <ArrowRight size={20} />
            </Link>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 glass text-cream font-semibold rounded-lg hover:border-gold/50 transition-all duration-300 text-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
