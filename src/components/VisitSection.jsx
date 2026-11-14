import { MapPin, Clock, Navigation } from "lucide-react";

const mapUrl =
  "https://www.google.com/maps?q=Perfumark,+Calle+de+Canillas+102,+Madrid&output=embed";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Perfumark%2C+Calle+de+Canillas+102%2C+Madrid";

export default function VisitSection() {
  return (
    <section className="bg-[#DDECE9] py-12 md:py-14">
      <div className="max-w-6xl mx-auto px-6">

        {/* Título */}
        {/* <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-petrol">
            Ven a visitarnos
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Estaremos encantados de recibirte.
          </p>
        </div> */}

        {/* Contenido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Información */}
          <div className="flex flex-col gap-6">

            <div className="flex items-start gap-4">
              <MapPin className="size-6 text-brand-teal shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-brand-petrol">
                  Dónde estamos
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Calle de Canillas, 102
                  <br />
                  28002 Madrid
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="size-6 text-brand-teal shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-brand-petrol">
                  Horario
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Lunes a viernes: 10:00–14:00 y 17:00–20:30
                  <br />
                  Sábados: 10:30–14:00
                  <br />
                  Domingos: cerrado
                </p>
              </div>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-teal font-semibold text-sm hover:text-brand-petrol transition-colors"
            >
              <Navigation className="size-4" />
              Cómo llegar
            </a>
          </div>

          {/* Mapa */}
          <div className="h-[260px] rounded-xl overflow-hidden shadow-sm">
            <iframe
              src={mapUrl}
              title="Ubicación de la tienda"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}