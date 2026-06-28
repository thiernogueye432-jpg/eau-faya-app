import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ProductsSection } from "@/components/products-section"
import { PricingSection } from "@/components/pricing-section"
import { ProcessSection } from "@/components/process-section"
import { QualitySection } from "@/components/quality-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PwaInstaller } from "@/components/pwa-installer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ProductsSection />
        <PricingSection />
        <ProcessSection />
        <QualitySection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
      <PwaInstaller />
    </div>
  )
}
