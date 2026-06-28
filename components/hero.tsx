import Image from "next/image"
import { Droplets, ShieldCheck, Leaf, Phone, ArrowRight, BadgeCheck } from "lucide-react"

const WHATSAPP_NUMBER = "221778955343"

const stats = [
  { value: "100%", label: "Eau purifiée" },
  { value: "6", label: "Formats" },
  { value: "OMS", label: "Normes respectées" },
]

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-gradient-to-b from-secondary/60 via-background to-background">
      {/* Decorative blurred accents */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="ef-fade-up flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <Leaf className="h-4 w-4" />
            La Pureté Naturelle du Sénégal
          </span>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Une eau pure, saine et accessible pour tous les{" "}
            <span className="text-primary">Sénégalais</span>
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            EAU FAYA produit et distribue une eau de haute qualité, traitée par osmose inverse et désinfection
            UV &amp; Ozone, conforme aux normes internationales OMS &amp; SONES.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#produits"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl"
            >
              Découvrir nos produits
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Phone className="h-4 w-4 text-accent" />
              Commander : 77 895 53 43
            </a>
          </div>

          {/* Trust pills */}
          <div className="mt-2 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Droplets className="h-5 w-5 text-primary" />
              Pureté
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Santé
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Leaf className="h-5 w-5 text-accent" />
              Confiance
            </div>
          </div>

          {/* Stats row */}
          <dl className="mt-4 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold text-primary md:text-3xl">{stat.value}</dd>
                <p className="mt-1 text-xs leading-tight text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative">
            <div className="ef-float relative overflow-hidden rounded-[2rem] border border-border/60 shadow-2xl">
              <Image
                src="/images/hero-water.png"
                alt="Eau pure et fraîche EAU FAYA"
                width={720}
                height={720}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            {/* Floating glass card - quality */}
            <div className="ef-float-slow absolute -left-4 top-8 flex items-center gap-3 rounded-2xl border border-border/60 bg-card/90 p-3 shadow-xl backdrop-blur md:-left-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-foreground">Osmose inverse</p>
                <p className="text-xs text-muted-foreground">UV &amp; Ozone certifié</p>
              </div>
            </div>

            {/* Floating glass card - delivery */}
            <div className="ef-float absolute -right-3 bottom-10 flex items-center gap-3 rounded-2xl border border-border/60 bg-card/90 p-3 shadow-xl backdrop-blur md:-right-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Droplets className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-foreground">Livraison Dakar</p>
                <p className="text-xs text-muted-foreground">Bonbonnes 19 L</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
