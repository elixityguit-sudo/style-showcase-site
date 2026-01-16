import { Crown, Award, Heart, Sparkles } from "lucide-react";
import logo from "@/assets/logo-souza-modas.jpg";

const features = [
  {
    icon: Crown,
    title: "Exclusividade",
    description: "Peças selecionadas com curadoria especial para você.",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Materiais nobres e acabamentos impecáveis.",
  },
  {
    icon: Heart,
    title: "Atendimento VIP",
    description: "Experiência de compra personalizada e especial.",
  },
  {
    icon: Sparkles,
    title: "Tendências",
    description: "Sempre à frente com as últimas novidades da moda.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4 block">
              Nossa História
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              A Arte de Vestir com{" "}
              <span className="text-gradient-gold">Elegância</span>
            </h2>
            <p className="font-body text-foreground/70 mb-6 leading-relaxed">
              A Souza Modas nasceu da paixão por moda e do desejo de proporcionar 
              experiências únicas. Cada peça de nossa coleção é cuidadosamente 
              selecionada para garantir qualidade, estilo e sofisticação.
            </p>
            <p className="font-body text-foreground/70 mb-8 leading-relaxed">
              Acreditamos que a moda é uma forma de expressão pessoal, e nossa 
              missão é ajudar você a encontrar peças que reflitam sua personalidade 
              e realcem sua beleza natural.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <feature.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="font-body text-sm text-foreground/60">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logo/Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-8 border border-primary/20 rounded-lg transform rotate-3" />
              <div className="absolute -inset-4 border border-primary/30 rounded-lg transform -rotate-3" />
              
              {/* Main Logo */}
              <div className="relative bg-card p-8 lg:p-12 rounded-lg border-gradient-gold">
                <img
                  src={logo}
                  alt="Souza Modas"
                  className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
