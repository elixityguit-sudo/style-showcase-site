import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import productPolo from "@/assets/product-polo.jpg";
import productShortFeatured from "@/assets/product-short-featured.jpg";
import productCamisetas from "@/assets/product-camisetas.jpg";

const products = [
  {
    id: 1,
    name: "Gola Polo Waffle",
    price: 99.99,
    image: productPolo,
    sizes: "P M G GG",
    tag: "Novo",
  },
  {
    id: 2,
    name: "Short",
    price: 90.00,
    image: productShortFeatured,
    tag: null,
  },
  {
    id: 3,
    name: "Camisetas",
    price: 49.99,
    image: productCamisetas,
    tag: "Destaque",
  },
  {
    id: 4,
    name: "Vestido Clássico",
    price: 749.90,
    originalPrice: 899.90,
    image: productCamisetas,
    tag: "Promoção",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4 block">
            Destaques
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Produtos em Alta
          </h2>
          <div className="w-24 h-px bg-gradient-gold mx-auto" />
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group luxury-card rounded-lg overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Tag */}
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground font-body text-xs tracking-wider uppercase px-3 py-1 rounded">
                    {product.tag}
                  </span>
                )}

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-background/90 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-background/90 hover:bg-primary hover:text-primary-foreground"
                  >
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 lg:p-6">
                <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="font-body text-lg font-medium text-primary">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                  {product.originalPrice && (
                    <span className="font-body text-sm text-muted-foreground line-through">
                      R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
