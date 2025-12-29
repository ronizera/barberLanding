import { Button } from "@/components/ui/button"
import { Scissors } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
        src="/interior.jpg" fill alt="Barbearia" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Scissors className="w-8 h-8 text-primary" />
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">Tradição & Estilo</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-balance">
            A arte do <span className="text-primary">corte perfeito</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl text-pretty">
            Mais de 15 anos transformando homens em cavalheiros. Combinamos técnicas clássicas com as tendências mais
            modernas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base font-semibold px-8 cursor-pointer">
              Agendar Agora
            </Button>
            <Button size="lg" variant="outline" className="text-base font-semibold px-8 bg-transparent cursor-pointer">
              Ver Serviços
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
