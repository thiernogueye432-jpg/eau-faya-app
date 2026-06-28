import { Droplet } from "lucide-react"
import { products } from "@/lib/products"

export function ProductsSection() {
  return (
    <section id="produits" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Nos produits</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Tous les formats pour chaque besoin
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Du sachet pratique à la bonbonne 19 L, EAU FAYA propose une gamme complète d&apos;eau purifiée
            pour les particuliers, les commerces et les institutions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              {product.popular && (
                <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Populaire
                </span>
              )}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Droplet className="h-7 w-7 text-primary" />
              </div>
              <div>
                <span className="text-sm font-semibold text-accent">{product.format}</span>
                <h3 className="mt-1 text-xl font-bold text-foreground">{product.name}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>
              <div className="mt-auto flex items-end justify-between border-t border-border pt-4">
                <div>
                  <p className="text-xs text-muted-foreground">{product.packaging}</p>
                  <p className="text-lg font-bold text-primary">{product.unitPrice}</p>
                </div>
                <a
                  href="#contact"
                  className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Commander
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
