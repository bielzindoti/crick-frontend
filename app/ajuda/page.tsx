"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { 
  ArrowRight, 
  CreditCard, 
  FileQuestion, 
  Headphones, 
  HelpCircle, 
  LifeBuoy, 
  MessageCircle, 
  Search, 
  Settings, 
  Shield, 
  Smartphone, 
  User, 
  Users,
  ChevronRight
} from "lucide-react"

const helpCategories = [
  {
    id: "primeiros-passos",
    icon: Smartphone,
    title: "Primeiros Passinhos",
    description: "Como começar a usar o BICOS",
    articles: [
      { title: "Como criar uma conta", href: "#" },
      { title: "Diferença entre Cliente e Parceiro", href: "#" },
      { title: "Como completar meu perfil", href: "#" },
      { title: "Verificação de conta", href: "#" },
    ]
  },
  {
    id: "conta",
    icon: User,
    title: "Minha Conta",
    description: "Configurações e dados pessoais",
    articles: [
      { title: "Como alterar meus dados", href: "#" },
      { title: "Redefinir senha", href: "#" },
      { title: "Excluir minha conta", href: "#" },
      { title: "Problemas de acesso", href: "#" },
    ]
  },
  {
    id: "servicos",
    icon: Settings,
    title: "Serviços",
    description: "Contratar ou oferecer serviços crick!",
    articles: [
      { title: "Como contratar um profissional crick!", href: "#" },
      { title: "Como receber solicitações", href: "#" },
      { title: "Cancelar um serviço", href: "#" },
      { title: "Reagendar um serviço", href: "#" },
    ]
  },
  {
    id: "pagamentos",
    icon: CreditCard,
    title: "Pagamentos",
    description: "Transações e reembolsos",
    articles: [
      { title: "Formas de pagamento aceitas", href: "#" },
      { title: "Como receber meus ganhos", href: "#" },
      { title: "Solicitar reembolso", href: "#" },
      { title: "Taxas e comissões", href: "#" },
    ]
  },
  {
    id: "seguranca",
    icon: Shield,
    title: "Segurança",
    description: "Proteção da sua conta e dados",
    articles: [
      { title: "Dicas de segurança", href: "#" },
      { title: "Reportar comportamento suspeito", href: "#" },
      { title: "Autenticação de dois fatores", href: "#" },
      { title: "Erros comuns e como evitar", href: "#" },
    ]
  },
  {
    id: "parceiros",
    icon: Users,
    title: "Para Parceiros",
    description: "Dúvidas exclusivas de crick prestadores!",
    articles: [
      { title: "Como aumentar minha visibilidade crick!", href: "#" },
      { title: "Definir preços competitivos", href: "#" },
      { title: "Gerenciar minha agenda crick!", href: "#" },
      { title: "Obter mais avaliações", href: "#" },
    ]
  },
]

const popularQuestions = [
  {
    question: "Como faço para me cadastrar como Parceiro crick!?",
    answer: "Para se cadastrar como Parceiro, acesse a pagina de cadastro e selecione 'Sou Parceiro'. Voce precisara fornecer seus dados pessoais, endereco, definir suas categorias de servico e criar uma senha. Apos o cadastro, voce pode enviar documentos para verificacao e aumentar sua credibilidade."
  },
  {
    question: "Quanto tempo leva para receber o pagamento de um serviço?",
    answer: "Apos a conclusao do servico e confirmacao do cliente, o valor e creditado em sua carteira UmCrick! em ate 24 horas. Voce pode solicitar saque a qualquer momento via PIX (instantaneo) ou transferencia bancaria (1-2 dias uteis)."
  },
  {
    question: "Como cancelar um serviço agendado?",
    answer: "Você pode cancelar um serviço até 2 horas antes do horário agendado sem penalidades. Acesse 'Meus Serviços', encontre o agendamento e clique em 'Cancelar'. Cancelamentos tardios frequentes podem afetar sua reputação na plataforma."
  },
  {
    question: "O que fazer se tiver um problema com o serviço?",
    answer: "Se você tiver qualquer problema, primeiro tente resolver diretamente com o outro usuário pelo chat. Se não conseguir, use o botão 'Reportar Problema' no serviço ou entre em contato com nosso suporte. Mediamos todas as disputas de forma justa."
  },
  {
    question: "Como funciona o sistema de avaliações?",
    answer: "Após cada serviço, ambas as partes podem deixar avaliações de 1 a 5 estrelas e comentários. As avaliações são públicas e ajudam a construir confiança na comunidade. Avaliações falsas ou abusivas são removidas após análise."
  },
  {
    question: "Posso usar o UmCrick! em qualquer cidade?",
    answer: "O UmCrick! está disponivel apenas no estado de São Paulo por enquanto. Embreve, expandiremos á todo o Brasil."
  },
]

export default function AjudaPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredQuestions = popularQuestions.filter(
    (q) =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Search */}
        <section className="relative bg-primary text-primary-foreground py-16 md:py-24">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 px-4 py-1.5 text-sm font-medium mb-6">
                <LifeBuoy className="h-4 w-4" />
                <span>Centro de Ajuda</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
                Como podemos ajudar você?
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Encontre respostas rápidas ou entre em contato com nosso suporte.
              </p>

              {/* Search Bar */}
              <div className="mt-8 relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar perguntas, artigos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-6 text-base bg-background text-foreground rounded-xl border-0 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Navegue por Categoria
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {helpCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(
                    selectedCategory === category.id ? null : category.id
                  )}
                  className={`group text-left rounded-xl border-2 p-5 transition-all ${
                    selectedCategory === category.id
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                    }`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground">{category.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  
                  {/* Expanded Articles */}
                  {selectedCategory === category.id && (
                    <div className="mt-4 pt-4 border-t border-border space-y-2">
                      {category.articles.map((article) => (
                        <Link
                          key={article.title}
                          href={article.href}
                          className="flex items-center justify-between py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <span>{article.title}</span>
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      ))}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Questions */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <FileQuestion className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Perguntas Frequentes
                </h2>
              </div>

              {searchQuery && filteredQuestions.length === 0 ? (
                <div className="text-center py-12">
                  <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Nenhum resultado encontrado para &quot;{searchQuery}&quot;
                  </p>
                  <Button variant="link" onClick={() => setSearchQuery("")}>
                    Limpar busca
                  </Button>
                </div>
              ) : (
                <Accordion type="single" collapsible className="w-full">
                  {(searchQuery ? filteredQuestions : popularQuestions).map((item, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="bg-card rounded-lg mb-2 border border-border px-4">
                      <AccordionTrigger className="text-left hover:text-primary py-4">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-foreground">
                  Ainda precisa de ajuda?
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Nossa equipe está pronta para atender você.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Chat Support */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground">Chat ao Vivo</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Converse com nossa equipe em tempo real. Disponível de segunda a sexta, das 8h às 20h.
                      </p>
                      <Button className="mt-4 gap-2" size="sm">
                        Iniciar Chat
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Phone Support */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <Headphones className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground">Central de Atendimento</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Ligue para nossa central de atendimento. Disponível 24 horas por dia, 7 dias por semana.
                      </p>
                      <p className="mt-4 text-lg font-bold text-primary">0800 123 4567</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
