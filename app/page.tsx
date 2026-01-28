import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { DualEcosystemSection } from "@/components/sections/dual-ecosystem-section"
import { CategoriesSection } from "@/components/sections/categories-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DualEcosystemSection />
        <CategoriesSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
