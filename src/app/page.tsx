"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Building2, Home, Wrench, PaintBucket, Zap, PencilRuler, Award, ShieldCheck, Sparkles, TrendingUp, Users, Clock, Briefcase } from "lucide-react";
import BuildingHero3D from "@/components/building-hero-3d";
import { brand } from "@/lib/brand";

// ============================================
// SERVICII — 6 servicii PZ & GZ CONSTRUCT
// ============================================
const services = [
  {
    slug: "constructii-civile-industriale",
    icon: Building2,
    title: "Construcții Civile / Industriale",
    short: "Apartamente, case, sedii firme, clădiri birouri",
    text: "Cu peste 20 ani experiență în domeniu suntem partenerul Dvs. perfect. Construim, renovăm și reabilităm clădiri afectate de diversi factori.",
    image: "/edil/art-temple.jpg",
  },
  {
    slug: "constructii-case",
    icon: Home,
    title: "Construcții Case",
    short: "Case la roșu, case la cheie, case de vacanță",
    text: "Dacă aveți de gând să construiți o casă nu ezitați să apelați la echipa noastră de specialiști. De la fundație la cheie.",
    image: "/edil/service-case.png",
  },
  {
    slug: "mentenanta",
    icon: Wrench,
    title: "Mentenanță",
    short: "Preventivă, predictivă și corectivă",
    text: "Oferim mentenanță preventivă, predictivă și corectivă a clădirilor civile și industriale. Echipe disponibile 24/7.",
    image: "/edil/hero.jpg",
  },
  {
    slug: "amenajari-interioare",
    icon: PaintBucket,
    title: "Amenajări Interioare",
    short: "Case, apartamente, birouri, spații comerciale",
    text: "Amenajări interioare și exterioare pentru orice tip de imobil. Zugrăveli, tencuieli, gresie, faianta, parchet, rigips, termosistem.",
    image: "/edil/service-amenajari.png",
  },
  {
    slug: "instalatii-electrice-sanitare",
    icon: Zap,
    title: "Instalații Electrice și Sanitare",
    short: "Proiectare și execuție cu personal calificat",
    text: "Proiectăm și executăm instalații electrice și sanitare cu personal calificat. Case, apartamente, blocuri, sedii firme, industriale.",
    image: "/edil/service-instalatii.png",
  },
  {
    slug: "proiectare",
    icon: PencilRuler,
    title: "Proiectare",
    short: "Rezidențială, comercială sau industrială",
    text: "Proiectare construcții cu destinație rezidențială, comercială sau industrială. Arhitectură, rezistență, instalații — documentație completă.",
    image: "/edil/service-proiectare.png",
  },
];

// ============================================
// PROIECTE — 6 proiecte PZ & GZ CONSTRUCT
// ============================================
const projects = [
  {
    slug: "art-temple-residence",
    name: "Art Temple Residence",
    area: "București",
    category: "Construcții Civile",
    image: "/edil/art-temple.jpg",
  },
  {
    slug: "city-lights-pipera",
    name: "City Lights Pipera",
    area: "Pipera, Ilfov",
    category: "Construcții Civile",
    image: "/edil/city-lights.jpg",
  },
  {
    slug: "dream-residence",
    name: "Dream Residence",
    area: "București",
    category: "Construcții Civile",
    image: "/edil/dream-residence.jpg",
  },
  {
    slug: "confort-urban",
    name: "Confort Urban",
    area: "București",
    category: "Construcții Civile",
    image: "/edil/confort-urban.png",
  },
  {
    slug: "central-address-residence",
    name: "Central Address Residence",
    area: "București",
    category: "Construcții Civile",
    image: "/edil/central-address.jpg",
  },
  {
    slug: "envogue-residence",
    name: "Envogue Residence",
    area: "București",
    category: "Construcții Civile",
    image: "/edil/envogue.jpg",
  },
];

// ============================================
// VALORI — 4 valori PZ & GZ CONSTRUCT
// ============================================
const values = [
  { icon: ShieldCheck, title: "Durabilitate", text: "Construim cu materiale de top pentru rezistență în timp. Calitatea lucrarilor este asigurată de echipamentele utilizate." },
  { icon: Award, title: "Siguranță", text: "Lucrăm în siguranță, respectând toate normele de protecția muncii și standardele tehnice în vigoare." },
  { icon: Sparkles, title: "Modern", text: "Construcții moderne, tinem pasul cu tehnologia și trend-urile. Adaptăm fiecare proiect în funcție de nevoi și buget." },
  { icon: TrendingUp, title: "Ingineri calificați", text: "Avem personal calificat, investim în dezvoltarea lor profesională. Cei mai buni specialiști pentru proiectul Dvs." },
];

