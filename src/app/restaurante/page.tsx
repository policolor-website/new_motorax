import { restaurants } from "@/lib/data";
import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Restaurante | Il Calcio by Mr. VAL",
  description: "Descopera cele 6 restaurante Il Calcio din Bucuresti.",
};

export default function RestaurantePage() {
  return (
    <main className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Locatiile noastre</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-cream mb-6">Restaurante</h1>
          <p className="text-lg text-ash max-w-2xl mx-auto">
            Te invitam sa descoperi cele 6 restaurante din lantul Il Calcio. In fiecare locatie te asteptam cu preparate delicioase cu specific italian.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((r) => (
            <Link
              key={r.slug}
              href={`/restaurante/${r.slug}`}
              className="group glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="font-display text-2xl font-bold text-cream mb-2">{r.shortName}</h2>
                  <p className="text-sm text-gold flex items-center gap-1"><MapPin size={14} /> {r.area}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-ash mb-4 line-clamp-2">{r.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-ash flex items-center gap-2"><Phone size={14} /> {r.phone}</span>
                  <span className="text-gold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Vezi <ArrowRight size={14} /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
