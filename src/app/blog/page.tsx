"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { brand } from "@/lib/brand";

// ============================================
// SFATURI
// ============================================
const posts = [
  {
    title: "Când să schimbi uleiul la motocicletă",
    date: "Sezon",
    image: "/motorax/gallery/gallery-2.jpg",
    excerpt:
      "Uleiul este viața motorului. Îți recomandăm schimbarea uleiului și a filtrului cel puțin o dată pe sezon sau conform intervalului din manualul motocicletei tale.",
  },
  {
    title: "Cum îți dai seama că kitul de transmisie e uzat",
    date: "Transmisie",
    image: "/motorax/gallery/gallery-3.jpg",
    excerpt:
      "Lanț întins, pinioane cu dinți uzați, zgomot și smucituri — toate sunt semne că kitul de transmisie trebuie înlocuit. Verifică-l regulat.",
  },
  {
    title: "Pregătirea motocicletei pentru iarnă",
    date: "Hotel Motociclete",
    image: "/motorax/gallery/gallery-7.jpg",
    excerpt:
      "Depozitarea corectă protejează bateria, cauciucurile și vopseaua. La Hotelul Motociclete ai spațiu privat la 15–20°C, cu contract și îngrijire completă.",
  },
  {
    title: "De ce contează sincronizarea carburatoarelor",
    date: "Motor",
    image: "/motorax/gallery/gallery-4.jpg",
    excerpt:
      "Ralanti instabil, consum mare sau răspuns slab la accelerație? De multe ori vinovatul este sincronizarea carburatoarelor — o operație simplă cu efect mare.",
  },
  {
    title: "Suspensia contează mai mult decât crezi",
    date: "Suspensii",
    image: "/motorax/gallery/gallery-5.jpg",
    excerpt:
      "Amortizoarele uzate afectează frânarea, stabilitatea și confortul. Un service de suspensii și reglajele potrivite greutății tale fac diferența.",
  },
  {
    title: "De ce un service autorizat R.A.R.",
    date: "Siguranță",
    image: "/motorax/gallery/gallery-6.jpg",
    excerpt:
      "Autorizația Registrului Auto Român înseamnă lucrări conforme și documentate — motocicleta ta este pe mâini bune, iar tu ești acoperit.",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-20">
      {/* ============================================ */}
      {/* HERO */}
      {/* ============================================ */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-ink">
        <div className="absolute inset-0 opacity-25">
          <img src="/motorax/gallery/gallery-6.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-canvas" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-canvas" />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center max-w-3xl"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Sfaturi</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-cream tracking-tight">
              Sfaturi pentru motocicliști
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SFATURI GRID */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 h-full"
              >
                <div className="relative h-48 overflow-hidden bg-ink/50">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold/20 text-gold backdrop-blur-sm">
                      {post.date}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-cream mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-ash leading-relaxed">{post.excerpt}</p>
                </div>
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
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
            Ai nevoie de <span className="gold-text">service?</span>
          </h2>
          <p className="text-lg text-ash mb-10">
            Sună-ne pentru o programare rapidă sau treci pe la service — suntem în {brand.area}, {brand.city}.
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
