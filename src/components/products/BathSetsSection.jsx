export function BathSetsSection () {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16" id="sets-de-bano">
            <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
                {/* Texto */}
                <div className="space-y-5">
                <h2 className="text-3xl md:text-4xl font-serif text-brand-petrol">
                    Sets de baño
                </h2>

                <div className="h-[2px] w-14 bg-brand-gold" />

                <p className="text-gray-600 leading-relaxed">
                    Ideales para hacer un regalo original, que contienen geles, lociones corporales, sales de baño, pastillas de jabón, exfoliantes corporales, etc.
                    <br />
                    Una gran variedad de modelos, con distintos tamaños y precios.
                    <br />
                    Una vez consumidos los productos que contienen, la cesta-neceser-set puede pasar a formar parte de la decoración del baño o de otra pieza de la casa con los productos que desee (flores secas o de tela, piezas de colores, algodones, plantas, frascos y tarros decorativos, etc.).
                    Esta reutilización hará que la persona a quien usted regaló le recuerde siempre.
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