"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Wrench, Award, Users, Sparkles, MapPin, Clock, Briefcase } from "lucide-react";
import { brand } from "@/lib/brand";

// ============================================
// WHAT SETS THE GARAGE APART
// ============================================
const differentiators = [
  {
    icon: Award,
    title: "Rooted in European Craft",
    text: "Originating in the UK and established in Dubai in 2013, our deep expertise in European platforms drives technical perfection.",
  },
  {
    icon: Wrench,
    title: "Driven by Technical Discipline",
    text: "Thoughtful engineering and careful execution thrive in our workshop. We blend strict technical discipline with measured respect for every vehicle.",
  },
  {
    icon: Sparkles,
    title: "An Integrated Approach",
    text: "One team, one approach. We unite performance hardware, precise tuning, and specialist servicing under one roof for long-term vehicle confidence.",
  },
];

// ============================================
// JOB OPENINGS
// ============================================
const jobs = [
  {
    title: "Automotive Technician – German Cars",
    location: "Ras Al Khor, Dubai",
    type: "Full Time",
    salary: "From 4000 AED + bonus overtime pay",
    hours: "6 days a week, 9am to 6pm",
    description:
      "We are seeking a skilled technician with over 5 years of experience specializing in German marques like BMW, Audi, and Porsche. You will handle advanced diagnostics, ECU systems, and performance tuning in a high-paced luxury environment.",
  },
  {
    title: "Service Advisor – German Car Specialist",
    location: "Ras Al Khor, Dubai",
    type: "Full Time",
    salary: "From 5000 AED + bonus overtime pay",
    hours: "6 days a week, 9am to 6pm",
    description:
      "Act as the vital link between our technicians and premium clients. You will manage job cards, coordinate parts ordering, and ensure customer satisfaction through professional communication and technical expertise in German vehicle maintenance.",
  },
  {
    title: "Welder / Fabricator – Automotive",
    location: "Ras Al Khor, Dubai",
    type: "Full Time",
    salary: "From 4500 AED + bonus overtime pay",
    hours: "6 days a week, 9am to 6pm",
    description:
      "Join our fabrication team to work on custom exhaust systems and structural repairs for high-performance vehicles. Expert proficiency in MIG/TIG welding and metal shaping is required to meet our premium manufacturer standards.",
  },
];

export default function CareersPage() {
  return (
    <main className="pt-20">
      {/* ============================================ */}
      {/* HERO */}
      {/* ============================================ */}
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/das/gallery/featured-2.png"
            alt="The Car Dr's Garage careers"
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Careers</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">
              Take Part in the <span className="gold-text">Excellence</span>
            </h1>
            <p className="text-lg text-ash leading-relaxed">
              Joining The Car Dr's Garage means becoming a part of a team united by the ambition to strive for excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* INTRO */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center"
          >
            <p className="text-lg text-ash leading-relaxed">
              Join a team where engineering-led discipline meets absolute performance. At The Car Dr's Garage, we are always looking for passionate professionals who thrive on technical complexity and share our measured respect for European automotive excellence. Whether you are a master technician or a specialist in workshop operations, we invite you to help us define the future of performance engineering in Dubai.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* DRIVEN BY TECHNICAL DISCIPLINE */}
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
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Award size={24} className="text-gold" />
              </div>
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Our Heritage</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
                Driven by <span className="gold-text">Technical Discipline</span>
              </h2>
              <p className="text-lg text-ash leading-relaxed">
                Born in the UK and established in Dubai, we set the standard for European performance. We blend deep expertise with data-driven precision to unlock your vehicle's true potential.
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
                <Wrench size={24} className="text-gold" />
              </div>
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Our Standard</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
                Precision is Our <span className="gold-text">Fuel</span>
              </h2>
              <p className="text-lg text-ash leading-relaxed">
                We operate a clinical, performance-focused environment where thoughtful engineering thrives. From custom fabrication to exact ECU calibration, we deliver unrivaled craftsmanship without the guesswork.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHAT SETS THE GARAGE APART */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Why Join Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">What Sets The Car Dr's Garage Apart?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 hover:border-gold/30 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                  <item.icon size={28} className="text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-cream mb-4">{item.title}</h3>
                <p className="text-sm text-ash leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* JOB OPENINGS */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Open Positions</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Experienced Professionals — Permanent</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 hover:border-gold/30 transition-all duration-500 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <Briefcase size={22} className="text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-cream mb-5">{job.title}</h3>
                <div className="space-y-2 mb-6 text-sm">
                  <span className="flex items-center gap-2 text-ash">
                    <MapPin size={15} className="text-gold" /> {job.location}
                  </span>
                  <span className="flex items-center gap-2 text-ash">
                    <Briefcase size={15} className="text-gold" /> {job.type}
                  </span>
                  <span className="flex items-center gap-2 text-ash">
                    <Award size={15} className="text-gold" /> Salary: {job.salary}
                  </span>
                  <span className="flex items-center gap-2 text-ash">
                    <Clock size={15} className="text-gold" /> Weekly Hours: {job.hours}
                  </span>
                </div>
                <p className="text-sm text-ash leading-relaxed mb-6 flex-grow">{job.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-gold text-sm hover:gap-3 transition-all mt-auto"
                >
                  Apply now <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SPONTANEOUS APPLICATION */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="glass rounded-2xl p-10 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 mx-auto">
              <Users size={28} className="text-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-5">
              We would love to hear from you!
            </h2>
            <p className="text-ash leading-relaxed mb-8">
              Are you passionate about joining our team but don't see an opening that matches your skills? Or do you have questions about building your career with us? Feel free to send us a spontaneous application or get in touch with any inquiries.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
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
