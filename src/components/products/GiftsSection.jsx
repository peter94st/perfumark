
export function GiftsSection() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16" id="regalos">

            {/* Título */}
            <div className="flex items-center justify-center gap-6 mb-14">
                <div className="h-px flex-1 max-w-40 bg-brand-gold" />
                <h2 className="text-3xl md:text-4xl font-serif text-brand-petrol whitespace-nowrap">
                    Regalos originales
                </h2>
                <div className="h-px flex-1 max-w-40 bg-brand-gold" />
            </div>

            <div className="space-y-16">

                {/* Primer bloque: imagen izquierda */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div className="max-w-xs mx-auto w-full">
                        <img
                            src="/images/hero/setBaño.png"
                            alt="Ideas de regalos originales"
                            className="w-full h-[220px] md:h-[260px] object-cover rounded-xl"
                        />
                    </div>

                    <div className="space-y-5">
                        <h3 className="text-2xl md:text-3xl font-serif text-brand-petrol">
                            Un detalle especial
                        </h3>

                        <div className="h-[2px] w-14 bg-brand-gold" />

                        <p className="text-gray-600 leading-relaxed">
                            A veces, los pequeños detalles son los que más ilusión
                            hacen. En Perfumark encontrarás ideas originales para
                            sorprender a alguien especial en cualquier ocasión.
                        </p>
                    </div>

                </div>

                {/* Segundo bloque: imagen derecha */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div className="space-y-5 md:order-1">
                        <h3 className="text-2xl md:text-3xl font-serif text-brand-petrol">
                            Siempre hay algo que celebrar
                        </h3>

                        <div className="h-[2px] w-14 bg-brand-gold" />

                        <p className="text-gray-600 leading-relaxed">
                            Cumpleaños, aniversarios o simplemente porque sí.
                            Te ayudamos a encontrar ese regalo diferente que
                            convierte cualquier momento en una ocasión especial.
                        </p>
                    </div>

                    <div className="max-w-xs mx-auto w-full md:order-2">
                        <img
                            src="/images/hero/perfumes.png"
                            alt="Selección de regalos de Perfumark"
                            className="w-full h-[220px] md:h-[260px] object-cover rounded-xl"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}
