"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Handshake, Search, Wallet } from "lucide-react"

const clienteBenefits = [
  "Encontre profissionais em minutos",
  "Compare preços e avaliações",
  "Pagamento seguro na plataforma",
  "Suporte dedicado 24/7",
  "Garantia de satisfação",
]

const parceiroBenefits = [
  "Defina seus próprios horários",
  "Escolha os serviços que deseja fazer",
  "Receba pagamentos rapidamente",
  "Construa sua reputação com avaliações",
  "Sem taxas de adesão",
]

export function DualEcosystemSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Uma plataforma, duas experiências
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Seja voce quem precisa de um servico ou quem quer ganhar uma renda extra com bicos, 
            o UmCrick! e para voce.
          </p>
        </div>

        {/* Dual Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Cliente Card */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="absolute top-0 left-0 right-0 h-2 bg-primary" />
            <div className="p-8 md:p-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Search className="h-4 w-4" />
                <span>Para Clientes</span>
              </div>
              
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Precisa de ajuda com algum serviço?
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Encontre profissionais qualificados para qualquer tipo de bico. 
                De limpeza doméstica a reparos, entregas e muito mais. Tudo na palma da sua mão.
              </p>

              {/* Benefits List */}
              <ul className="space-y-3 mb-8">
                {clienteBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm text-card-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
                <Link href="/cadastro?tipo=cliente">
                  Cadastrar como Cliente
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Parceiro Card */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-accent text-accent-foreground shadow-sm">
            <div className="absolute top-0 left-0 right-0 h-2 bg-primary" />
            <div className="p-8 md:p-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
                <Wallet className="h-4 w-4" />
                <span>Para Parceiros</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                Quer ganhar uma renda extra?
              </h3>
              
              <p className="text-accent-foreground/80 mb-6">
                Transforme suas habilidades em dinheiro. Seja seu próprio chefe, 
                trabalhe quando quiser e construa sua base de clientes fiéis.
              </p>

              {/* Benefits List */}
              <ul className="space-y-3 mb-8">
                {parceiroBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2" asChild>
                <Link href="/cadastro?tipo=parceiro">
                  Cadastrar como Parceiro
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Banner */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <Handshake className="h-8 w-8 text-primary" />
          <p className="text-muted-foreground">
            Mais de <span className="font-semibold text-foreground">50.000 conexões</span> feitas entre 
            clientes e parceiros em todo o Brasil
          </p>
        </div>
      </div>
    </section>
  )
}
