import { Phone, Star } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero-barbershop.jpg"
          alt="Interior da barbearia Estudio Ericlis Barber"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-24 pb-16">
        <div className="flex items-center justify-center gap-2 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-gold text-gold" />
          ))}
        </div>

        <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4 font-[var(--font-lato)]">
          Sua Barbearia de Confiança em Aracaju
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold text-foreground mb-2 leading-tight text-balance">
          Estúdio
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight italic">
          Ericlis<span className="text-gold"> Barber</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-[var(--font-lato)]">
          Onde estilo encontra precisão. Corte masculino e barba com qualidade,
          preço justo e atendimento diferenciado em Aracaju.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5579999035513"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gold text-primary-foreground px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-gold-light transition-colors font-[var(--font-lato)]"
          >
            <Phone className="h-5 w-5" />
            Agendar pelo WhatsApp
          </a>
          <a
            href="#servicos"
            className="flex items-center gap-3 border border-gold/40 text-foreground px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-colors font-[var(--font-lato)]"
          >
            Nossos Serviços
          </a>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground font-[var(--font-lato)]">
          <div className="flex items-center gap-2 text-sm">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-gold"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Rua Amapa N{"\u00BA"}1665, Siqueira Campos
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-gold" />
            (79) 99903-5513
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/40 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}
