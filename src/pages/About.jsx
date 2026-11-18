
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "Excelente atención! Buenos precios y una calidad de perfumes espectaculares",
    stars: 5,
    author: "Jimena P."
  },
    {
    text: "Unas colonias perfectas,huelen que alimentan,siempre encuentro la que quiero,y todo barato.Frascos originales a buen precio,rellenos si quieres(Hay de corazones,de flores,de pelotas,de bolsos...) Yo tengo uno de un bolso que tiene para guardar dos colonias,super original. Y por supuesto los dueños son super amables,majos, simpáticos,pacientes,te lo enseñan todo...De 10. Yo compro todas mis colonias allí. Lo recomiendo muchísimo.☺️😀😃😊",
    stars: 5,
    author: "Nadia B."
  },
  {
    text: "Todo Excelente!  ya no sólo por el magnífico trato del dueño, sino por la calidad de sus perfumes! Estupendo servicio, calidad superbuena porque duran los perfumes un montón y precios increibles! Un 10/10",
    stars: 5,
    author: "Virginia B.S."
  },
  {
    text: "Me encanta esta tienda, quienes me atienden en ella y los perfumes que venden. Llevo años usándolos y son verdaderamente buenos, tienen muy buen aroma y fijador, como los originales. Los recomiendo 100%",
    stars: 5,
    author: "Ilo D."
  },

];

export default function About() {
  return (
    <div className="bg-brand-cream">

      {/* Cabecera */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-petrol">
            Sobre Perfumark
          </h1>

          <div className="flex items-center justify-center gap-5 mt-5">
            <div className="h-px w-20 bg-brand-gold" />
            <span className="text-brand-teal">✿</span>
            <div className="h-px w-20 bg-brand-gold" />
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Imagen */}
          <div className="h-[350px] md:h-[480px]">
            <img
              src="/images/about/perfumeria.jpg"
              alt="Interior de Perfumark"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <span className="text-brand-teal uppercase tracking-[0.2em] text-xs font-semibold">
              Nuestra esencia
            </span>

            <h2 className="text-3xl md:text-4xl font-serif text-brand-petrol">
              Mucho más que una perfumería
            </h2>

            <p className="text-gray-600 leading-relaxed">
              En el corazón de Prosperidad, en Madrid, se encuentra
              Perfumark, una perfumería de barrio donde descubrir
              nuevos aromas y encontrar ese perfume que encaja contigo.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Nos gusta ofrecer una amplia variedad de fragancias,
              productos de cuidado personal y pequeños detalles
              para regalar. Queremos que cada persona encuentre
              lo que busca, siempre con una atención cercana y
              un trato personalizado.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Porque creemos que los pequeños detalles y los buenos
              aromas pueden hacer especial cualquier momento.
            </p>

            <div className="w-16 h-px bg-brand-gold pt-1" />

            <p className="font-serif italic text-brand-petrol text-lg">
              Te esperamos en Perfumark.
            </p>
          </div>

        </div>
      </section>

      {/* Opiniones */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-10">
            <span className="text-brand-teal uppercase tracking-[0.2em] text-xs font-semibold">
              La opinión de quienes nos visitan
            </span>

            <h2 className="text-3xl md:text-4xl font-serif text-brand-petrol mt-3">
              Nuestros clientes opinan
            </h2>

            <div className="flex justify-center items-center gap-2 mt-4">
              <div className="flex gap-1 text-brand-gold">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="size-5 fill-current"
                  />
                ))}
              </div>

              <span className="font-semibold text-brand-petrol">
                4,8/5
              </span>

              <span className="text-sm text-gray-500">
                · 56 reseñas en Google
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-brand-cream rounded-xl p-6 flex flex-col gap-5"
              >
                <Quote className="size-7 text-brand-gold" />

                <p className="font-serif text-lg text-brand-petrol">
                  “{review.text}”
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {review.author}
                  </span>

                  <div className="flex gap-0.5 text-brand-gold">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="size-3 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://maps.app.goo.gl/ajk8ejsNnPvBKetw9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-teal font-semibold hover:text-brand-petrol transition-colors"
            >
              Ver todas las opiniones en Google ↗
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
