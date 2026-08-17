"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin } from "lucide-react";

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

export default function PortfolioPage() {
  return (
    <main className="pt-20">
      <section className="py-20 px-6 bg-canvas min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Portofoliu</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">Proiectele noastre</h1>
            <p className="text-lg text-ash max-w-2xl mx-auto">
              Proiectele noastre ne recomandă!
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
                    href={`/portofoliu/${p.slug}`}
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
    </main>
  );
}
