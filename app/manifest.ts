import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "EAU FAYA — La Pureté Naturelle du Sénégal",
    short_name: "EAU FAYA",
    description:
      "Commandez votre eau pure EAU FAYA : sachets, bouteilles, bidons et bonbonnes 19 L. La pureté naturelle du Sénégal.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#1d4ed8",
    lang: "fr",
    dir: "ltr",
    categories: ["food", "shopping", "business"],
    icons: [
      {
        src: "/icons/app-icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/app-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/app-icon-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/screenshots/mobile-1.png",
        sizes: "412x915",
        type: "image/png",
        form_factor: "narrow",
        label: "Accueil EAU FAYA sur mobile",
      },
      {
        src: "/screenshots/desktop-1.png",
        sizes: "1280x800",
        type: "image/png",
        form_factor: "wide",
        label: "Accueil EAU FAYA sur ordinateur",
      },
    ],
    shortcuts: [
      {
        name: "Nos produits",
        short_name: "Produits",
        url: "/#produits",
        description: "Voir tous les formats d'eau EAU FAYA",
      },
      {
        name: "Commander",
        short_name: "Commander",
        url: "/#contact",
        description: "Passer une commande ou nous contacter",
      },
    ],
  }
}
