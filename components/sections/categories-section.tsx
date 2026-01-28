"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Bike, 
  Camera, 
  Hammer, 
  Home, 
  Laptop, 
  Paintbrush, 
  Scissors, 
  Truck, 
  Utensils,
  Wrench,
  Sparkles,
  Baby
} from "lucide-react"

const categories = [
  {
    icon: Home,
    title: "Serviços Domésticos",
    description: "Limpeza, organização, passadoria",
    count: "2.500+ profissionais",
    href: "/categorias/domesticos",
  },
  {
    icon: Truck,
    title: "Entregas & Fretes",
    description: "Motoboy, carreto, mudanças",
    count: "1.800+ profissionais",
    href: "/categorias/entregas",
  },
  {
    icon: Hammer,
    title: "Reformas & Reparos",
    description: "Pedreiro, marceneiro, serralheiro",
    count: "3.200+ profissionais",
    href: "/categorias/reformas",
  },
  {
    icon: Wrench,
    title: "Elétrica & Hidráulica",
    description: "Eletricista, encanador, instalações",
    count: "2.100+ profissionais",
    href: "/categorias/eletrica-hidraulica",
  },
  {
    icon: Paintbrush,
    title: "Pintura & Acabamento",
    description: "Pintor, gesseiro, azulejista",
    count: "1.500+ profissionais",
    href: "/categorias/pintura",
  },
  {
    icon: Laptop,
    title: "Tecnologia",
    description: "Informática, suporte, instalação",
    count: "900+ profissionais",
    href: "/categorias/tecnologia",
  },
  {
    icon: Utensils,
    title: "Eventos & Buffet",
    description: "Garçom, cozinheira, bartender",
    count: "1.200+ profissionais",
    href: "/categorias/eventos",
  },
  {
    icon: Camera,
    title: "Foto & Vídeo",
    description: "Fotógrafo, videomaker, edição",
    count: "700+ profissionais",
    href: "/categorias/foto-video",
  },
  {
    icon: Scissors,
    title: "Beleza & Estética",
    description: "Cabeleireiro, manicure, maquiagem",
    count: "2.000+ profissionais",
    href: "/categorias/beleza",
  },
  {
    icon: Bike,
    title: "Transporte",
    description: "Motorista particular, mototáxi",
    count: "1.100+ profissionais",
    href: "/categorias/transporte",
  },
  {
    icon: Sparkles,
    title: "Jardinagem",
    description: "Jardineiro, paisagista, poda",
    count: "800+ profissionais",
    href: "/categorias/jardinagem",
  },
  {
    icon: Baby,
    title: "Cuidados & Assistência",
    description: "Babá, cuidador de idosos, pet sitter",
    count: "1.400+ profissionais",
    href: "/categorias/cuidados",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Explore nossas categorias
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Dezenas de categorias para você encontrar exatamente o que precisa. 
            De pequenos reparos a serviços especializados.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                <category.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                  {category.description}
                </p>
                <p className="mt-2 text-xs font-medium text-primary">
                  {category.count}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
            <Link href="/categorias">
              Ver Todas as Categorias
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
