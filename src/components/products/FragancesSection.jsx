export function FragancesSection () {
    return (
      <section className="max-w-6xl mx-auto px-6 pb-16" id="fragancias">
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 items-center">

          {/* Imagen */}
          <div className="max-w-sm mx-auto w-full">
            <img
              src="/images/hero/pat_elegante.png"
              alt="Selección de perfumes de Perfumark"
              className="w-full h-[280px] md:h-[340px] object-cover rounded-xl"
            />
          </div>

          {/* Texto */}
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-petrol">
               Perfumes
            </h2>

            <div className="h-[2px] w-14 bg-brand-gold" />

            <p className="text-gray-600 leading-relaxed">
              {/* Descubre nuestra selección de fragancias para cada estilo
              y ocasión. En Perfumark encontrarás aromas para todos
              los gustos, desde los más frescos y suaves hasta los más
              intensos y envolventes. */}
                Gran variedad de perfumes para hombre, mujer, unisex e infantil que le <span className="font-bold">recordarán</span> sus aromas más apreciados, con una gran fijación y permanencia. Le sorprenderá su calidad. Son perfumes para toda la vida.
                Todas las familias olfativas: floral, cítrica, amaderada, oriental, frutal, aromática, chipre, fougére, etc., con muchas variaciones en cada una de ellas.
                Cuando agote el perfume, el frasco vacío no va a la basura, ya que es recargable y se ahorra 2 € en la recarga.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Ven a descubrir tu próximo aroma favorito. Estaremos
              encantados de ayudarte a encontrarlo.
            </p>

            <p className="text-gray-600 leading-relaxed">
              También pequeños sprays y roll-ones para el bolso.
            </p>
          </div>

        </div>
      </section>
    )
}