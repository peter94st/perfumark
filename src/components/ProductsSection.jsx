
import { Link } from "react-router";
import { Sprout, Flower2, Bath, Gift, ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Perfumes",
    description: "Aromas para cada personalidad",
    icon: Sprout,
    color: "bg-[#DDECE9]",
    iconColor: "text-brand-teal",
  },
  {
    title: "Jabones",
    description: "Cuida tu piel cada día",
    icon: Flower2,
    color: "bg-[#F1E7CF]",
    iconColor: "text-[#A77B28]",
  },
  {
    title: "Sets de baño",
    description: "Momentos para desconectar",
    icon: Bath,
    color: "bg-[#E8E4D9]",
    iconColor: "text-brand-petrol",
  },
  {
    title: "Regalos",
    description: "Detalles que enamoran",
    icon: Gift,
    color: "bg-[#F3E5DF]",
    iconColor: "text-[#B66C4D]",
  },
];

export default function ProductsSection() {
  return (
    <section id="productos" className="bg-brand-cream py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-6 space-y-3">
          <span className="text-brand-teal uppercase tracking-[0.2em] text-xs font-semibold">
            Descubre nuestra selección
          </span>

          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-px flex-1 max-w-52 bg-brand-gold" />

            <h2 className="text-4xl md:text-5xl font-serif text-brand-petrol whitespace-nowrap">
                Nuestros productos
            </h2>

            <div className="h-px flex-1 max-w-52 bg-brand-gold" />
            </div>

          <p className="text-gray-600 max-w-xl mx-auto">
            Pequeños detalles que despiertan los sentidos
            y hacen especial cada momento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                to="/productos"
                className={`group ${category.color} rounded-2xl p-7 min-h-56 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="flex justify-between items-start">
                  <Icon
                        className={`size-20 ${category.iconColor}`}
                        strokeWidth={1.3}
                    />

                  <ArrowUpRight className={`size-5 ${category.iconColor} transition-transform group-hover:translate-x-1 group-hover:-translate-y-1`} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-serif text-brand-petrol">
                    {category.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
