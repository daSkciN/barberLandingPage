import { Scissors } from "lucide-react"

const galleryImages = [
  { src: "src/assets/hero-barbershop.jpg", alt: "Ambiente do studio" },
  { src: "src/assets/corte1.png", alt: "Corte de cabelo" },
  { src: "src/assets/corte2.png", alt: "Servico de barba" },
  { src: "src/assets/service-grooming.jpg", alt: "Produtos" },
]

export function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-dark-lighter">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4 font-[var(--font-lato)]">
            Nosso trabalho
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Galeria do <span className="text-gold italic">Estudio</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-gold/40" />
            <Scissors className="h-5 w-5 text-gold" />
            <div className="h-px w-16 bg-gold/40" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${i === 0 ? "aspect-square" : "aspect-square"} overflow-hidden`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-foreground text-sm tracking-[0.15em] uppercase font-[var(--font-lato)]">
                    {img.alt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
