"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight, Users, Sparkles } from "lucide-react";
import { brand } from "@/lib/brand";

// ============================================
// PAST EVENTS
// ============================================
const pastEvents = [
  {
    title: "European Sports Car Dyno Meet Coming to Downtown Dubai",
    date: "November 18, 2025",
    location: "Dubai Downtown",
    image: "/das/gallery/featured-1.png",
  },
  {
    title: "Garage Dyno Day – BMW Performance Showcase",
    date: "March 22, 2026",
    location: "The Car Dr's Garage HQ, Ras Al Khor, Dubai",
    image: "/das/gallery/bmw-1.jpg",
  },
];

// ============================================
// GALLERY IMAGES
// ============================================
const galleryImages = [
  { src: "/das/gallery/featured-1.png", alt: "The Car Dr's Garage community event" },
  { src: "/das/gallery/featured-2.png", alt: "The Car Dr's Garage performance showcase" },
  { src: "/das/gallery/featured-3.png", alt: "The Car Dr's Garage dyno day" },
  { src: "/das/gallery/featured-4.png", alt: "The Car Dr's Garage car meet" },
  { src: "/das/gallery/audi-1.jpg", alt: "Audi performance build" },
  { src: "/das/gallery/bmw-1.jpg", alt: "BMW performance build" },
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
            src="/das/gallery/featured-1.png"
            alt="The Car Dr's Garage events"
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Events</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">
              Engineered <span className="gold-text">Experiences</span>
            </h1>
            <p className="text-lg text-ash leading-relaxed">
              Curated events bringing performance cars, drivers, and engineering culture together through shared experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* UPCOMING EVENTS */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">What's Next</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Upcoming Events</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="glass rounded-2xl p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 mx-auto">
                <Calendar size={28} className="text-gold" />
              </div>
              <p className="font-display text-xl text-cream">No upcoming events scheduled at this time.</p>
              <p className="text-sm text-ash mt-4">
                Follow us on social media or reach out on WhatsApp to stay informed about the next gathering.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PAST EVENTS */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Looking Back</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Past Events</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((evt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold/90 text-ink text-xs font-semibold tracking-wide">
                    Past Event
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-cream mb-4 group-hover:text-gold transition-colors">
                    {evt.title}
                  </h3>
                  <div className="flex flex-col gap-2 text-sm">
                    <span className="flex items-center gap-2 text-ash">
                      <Calendar size={16} className="text-gold" /> {evt.date}
                    </span>
                    <span className="flex items-center gap-2 text-ash">
                      <MapPin size={16} className="text-gold" /> {evt.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BUILT FOR DRIVERS */}
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
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Users size={24} className="text-gold" />
              </div>
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Our Purpose</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
                Built for <span className="gold-text">Drivers</span>
              </h2>
              <p className="text-lg text-ash leading-relaxed">
                Our events exist for one purpose: to unite drivers with a shared passion for cars and their potential. Each gathering is thoughtfully engineered to deliver real insight and genuine community. It's where enthusiasts like you can meet, learn, compare, and push the limits together, just like we do in the workshop.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ willChange: "transform, opacity" }}
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Sparkles size={24} className="text-gold" />
              </div>
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Our Approach</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
                Driven by <span className="gold-text">Performance</span>
              </h2>
              <p className="text-lg text-ash leading-relaxed">
                Every one of our events are designed to bridge the gap between tuning culture and real-world experience. We share what we know, demonstrate what's possible, and open our doors to drivers who want to expand the boundaries of their builds. These events create a space where engineering and marvel come together, and where every driver leaves better informed than when they arrived.
              </p>
            </motion.div>
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
              Explore the highlights, relive the energy, and see the builds that stole the spotlight. Tag your photos and videos with #thecardrsgarage for a chance to be featured in our cinematic community gallery.
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
