import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Coleção de moda elegante"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl animate-slide-up">
          <span className="inline-block font-body text-sm tracking-[0.3em] text-primary uppercase mb-6">
            Nova Coleção 2025
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
            <span className="text-foreground">Elegância</span>
            <br />
            <span className="text-gradient-gold">Atemporal</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-foreground/70 mb-8 max-w-lg leading-relaxed">
            Descubra peças exclusivas que refletem sofisticação e estilo único. 
            Moda que transcende o tempo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="luxury" size="lg" className="group">
              Ver Coleção
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
        <span className="font-body text-xs tracking-widest text-foreground/50 uppercase">
          Role para baixo
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
