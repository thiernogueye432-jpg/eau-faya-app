import Image from "next/image"
import { Award, FlaskConical, Leaf, HeartPulse } from "lucide-react"

const certifications = [
  { code: "ISO 9001", label: "Management de la qualité" },
  { code: "ISO 22000", label: "Sécurité alimentaire" },
  { code: "ISO 14001", label: "Environnement" },
  { code: "ISO 45001", label: "Santé & sécurité" },
]

const controls = [
  {
    icon: FlaskConical,
    title: "Analyses physico-chimiques",
    description: "Contrôle quotidien du pH, de la conductivité et de la turbidité.",
  },
  {
    icon: HeartPulse,
    title: "Analyses microbiologiques",
    description: "Recherche systématique d'E. coli, coliformes et salmonelles.",
  },
  {
    icon: Award,
    title: "Conformité OMS & SONES",
    description: "Une eau conforme aux normes nationales et internationales 2021.",
  },
  {
    icon: Leaf,
    title: "Démarche environnementale",
    description: "Gestion responsable de la ressource et des emballages.",
  },
]

export function QualitySection() {
  return (
    <section id="qualite" className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Qualité &amp; certifications</span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              La qualité au cœur de chaque goutte
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Notre laboratoire interne assure un contrôle rigoureux à chaque étape. EAU FAYA vise les plus
              hauts standards de qualité, de sécurité alimentaire et de respect de l&apos;environnement.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {controls.map((control) => (
                <div key={control.title} className="flex gap-3 rounded-xl bg-card p-4">
                  <control.icon className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{control.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{control.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.code}
                  className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2"
                >
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">{cert.code}</span>
                  <span className="hidden text-xs text-muted-foreground sm:inline">— {cert.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 overflow-hidden rounded-3xl shadow-lg lg:order-2">
            <Image
              src="/images/water-source.png"
              alt="Source d'eau naturelle pure"
              width={720}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