export default function HomePage() {
  return (
    <main>
      {/* ============================================ */}
      {/* HERO — 3D Building animation */}
      {/* ============================================ */}
      <section className="relative h-[400vh] bg-ink">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <BuildingHero3D />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/40 via-transparent to-ink/80 pointer-events-none" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-4xl text-center px-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs tracking-[0.25em] uppercase text-gold">Peste 20 ani • 342+ proiecte • București & Ilfov</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="font-display text-6xl md:text-8xl font-bold leading-[0.95] mb-6"
            >
              <span className="gold-text">{brand.name}</span>
              <br />
              <span className="text-cream text-3xl md:text-5xl italic font-normal">Construim soluții orientate către viitor</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-ash max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Indiferent unde sau ce doriți să construiți, mobilizăm experții potriviți pentru a genera valoare și a realiza obiectivele proiectului dumneavoastră.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto"
            >
              <Link
                href="/servicii"
                className="inline-flex items-center gap-2 px-8 py-4 glass text-gold font-semibold rounded-lg hover:border-gold/50 hover:shadow-[0_4px_30px_rgba(255,107,0,0.25)] transition-all duration-300"
              >
                Serviciile noastre <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 glass text-cream font-semibold rounded-lg hover:border-gold/50 hover:shadow-[0_4px_30px_rgba(255,107,0,0.25)] transition-all duration-300"
              >
                Cere o ofertă
              </Link>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
            <span className="text-xs tracking-[0.3em] uppercase text-stone">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* DESPRE COMPANIE */}
      {/* ============================================ */}
      <section className="py-24 px-6 relative bg-canvas">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ willChange: "transform, opacity" }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Cine suntem</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
                Construim soluții orientate către <span className="gold-text">viitor</span>
              </h2>
              <p className="text-lg text-ash leading-relaxed mb-6">
                Cu o experiență de peste 20 de ani în domeniul construcțiilor, realizăm proiecte complexe și oferim soluții moderne clienților noștri. Seriozitatea și punctualitatea ne recomandă în a fi cel mai bun partener pentru execuția proiectelor Dvs.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Construcții civile și industriale", "Construcții case", "Structuri", "Proiectare", "Instalații electrice / sanitare", "Amenajări interioare"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-ash">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/despre-noi" className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">
                Despre noi <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden glass">
                <img
                  src="/edil/about.png"
                  alt="PZ & GZ CONSTRUCT"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 hidden md:block">
                <p className="font-display text-4xl font-bold gold-text">20+</p>
                <p className="text-xs text-ash tracking-wide uppercase mt-1">Ani experiență</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* STATISTICI */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Briefcase, value: "342+", label: "Proiecte realizate" },
              { icon: Users, value: "270+", label: "Clienți mulțumiți" },
              { icon: Award, value: "52+", label: "Ingineri calificați" },
              { icon: Clock, value: "20+", label: "Ani experiență" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 mx-auto">
                  <stat.icon size={24} className="text-gold" />
                </div>
                <p className="font-display text-4xl font-bold gold-text mb-2">{stat.value}</p>
                <p className="text-xs text-ash tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* VALORI */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">De ce să ne alegi</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Calitățile noastre</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((val, i) => (
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
      {/* SERVICII */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Ce facem</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Serviciile noastre</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv, i) => {
              const animations = [
                { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
                { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
                { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
              ];
              const anim = animations[i % 3];
              return (
                <motion.div
                  key={srv.slug}
                  initial={anim.initial}
                  whileInView={anim.animate}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <Link
                    href={`/servicii/${srv.slug}`}
                    className="group block glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 h-full"
                  >
                    <div className="relative h-48 overflow-hidden bg-ink/50 flex items-center justify-center">
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
                        Vezi mai mult <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PROIECTE */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Portofoliu</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">Proiectele noastre</h2>
            <p className="text-ash max-w-2xl mx-auto">
              Câteva dintre proiectele noastre ne recomandă.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => {
              const animations = [
                { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
                { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
                { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
              ];
              const anim = animations[i % 3];
              return (
                <motion.div
                  key={p.slug}
                  initial={anim.initial}
                  whileInView={anim.animate}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <Link
                    href={`/proiecte/${p.slug}`}
                    className="group block glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 h-full"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold/20 text-gold">
                          {p.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-display text-lg font-bold text-cream leading-tight">{p.name}</h3>
                        <p className="text-xs text-gold tracking-wide mt-1 flex items-center gap-1">
                          <MapPin size={12} /> {p.area}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
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
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ willChange: "transform, opacity" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
            Ai un proiect de realizat? <span className="gold-text">Cere o ofertă!</span>
          </h2>
          <p className="text-lg text-ash mb-10">
            Află mai multe despre noi sau cere o ofertă personalizată pentru viitorul tău proiect. Lăsă-ne datele și te contactăm!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 text-lg"
          >
            Cere o ofertă <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
