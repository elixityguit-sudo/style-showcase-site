import productDress from "@/assets/product-dress.jpg";
import productBlazer from "@/assets/product-blazer.jpg";
import productAccessories from "@/assets/product-accessories.jpg";

const categories = [
  {
    id: 1,
    name: "Vestidos",
    description: "Elegância para todas as ocasiões",
    image: productDress,
  },
  {
    id: 2,
    name: "Blazers",
    description: "Sofisticação no dia a dia",
    image: productBlazer,
  },
  {
    id: 3,
    name: "Acessórios",
    description: "Detalhes que fazem a diferença",
    image: productAccessories,
  },
];

const Categories = () => {
  return (
    <section id="collection" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4 block">
            Explore
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Nossas Categorias
          </h2>
          <div className="w-24 h-px bg-gradient-gold mx-auto" />
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative overflow-hidden cursor-pointer luxury-card rounded-lg"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="font-body text-sm text-foreground/60 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-body text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Ver mais</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
