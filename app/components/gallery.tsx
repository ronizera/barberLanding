import Image from "next/image"

export function Gallery() {
  const images = [
    { url: "/gallery1.jpg", alt: "Corte fade moderno" },
    { url: "/gallery2.jpg", alt: "Pompadour clássico" },
    { url: "/gallery3.jpg", alt: "Barba estilizada" },
    { url: "/gallery4.jpg", alt: "Undercut" },
    { url: "/gallery5.jpg", alt: "Interior da barbearia" },
    { url: "/gallery6.jpg", alt: "Ferramentas profissionais" },
  ]

  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">Galeria</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Nossos trabalhos falam por si</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Confira alguns dos nossos melhores cortes e transformações.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className=" relative aspect-square rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 group cursor-pointer"
            >
              <Image
                src={image.url || "/placeholder.svg"}
                fill
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
