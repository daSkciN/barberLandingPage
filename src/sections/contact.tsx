import { Phone, MapPin, Clock, Instagram } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone / WhatsApp",
    lines: ["(79) 99903-5513", "(79) 98814-5715"],
    href: "https://wa.me/5579999035513",
  },
  {
    icon: MapPin,
    title: "Endereco",
    lines: ["Rua Bahia N\u00BA1665", "Siqueira Campos, Aracaju-SE"],
    href: "https://maps.app.goo.gl/EEqhTRiBuNJAKaQQ7",
  },
  {
    icon: Clock,
    title: "Horario",
    lines: ["Seg - Sab: 09h - 20h", "Domingo: Fechado"],
    href: undefined,
  },
  {
    icon: Instagram,
    title: "Instagram",
    lines: ["@ericlis_barber95"],
    href: "https://instagram.com/ericlis_barber95",
  },
]

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4 font-[var(--font-lato)]">
            Fale conosco
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Entre em <span className="text-gold italic">Contato</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mt-4 font-[var(--font-lato)]">
            Agende seu horario pelo WhatsApp ou visite nosso estudio. Estamos prontos para transformar seu visual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info) => {
            const Wrapper = info.href ? "a" : "div"
            const linkProps = info.href
              ? { href: info.href, target: "_blank" as const, rel: "noopener noreferrer" }
              : {}
            return (
              <Wrapper
                key={info.title}
                {...linkProps}
                className="group bg-card border border-border hover:border-gold/40 p-8 text-center transition-all duration-500"
              >
                <div className="w-14 h-14 mx-auto mb-5 border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                  <info.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-foreground font-bold tracking-wider uppercase text-sm mb-3">
                  {info.title}
                </h3>
                {info.lines.map((line) => (
                  <p key={line} className="text-muted-foreground text-sm font-[var(--font-lato)]">{line}</p>
                ))}
              </Wrapper>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5579999035513"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-primary-foreground px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-gold-light transition-colors font-[var(--font-lato)]"
          >
            <Phone className="h-5 w-5" />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
