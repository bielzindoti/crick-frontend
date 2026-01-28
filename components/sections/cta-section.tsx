import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-12 lg:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 px-4 py-1.5 text-sm font-medium text-primary-foreground mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Comece agora mesmo</span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance max-w-3xl">
              Pronto para encontrar o serviço ideal ou começar a faturar?
            </h2>
            
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl">
              Junte-se a milhares de brasileiros que ja usam o UmCrick! para encontrar 
              empregos temporarios ou conquistar uma renda extra com bicos. Cadastro rapido e gratuito.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="gap-2 text-base" asChild>
                <Link href="/cadastro?tipo=cliente">
                  Encontrar Profissionais
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent" 
                asChild
              >
                <Link href="/cadastro?tipo=parceiro">
                  Oferecer Serviços
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
