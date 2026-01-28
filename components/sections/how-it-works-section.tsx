"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ClipboardList, Search, MessageSquare, CheckCircle, CreditCard, Star, Wallet, Calendar, UserCheck } from "lucide-react"

const clienteSteps = [
  {
    step: "01",
    icon: Search,
    title: "Busque o Serviço",
    description: "Navegue pelas categorias ou use a busca para encontrar o serviço que você precisa.",
  },
  {
    step: "02",
    icon: UserCheck,
    title: "Escolha o Profissional",
    description: "Compare avaliações, preços e disponibilidade. Escolha o parceiro ideal para você.",
  },
  {
    step: "03",
    icon: MessageSquare,
    title: "Combine os Detalhes",
    description: "Converse com o profissional, alinhe expectativas e confirme data e horário.",
  },
  {
    step: "04",
    icon: CreditCard,
    title: "Pague com Segurança",
    description: "Realize o pagamento pela plataforma. O valor só é liberado após a conclusão.",
  },
  {
    step: "05",
    icon: Star,
    title: "Avalie o Serviço",
    description: "Após a conclusão, deixe sua avaliação e ajude outros clientes.",
  },
]

const parceiroSteps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Cadastre seu Perfil",
    description: "Crie seu perfil, adicione suas habilidades e defina sua área de atuação.",
  },
  {
    step: "02",
    icon: Calendar,
    title: "Defina sua Agenda",
    description: "Configure seus horários de disponibilidade. Você controla quando trabalha.",
  },
  {
    step: "03",
    icon: Search,
    title: "Receba Solicitações",
    description: "Clientes encontram você e enviam solicitações de serviço.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Execute o Trabalho",
    description: "Realize o serviço com qualidade e conquiste a satisfação do cliente.",
  },
  {
    step: "05",
    icon: Wallet,
    title: "Receba o Pagamento",
    description: "O valor é transferido para sua conta após a conclusão. Rápido e garantido.",
  },
]

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<"cliente" | "parceiro">("cliente")
  const steps = activeTab === "cliente" ? clienteSteps : parceiroSteps

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Como funciona
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Um processo simples e transparente para conectar quem precisa com quem oferece.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full border border-border bg-card p-1">
            <button
              onClick={() => setActiveTab("cliente")}
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-medium transition-all",
                activeTab === "cliente"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Sou Cliente
            </button>
            <button
              onClick={() => setActiveTab("parceiro")}
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-medium transition-all",
                activeTab === "parceiro"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Sou Parceiro
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="absolute top-16 left-0 right-0 hidden h-0.5 bg-border lg:block" />
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Step Card */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-card shadow-sm">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  {/* Step Number */}
                  <span className="mt-4 text-xs font-bold text-primary">{step.step}</span>
                  
                  {/* Title */}
                  <h3 className="mt-2 font-semibold text-foreground">{step.title}</h3>
                  
                  {/* Description */}
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Mobile/Tablet) */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:hidden">
                    <div className="h-4 w-0.5 bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
