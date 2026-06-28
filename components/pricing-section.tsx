import { Check } from "lucide-react"
import { products } from "@/lib/products"

export function PricingSection() {
  return (
    <section id="tarifs" className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Tarifs</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Des prix justes et transparents
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Prix indicatifs unitaires. Des tarifs dégressifs sont disponibles pour les commandes en gros,
            les grossistes et les institutions.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-primary text-primary-foreground">
                <th className="px-4 py-4 text-sm font-semibold md:px-6">Produit</th>
                <th className="px-4 py-4 text-sm font-semibold md:px-6">Format</th>
                <th className="hidden px-4 py-4 text-sm font-semibold sm:table-cell md:px-6">Conditionnement</th>
                <th className="px-4 py-4 text-right text-sm font-semibold md:px-6">Prix indicatif</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={product.id}
                  className={index % 2 === 0 ? "bg-card" : "bg-secondary/30"}
                >
                  <td className="px-4 py-4 text-sm font-medium text-foreground md:px-6">{product.name}</td>
                  <td className="px-4 py-4 text-sm text-muted-foreground md:px-6">{product.format}</td>
                  <td className="hidden px-4 py-4 text-sm text-muted-foreground sm:table-cell md:px-6">
                    {product.packaging}
                  </td>
                  <td className="px-4 py-4 text-right text-sm font-bold text-primary md:px-6">
                    {product.unitPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            "Livraison à domicile et en entreprise",
            "Tarifs dégressifs pour les grossistes",
            "Abonnement bonbonnes pour bureaux",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl bg-card p-4">
              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
              <span className="text-sm font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
