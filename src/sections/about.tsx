import { Award, Clock, Users } from "lucide-react"

const stats = [
  { icon: Users, value: "5000+", label: "Clientes Atendidos" },
  { icon: Clock, value: "8+", label: "Anos de Experiencia" },
  { icon: Award, value: "5", label: "Estrelas no Google" },
]

export function About() {
  return (
    <section id="sobre" className="py-24 bg-dark-lighter">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/images/hero-barbershop.jpg"
                alt="Interior elegante do Estudio Ericlis Barber"
                className="object-cover"
              />
              <div className="absolute inset-0 border border-gold/20" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold/30 hidden lg:block" />
          </div>

          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4 font-[var(--font-lato)]">
              Nossa Historia
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Mais que uma barbearia,{" "}
              <span className="text-gold italic">uma experiencia</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 font-[var(--font-lato)]">
              O Estudio Ericlis Barber nasceu da paixao pelo cuidado masculino e pela arte de transformar. Localizado no coracao de Aracaju, oferecemos um espaco onde cada detalhe foi pensado para proporcionar conforto, estilo e exclusividade.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 font-[var(--font-lato)]">
              Com profissionais altamente qualificados e um ambiente sofisticado, cada visita se torna um momento de renovacao. Aqui, voce nao faz apenas um corte - voce vive uma experiencia unica.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="h-6 w-6 text-gold mx-auto mb-3" />
                  <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs tracking-wider uppercase text-muted-foreground mt-1 font-[var(--font-lato)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
