import { restaurants } from "@/lib/data";
import { Phone, Bike, Clock } from "lucide-react";

export const metadata = {
  title: "Livrari | Il Calcio by Mr. VAL",
  description: "Comanda mancare italiana de la Il Calcio. Livrari in Bucuresti.",
};

export default function LivrariPage() {
  return (
    <main className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Livrari</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-cream mb-6">Comanda acasa</h1>
          <p className="text-lg text-ash max-w-2xl mx-auto">
            Iti aducem bucataria italiana Il Calcio direct la usa ta. Suna la locatia preferata pentru a plasa o comanda.
          </p>
        </div>

        <div className="relative h-72 rounded-3xl overflow-hidden mb-12">
          <img src="/images/delivery_0.jpg" alt="Livrari Il Calcio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((r) => (
            <div key={r.slug} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bike size={20} className="text-gold" />
                <h3 className="font-display text-lg font-bold text-cream">{r.shortName}</h3>
              </div>
              <p className="text-sm text-ash mb-4">{r.address}</p>
              <a
                href={`tel:${r.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
              >
                <Phone size={16} /> {r.phone}
              </a>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl p-8 mt-12 text-center">
          <Clock size={32} className="text-gold mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold text-cream mb-4">Program livrari</h2>
          <p className="text-ash">Luni - Joi, Duminica: 12:00 - 23:00</p>
          <p className="text-ash mt-2">Vineri - Sambata: 12:00 - 00:00</p>
        </div>
      </div>
    </main>
  );
}
