
import { MapPin, Phone, Clock, Navigation, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/info";

const mapUrl =
  "https://www.google.com/maps?q=Perfumark,+Calle+de+Canillas+102,+Madrid&output=embed";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Perfumark%2C+Calle+de+Canillas+102%2C+Madrid";

export default function Contact() {
  return (
    <div className="bg-brand-cream">

      {/* Cabecera */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-petrol">
            Contacto
          </h1>

          <div className="flex items-center justify-center gap-5 mt-5">
            <div className="h-px w-20 bg-brand-gold" />
            <span className="text-brand-teal">✿</span>
            <div className="h-px w-20 bg-brand-gold" />
          </div>

          {/* <p className="text-gray-600 mt-4">
            Ven a conocernos. Estaremos encantados de recibirte.
          </p> */}
        </div>
      </section>

      {/* Información y mapa */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-stretch">

          {/* Información */}
          <div className="flex flex-col justify-center gap-9">

            {/* Dirección */}
            <div className="flex items-start gap-5">
              <div className="bg-white p-3 rounded-xl">
                <MapPin className="size-6 text-brand-teal" />
              </div>

              <div>
                <h2 className="text-xl font-serif text-brand-petrol">
                  Ven a conocernos
                </h2>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {CONTACT_INFO.addres[0]}
                  <br />
                  {CONTACT_INFO.addres[1]}
                  <br />
                  {CONTACT_INFO.addres[2]}
                </p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex items-start gap-5">
              <div className="bg-white p-3 rounded-xl">
                <Phone className="size-6 text-brand-teal" />
              </div>

              <div>
                <h2 className="text-xl font-serif text-brand-petrol">
                  Llámanos
                </h2>
                <a
                  href="tel:+34917479450"
                  className="text-gray-600 mt-2 inline-block hover:text-brand-teal transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            {/* Correo electrónico */}
            <div className="flex items-start gap-5">
            <div className="bg-white p-3 rounded-xl">
                <Mail className="size-6 text-brand-teal" />
            </div>

            <div>
                <h2 className="text-xl font-serif text-brand-petrol">
                Escríbenos
                </h2>

                <a
                href="mailto:perfumark@hotmail.es"
                className="text-gray-600 mt-2 inline-block hover:text-brand-teal transition-colors"
                >
                {CONTACT_INFO.mail}
                </a>
            </div>
            </div>

            {/* Horario */}
            <div className="flex items-start gap-5">
              <div className="bg-white p-3 rounded-xl">
                <Clock className="size-6 text-brand-teal" />
              </div>

              <div>
                <h2 className="text-xl font-serif text-brand-petrol">
                  Horario
                </h2>

                <div className="text-gray-600 mt-2 space-y-1">
                  <p>Lunes a viernes</p>
                  <p className="text-sm">10:00–14:00 · 17:00–20:30</p>

                  <p className="mt-3">Sábados</p>
                  <p className="text-sm">10:30–14:00</p>
{/* 
                  <p className="mt-3">Domingos</p>
                  <p className="text-sm">Cerrado</p> */}
                </div>
              </div>
            </div>

            {/* Cómo llegar */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-petrol text-white px-6 py-3 rounded-lg w-fit hover:bg-brand-teal transition-colors"
            >
              <Navigation className="size-4" />
              Cómo llegar
            </a>
          </div>

          {/* Google Maps */}
          <div className="h-[400px] lg:h-[520px] rounded-2xl overflow-hidden shadow-md">
            <iframe
              src={mapUrl}
              title="Ubicación de Perfumark en Google Maps"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>
    </div>
  );
}
