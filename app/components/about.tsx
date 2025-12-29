import { Award, Users, Clock, Star } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Award, value: "15+", label: "Anos de Experiência" },
  { icon: Users, value: "10K+", label: "Clientes Satisfeitos" },
  { icon: Clock, value: "24/7", label: "Agendamento Online" },
  { icon: Star, value: "4.9", label: "Avaliação Média" },
]

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border">
              <Image
                src="/corte.jpg"
                fill
                alt="Barbeiro profissional"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-0 h-48 bg-primary/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">Sobre Nós</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Tradição que se renova a cada corte</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
              Fundada em 2009, a Barber House se tornou referência em cortes masculinos e cuidados com a barba. Nossa
              equipe de barbeiros experientes combina técnicas tradicionais com as últimas tendências.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Cada cliente é único, e nosso compromisso é garantir que você saia daqui com um visual impecável e
              confiança renovada.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
