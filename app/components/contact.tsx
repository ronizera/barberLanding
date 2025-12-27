import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-card">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">Contato</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Agende seu horário</h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">Entre em contato conosco e garanta seu atendimento preferencial.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Informações</h3>
                        <div className="space-y-6">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div className="font-semibold mb-1">Endereço</div>
                            <div className="text-muted-foreground">Rua das Palmeiras, 123
                            < br />
                            Centro - São Paulo, SP</div>
                        </div>
                    </div>
                </div>


                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary"/>
                    </div>
                    <div>
                        <div className="font-semibold mb-1">Telefone</div>
                        <div className="text-muted-foreground">
                            (11) 98765-4321
                            <br />
                            (11) 3456-7890
                        </div>
                    </div>
                </div>

                <div></div>

            </div>

        

        </section>
    )
}