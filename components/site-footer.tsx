import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src="/images/eau-faya-logo.png"
              alt="Logo EAU FAYA"
              width={180}
              height={54}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              EAU FAYA produit et distribue une eau pure, saine et accessible, conforme aux normes
              internationales. La pureté naturelle du Sénégal.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Facebook
              </a>
              <a
                href="#"
                className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Instagram
              </a>
              <a
                href="#"
                className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                TikTok
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">Navigation</h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <li><a href="#produits" className="transition-colors hover:text-primary">Produits</a></li>
              <li><a href="#tarifs" className="transition-colors hover:text-primary">Tarifs</a></li>
              <li><a href="#production" className="transition-colors hover:text-primary">Production</a></li>
              <li><a href="#qualite" className="transition-colors hover:text-primary">Qualité</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">Contact</h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <li>Zone industrielle, Dakar</li>
              <li>
                <a
                  href="https://wa.me/221778955343"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  +221 77 895 53 43 (WhatsApp)
                </a>
              </li>
              <li>
                <a href="mailto:contact@eaufaya.sn" className="transition-colors hover:text-primary">
                  contact@eaufaya.sn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EAU FAYA — Pureté • Santé • Confiance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
