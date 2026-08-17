import { restaurants } from "@/lib/data";

export const metadata = {
  title: "Galerie Foto | Il Calcio by Mr. VAL",
  description: "Galerie foto cu preparate si locatii Il Calcio.",
};

export default function GaleriePage() {
  const allImages = restaurants.flatMap((r) =>
    r.gallery.map((img) => ({ src: img, alt: r.name, location: r.shortName }))
  );

  return (
    <main className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Galerie</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-cream mb-6">Galerie Foto</h1>
          <p className="text-lg text-ash max-w-2xl mx-auto">
            O privire in lumea Il Calcio - preparate, atmosfera si locatii.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {allImages.map((img, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden break-inside-avoid group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-gold text-sm font-semibold">{img.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
