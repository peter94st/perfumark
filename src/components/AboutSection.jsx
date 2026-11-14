import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

function BotanicalDecoration() {
  return (
    <svg
      className="absolute -right-5 bottom-0 w-36 md:w-44 text-brand-teal/20 pointer-events-none"
      viewBox="0 0 180 260"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M170 260 C125 205 115 145 80 20"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M145 220 C95 220 80 185 91 165 C125 168 148 190 145 220Z"
        fill="currentColor"
      />
      <path
        d="M125 185 C160 160 160 125 140 110 C110 130 105 160 125 185Z"
        fill="currentColor"
      />
      <path
        d="M105 130 C60 130 40 100 50 78 C85 82 105 105 105 130Z"
        fill="currentColor"
      />
      <path
        d="M85 90 C120 65 115 30 95 15 C65 40 65 70 85 90Z"
        fill="currentColor"
      />
      <path
        d="M155 245 C175 215 165 190 145 185"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function AboutSection () {
    return (
        <section
            className="grid grid-cols-1 md:grid-cols-2 items-stretch"
        >

            <div className="h-80 md:h-100">
            <img
                src="/images/about/perfumeria.jpg"
                alt="Interior de la tienda Perfumar"
                className="w-full h-full object-cover"
            />
            </div>

            <div className="relative overflow-hidden bg-white flex items-center px-8 py-10 md:px-12 lg:px-16">
                <BotanicalDecoration />

                <div className="relative z-10 max-w-lg space-y-4">
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-petrol">
                        Sobre nosotros
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                        En Perfumark creemos en el poder de los pequeños
                        placeres. Por eso te ofrecemos una cuidada selección
                        de perfumes, jabones y sets de baño, con la mejor
                        atención y un asesoramiento personalizado.
                    </p>

                    <Link
                        to='/nosotros'
                        className="inline-flex items-center gap-3 border border-brand-petrol text-brand-petrol hover:bg-brand-petrol hover:text-white px-5 py-2.5 rounded-full font-medium transition-colors"
                    >
                        Conoce más
                        <ArrowRight className="size-4" />
                    </Link>

                </div>

            </div>


        </section>
    )
}
