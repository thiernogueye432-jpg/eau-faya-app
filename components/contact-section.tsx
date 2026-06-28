import { MapPin, Phone, Mail, Clock, Store } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

const infos = [
  { icon: MapPin, label: "Adresse", value: "Zone industrielle, Dakar, Sénégal", href: undefined },
  { icon: Phone, label: "Téléphone & WhatsApp", value: "+221 77 895 53 43", href: "https://wa.me/221778955343" },
  { icon: Mail, label: "Email", value: "contact@eaufaya.sn", href: "mailto:contact@eaufaya.sn" },
  { icon: Clock, label: "Horaires", value: "Lun – Sam : 8h00 – 18h00", href: undefined },
]

const points = [
  "Supermarchés",
  "Boutiques de quartier",
  "Stations-service",
  "Hôtels & restaurants",
  "Hôpitaux & cliniques",
  "Écoles & universités",
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Contact &amp; distribution</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Commandez ou devenez partenaire
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Une question, une commande ou un projet de distribution ? Notre équipe vous répond rapidement.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {infos.map((info) => {
                const content = (
                  <>
                    <info.icon className="h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-foreground">{info.value}</p>
                    </div>
                  </>
                )
                return info.href ? (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-secondary/40"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={info.label} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                    {content}
                  </div>
                )
              })}
            </div>

            <div className="rounded-xl border border-border bg-secondary/40 p-6">
              <div className="flex items-center gap-2">
                <Store className="h-5 w-5 text-accent" />
                <h3 className="text-base font-bold text-foreground">Où nous trouver</h3>
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
