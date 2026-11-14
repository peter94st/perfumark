import { FragancesSection } from "@/components/products/FragancesSection";
import { SoapsSection } from "@/components/products/SoapsSection";
import { BathSetsSection } from "@/components/products/BathSetsSection";
import { GiftsSection } from "@/components/products/GiftsSection";

export default function Products() {
  return (
    <div className="bg-brand-cream">

      {/* Título principal */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-petrol">
            Nuestros productos
          </h1>

          <div className="flex items-center justify-center gap-5 mt-5">
            <div className="h-px w-20 bg-brand-gold" />
            <span className="text-brand-teal">✿</span>
            <div className="h-px w-20 bg-brand-gold" />
          </div>
        </div>
      </section>


        <FragancesSection />
        <SoapsSection />
        <BathSetsSection />
        <GiftsSection />
    </div>
  );
}