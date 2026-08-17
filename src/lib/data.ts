export interface Restaurant {
  slug: string;
  name: string;
  shortName: string;
  area: string;
  phone: string;
  email: string;
  address: string;
  image: string;
  gallery: string[];
  description: string;
  mapUrl: string;
}

export const restaurants: Restaurant[] = [
  {
    slug: "barbu-vacarescu",
    name: "Il Calcio Barbu Văcărescu",
    shortName: "Barbu Văcărescu",
    area: "Barbu Văcărescu",
    phone: "0734 380 188",
    email: "barbu-vacarescu@ilcalcio.ro",
    address: "Str. Barbu Văcărescu, București",
    image: "/images/barbu-vacarescu_0.jpg",
    gallery: ["/images/barbu-vacarescu_0.jpg", "/images/barbu-vacarescu_1.jpg", "/images/barbu-vacarescu_2.jpg"],
    description: `Bine ati venit la Il Calcio "Barbu Vacarescu" — o locatie intima cu atmosfera italiana autentica, ideala pentru cine in familie si intalniri de business.`,
    mapUrl: "https://maps.google.com/?q=Il+Calcio+Barbu+Vacarescu+Bucuresti",
  },
  {
    slug: "clucerului",
    name: "Il Calcio Clucerului",
    shortName: "Clucerului",
    area: "Clucerului",
    phone: "0729 574 802",
    email: "clucerului@ilcalcio.ro",
    address: "Str. Clucerului, București",
    image: "/images/clucerului_0.jpg",
    gallery: ["/images/clucerului_0.jpg", "/images/clucerului_1.jpg", "/images/clucerului_2.jpg"],
    description: `Bine ati venit la Il Calcio "Clucerului" — o experienta culinara italiana intr-un cadru elegant, cu preparate care imbina traditia si inovatia.`,
    mapUrl: "https://maps.google.com/?q=Il+Calcio+Clucerului+Bucuresti",
  },
  {
    slug: "parc-herastrau",
    name: "Il Calcio Parc Herăstrău",
    shortName: "Parc Herăstrău",
    area: "Parc Herăstrău",
    phone: "0724 706 665",
    email: "herastrau@ilcalcio.ro",
    address: "Parc Herăstrău, București",
    image: "/images/parc-herastrau_0.jpeg",
    gallery: ["/images/parc-herastrau_0.jpeg", "/images/parc-herastrau_1.jpg", "/images/parc-herastrau_2.jpeg"],
    description: `Bine ati venit la Il Calcio "Parc Herastrau" — o terasa cu vedere la parc, perfecta pentru seri de vara si preparate italienesti in aer liber.`,
    mapUrl: "https://maps.google.com/?q=Il+Calcio+Parc+Herastrau+Bucuresti",
  },
  {
    slug: "romancierilor",
    name: "Il Calcio Romancierilor",
    shortName: "Romancierilor",
    area: "Romancierilor",
    phone: "0730 900 806",
    email: "romancierilor@ilcalcio.ro",
    address: "Str. Romancierilor, București",
    image: "/images/romancierilor_0.jpeg",
    gallery: ["/images/romancierilor_0.jpeg", "/images/romancierilor_1.jpg", "/images/romancierilor_2.jpg"],
    description: `Bine ati venit la Il Calcio "Romancierilor" — un restaurant cozy cu atmosfera calda, unde traditia italiana se intalneste cu preparate contemporane.`,
    mapUrl: "https://maps.google.com/?q=Il+Calcio+Romancierilor+Bucuresti",
  },
  {
    slug: "ateneu",
    name: "Mr. Val Ateneu",
    shortName: "Mr. Val Ateneu",
    area: "Ateneu",
    phone: "0729 155 207",
    email: "mrval.ateneu@ilcalcio.ro",
    address: "Lângă Ateneul Român, București",
    image: "/images/ateneu_0.jpeg",
    gallery: ["/images/ateneu_0.jpeg", "/images/ateneu_1.jpeg", "/images/ateneu_2.jpeg"],
    description: `Bine ati venit la Mr. Val "Ateneu" — locatia premium a lantului Il Calcio, cu o atmosfera rafinata si un meniu semnat de Valentin Salagean.`,
    mapUrl: "https://maps.google.com/?q=Mr+Val+Ateneu+Bucuresti",
  },
  {
    slug: "carol-park",
    name: "Il Calcio Carol Park",
    shortName: "Carol Park",
    area: "Carol Park",
    phone: "0731 440 493",
    email: "carolpark@ilcalcio.ro",
    address: "Carol Park, București",
    image: "/images/carol-park_0.jpg",
    gallery: ["/images/carol-park_0.jpg", "/images/carol-park_1.jpg", "/images/carol-park_2.jpg"],
    description: `Bine ati venit la Il Calcio "Carol Park" — o locatie cu vedere spre parc, ideala pentru brunch-uri relaxante si cine romantice.`,
    mapUrl: "https://maps.google.com/?q=Il+Calcio+Carol+Park+Bucuresti",
  },
];

export const navItems = [
  { label: "Acasă", href: "/" },
  { label: "Restaurante", href: "/restaurante", children: restaurants.map(r => ({ label: r.shortName, href: `/restaurante/${r.slug}` })) },
  { label: "Livrări", href: "/livrari" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];

export const program = {
  weekday: "Luni – Joi, Duminică: 12:00 – 23:00",
  weekend: "Vineri – Sâmbătă: 12:00 – 00:00",
};

export const social = {
  facebook: "https://www.facebook.com/ilcalciobucharest/",
  instagram: "https://www.instagram.com/ilcalciobucharest/",
};

export function getRestaurant(slug: string): Restaurant | undefined {
  return restaurants.find(r => r.slug === slug);
}
