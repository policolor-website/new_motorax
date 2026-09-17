import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { brand } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-gold/30 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-6">
              <span className="font-display text-3xl font-bold gold-text">{brand.name}</span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-ash mt-1">{brand.tagline}</span>
            </div>
            <p className="text-sm text-ash leading-relaxed mb-6">
              {brand.description}
            </p>
            <p className="text-xs text-stone">Established {brand.founded} • {brand.city}, UAE</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-gold mb-5">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/servicii/engine-tuning" className="text-sm text-ash hover:text-gold transition-colors">Engine & ECU Tuning</Link></li>
              <li><Link href="/servicii/dyno-testing" className="text-sm text-ash hover:text-gold transition-colors">Dyno Testing</Link></li>
              <li><Link href="/servicii/exhaust-brake-upgrades" className="text-sm text-ash hover:text-gold transition-colors">Exhaust & Brake Upgrades</Link></li>
              <li><Link href="/servicii/turbo-upgrades" className="text-sm text-ash hover:text-gold transition-colors">Turbo Upgrades</Link></li>
              <li><Link href="/servicii/maintenance" className="text-sm text-ash hover:text-gold transition-colors">Maintenance</Link></li>
              <li><Link href="/servicii" className="text-sm text-ash hover:text-gold transition-colors">View all Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg text-gold mb-5">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-ash hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/despre-noi" className="text-sm text-ash hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/brand-uri" className="text-sm text-ash hover:text-gold transition-colors">Brands</Link></li>
              <li><Link href="/evenimente" className="text-sm text-ash hover:text-gold transition-colors">Events</Link></li>
              <li><Link href="/blog" className="text-sm text-ash hover:text-gold transition-colors">Blog</Link></li>
              <li><Link href="/cariere" className="text-sm text-ash hover:text-gold transition-colors">Careers</Link></li>
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
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="text-sm text-ash hover:text-gold transition-colors">{brand.phone}</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-gold mt-0.5 shrink-0" />
                <a href={`mailto:${brand.email}`} className="text-sm text-ash hover:text-gold transition-colors">{brand.email}</a>
              </div>
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
            © {new Date().getFullYear()} {brand.company}. All rights reserved.
          </p>
          <p className="text-xs text-stone">{brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
