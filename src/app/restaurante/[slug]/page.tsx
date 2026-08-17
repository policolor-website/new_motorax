import { restaurants, getRestaurant } from "@/lib/data";
import { notFound } from "next/navigation";
import { Phone, Mail, MapPin, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { program } from "@/lib/data";
import ChefReservation from "@/components/chef-reservation";

export async function generateStaticParams() {
  return restaurants.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getRestaurant(slug);
  if (!r) return { title: "Restaurant nu a fost gasit" };
  return {
    title: `${r.name} | Il Calcio by Mr. VAL`,
    description: r.description,
  };
}

export default async function RestaurantPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getRestaurant(slug);
  if (!r) notFound();

  return (
    <main className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/restaurante" className="inline-flex items-center gap-2 text-ash hover:text-gold transition-colors mb-8 text-sm">
          <ArrowLeft size={16} /> Inapoi la restaurante
        </Link>

        <div className="relative h-[400px] rounded-3xl overflow-hidden mb-12">
          <img src={r.image} alt={r.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-3">{r.name}</h1>
            <p className="text-gold flex items-center gap-2"><MapPin size={16} /> {r.address}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-gold mb-4">Despre locatie</h2>
            <p className="text-ash leading-relaxed text-lg mb-6">{r.description}</p>
            <p className="text-ash leading-relaxed">
              Il Calcio by Mr. VAL va intampina cu o atmosfera relaxanta si cu o bucatarie care imbina specificul italian cu elemente din bucataria asiatica si internationala.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 space-y-5 h-fit">
            <h3 className="font-display text-lg text-gold">Informatii contact</h3>
            <a href={`tel:${r.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-cream hover:text-gold transition-colors">
              <Phone size={16} className="text-gold" /> {r.phone}
            </a>
            <a href={`mailto:${r.email}`} className="flex items-center gap-3 text-cream hover:text-gold transition-colors text-sm break-all">
              <Mail size={16} className="text-gold" /> {r.email}
            </a>
            <div className="flex items-start gap-3 text-cream">
              <MapPin size={16} className="text-gold mt-0.5" /> {r.address}
            </div>
            <div className="border-t border-gold/10 pt-4">
              <div className="flex items-start gap-3 text-cream mb-2">
                <Clock size={16} className="text-gold mt-0.5" />
                <div>
                  <p className="text-sm">{program.weekday}</p>
                  <p className="text-sm mt-1">{program.weekend}</p>
                </div>
              </div>
            </div>
            <a
              href={`tel:${r.phone.replace(/\s/g, "")}`}
              className="block w-full text-center py-3 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              Rezerva acum
            </a>
          </div>
        </div>

        <h2 className="font-display text-2xl font-bold text-gold mb-6">Galerie</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {r.gallery.map((img, i) => (
            <div key={i} className="relative h-64 rounded-xl overflow-hidden">
              <img src={img} alt={`${r.name} ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
