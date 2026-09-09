"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Gauge,
  Zap,
  Wrench,
  TrendingUp,
  Settings,
  ShieldCheck,
  Sparkles,
  Check,
  Search,
  Eye,
  Cog,
  BadgeCheck,
} from "lucide-react";
import { brand } from "@/lib/brand";

// ============================================
// SERVICE DATA
// ============================================
type ServiceDetail = {
  icon: any;
  title: string;
  subtitle: string;
  capabilities: string[];
  features: { name: string; description: string }[];
};

const servicesData: Record<string, ServiceDetail> = {
  "engine-tuning": {
    icon: Gauge,
    title: "Engine Tuning for Drivers Chasing Real Power",
    subtitle:
      "Data-driven ECU tuning and remapping engineered for measurable power gains and sharper throttle response.",
    capabilities: [
      "Manufacturer-level ECU diagnostics",
      "Custom calibration development",
      "AWD dyno validation",
      "Thermal and knock safeguards",
      "Fuel-specific tuning profiles",
    ],
    features: [
      {
        name: "ECU Calibration",
        description:
          "Custom ECU tuning optimised for improved power delivery, sharper throttle response, and controlled engine safety margins.",
      },
      {
        name: "ECU Remapping",
        description:
          "Factory software recalibrated through car remapping to transform performance while respecting hardware and drivetrain limits.",
      },
      {
        name: "Driveability Optimisation",
        description:
          "Refined torque curves for smoother acceleration, predictable response, and confident everyday usability.",
      },
      {
        name: "Engine Safeguards",
        description:
          "Built-in protections managing temperatures, fueling, and knock control across all operating conditions.",
      },
    ],
  },
  "dyno-testing": {
    icon: Zap,
    title: "Dyno Testing for Measurable Engine Performance",
    subtitle:
      "Precision dyno test calibration delivering verified power, safe operation, and repeatable results you can trust.",
    capabilities: [
      "AWD Dyno Load Simulation",
      "Live AFR Monitoring",
      "Torque Curve Analysis",
      "Thermal Safety Validation",
      "Pre and Post Testing",
    ],
    features: [
      {
        name: "Dyno Baseline Testing",
        description:
          "Establishes accurate horsepower and torque figures before any calibration changes.",
      },
      {
        name: "Engine Dyno Testing",
        description:
          "Measures real-world load, airflow, and thermal behaviour across the rev range.",
      },
      {
        name: "Calibration Validation",
        description:
          "Confirms gains, drivability, and safety after tuning adjustments.",
      },
      {
        name: "Data Reporting",
        description:
          "Provides clear dyno charts for power, torque, and air-fuel ratios.",
      },
    ],
  },
  "exhaust-brake-upgrades": {
    icon: Wrench,
    title: "Exhaust Modification Dubai Drivers Trust for Balance",
    subtitle:
      "Precision exhaust tuning and brake upgrades engineered for performance, control, and everyday reliability.",
    capabilities: [
      "Exhaust Flow Analysis",
      "Brake Thermal Management",
      "Model-Specific Component Matching",
      "In-House Diagnostics Validation",
      "AWD Dyno Testing",
    ],
    features: [
      {
        name: "Custom Exhaust Systems",
        description:
          "Bespoke exhaust modifications optimised for flow, sound control, and thermal stability.",
      },
      {
        name: "Exhaust Tuning",
        description:
          "Precise exhaust tuning to balance performance gains with drivability and emissions compliance.",
      },
      {
        name: "Brake Upgrades",
        description:
          "Tuning brakes for improved stopping power, fade resistance, and pedal consistency.",
      },
      {
        name: "System Integration",
        description:
          "Exhaust and brake calibrated to work cohesively under real-world driving loads.",
      },
    ],
  },
  "turbo-upgrades": {
    icon: TrendingUp,
    title: "Turbo Upgrades for Controlled, Reliable Power",
    subtitle:
      "Engineered turbo upgrade solutions delivering measurable gains, thermal stability, and everyday drivability you can trust.",
    capabilities: [
      "Turbo System Sizing Analysis",
      "Boost Control Calibration",
      "Charge Air Thermal Management",
      "Fueling and Ignition Optimisation",
      "AWD Dyno Validation",
    ],
    features: [
      {
        name: "Turbo Selection",
        description:
          "Matched turbochargers selected for engine capacity, airflow demand, and safe operating efficiency.",
      },
      {
        name: "Supporting Hardware",
        description:
          "Upgraded intercooling, plumbing, fueling, and controls to support stable, repeatable boost delivery.",
      },
      {
        name: "Custom Calibration",
        description:
          "Bespoke ECU tuning managing boost, torque, temperatures, and drivability across all operating conditions.",
      },
      {
        name: "Performance Validation",
        description:
          "Controlled dyno testing to verify power output, boost behaviour, and engine safety margins.",
      },
    ],
  },
  "maintenance": {
    icon: Settings,
    title: "Car Repair and Maintenance That Feels Right",
    subtitle:
      "Thoughtful maintenance and car service Dubai drivers rely on for safer, smoother long-term ownership.",
    capabilities: [
      "Manufacturer-Level Diagnostic Scanning",
      "Preventative Maintenance Protocols",
      "OEM-Spec Servicing Procedures",
      "Mechanical Fault Isolation",
      "Post-Service Validation Checks",
    ],
    features: [
      {
        name: "Routine Servicing",
        description:
          "Scheduled car service aligned with manufacturer intervals and operating conditions.",
      },
      {
        name: "Engine Oil & Filters",
        description:
          "Correct-grade oil changes and filter replacements to protect engine health and efficiency.",
      },
      {
        name: "Brake Inspection & Service",
        description:
          "Brake system checks covering pads, discs, fluid condition, and braking performance.",
      },
      {
        name: "Tyres & Alignment",
        description:
          "Tyre inspection, pressure checks, rotation, and alignment to ensure safety and stability.",
      },
      {
        name: "Air Conditioning Service",
        description:
          "Cooling performance checks, gas recharge, and leak detection for consistent cabin comfort.",
      },
      {
        name: "Battery & Electrical Systems",
        description:
          "Electrical diagnostics covering batteries, charging systems, sensors, and control modules.",
      },
      {
        name: "Cooling System Maintenance",
        description:
          "Inspection of coolant, hoses, and thermal regulation components to prevent overheating.",
      },
      {
        name: "Diagnostic Health Check",
        description:
          "Comprehensive vehicle scanning to identify faults before they affect reliability.",
      },
    ],
  },
};

