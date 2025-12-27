"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="text-2xl font-bold tracking-tight text-primary font-sans">BARBER HOUSE</div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8">
                    <li>
                        <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Início</a>
                    </li>

                    <li>
                        <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Serviços</a>
                    </li>

                     <li>
                        <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">Sobre</a>
                    </li>

                     <li>
                        <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Galeria</a>
                    </li>

                     <li>
                        <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Preços</a>
                    </li>

                </ul>

                <div className="hidden md:block">
                    <Button size="lg" className="font-semibold">Agendar Horário</Button>
                </div>

                {/* Mobile Menu Button */}

                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu">
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-card border-b border-border">
                    <ul className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        <li>
                            <a href="#home" className="block text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Início</a>
                        </li>
                        <li>
                            <a href="#services" className="block text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Serviços</a>
                        </li>

                        <li>
                            <a href="#about" className="block text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre</a>
                        </li>

                        <li>
                            <a href="#gallery" className="block text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Galeria</a>
                        </li>

                        <li>
                            <a href="#pricing" className="block text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Preços</a>
                        </li>

                        <li>
                            <Button size="lg" className="w-full font-semibold">Agendar Horário</Button>
                        </li>
                    </ul>
                </div>
            )}

        </header>
    )
}