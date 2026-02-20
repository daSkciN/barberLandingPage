import { Scissors, Sparkles } from "lucide-react";


const services = [
  {
    title: "Corte Masculino",
    description:
      "Cortes modernos e classicos com tecnica e precisao. Do degrade ao social, encontramos o estilo perfeito para voce.",
    price: "A consultar",
    image: "/corte1.png",
  },
  {
    title: "Barba",
    description:
      "Modelagem e alinhamento de barba com navalha para um resultado impecavel.",
    price: "A consultar",
    image: "/corte3.png",
  },
  {
    title: "Combo Completo",
    description:
      "Corte + barba. A experiencia completa para quem busca excelencia em cada detalhe.",
    price: "A consultar",
    image: "/corte2.png",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4 font-[var(--font-lato)]">
            O que oferecemos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Nossos <span className="text-gold italic">Servicos</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-gold/40" />
            <Scissors className="h-5 w-5 text-gold" />
            <div className="h-px w-16 bg-gold/40" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border hover:border-gold/40 transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[3/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-[var(--font-lato)]">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-gold font-bold text-lg">
                    {service.price}
                  </span>
                  <a
                    href="https://wa.me/5579999035513"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-gold transition-colors font-[var(--font-lato)]"
                  >
                    Agendar →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
