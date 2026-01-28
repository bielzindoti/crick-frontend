"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ClienteRegistrationForm } from "@/components/forms/cliente-registration-form"
import { ParceiroRegistrationForm } from "@/components/forms/parceiro-registration-form"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Search, Wallet, ArrowLeft } from "lucide-react"

export default function CadastroPage() {
  const searchParams = useSearchParams()
  const initialTipo = searchParams.get("tipo") as "cliente" | "parceiro" | null
  const [selectedType, setSelectedType] = useState<"cliente" | "parceiro" | null>(initialTipo)

  useEffect(() => {
    if (initialTipo) {
      setSelectedType(initialTipo)
    }
  }, [initialTipo])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Back Link */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o início
          </Link>

          {!selectedType ? (
            /* Type Selection */
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Como você quer usar o UmCrick!?
                </h1>
                <p className="mt-3 text-lg text-muted-foreground">
                  Escolha seu perfil para começar o cadastro
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Cliente Option */}
                <button
                  onClick={() => setSelectedType("cliente")}
                  className="group relative overflow-hidden rounded-2xl border-2 border-border bg-card p-8 text-left transition-all hover:border-primary hover:shadow-lg"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary">
                    <Search className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <h2 className="text-xl font-bold text-card-foreground mb-2">Sou Cliente</h2>
                  <p className="text-muted-foreground">
                    Quero contratar profissionais para serviços domésticos, reparos, entregas e muito mais.
                  </p>
                  <div className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                    Começar cadastro
                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                  </div>
                </button>

                {/* Parceiro Option */}
                <button
                  onClick={() => setSelectedType("parceiro")}
                  className="group relative overflow-hidden rounded-2xl border-2 border-border bg-accent text-accent-foreground p-8 text-left transition-all hover:border-primary hover:shadow-lg"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary transition-colors">
                    <Wallet className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-xl font-bold mb-2">Sou Parceiro</h2>
                  <p className="text-accent-foreground/80">
                    Quero oferecer meus serviços, trabalhar no meu horário e ganhar uma renda extra.
                  </p>
                  <div className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                    Começar cadastro
                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                  </div>
                </button>
              </div>

              <p className="mt-8 text-center text-sm text-muted-foreground">
                Já tem uma conta?{" "}
                <Link href="/login" className="font-medium text-primary hover:underline">
                  Faça login
                </Link>
              </p>
            </div>
          ) : (
            /* Registration Forms */
            <div className="max-w-2xl mx-auto">
              {/* Type Switcher */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex rounded-full border border-border bg-card p-1">
                  <button
                    onClick={() => setSelectedType("cliente")}
                    className={cn(
                      "flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all",
                      selectedType === "cliente"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Search className="h-4 w-4" />
                    Cliente
                  </button>
                  <button
                    onClick={() => setSelectedType("parceiro")}
                    className={cn(
                      "flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all",
                      selectedType === "parceiro"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Wallet className="h-4 w-4" />
                    Parceiro
                  </button>
                </div>
              </div>

              {selectedType === "cliente" ? (
                <ClienteRegistrationForm />
              ) : (
                <ParceiroRegistrationForm />
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
