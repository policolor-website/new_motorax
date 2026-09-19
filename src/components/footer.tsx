import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Share2 } from "lucide-react";
import { brand } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-gold/30 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-6">
              <img src={brand.logo} alt={brand.name} className="h-10 w-auto self-start mb-2" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-ash mt-1">{brand.tagline}</span>
            </div>
            <p className="text-sm text-ash leading-relaxed mb-6">
              {brand.description}
            </p>
            <p className="text-xs text-stone">Din {brand.founded} • {brand.city}, {brand.country}</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-gold mb-5">Servicii</h4>
            <ul className="space-y-3">
              <li><Link href="/servicii/schimbare-ulei-si-filtru" className="text-sm text-ash hover:text-gold transition-colors">Schimbare ulei și filtru</Link></li>
              <li><Link href="/servicii/schimbare-kit-transmisie" className="text-sm text-ash hover:text-gold transition-colors">Schimbare kit transmisie</Link></li>
              <li><Link href="/servicii/service-amortizoare" className="text-sm text-ash hover:text-gold transition-colors">Service amortizoare</Link></li>
              <li><Link href="/servicii/reparatie-ambreiaje" className="text-sm text-ash hover:text-gold transition-colors">Reparație ambreiaje</Link></li>
              <li><Link href="/servicii/mecanica-motor" className="text-sm text-ash hover:text-gold transition-colors">Mecanică motor</Link></li>
              <li><Link href="/servicii" className="text-sm text-ash hover:text-gold transition-colors">Toate serviciile</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg text-gold mb-5">Companie</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-ash hover:text-gold transition-colors">Acasă</Link></li>
              <li><Link href="/despre-noi" className="text-sm text-ash hover:text-gold transition-colors">Despre Noi</Link></li>
              <li><Link href="/brand-uri" className="text-sm text-ash hover:text-gold transition-colors">Mărci</Link></li>
              <li><Link href="/evenimente" className="text-sm text-ash hover:text-gold transition-colors">Hotel Moto</Link></li>
              <li><Link href="/blog" className="text-sm text-ash hover:text-gold transition-colors">Sfaturi</Link></li>
              <li><Link href="/cariere" className="text-sm text-ash hover:text-gold transition-colors">Cariere</Link></li>
              <li><Link href="/contact" className="text-sm text-ash hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-gold mb-5">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <p className="text-sm text-ash">{brand.address}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href={brand.phoneLink} className="text-sm text-ash hover:text-gold transition-colors">{brand.phone}</a>
                  {brand.phone2 && (
                    <a href={`tel:${brand.phone2.replace(/\s/g, "")}`} className="text-sm text-ash hover:text-gold transition-colors">{brand.phone2}</a>
                  )}
                </div>
              </div>
              {brand.email && (
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-gold mt-0.5 shrink-0" />
                  <a href={`mailto:${brand.email}`} className="text-sm text-ash hover:text-gold transition-colors">{brand.email}</a>
                </div>
              )}
              {brand.facebook && (
                <div className="flex items-start gap-3">
                  <Share2 size={16} className="text-gold mt-0.5 shrink-0" />
                  <a href={brand.facebook} target="_blank" rel="noopener noreferrer" className="text-sm text-ash hover:text-gold transition-colors">Facebook</a>
                </div>
              )}
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-gold mt-0.5 shrink-0" />
                <p className="text-sm text-ash">{brand.program}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hairline h-px w-full mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone">
            © {new Date().getFullYear()} {brand.company}. Toate drepturile rezervate.
          </p>
          <p className="text-xs text-stone">{brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
