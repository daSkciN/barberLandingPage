import { Instagram, Phone, MapPin } from "lucide-react";


export function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/ericlisBarber.png"
              alt="Estudio Ericlis Barber Logo"
              width={80}
              height={80}
              className="rounded-full mb-4"
            />
            <p className="text-muted-foreground text-sm text-center md:text-left font-[var(--font-lato)] leading-relaxed">
              Barbearia em Aracaju-SE. Estilo, precisão e excelência em
              cada detalhe.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-foreground font-bold tracking-[0.15em] uppercase text-sm mb-6">
              Links Rapidos
            </h3>
            <nav className="flex flex-col gap-3">
              {["Inicio", "Servicos", "Contato"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground text-sm hover:text-gold transition-colors font-[var(--font-lato)]"
                  >
                    {item}
                  </a>
                ),
              )}
            </nav>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-foreground font-bold tracking-[0.15em] uppercase text-sm mb-6">
              Contato
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5579999035513"
                className="flex items-center justify-center md:justify-end gap-2 text-muted-foreground text-sm hover:text-gold transition-colors font-[var(--font-lato)]"
              >
                <Phone className="h-4 w-4" />
                (79) 99903-5513
              </a>
              <a
                href="https://instagram.com/ericlis_barber95"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 text-muted-foreground text-sm hover:text-gold transition-colors font-[var(--font-lato)]"
              >
                <Instagram className="h-4 w-4" />
                @ericlis_barber95
              </a>
              <div className="flex items-center justify-center md:justify-end gap-2 text-muted-foreground text-sm font-[var(--font-lato)]">
                <MapPin className="h-4 w-4 shrink-0" />
                Rua Bahia N{"\u00BA"}1665, Aracaju-SE
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs tracking-wider font-[var(--font-lato)]">
            {"\u00A9"} 2026 Estudio Ericlis Barber. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/ericlis_barber95"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border hover:border-gold flex items-center justify-center transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4 text-muted-foreground group-hover:text-gold transition-colors" />
            </a>
            <a
              href="https://wa.me/5579999035513"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border hover:border-gold flex items-center justify-center transition-colors group"
              aria-label="WhatsApp"
            >
              <Phone className="h-4 w-4 text-muted-foreground group-hover:text-gold transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
