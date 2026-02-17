import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Building2, 
  Heart, 
  Lightbulb, 
  Shield, 
  Target, 
  Users,
  CheckCircle2,
  Award,
  TrendingUp
} from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Compromisso",
    description: "Dedicação total aos nossos usuários, garantindo a melhor experiência crick possível.",
  },
  {
    icon: Shield,
    title: "Confiança",
    description: "Segurança e transparência em todas as interações e transações.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Tecnologia a serviço da simplicidade e eficiência no dia a dia.",
  },
  {
    icon: Users,
    title: "Inclusão",
    description: "Oportunidade de renda para todos, sem barreiras ou burocracia.",
  },
]

const milestones = [
  { year: "2023", title: "Idealização", description: "Nasce a ideia do UmCrick! em Sao Paulo" },
  { year: "2024", title: "Teste", description: "Primeira versão da plataforma sendo criada" },
  { year: "2025", title: "Expansao", description: "Testes beta e validações da plataforma" },
  { year: "2026", title: "Crescimento", description: "Primeira plataforma enfim lançada!" },
]

const team = [
  { name: "Gabriel Cardoso", role: "CEO, CTO & Fundador", image: null },
  { name: "Arthur Villegas", role: "CEO Co-Fundador & CTO, Head CISO", image: null },
  { name: "Em breve", role: "Head de Operações", image: null },
  { name: "Em breve", role: "Head de Produto", image: null },
]

export default function QuemSomosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-accent text-accent-foreground py-16 md:py-24">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Building2 className="h-4 w-4" />
                <span>Nossa História</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
                Conectando talentos a oportunidades em todo o Brasil
              </h1>
              <p className="mt-6 text-lg text-accent-foreground/80 leading-relaxed">
                O UmCrick! nasceu da necessidade de facilitar, agilizar e melhorar o acesso a empregos temporarios, 
                criando uma ponte segura e eficiente entre quem precisa de servicos rápidos e quem 
                quer ganhar uma renda extra.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-primary mb-4">
                  <Target className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Nossa Missão</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Transformar a forma como o Brasil trabalha e contrata serviços
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Acreditamos que todos têm um talento a oferecer e que todos merecem acesso 
                  fácil a serviços de qualidade. Nossa plataforma elimina barreiras, reduz 
                  burocracia e cria oportunidades reais de renda.
                </p>
                
                <ul className="mt-8 space-y-4">
                  {[
                    "Facilitar o acesso ao trabalho informal com dignidade",
                    "Garantir segurança e confiança em cada interação",
                    "Promover a inclusão econômica em todo o Brasil",
                    "Simplificar a contratação de serviços do dia a dia",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
                  <TrendingUp className="h-8 w-8 mb-4" />
                  <div className="text-3xl font-bold">50K+</div>
                  <p className="mt-1 text-primary-foreground/80">Serviços realizados</p>
                </div>
                <div className="rounded-2xl bg-muted p-6">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <div className="text-3xl font-bold text-foreground">15K+</div>
                  <p className="mt-1 text-muted-foreground">Parceiros ativos</p>
                </div>
                <div className="rounded-2xl bg-muted p-6">
                  <Award className="h-8 w-8 text-primary mb-4" />
                  <div className="text-3xl font-bold text-foreground">98%</div>
                  <p className="mt-1 text-muted-foreground">Satisfação</p>
                </div>
                <div className="rounded-2xl bg-primary/10 p-6">
                  <Building2 className="h-8 w-8 text-primary mb-4" />
                  <div className="text-3xl font-bold text-foreground">100+</div>
                  <p className="mt-1 text-muted-foreground">Cidades atendidas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Nossos Valores
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Os princípios que guiam cada decisão e cada linha de código que escrevemos.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-border bg-card p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Nossa Trajetória
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                De uma ideia simples a uma plataforma que impacta milhares de vidas.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />
                
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-center gap-6 pb-12 last:pb-0 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Circle */}
                    <div className="absolute left-8 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background md:left-1/2">
                      <div className="h-3 w-3 rounded-full bg-primary" />
                    </div>
                    
                    {/* Content */}
                    <div className={`ml-16 flex-1 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                      <span className="text-sm font-bold text-primary">{milestone.year}</span>
                      <h3 className="mt-1 font-semibold text-foreground">{milestone.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                    
                    {/* Spacer for alternating layout */}
                    <div className="hidden flex-1 md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Nosso Time
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Pessoas apaixonadas por tecnologia e impacto social.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl border border-border bg-card p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">{member.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance max-w-2xl mx-auto">
              Faca parte dessa historia
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
              Junte-se a milhares de brasileiros que ja estao transformando suas vidas com o UmCrick!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <Link href="/cadastro?tipo=cliente">
                  Encontrar Profissionais
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent" 
                asChild
              >
                <Link href="/cadastro?tipo=parceiro">
                  Oferecer Serviços
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
