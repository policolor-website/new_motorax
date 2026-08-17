"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRight, ArrowLeft, Building2, Home, Wrench, PaintBucket, Zap, PencilRuler, Check } from "lucide-react";
import { brand } from "@/lib/brand";

const servicesData: Record<string, {
  icon: any;
  title: string;
  hero: string;
  description: string;
  features: string[];
  image: string;
}> = {
  "constructii-civile-industriale": {
    icon: Building2,
    title: "Construcții Civile / Industriale",
    hero: "Construcții Civile",
    description: "PZ & GZ CONSTRUCT oferă servicii din domeniul construcțiilor pentru apartamente, case, sedii de firme, clădiri de birouri, anexe sau orice tip de construcție. Proiectele de care ne ocupăm includ construcția, renovarea și reabilitarea clădirilor afectate de diversi factori. De 20 de ani răspundem provocărilor și datorită acestora devenim tot mai buni, ținem pasul cu tehnologia, cu trend-urile în construcții și învățăm continuu. Adaptăm fiecare proiect în funcție de nevoi, dorințe și buget. Calitatea lucrărilor este asigurată de materialele și echipamentele de top utilizate, atât pentru construcțiile civile, cât și pentru cele industriale. Avem personal calificat, investim în dezvoltarea lor profesională, ne asigurăm că avem cei mai buni specialiști care să răspundă solicitărilor beneficiarilor noștri, indiferent de tipul lucrării.",
    features: [
      "Construcții apartamente, case, sedii firme, clădiri birouri",
      "Construcții anexe și orice tip de construcție",
      "Renovare și reabilitare clădiri afectate",
      "Materiale și echipamente de top",
      "Personal calificat cu dezvoltare profesională continuă",
      "Adaptare în funcție de nevoi, dorințe și buget",
      "Peste 20 de ani experiență în domeniu",
    ],
    image: "/edil/art-temple.jpg",
  },
  "constructii-case": {
    icon: Home,
    title: "Construcții Case",
    hero: "Construcții Case",
    description: "Fie că este vorba despre construcții de case la roșu, case la cheie, case de vacanță, cabane, case din lemn sau simple proiecte de case, compania noastră reprezintă cea mai bună soluție! Tu vii cu ideea, noi o transformăm în realitate.",
    features: [
      "Construcții case la roșu — fundație, zidărie, structură acoperiș",
      "Construcții case la cheie — predare gata de folosire",
      "Case de vacanță, cabane, case din lemn",
      "Variante: BCA, cărămidă GVP sau cărămidă plină",
      "Trasare, săpătură, armare, betonare fundații",
      "Zidărie pereți exteriori și interiori",
      "Structură acoperiș (căpriori, aștereală, învelitoare)",
      "Finisaje interioare: tencuieli, glet, vopsea, gresie, faianta, parchet",
      "Instalații sanitare, electrice și termice complete",
      "Termosistem și tâmplărie PVC",
    ],
    image: "/edil/service-case.png",
  },
  "mentenanta": {
    icon: Wrench,
    title: "Mentenanță",
    hero: "Mentenanță",
    description: "Oferim mentenanță preventivă, predictivă și corectivă a clădirilor civile și industriale. Avem echipe dedicate, coordonate de ingineri specializați. Serviciul de mentenanță are ca scop funcționarea optimă a instalațiilor clădirii prin întreținere preventivă, predictivă și corectivă. Aceste acțiuni duc la mărirea fiabilității și a performanțelor clădirii și la scăderea disfuncționalităților.",
    features: [
      "Mentenanță preventivă, predictivă și corectivă",
      "Echipe disponibile 24/7, 7 zile din 7",
      "Coordonare de ingineri specializați în mentenanță imobile",
      "Apă-canal, tehnico-sanitare",
      "Încălzire centrală, sistem HVAC/răcire, tratare aer",
      "Electrice, sisteme detecție, instalații stingere incendii",
      "Lacătușerie, vopsitorie, betonări, confecții metalice",
      "Irigații și întreținere spații verzi",
      "Abonamente personalizate cu interventie non-stop",
      "Revizie anuală a tuturor instalațiilor",
    ],
    image: "/edil/hero.jpg",
  },
  "amenajari-interioare": {
    icon: PaintBucket,
    title: "Amenajări Interioare",
    hero: "Amenajări Interioare",
    description: "Amenajările interioare se referă la toate lucrările umede sau uscate care sunt localizate în interiorul unei construcții. Aplicăm soluții moderne de recompartimentare a spațiilor interioare, executăm lucrări de placare a pereților cu gips-carton, izolații termice, fonice, placări gresie și faianță, vopsitorie, zugrăveli decorative, instalații termice și sanitare, lucrări de tâmplărie și multe altele.",
    features: [
      "Zugrăveli, tencuieli, vopsea lavabilă",
      "Turnare sape, izolații, gleturi",
      "Placări faianță, gresie, marmură",
      "Izolație termosistem, hidroizolații, rigips",
      "Montaj parchet, pardoseli, lambriu",
      "Instalații electrice (spoturi, prize, tablou electric)",
      "Instalații sanitare (proiectare și montare)",
      "Montaj tâmplărie PVC cu geam termopan",
      "Montaj dale, beton amprentat sau pavele",
      "Amenajări exterioare: termosistem, vopsitorii, tencuieli",
    ],
    image: "/edil/service-amenajari.png",
  },
  "instalatii-electrice-sanitare": {
    icon: Zap,
    title: "Instalații Electrice și Sanitare",
    hero: "Instalații Electrice",
    description: "Proiectăm și executăm instalații electrice și sanitare cu personal calificat. Firma noastră de construcții dispune de specialiști în domeniul instalațiilor electrice care pot proiecta și executa proiecte de instalații electrice. Echipa noastră este formată din electricieni cu experiență care folosesc materiale de calitate pentru toate tipurile de instalații.",
    features: [
      "Instalații electrice interioare și exterioare",
      "Instalații electrice case, apartamente, blocuri",
      "Instalații electrice sedii firme, instituții publice",
      "Instalații electrice industriale",
      "Proiectare instalații electrice (case, blocuri, complexe)",
      "Materiale de la mărci cunoscute — standarde ridicate",
      "Instalații sanitare — proiectare și execuție",
      "Durată de exploatare îndelungată garantată",
    ],
    image: "/edil/service-instalatii.png",
  },
  "proiectare": {
    icon: PencilRuler,
    title: "Proiectare",
    hero: "Proiectare",
    description: "Proiectare construcții cu destinație rezidențială, comercială sau industrială. Proiectarea reprezintă o fază foarte importantă în realizarea unei construcții, deoarece dictează siguranța în exploatare, estetica, funcționalitatea și durabilitatea, precum și costurile finale ale acesteia. Proiectarea este compusă dintr-o multitudine de piese scrise și piese desenate. Aceste piese cuprind toate specificațiile tehnice necesare, pe baza cărora se pot autoriza și executa lucrările de construire, modificare, demolare.",
    features: [
      "Proiectare rezidențială, comercială și industrială",
      "Arhitectură, rezistență, instalații",
      "Piese scrise și piese desenate — documentație completă",
      "Specificații tehnice necesare pentru autorizare",
      "Siguranță în exploatare, estetică, funcționalitate",
      "Echipă de ingineri specializați pe diferite segmente",
      "Realizarea întregii documentații și a tuturor pașilor",
    ],
    image: "/edil/service-proiectare.png",
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug];

  if (!service) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-cream mb-4">Serviciu negăsit</h1>
          <Link href="/servicii" className="text-gold hover:underline">← Înapoi la servicii</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink/70" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center max-w-3xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-gold/20 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto">
              <service.icon size={32} className="text-gold" />
            </div>
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">{brand.name}</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-4">{service.hero}</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <Link href="/servicii" className="inline-flex items-center gap-2 text-ash hover:text-gold transition-colors mb-8 text-sm">
            <ArrowLeft size={16} /> Toate serviciile
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">{service.title}</h2>
            <p className="text-lg text-ash leading-relaxed mb-12">{service.description}</p>

            <h3 className="font-display text-xl font-bold text-cream mb-6">Ce oferim:</h3>
            <div className="space-y-3">
              {service.features.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-gold" />
                  </span>
                  <span className="text-cream text-sm leading-relaxed">{feat}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mt-16 glass rounded-2xl p-8 text-center"
          >
            <h3 className="font-display text-2xl font-bold text-cream mb-4">
              Vrei o ofertă personalizată? Apelează-ne!
            </h3>
            <p className="text-ash mb-6"><a href="tel:0722155956" className="text-gold text-2xl font-bold">0722 155 956</a></p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
            >
              Cere o ofertă <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
