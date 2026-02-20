"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import logo from "../assets/ericlisBarber.png"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicos", href: "#servicos" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Estudio Ericlis Barber Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="hidden sm:block">
            <p className="text-sm tracking-[0.2em] uppercase text-white font-[var(--font-lato)]">Estudio</p>
            <p className="text-lg font-bold tracking-wider text-foreground">ERICLIS <span className="text-gold italic">Barber</span></p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-gold transition-colors font-[var(--font-lato)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5579999035513"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-gold text-primary-foreground px-5 py-2.5 text-sm font-bold tracking-wider uppercase hover:bg-gold-light transition-colors font-[var(--font-lato)]"
          >
            <Phone className="h-4 w-4" />
            Agendar
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground hover:text-gold transition-colors"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-gold transition-colors py-3 border-b border-border font-[var(--font-lato)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5579999035513"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gold text-primary-foreground px-5 py-3 mt-3 text-sm font-bold tracking-wider uppercase hover:bg-gold-light transition-colors font-[var(--font-lato)]"
            >
              <Phone className="h-4 w-4" />
              Agendar Horario
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
