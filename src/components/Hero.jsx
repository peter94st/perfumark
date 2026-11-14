import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const images =[
    "images/hero/pat_elegante.png",
    "images/hero/jabones.png",
    "images/hero/exposicion.png",
    "images/hero/perfumes.png",
    "images/hero/setBaño.png",
]

export default function Hero () {
    const [ currentImage, setCurrentImage ] = useState(0)

    //cambio automatico de imagen
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((current) => (current +1) % images.length)
        }, 6000)

        return () => clearInterval(interval)
    })

    return (
        <section
            id="inicio"
            className="relative min-h-105 md:min-h-120 overflow-hidden bg-brand-cream"
        >

            <div className="absolute inset-0">
                {images.map((image, idx) => (
                    <img
                        key={`img_${idx}`}
                        src={image}
                        alt='Imagen de empresa'
                        className={`absolute inset-0 w-full h-full object-cover
                        transition-opacity duration-1500 ease-in-out
                        ${
                            currentImage === idx
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-brand-cream/85 via-40% to-transparent to-75%"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[420px] md:min-h-[480px] flex items-center">
                <div className="max-w-lg py-12 space-y-6">
                    <h1 className="text-5xl md:text-6xl font-serif font-semibold text-brand-petrol leading-tight">
                        Aromas que
                        <br />
                        hacen especial
                        <br />
                        tu día
                    </h1>

                    <p className="text-lg text-gray-700 max-w-md">
                        Perfumes, jabones y sets de baño
                        para cuidar de ti y de los tuyos.
                    </p>

                    <Link
                        to="/productos"
                        className="inline-flex items-center gap-3 bg-brand-teal hover:bg-brand-petrol text-white px-6 py-3 rounded-full font-medium transition-colors"
                    >
                        Descubre nuestra tienda
                        <ArrowRight className="size-5" />
                    </Link>

                </div>
            </div>

            {/* INDICADORES */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                {images.map((_, index) => (
                <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Mostrar imagen ${index + 1}`}
                    aria-current={currentImage === index}
                    className={`size-3 rounded-full transition-all duration-300 ${
                    currentImage === index
                        ? "bg-brand-teal scale-110"
                        : "bg-brand-petrol/20 hover:bg-brand-petrol/50"
                    }`}
                />
                ))}
            </div>

        </section>
    )


}