"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/brand";

// ============================================
// BLOG POSTS
// ============================================
const blogPosts = [
  {
    slug: "how-to-choose-a-car-tuning-shop-in-dubai",
    title: "How to Choose a Car Tuning Shop in Dubai",
    date: "June 30, 2026",
    image: "/das/gallery/featured-1.png",
    excerpt:
      "Choosing the right tuning garage matters for safety, reliability, drivability, and long-term performance. Here is what European performance car owners in Dubai should check before tuning.",
  },
  {
    slug: "best-performance-upgrades-for-bmw-m5-f90-owners-in-dubai",
    title: "Best Performance Upgrades for BMW M5 F90 Owners in Dubai",
    date: "June 30, 2026",
    image: "/das/gallery/bmw-1.jpg",
    excerpt:
      "Own a BMW M5 F90 in Dubai? Learn which upgrades to consider first, from ECU tuning and exhaust systems to cooling, suspension, brakes, and supporting maintenance.",
  },
  {
    slug: "performance-exhaust-systems-dubai-european-cars",
    title: "What to Know Before Upgrading Your European Car",
    date: "May 25, 2026",
    image: "/das/services/exhaust-banner.png",
    excerpt:
      "Thinking about a performance exhaust upgrade in Dubai? Here is what European performance car owners should consider before choosing an exhaust system, downpipe, cat-back setup, or vehicle-specific upgrade path.",
  },
  {
    slug: "bmw-tuning-dubai-ecu-performance-upgrades",
    title: "ECU and Performance Upgrade Options for M-Series Owners",
    date: "May 25, 2026",
    image: "/das/gallery/bmw-2.jpg",
    excerpt:
      "Considering BMW tuning in Dubai? Here is what M-Series and European performance car owners should know about ECU tuning, chip tuning, stage 1 tuning, performance parts, and choosing the right tuning shop.",
  },
  {
    slug: "ecu-tuning-dubai-european-performance-cars",
    title: "What European Performance Car Owners Should Know Before Tuning",
    date: "May 25, 2026",
    image: "/das/services/engine-tuning-banner.png",
    excerpt:
      "Considering ECU tuning in Dubai? Here is what European performance car owners should understand before tuning, from remapping and chip tuning to vehicle condition, hardware upgrades, and choosing the right shop.",
  },
  {
    slug: "can-you-daily-drive-a-tuned-car-exploring-the-practicality-and-benefits",
    title: "Can You Daily Drive a Tuned Car? Exploring the Practicality and Benefits",
    date: "July 10, 2023",
    image: "/das/gallery/featured-3.png",
    excerpt:
      "For those who love cars, car tuning is an exciting hobby that gives them the chance to unlock exhilarating performance and push the limits of what a car is capable of.",
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
          <img src="/das/gallery/featured-4.png" alt="" className="w-full h-full object-cover" />
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Insights</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-cream tracking-tight">
              Insights
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BLOG POSTS GRID */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ willChange: "transform, opacity" }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 h-full"
                >
                  <div className="relative h-48 overflow-hidden bg-ink/50">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold/20 text-gold backdrop-blur-sm">
                        {post.date}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="font-display text-lg font-bold text-cream mb-3 group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-ash leading-relaxed mb-4 flex-1">{post.excerpt}</p>
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
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ willChange: "transform, opacity" }}
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
