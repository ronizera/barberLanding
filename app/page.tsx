import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Pricing } from "./components/pricing";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="h-min-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Pricing />
      <Contact />
      <Footer />
      
    </div>
  );
}
