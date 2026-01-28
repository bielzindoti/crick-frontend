"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"

const servicosCategories = [
  { title: "Serviços Domésticos", href: "/categorias/domesticos", description: "Limpeza, organização, pequenos reparos" },
  { title: "Entregas & Fretes", href: "/categorias/entregas", description: "Motoboy, carreto, mudanças" },
  { title: "Reformas & Reparos", href: "/categorias/reformas", description: "Pintura, elétrica, hidráulica" },
  { title: "Tecnologia", href: "/categorias/tecnologia", description: "Informática, suporte técnico" },
  { title: "Eventos", href: "/categorias/eventos", description: "Garçom, cozinheira, fotógrafo" },
  { title: "Cuidados Pessoais", href: "/categorias/cuidados", description: "Cabeleireiro, manicure, estética" },
]

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/mascot.png"
            alt="UmCrick! mascote"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
          />
          <span className="text-xl font-bold text-foreground">UmCrick!</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Serviços</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                  {servicosCategories.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/quem-somos" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                )}>
                  Quem Somos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/saiba-mais" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                )}>
                  Saiba Mais
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/ajuda" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                )}>
                  Ajuda
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search & Actions */}
        <div className="flex items-center gap-2">
          {/* Search Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Buscar"
          >
            {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </Button>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Entrar</Link>
            </Button>
            <Button asChild>
              <Link href="/cadastro">Cadastre-se</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-1 mb-4">
                  <Image
                    src="/mascot.png"
                    alt="UmCrick! mascote"
                    width={44}
                    height={44}
                    className="h-11 w-11 object-contain"
                  />
                  <span className="text-xl font-bold">UmCrick!</span>
                </div>
                
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground px-2">Categorias de Serviços</p>
                  {servicosCategories.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block rounded-md px-2 py-2 text-sm hover:bg-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-1">
                  <Link
                    href="/quem-somos"
                    className="block rounded-md px-2 py-2 text-sm hover:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Quem Somos
                  </Link>
                  <Link
                    href="/saiba-mais"
                    className="block rounded-md px-2 py-2 text-sm hover:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Saiba Mais
                  </Link>
                  <Link
                    href="/ajuda"
                    className="block rounded-md px-2 py-2 text-sm hover:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Centro de Ajuda
                  </Link>
                </div>

                <div className="border-t pt-4 flex flex-col gap-2">
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Entrar</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/cadastro" onClick={() => setMobileMenuOpen(false)}>Cadastre-se</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Search Bar (expandable) */}
      {isSearchOpen && (
        <div className="border-t border-border bg-background px-4 py-3">
          <div className="container mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Buscar serviços, categorias ou profissionais..."
                className="w-full rounded-lg border border-input bg-background py-2 pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
