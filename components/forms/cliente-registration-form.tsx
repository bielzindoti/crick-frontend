"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, User, MapPin, Shield } from "lucide-react"

const steps = [
  { id: 1, title: "Dados Pessoais", icon: User },
  { id: 2, title: "Endereço", icon: MapPin },
  { id: 3, title: "Segurança", icon: Shield },
]

export function ClienteRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    senha: "",
    confirmarSenha: "",
    aceitaTermos: false,
    aceitaMarketing: false,
  })

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="rounded-2xl border border-border bg-card shadow-sm">
      {/* Header */}
      <div className="border-b border-border p-6">
        <h2 className="text-xl font-bold text-card-foreground">Cadastro de Cliente</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Crie sua conta para começar a contratar serviços
        </p>
      </div>

      {/* Progress Steps */}
      <div className="border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors",
                    currentStep > step.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : currentStep === step.id
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-muted text-muted-foreground"
                  )}
                >
                  {currentStep > step.id ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </div>
                <div className="hidden sm:block">
                  <p className={cn(
                    "text-sm font-medium",
                    currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                  )}>
                    {step.title}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "mx-4 h-0.5 w-12 sm:w-20",
                    currentStep > step.id ? "bg-primary" : "bg-border"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit}>
        <div className="p-6">
          {/* Step 1: Personal Data */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label htmlFor="nome">Nome Completo *</Label>
                  <Input
                    id="nome"
                    placeholder="Digite seu nome completo"
                    value={formData.nome}
                    onChange={(e) => updateFormData("nome", e.target.value)}
                    className="mt-1.5"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className="mt-1.5"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone / WhatsApp *</Label>
                  <Input
                    id="telefone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.telefone}
                    onChange={(e) => updateFormData("telefone", e.target.value)}
                    className="mt-1.5"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="cpf">CPF *</Label>
                  <Input
                    id="cpf"
                    placeholder="000.000.000-00"
                    value={formData.cpf}
                    onChange={(e) => updateFormData("cpf", e.target.value)}
                    className="mt-1.5"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Address */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="cep">CEP *</Label>
                  <Input
                    id="cep"
                    placeholder="00000-000"
                    value={formData.cep}
                    onChange={(e) => updateFormData("cep", e.target.value)}
                    className="mt-1.5"
                    required
                  />
                </div>
                <div />
                <div className="sm:col-span-2">
                  <Label htmlFor="endereco">Endereço *</Label>
                  <Input
                    id="endereco"
                    placeholder="Rua, Avenida, etc."
                    value={formData.endereco}
                    onChange={(e) => updateFormData("endereco", e.target.value)}
                    className="mt-1.5"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="numero">Número *</Label>
                  <Input
                    id="numero"
                    placeholder="Nº"
                    value={formData.numero}
                    onChange={(e) => updateFormData("numero", e.target.value)}
                    className="mt-1.5"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="complemento">Complemento</Label>
                  <Input
                    id="complemento"
                    placeholder="Apto, Bloco, etc."
                    value={formData.complemento}
                    onChange={(e) => updateFormData("complemento", e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="bairro">Bairro *</Label>
                  <Input
                    id="bairro"
                    placeholder="Seu bairro"
                    value={formData.bairro}
                    onChange={(e) => updateFormData("bairro", e.target.value)}
                    className="mt-1.5"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cidade">Cidade *</Label>
                  <Input
                    id="cidade"
                    placeholder="Sua cidade"
                    value={formData.cidade}
                    onChange={(e) => updateFormData("cidade", e.target.value)}
                    className="mt-1.5"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="estado">Estado *</Label>
                  <Input
                    id="estado"
                    placeholder="UF"
                    value={formData.estado}
                    onChange={(e) => updateFormData("estado", e.target.value)}
                    className="mt-1.5"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Security */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="senha">Senha *</Label>
                  <div className="relative mt-1.5">
                    <Input
                      id="senha"
                      type={showPassword ? "text" : "password"}
                      placeholder="Mínimo 8 caracteres"
                      value={formData.senha}
                      onChange={(e) => updateFormData("senha", e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Use letras maiúsculas, minúsculas, números e símbolos
                  </p>
                </div>
                <div>
                  <Label htmlFor="confirmarSenha">Confirmar Senha *</Label>
                  <Input
                    id="confirmarSenha"
                    type="password"
                    placeholder="Digite a senha novamente"
                    value={formData.confirmarSenha}
                    onChange={(e) => updateFormData("confirmarSenha", e.target.value)}
                    className="mt-1.5"
                    required
                  />
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="termos"
                      checked={formData.aceitaTermos}
                      onCheckedChange={(checked) => updateFormData("aceitaTermos", checked as boolean)}
                    />
                    <Label htmlFor="termos" className="text-sm leading-relaxed cursor-pointer">
                      Li e aceito os{" "}
                      <Link href="/termos" className="text-primary hover:underline">
                        Termos de Uso
                      </Link>{" "}
                      e a{" "}
                      <Link href="/privacidade" className="text-primary hover:underline">
                        Política de Privacidade
                      </Link>{" "}
                      *
                    </Label>
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="marketing"
                      checked={formData.aceitaMarketing}
                      onCheckedChange={(checked) => updateFormData("aceitaMarketing", checked as boolean)}
                    />
                    <Label htmlFor="marketing" className="text-sm leading-relaxed cursor-pointer">
                      Desejo receber novidades, promoções e dicas por e-mail
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between border-t border-border p-6">
          <Button
            type="button"
            variant="ghost"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>

          {currentStep < steps.length ? (
            <Button type="button" onClick={nextStep} className="gap-2">
              Continuar
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" className="gap-2">
              Criar Conta
              <Check className="h-4 w-4" />
            </Button>
          )}
        </div>
      </form>

      {/* Login Link */}
      <div className="border-t border-border p-6 text-center">
        <p className="text-sm text-muted-foreground">
          Já tem uma conta?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  )
}
