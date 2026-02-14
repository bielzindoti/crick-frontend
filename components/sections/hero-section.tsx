"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Clock, Shield, Star, Users, Zap } from "lucide-react"

const stats = [
  { value: "Em breve...", label: "Serviços Realizados" },
  { value: "Em breve...", label: "Parceiros Ativos" },
  { value: "Em breve...", label: "Clientes Satisfeitos" },
  { value: "5", label: "Cidades Atendidas" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/mascot.png"
                alt="UmCrick! mascote"
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Zap className="h-4 w-4" />
                <span>Empregos Temporários</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Conecte-se a <span className="text-primary">bicos</span> e oportunidades de{" "}
              <span className="text-primary">renda extra</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A plataforma de empregos temporários que conecta pessoas a oportunidades de 
              trabalho rápidas. Encontre seu próximo bico ou ofereça seus serviços!
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/cadastro?tipo=cliente">
                  Preciso de um Serviço
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                <Link href="/cadastro?tipo=parceiro">
                  Quero Oferecer Serviços
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                <span>Avaliações Verificadas</span>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">Diversas Categorias</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  De serviços domésticos a tecnologia. Encontre o profissional certo para cada necessidade.
                </p>
              </div>
              
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">Atendimento Rápido</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Profissionais disponíveis para atender você em minutos. Sem espera, sem complicação.
                </p>
              </div>
            </div>
            
            <div className="space-y-4 sm:mt-8">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">Profissionais Verificados</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Todos os parceiros passam por verificação. Sua segurança é nossa prioridade.
                </p>
              </div>
              
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">Pagamento Protegido</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Transações seguras com liberação após a conclusão. Garantia para ambos os lados.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-card p-8 shadow-sm md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
