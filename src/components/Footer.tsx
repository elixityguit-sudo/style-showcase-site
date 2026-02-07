import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo-souza-modas.jpg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary/50 border-t border-border/30">
      {/* Newsletter Section */}
      <div className="border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Fique por Dentro das <span className="text-gradient-gold">Novidades</span>
            </h3>
            <p className="font-body text-foreground/60 mb-8">
              Inscreva-se para receber ofertas exclusivas e lançamentos em primeira mão.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 bg-background/50 border-border/50 focus:border-primary"
              />
              <Button variant="luxury" type="submit">
                Inscrever
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Souza Modas"
                className="h-12 w-12 object-contain rounded"
              />
              <span className="font-display text-xl tracking-widest text-primary">
                SOUZA MODAS
              </span>
            </div>
            <p className="font-body text-sm text-foreground/60 mb-6 leading-relaxed">
              Elegância e sofisticação em cada detalhe. 
              Sua loja de moda exclusiva.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10" asChild>
                <a href="https://www.instagram.com/souzxmodas?igsh=MTFpOGZleXN5a3lzMQ==" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {["Início", "Coleção", "Novidades", "Sobre Nós", "Contato"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-sm text-foreground/60 hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">
              Categorias
            </h4>
            <ul className="space-y-3">
              {["Vestidos", "Blazers", "Saias", "Acessórios", "Promoções"].map((cat) => (
                <li key={cat}>
                  <a
                    href="#"
                    className="font-body text-sm text-foreground/60 hover:text-primary transition-colors duration-300"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-foreground/50">
              © 2025 Souza Modas. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-body text-xs text-foreground/50 hover:text-primary transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="font-body text-xs text-foreground/50 hover:text-primary transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
