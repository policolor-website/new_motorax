"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, MapPin, Building2 } from "lucide-react";

const projectsData: Record<string, {
  name: string;
  area: string;
  category: string;
  description: string;
  image: string;
}> = {
  "art-temple-residence": {
    name: "Art Temple Residence",
    area: "București",
    category: "Construcții Civile",
    description: "Art Temple Residence este un proiect de construcții civile realizat de PZ & GZ CONSTRUCT în București. Complexul rezidențial beneficiază de structură modernă, materiale de calitate superioară și finisaje premium. Proiectul demonstrează capacitatea echipei noastre de a livra construcții la standarde ridicate, respectând termenele și bugetul stabilit.",
    image: "/edil/art-temple.jpg",
  },
  "city-lights-pipera": {
    name: "City Lights Pipera",
    area: "Pipera, Ilfov",
    category: "Construcții Civile",
    description: "City Lights Pipera este un proiect de construcții civile în zona Pipera, Ilfov. Complexul a fost construit cu materiale de top, respectând toate standardele de siguranță și durabilitate. Echipa PZ & GZ CONSTRUCT a gestionat întregul proiect de la fundație la finisaje.",
    image: "/edil/city-lights.jpg",
  },
  "dream-residence": {
    name: "Dream Residence",
    area: "București",
    category: "Construcții Civile",
    description: "Dream Residence reprezintă un proiect de construcții civile în București, cu accent pe calitatea lucrărilor și atenția la detalii. Complexul rezidențial oferă spații moderne de locuit, construite cu materiale premium și execuție la cele mai înalte standarde.",
    image: "/edil/dream-residence.jpg",
  },
  "confort-urban": {
    name: "Confort Urban",
    area: "București",
    category: "Construcții Civile",
    description: "Confort Urban este un proiect de construcții civile în București. Proiectul a fost realizat cu accent pe confortul locatarilor, folosind materiale de calitate și soluții moderne de construcție. Structura asigură durabilitate și siguranță în timp.",
    image: "/edil/confort-urban.png",
  },
  "central-address-residence": {
    name: "Central Address Residence",
    area: "București",
    category: "Construcții Civile",
    description: "Central Address Residence este un proiect de construcții civile în zona centrală a Bucureștiului. Complexul combină arhitectură modernă cu materiale premium, oferind spații rezidențiale de lux. Echipa PZ & GZ CONSTRUCT a executat lucrările cu profesionalism și respect pentru termene.",
    image: "/edil/central-address.jpg",
  },
  "envogue-residence": {
    name: "Envogue Residence",
    area: "București",
    category: "Construcții Civile",
    description: "Envogue Residence este un proiect de construcții civile în București, caracterizat prin design modern și finisaje premium. Complexul rezidențial reflectă experiența de peste 20 de ani a echipei PZ & GZ CONSTRUCT în realizarea proiectelor complexe.",
    image: "/edil/envogue.jpg",
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug];

  if (!project) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-cream mb-4">Proiect negăsit</h1>
          <Link href="/portofoliu" className="text-gold hover:underline">← Înapoi la portofoliu</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink/70" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 backdrop-blur-sm mb-6">
              <Building2 size={14} className="text-gold" />
              <span className="text-xs tracking-[0.25em] uppercase text-gold">{project.category}</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-4">{project.name}</h1>
            <p className="text-gold flex items-center justify-center gap-2">
              <MapPin size={16} /> {project.area}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <Link href="/portofoliu" className="inline-flex items-center gap-2 text-ash hover:text-gold transition-colors mb-8 text-sm">
            <ArrowLeft size={16} /> Toate proiectele
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">{project.name}</h2>
            <p className="text-lg text-ash leading-relaxed mb-12">{project.description}</p>

            <div className="glass rounded-2xl p-8 text-center">
              <h3 className="font-display text-xl font-bold text-cream mb-4">
                Ai un proiect similar? Contactează-ne!
              </h3>
              <p className="text-ash mb-6">Echipa noastră te poate ajuta cu un proiect la fel de reușit.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
              >
                Cere o ofertă
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
