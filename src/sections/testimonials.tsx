import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Izac Silva",
    text: "Atendimento excelente e resultado ótimo.\nParceria e qualidade!",
    rating: 5,
  },
  {
    name: "Marcos Santos",
    text: "Lugar arejado e bem aconchegante!!\nAtendimento excelente!!",
    rating: 5,
  },
  {
    name: "Thenysson de Souza Silva",
    text: "Excelente atendimento.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4 font-[var(--font-lato)]">
            Depoimentos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            O que dizem nossos <span className="text-gold italic">clientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border p-8 relative"
            >
              <Quote className="h-8 w-8 text-gold/20 absolute top-6 right-6" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-[var(--font-lato)] italic">
                {`"${t.text}"`}
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-foreground font-bold text-sm">{t.name}</p>
                <p className="text-gold text-xs tracking-wider uppercase font-[var(--font-lato)]">Cliente Regular</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
