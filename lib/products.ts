export type Product = {
  id: string
  format: string
  name: string
  description: string
  unitPrice: string
  packaging: string
  popular?: boolean
}

export const products: Product[] = [
  {
    id: "sachet-300",
    format: "300 ml",
    name: "Sachet d'eau",
    description: "Le format pratique et économique pour une hydratation rapide au quotidien.",
    unitPrice: "25 FCFA",
    packaging: "Sachet de 300 ml",
  },
  {
    id: "bouteille-05",
    format: "0,5 L",
    name: "Bouteille 0,5 L",
    description: "Idéale pour le bureau, le sport et les déplacements. Légère et pratique.",
    unitPrice: "200 FCFA",
    packaging: "Pack de 12 bouteilles",
    popular: true,
  },
  {
    id: "bouteille-15",
    format: "1,5 L",
    name: "Bouteille 1,5 L",
    description: "Le format familial parfait pour les repas et la maison.",
    unitPrice: "400 FCFA",
    packaging: "Pack de 6 bouteilles",
  },
  {
    id: "bidon-5",
    format: "5 L",
    name: "Bidon 5 L",
    description: "Réserve d'eau pratique pour la cuisine et la consommation domestique.",
    unitPrice: "900 FCFA",
    packaging: "Bidon de 5 litres",
  },
  {
    id: "bidon-10",
    format: "10 L",
    name: "Bidon 10 L",
    description: "Grande capacité pour les familles nombreuses et les commerces.",
    unitPrice: "1 500 FCFA",
    packaging: "Bidon de 10 litres",
  },
  {
    id: "bonbonne-19",
    format: "19 L",
    name: "Bonbonne 19 L",
    description: "Solution idéale pour bureaux, écoles et fontaines à eau. Recharge disponible.",
    unitPrice: "3 000 FCFA",
    packaging: "Bonbonne réutilisable",
  },
]
