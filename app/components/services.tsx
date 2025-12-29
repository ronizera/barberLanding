import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Sparkles, Radar as Razor, Droplet } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Corte Tradicional",
    description: "Técnicas clássicas de barbeiro com tesoura e máquina, garantindo precisão e estilo atemporal.",
  },
  {
    icon: Sparkles,
    title: "Corte Moderno",
    description: "Estilos contemporâneos e tendências atuais para quem busca um visual diferenciado.",
  },
  {
    icon: Razor,
    title: "Barba & Bigode",
    description: "Modelagem, design e manutenção completa com navalha quente e produtos premium.",
  },
  {
    icon: Droplet,
    title: "Tratamentos",
    description: "Hidratação, óleos essenciais e cuidados especiais para cabelo e barba impecáveis.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Excelência em cada detalhe</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Oferecemos uma gama completa de serviços para o homem moderno que valoriza qualidade e estilo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border bg-background hover:border-primary transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
