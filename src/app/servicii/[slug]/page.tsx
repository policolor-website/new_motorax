"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Gauge,
  Wrench,
  Droplets,
  MoveVertical,
  RefreshCw,
  Timer,
  ShieldCheck,
  Sparkles,
  Check,
  Search,
  Eye,
  Cog,
  BadgeCheck,
  Phone,
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
  "reparatie-ambreiaje": {
    icon: Cog,
    title: "Reparații profesionale ale ambreiajului motocicletei",
    subtitle:
      "Diagnoză și reparație completă a ambreiajului — plăci, arcuri, cabluri și reglaje pentru o cuplare lină și sigură.",
    capabilities: [
      "Diagnoză completă a ambreiajului",
      "Înlocuire plăci de fricțiune și arcuri",
      "Reglare și înlocuire cablu / sistem hidraulic",
      "Verificare coș de ambreiaj și butuc",
      "Testare pe drum după reparație",
    ],
    features: [
      {
        name: "Diagnoză ambreiaj",
        description:
          "Identificăm cauza patinării, a punctului de cuplare greșit sau a zgomotelor înainte de orice intervenție.",
      },
      {
        name: "Înlocuire plăci",
        description:
          "Montăm plăci de fricțiune și plăci metalice de calitate, potrivite modelului tău de motocicletă.",
      },
      {
        name: "Reglaje și cabluri",
        description:
          "Reglăm cursa manetei, înlocuim cablurile uzate și verificăm sistemul hidraulic de acționare.",
      },
      {
        name: "Verificare finală",
        description:
          "După reparație testăm cuplarea, treptele de viteză și comportamentul la pornire și în trafic.",
      },
    ],
  },
  "schimbare-ulei-si-filtru": {
    icon: Droplets,
    title: "Schimbare ulei și filtru pentru motocicleta ta",
    subtitle:
      "Revizie de bază esențială — uleiul potrivit, filtrul corect și o verificare generală la fiecare intervenție.",
    capabilities: [
      "Ulei de motor potrivit specificației producătorului",
      "Înlocuire filtru de ulei",
      "Verificare și completare lichide",
      "Inspecție vizuală lanț, anvelope și frâne",
      "Resetare martor service unde este cazul",
    ],
    features: [
      {
        name: "Ulei potrivit",
        description:
          "Folosim uleiuri care respectă specificațiile producătorului motocicletei tale, nu orice ulei disponibil.",
      },
      {
        name: "Filtru de ulei",
        description:
          "Înlocuim filtrul la fiecare schimb de ulei pentru a proteja motorul de impurități.",
      },
      {
        name: "Verificare generală",
        description:
          "La fiecare revizie verificăm vizual lanțul, anvelopele, plăcuțele de frână și nivelele de lichide.",
      },
      {
        name: "Istoric service",
        description:
          "Îți spunem clar ce am făcut și ce recomandăm pentru următoarea revizie.",
      },
    ],
  },
  "service-amortizoare": {
    icon: MoveVertical,
    title: "Service amortizoare și suspensii motociclete",
    subtitle:
      "Desfacere, curățare, schimb de ulei și reglaje personalizate pentru furcă și amortizorul spate.",
    capabilities: [
      "Desfacere și curățare completă a suspensiilor",
      "Schimb ulei și simeringuri furcă",
      "Reglaje de precărcare, compresie și revenire",
      "Setări personalizate pentru greutate și stil de mers",
      "Verificare articulații și lagăre",
    ],
    features: [
      {
        name: "Service furcă",
        description:
          "Desfacem, curățăm și reumplem furca cu ulei de vâscozitate potrivită, cu simeringuri noi.",
      },
      {
        name: "Service amortizor spate",
        description:
          "Verificăm și reconditionăm amortizorul spate pentru o stabilitate corectă.",
      },
      {
        name: "Reglaje personalizate",
        description:
          "Ajustăm suspensiile pentru greutatea ta, stilul de condus și tipul de drum pe care mergi.",
      },
      {
        name: "Diagnoză suspensii",
        description:
          "Identificăm scurgeri, uzură și reglaje greșite care afectează siguranța și confortul.",
      },
    ],
  },
  "schimbare-kit-transmisie": {
    icon: RefreshCw,
    title: "Schimbare kit transmisie — lanț și pinioane",
    subtitle:
      "Înlocuirea completă a kitului de transmisie pentru o motocicletă silențioasă și eficientă.",
    capabilities: [
      "Înlocuire lanț, pinion față și pinion spate",
      "Verificare uzură și aliniere roți",
      "Reglare și lubrifiere corectă a lanțului",
      "Curățare și întreținere lanț existent",
      "Recomandări pentru kituri potrivite",
    ],
    features: [
      {
        name: "Kit complet",
        description:
          "Schimbăm lanțul și ambele pinioane împreună — așa cum este corect pentru durata de viață maximă.",
      },
      {
        name: "Aliniere și tensiune",
        description:
          "Reglăm tensiunea lanțului și alinierea roții spate pentru o transmisie lină.",
      },
      {
        name: "Întreținere lanț",
        description:
          "Curățăm, reglăm și lubrifiem lanțul existent când înlocuirea nu este încă necesară.",
      },
      {
        name: "Piese de calitate",
        description:
          "Recomandăm kituri de transmisie potrivite modelului și stilului tău de mers.",
      },
    ],
  },
  "sincronizare-carburatoare": {
    icon: Gauge,
    title: "Sincronizare și reglare carburatoare",
    subtitle:
      "Echilibrarea carburatoarelor pentru ralanti stabil, răspuns lin și consum corect.",
    capabilities: [
      "Sincronizare vacuum carburatoare multiple",
      "Reglare ralanti și amestec",
      "Curățare și verificare carburatoare",
      "Diagnoză porniri grele și mers neregulat",
      "Verificare filtre de aer și admisie",
    ],
    features: [
      {
        name: "Sincronizare vacuum",
        description:
          "Echilibrăm depresiunea pe fiecare cilindru pentru funcționare uniformă a motorului.",
      },
      {
        name: "Reglare amestec",
        description:
          "Ajustăm amestecul aer-benzină pentru răspuns corect la accelerație și consum normal.",
      },
      {
        name: "Curățare carburatoare",
        description:
          "Demontăm și curățăm jicloarele și galeriile când depunerile afectează funcționarea.",
      },
      {
        name: "Diagnoză completă",
        description:
          "Verificăm și cauze conexe — filtru de aer, bujii, furtune — nu doar carburatoarele.",
      },
    ],
  },
  "schimbare-distributie": {
    icon: Timer,
    title: "Schimbare distribuție motocicletă",
    subtitle:
      "Înlocuirea lanțului de distribuție și a componentelor asociate, la timp și cu piese de calitate.",
    capabilities: [
      "Înlocuire lanț de distribuție",
      "Înlocuire patine și întinzătoare",
      "Reglare supape după intervenție",
      "Verificare sincronizare axe cu came",
      "Diagnoză zgomote de distribuție",
    ],
    features: [
      {
        name: "Lanț de distribuție",
        description:
          "Înlocuim lanțul uzat înainte ca acesta să provoace daune majore motorului.",
      },
      {
        name: "Patine și întinzătoare",
        description:
          "Schimbăm și componentele de ghidare care se uzează împreună cu lanțul.",
      },
      {
        name: "Reglare supape",
        description:
          "După intervenție verificăm și reglăm jocul supapelor pentru funcționare corectă.",
      },
      {
        name: "Piese de încredere",
        description:
          "Lucrăm cu componente de calitate — distribuția nu este locul pentru compromisuri.",
      },
    ],
  },
  "mecanica-motor": {
    icon: Wrench,
    title: "Operații de mecanică a motorului",
    subtitle:
      "De la bujii și supape la reparații complexe — garnituri, segmenti, pistoane și teste de compresie.",
    capabilities: [
      "Test de compresie și diagnoză motor",
      "Înlocuire bujii, supape și garnituri",
      "Reparații segmenti, pistoane și cilindri",
      "Înlocuire lanț de distribuție",
      "Verificare sistem de răcire și instalație electrică",
    ],
    features: [
      {
        name: "Diagnoză motor",
        description:
          "Test de compresie și verificări complete pentru a identifica exact problema motorului.",
      },
      {
        name: "Reparații interne",
        description:
          "Segmenti, pistoane, supape, garnituri de chiuloasă — intervenții mecanice complete.",
      },
      {
        name: "Consumabile",
        description:
          "Bujii, filtru de aer, lichid de răcire, baterie și becuri — schimbate corect și la timp.",
      },
      {
        name: "Sistem electric",
        description:
          "Verificăm instalația electrică, încărcarea bateriei și componentele de aprindere.",
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
    title: "Diagnoză",
    description:
      "Verificăm motocicleta și identificăm exact problema înainte de a începe orice intervenție.",
  },
  {
    icon: Eye,
    title: "Inspecție fizică",
    description:
      "Control mecanic al componentelor critice — uzură, scurgeri, reglaje — pentru imaginea completă.",
  },
  {
    icon: Cog,
    title: "Service și reparație",
    description:
      "Executăm operația cu piese potrivite și unelte adecvate, respectând specificațiile producătorului.",
  },
  {
    icon: BadgeCheck,
    title: "Verificare finală",
    description:
      "Testăm motocicleta după intervenție și îți explicăm clar ce am făcut și ce recomandăm.",
  },
];

// ============================================
// FAQ
// ============================================
const faqs = [
  {
    q: "Ce mărci de motociclete deserviți?",
    a: "Deservim majoritatea mărcilor — Aprilia, BMW, Harley-Davidson, Honda, Kawasaki, KTM, Suzuki, Triumph, Yamaha și altele. Lucrăm și la scutere, ATV-uri și biciclete.",
  },
  {
    q: "Sunteți autorizați R.A.R.?",
    a: "Da. Service-ul nostru are autorizația Registrului Auto Român, ceea ce îți garantează lucrări conforme și documentate.",
  },
  {
    q: "Am nevoie de programare?",
    a: "Recomandăm să ne suni înainte la 0728 061 541 pentru o programare rapidă, ca să nu aștepți în service.",
  },
  {
    q: "Oferiți depozitare de iarnă pentru motociclete?",
    a: "Da. Hotelul nostru de motociclete oferă depozitare în spațiu privat la 15–20°C, cu contract și îngrijire a bateriei, între 1 noiembrie și 28 februarie.",
  },
  {
    q: "Cum știu ce reparații sunt necesare?",
    a: "Îți recomandăm doar reparațiile de care ai cu adevărat nevoie. După diagnoză îți explicăm ce e urgent, ce poate aștepta și cât costă.",
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
          <h1 className="font-display text-3xl text-cream mb-4">Serviciul nu a fost găsit</h1>
          <Link href="/servicii" className="text-gold hover:underline">
            ← Înapoi la servicii
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
                Programează o vizită <ArrowRight size={18} />
              </Link>
              <a
                href={brand.phoneLink}
                className="inline-flex items-center gap-2 px-8 py-4 glass text-cream font-semibold rounded-lg hover:border-gold/50 hover:shadow-[0_4px_30px_rgba(255,107,0,0.25)] transition-all duration-300"
              >
                <Phone size={18} /> Sună acum
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
            <ArrowLeft size={16} /> Toate operațiile
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ willChange: "transform, opacity" }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Ce include
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-10 leading-tight">
              Ce include <span className="gold-text">această operație</span>
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
              Detalii
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream">
              În detaliu, <span className="gold-text">pas cu pas</span>
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
              Cum lucrăm
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream">
              Protocolul nostru <span className="gold-text">de service</span>
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
              Întrebări <span className="gold-text">frecvente</span>
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
            Lasă reparațiile <span className="gold-text">în grija noastră</span>
          </h2>
          <p className="text-lg text-ash mb-10">
            Programează o vizită la {brand.name} — service autorizat R.A.R. pentru motocicleta ta.
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
              className="inline-flex items-center gap-2 px-8 py-4 glass text-cream font-semibold rounded-lg hover:border-gold/50 hover:shadow-[0_4px_30px_rgba(255,107,0,0.25)] transition-all duration-300"
            >
              <Phone size={18} /> {brand.phone}
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
