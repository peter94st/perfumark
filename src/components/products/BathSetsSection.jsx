export function BathSetsSection () {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
                {/* Texto */}
                <div className="space-y-5">
                <h2 className="text-3xl md:text-4xl font-serif text-brand-petrol">
                    Sets de baño
                </h2>

                <div className="h-[2px] w-14 bg-brand-gold" />

                <p className="text-gray-600 leading-relaxed">
                    Regala momentos de bienestar y relajación con nuestra selección
                    de sets de baño. Conjuntos cuidadosamente presentados, ideales
                    para sorprender y disfrutar de pequeños momentos de cuidado personal.
                </p>
                </div>
                {/* Imagen */}
                <div className="max-w-sm mx-auto w-full">
                <img
                    src="/images/hero/exposicion.png"
                    alt="Sets de baño y regalo de Perfumark"
                    className="w-full h-[280px] md:h-[340px] object-cover rounded-xl"
                />
                </div>

                

            </div>
        </section>
    )
}