// ============================================
// SERVICE PROTOCOL STEPS
// ============================================
const protocolSteps = [
  {
    icon: Search,
    title: "System Diagnostics",
    description:
      "Full electronic scanning and data acquisition to understand the vehicle's current state and identify any underlying issues.",
  },
  {
    icon: Eye,
    title: "Physical Inspection",
    description:
      "Hands-on mechanical inspection of critical components, hardware condition, and system integrity before any work begins.",
  },
  {
    icon: Cog,
    title: "Service & Optimize",
    description:
      "Targeted calibration, component replacement, or tuning adjustments performed with precision and platform-specific knowledge.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description:
      "Post-service validation through dyno testing, road verification, and data comparison to confirm results meet our standards.",
  },
];

// ============================================
// FAQ
// ============================================
const faqs = [
  {
    q: "Is the tune safe for daily driving?",
    a: "Yes. All our calibrations are engineered for reliability in the UAE and beyond. We optimize power while maintaining safe temperatures, fueling, and drivability for everyday use.",
  },
  {
    q: "Will tuning affect my vehicle's reliability or warranty?",
    a: "When performed correctly, performance tuning can maintain reliability by operating within safe limits and accounting for cooling and drivetrain capacity. While any modification may impact warranty coverage, our upgrades are engineered to be seamless, with model-specific guidance.",
  },
  {
    q: "Do you offer dyno verification?",
    a: "Absolutely. Every tune can be validated on our AWD dyno, giving you verified horsepower, torque, and AFR readings before and after the calibration.",
  },
  {
    q: "Can I still service my car normally after tuning?",
    a: "Yes. All OEM service routines remain unchanged. We ensure every upgrade is compatible with routine maintenance and long-term reliability.",
  },
  {
    q: "What fuel is required for your tunes?",
    a: "We recommend high-octane petrol (98 RON or above) for optimal performance and safety. We can also calibrate for specific fuels based on your needs.",
  },
];

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug];

  if (!service) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-cream mb-4">Service not found</h1>
          <Link href="/servicii" className="text-gold hover:underline">
            ← Back to services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* ============================================ */}
      {/* HERO */}
      {/* ============================================ */}
      <section className="relative py-32 px-6 bg-canvas overflow-hidden">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 mx-auto">
              <service.icon size={36} className="text-gold" />
            </div>
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              {brand.name}
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg text-ash max-w-2xl mx-auto leading-relaxed mb-10">
              {service.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
              >
                Book Tuning <ArrowRight size={18} />
              </Link>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 glass text-cream font-semibold rounded-lg hover:border-gold/50 hover:shadow-[0_4px_30px_rgba(255,107,0,0.25)] transition-all duration-300"
              >
                Contact a Technician
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CAPABILITIES */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/servicii"
            className="inline-flex items-center gap-2 text-ash hover:text-gold transition-colors mb-12 text-sm"
          >
            <ArrowLeft size={16} /> All services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ willChange: "transform, opacity" }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Capabilities
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-10 leading-tight">
              What This Service <span className="gold-text">Includes</span>
            </h2>
            <div className="space-y-4">
              {service.capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Check size={16} className="text-gold" />
                  </span>
                  <span className="text-cream text-base leading-relaxed pt-1">{cap}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FEATURES GRID */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Features
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream">
              Core <span className="gold-text">Features</span>
            </h2>
          </motion.div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
              service.features.length > 4 ? "lg:grid-cols-4" : "lg:grid-cols-2"
            }`}
          >
            {service.features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="glass rounded-2xl p-8 hover:border-gold/30 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} className="text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-cream">{feat.name}</h3>
                </div>
                <p className="text-sm text-ash leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SERVICE PROTOCOL */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              How We Work
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream">
              Service <span className="gold-text">Protocol</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {protocolSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="glass rounded-2xl p-8 hover:border-gold/30 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <step.icon size={22} className="text-gold" />
                  </div>
                  <span className="font-display text-3xl font-bold text-stone">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-cream mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-ash leading-relaxed">{step.description}</p>
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
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream">
              Frequently Asked <span className="gold-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="glass rounded-2xl p-6 hover:border-gold/20 transition-all duration-500"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Sparkles size={18} className="text-gold mt-1 shrink-0" />
                  <h3 className="font-display text-base font-bold text-cream">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-sm text-ash leading-relaxed pl-9">{faq.a}</p>
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
          <div className="flex items-center justify-center gap-2 mb-6">
            <ShieldCheck size={20} className="text-gold" />
            <Sparkles size={20} className="text-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
            Ready to get <span className="gold-text">started?</span>
          </h2>
          <p className="text-lg text-ash mb-10">
            Book a session with {brand.name} and let our team deliver results you can feel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
            >
              Book Tuning <ArrowRight size={18} />
            </Link>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 glass text-cream font-semibold rounded-lg hover:border-gold/50 hover:shadow-[0_4px_30px_rgba(255,107,0,0.25)] transition-all duration-300"
            >
              Contact a Technician
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
