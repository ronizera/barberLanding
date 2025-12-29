import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Essencial",
    price: "R$ 45",
    description: "Perfeito para manutenção regular",
    features: ["Corte de cabelo", "Lavagem", "Finalização", "Produtos básicos"],
  },
  {
    name: "Premium",
    price: "R$ 80",
    description: "A experiência completa",
    features: [
      "Corte de cabelo",
      "Barba completa",
      "Lavagem premium",
      "Hidratação",
      "Produtos importados",
      "Massagem relaxante",
    ],
    popular: true,
  },
  {
    name: "Executive",
    price: "R$ 120",
    description: "Para quem busca o melhor",
    features: [
      "Tudo do Premium",
      "Design de barba",
      "Tratamento capilar",
      "Sobrancelhas",
      "Bebida premium",
      "Atendimento VIP",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">Preços</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Planos para todos os estilos</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Escolha o pacote que melhor se adapta às suas necessidades.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular ? "border-primary shadow-lg shadow-primary/20 scale-105" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/serviço</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6">
                <Button className="w-full cursor-pointer" variant={plan.popular ? "default" : "outline"} size="lg">
                  Agendar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
