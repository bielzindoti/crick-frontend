import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  plataforma: [
    { label: "Como Funciona", href: "/como-funciona" },
    { label: "Categorias de Serviços", href: "/categorias" },
    { label: "Para Clientes", href: "/para-clientes" },
    { label: "Para Parceiros", href: "/para-parceiros" },
  ],
  empresa: [
    { label: "Quem Somos", href: "/quem-somos" },
    { label: "Carreiras", href: "/carreiras" },
    { label: "Trabalhe Conosco", href: "/trabalhe-onosco" },
    { label: "Blog", href: "/blog" },
  ],
  suporte: [
    { label: "Centro de Ajuda", href: "/ajuda" },
    { label: "Saiba Mais", href: "/saiba-mais" },
    { label: "Fale Conosco", href: "/contato" },
    { label: "Comunidade", href: "/comunidade" },
  ],
  legal: [
    { label: "Termos de Uso", href: "/termos" },
    { label: "Política de Privacidade", href: "/privacidade" },
    { label: "Política de Cookies", href: "/cookies" },
    { label: "Segurança", href: "/seguranca" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/umcrickapp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-1 mb-4">
              <Image
                src="/mascot.png"
                alt="UmCrick! mascote"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
              <span className="text-xl font-bold">UmCrick!</span>
            </Link>
            <p className="text-sm text-accent-foreground/70 mb-4">
              A plataforma de empregos temporários que conecta pessoas a oportunidades de trabalho rápidas, os famosos bicos!
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-foreground/10 transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Plataforma</h4>
            <ul className="space-y-2">
              {footerLinks.plataforma.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/70 transition-colors hover:text-accent-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/70 transition-colors hover:text-accent-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Suporte</h4>
            <ul className="space-y-2">
              {footerLinks.suporte.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/70 transition-colors hover:text-accent-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/70 transition-colors hover:text-accent-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-accent-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-accent-foreground/60">
            © {new Date().getFullYear()} UmCrick! Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm text-accent-foreground/60">
            <span>Feito com dedicação no Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
