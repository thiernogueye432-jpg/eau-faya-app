import Image from "next/image"
import { Pickaxe, Filter, Waves, Sun, PackageCheck } from "lucide-react"

const steps = [
  {
    icon: Pickaxe,
    title: "1. Captage",
    description: "Forage profond de 100 à 300 m puisant dans une nappe phréatique protégée.",
  },
  {
    icon: Filter,
    title: "2. Prétraitement",
    description: "Filtration sur sable, charbon actif et adoucissement pour éliminer les impuretés.",
  },
  {
    icon: Waves,
    title: "3. Osmose inverse",
    description: "Purification poussée jusqu'à 20 000 L/h pour une eau parfaitement pure.",
  },
  {
    icon: Sun,
    title: "4. Désinfection",
    description: "Traitement UV et Ozone garantissant une eau saine, sans aucun micro-organisme.",
  },
  {
    icon: PackageCheck,
    title: "5. Embouteillage",
    description: "Ligne automatique : rinçage, remplissage, capsulage, étiquetage et emballage.",
  },
]

export function ProcessSection() {
  return (
    <section id="production" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Notre production</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Un processus maîtrisé, de la source à la bouteille
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Chaque étape de notre chaîne de production respecte des standards rigoureux pour vous garantir
            une eau d&apos;une pureté irréprochable.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/production-line.png"
              alt="Ligne de production EAU FAYA"
              width={720}
              height={540}
              className="h-full w-full object-cover"
            />
          </div>

          <ol className="flex flex-col gap-5">
            {steps.map((step) => (
              <li key={step.title} className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
