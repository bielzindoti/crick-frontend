"use client"

import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { 
  ArrowRight, 
  BookOpen, 
  CreditCard, 
  FileText, 
  Lock, 
  Shield, 
  Scale 
} from "lucide-react"

const topics = [
  {
    id: "politicas",
    icon: Scale,
    title: "Políticas da Plataforma",
    description: "Regras e diretrizes que garantem uma experiência justa para todos.",
    items: [
      {
        question: "Quais são as regras de conduta na plataforma?",
        answer: "Todos os usuarios devem tratar uns aos outros com respeito e profissionalismo. Nõa toleramos discriminação, assédio ou comportamentos abusivos. Qualquer violacao pode resultar em suspensao ou banimento da conta."
      },
      {
        question: "Como funciona o sistema de avaliações?",
        answer: "Após cada serviço, clientes e parceiros podem avaliar a experiência com nota de 1 a 5 estrelas e deixar comentários. Avaliações são públicas e ajudam outros usuários a tomar decisões informadas. Comentários ofensivos ou falsos podem ser removidos."
      },
      {
        question: "O que acontece em caso de cancelamento?",
        answer: "Cancelamentos podem ser feitos até 2 horas antes do horário agendado sem penalidades. Cancelamentos tardios ou frequentes podem afetar a reputação do usuário na plataforma. Em casos de emergência, entre em contato com nosso suporte."
      },
      {
        question: "Como são resolvidas as disputas?",
        answer: "Disputas são mediadas pela equipe da UMCRICK. Ambas as partes podem apresentar evidências e nossa equipe tomará uma decisão justa em até 48 horas úteis. Decisões podem incluir reembolsos parciais ou totais."
      },
    ]
  },
  {
    id: "termos",
    icon: FileText,
    title: "Termos de Uso",
    description: "Condições legais para utilização dos nossos serviços.",
    items: [
      {
        question: "Quem pode usar a UMCRICK?",
        answer: "O UmCrick! esta disponivel para maiores de 18 anos com CPF valido. Menores de idade nao podem se cadastrar nem como clientes nem como parceiros. A plataforma esta disponivel em todo o territorio brasileiro."
      },
      {
        question: "Quais são as obrigações dos usuários?",
        answer: "Usuários devem fornecer informações verdadeiras, manter dados atualizados, respeitar acordos feitos na plataforma e cumprir com as obrigações fiscais e trabalhistas aplicáveis. O BICOS não se responsabiliza por informações falsas."
      },
      {
        question: "Como funciona a propriedade intelectual?",
        answer: "Todo o conteudo da plataforma UmCrick!, incluindo logos, textos e design, e protegido por direitos autorais. Usuarios concedem ao UmCrick! licenca para usar avaliacoes e feedbacks para melhorar o servico."
      },
      {
        question: "Quando os Termos podem ser alterados?",
        answer: "O UmCrick! pode atualizar os Termos de Uso a qualquer momento. Usuarios serao notificados por e-mail sobre mudancas significativas. O uso continuado da plataforma apos mudancas implica aceitacao dos novos termos."
      },
    ]
  },
  {
    id: "seguranca",
    icon: Shield,
    title: "Segurança",
    description: "Medidas que tomamos para proteger você e seus dados.",
    items: [
      {
        question: "Como meus dados são protegidos?",
        answer: "Utilizamos criptografia de ponta a ponta para todas as comunicações e transações. Seus dados são armazenados em servidores seguros com certificação ISO 27001. Implementamos autenticação de dois fatores opcional."
      },
      {
        question: "Como funciona a verificação de parceiros?",
        answer: "Parceiros passam por verificação de identidade com validação de CPF, foto e documento. Verificamos também antecedentes quando aplicável. Parceiros verificados recebem um selo de confiança em seu perfil."
      },
      {
        question: "O que fazer em caso de atividade suspeita?",
        answer: "Se você notar atividade suspeita em sua conta ou comportamento inadequado de outro usuário, reporte imediatamente através do botão 'Reportar' ou entre em contato com nosso suporte 24/7. Investigamos todos os casos."
      },
      {
        question: "Como proteger minha conta?",
        answer: "Use uma senha forte e única, ative a autenticação de dois fatores, não compartilhe suas credenciais e sempre faça logout em dispositivos compartilhados. Desconfie de mensagens pedindo dados pessoais fora da plataforma."
      },
    ]
  },
  {
    id: "pagamentos",
    icon: CreditCard,
    title: "Pagamentos",
    description: "Como funcionam as transações financeiras na UMCRICK.",
    items: [
      {
        question: "Quais formas de pagamento são aceitas?",
        answer: "Aceitamos cartões de crédito e débito das principais bandeiras, PIX e boleto bancário. Todos os pagamentos são processados por parceiros certificados PCI-DSS para máxima segurança."
      },
      {
        question: "Como funciona o pagamento para parceiros?",
        answer: "O valor do serviço fica retido na plataforma até a conclusão. Após confirmação do cliente, o dinheiro é liberado para a carteira do parceiro em até 5 minutos. Saques podem ser feitos a qualquer momento via PIX ou transferência bancária."
      },
      {
        question: "Quais são as taxas cobradas?",
        answer: "O UmCrick! cobra uma taxa de servico de 2,5% sobre o valor de cada bico para parceiros. Clientes pagam o valor acordado sem taxas adicionais. Não há mensalidades ou taxas de adesão."
      },
      {
        question: "Como solicitar reembolso?",
        answer: "Reembolsos podem ser solicitados em até 72 horas após a conclusão do serviço se houver problemas não resolvidos. Análise é feita em até 2 dias úteis. Reembolsos aprovados são creditados na mesma forma de pagamento original."
      },
    ]
  },
  {
    id: "privacidade",
    icon: Lock,
    title: "Privacidade",
    description: "Como coletamos, usamos e protegemos suas informações.",
    items: [
      {
        question: "Quais dados coletamos?",
        answer: "Coletamos dados necessários para o funcionamento do serviço: nome, e-mail, telefone, CPF, endereço e dados de pagamento. Também coletamos dados de uso para melhorar a experiência, como localização durante serviços."
      },
      {
        question: "Como usamos seus dados?",
        answer: "Seus dados são usados para: criar e gerenciar sua conta, conectar clientes e parceiros, processar pagamentos, enviar comunicações importantes e melhorar nossos serviços. Não vendemos dados para terceiros."
      },
      {
        question: "Posso excluir meus dados?",
        answer: "Você pode solicitar a exclusão de sua conta e dados a qualquer momento nas configurações ou pelo suporte. A exclusão é definitiva e processada em até 30 dias. Alguns dados podem ser retidos por obrigações legais."
      },
      {
        question: "Vocês usam cookies?",
        answer: "No momento estamos em carência para cookies e subjunções ou extensões em nosso site, visto que, o foco principal de nossa atuação será baseada no redirecionamento ao aplicativo, portanto, o site apenas coleta seus dados de login e o mantém conectado á nossa base e de nossa aplicação. No momento, nós apenas realizamos o uso de cookies essenciais para funcionamento da plataforma e cookies analíticos para entender como você usa os serviços, para assim, levar uma experiência personalizada e segura apenas para nossos usuários! Você pode gerenciar preferências de cookies nas configurações do seu navegador"
      },
    ]
  },
]

export default function SaibaMaisPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <BookOpen className="h-4 w-4" />
                <span>Central de Informações</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Saiba Mais sobre o UmCrick!
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Tudo que você precisa saber sobre nossa plataforma, políticas, segurança 
                e como trabalhamos para garantir a melhor experiência para você.
              </p>
            </div>
          </div>
        </section>

        {/* Topics Navigation */}
        <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {topics.map((topic) => (
                <a
                  key={topic.id}
                  href={`#${topic.id}`}
                  className="flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  <topic.icon className="h-4 w-4" />
                  {topic.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-16">
              {topics.map((topic) => (
                <div key={topic.id} id={topic.id} className="scroll-mt-32">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <topic.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{topic.title}</h2>
                      <p className="mt-1 text-muted-foreground">{topic.description}</p>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {topic.items.map((item, index) => (
                      <AccordionItem key={index} value={`${topic.id}-${index}`}>
                        <AccordionTrigger className="text-left hover:text-primary">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Não encontrou o que procurava?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Nossa equipe de suporte está pronta para ajudar você com qualquer dúvida.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/ajuda">
                    Acessar Centro de Ajuda
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contato">
                    Falar com Suporte
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
