import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const mapUrl = "https://www.google.com/maps?q=Perfumark,+Calle+de+Canillas+102,+Madrid&output=embed"

const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Perfumark%2C+Calle+de+Canillas+102%2C+Madrid"

export default function VisitSection() {
    return (
        <section className="bg-[#DDECE9] py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* titulo */}
                <div className="text-center mb-12 space-y-3">
                    <span className="text-brand-teal uppercase tracking-[0.2rem] text-xs font-semibold">
                        Estamos cerca de ti 
                    </span>

                    <div className="flex items-center justify-center gap-5">
                        <div className="h-px w-16 md:w-32 bg-brand-gold" />
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-petrol whitespace-nowrap">
                            Visítanos
                        </h2>
                        <div className="h-px w-16 md:w-32 bg-brand-gold" />
                    </div>

                    <p className="text-gray-600">
                        Estaremos encantados de recibirte
                    </p>
                </div>

                {/* CONTENIDO */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                    {/* informacion */}
                    <div className="flex flex-col justify-center space-y-8">

                        {/* Dirección */}
                        <div className="flex gap-4">
                            <MapPin className="size-7 text-brand-teal shrink-0" />
                            <div>
                                <h3 className="text-xl font-serif text-brand-petrol mb-2">
                                    Dónde estamos
                                </h3>
                                <p className="text-gray-700">
                                    Calle de Canillas, 102
                                    <br />
                                    28002 Madrid
                                </p>
                            </div>
                        </div>

                        {/* Horario */}
                        <div className="flex gap-4">
                            <Clock className="size-7 text-brand-teal shrink-0" />
                            <div>
                                <h3 className="text-xl font-serif text-brand-petrol mb-2">
                                    Horario 
                                </h3>

                                <div className="text-gray-700 space-y-1">
                                    <p>Lunes a viernes</p>
                                    <p className="font-medium">
                                        10:00 - 14:00 · 17:00 - 20:30
                                    </p>

                                    <p>Sábados</p>
                                    <p className="font-medium">
                                        10:30-14:00
                                    </p>

                                    <p className="pt-2 text-gray-500">
                                        Domingos cerrado
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* TELEFONO */}
                        <div className="flex gap-4">
                            <Phone className="size-7 text-brand-teal shrink-0" />
                            <div>
                                <h3 className="text-xl font-serif text-brand-petrol mb-2">
                                    Contacto
                                </h3>
                                <a 
                                    href="tel:+34917479450"
                                    className="text-gray-700 hover:text-brand-teal transition-colors"
                                >
                                    917 47 94 50
                                </a>
                            </div>
                        </div>

                        {/* Botón */}
                        <div>
                            <a 
                                href={directionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-brand-teal hover:bg-brand-petrol text-white px-6 py-3 rounded-full font-medium transition-colors"
                            >
                                Cómo llegar
                                <Navigation className="size-5" />
                            </a>
                        </div>
                    </div>

                    {/* Google Maps */}
                    <div className="min-h-[350px] lg:min-h-[420px] rounded-2xl overflow-hidden shadow-md">
                        <iframe 
                            src={mapUrl}
                            title="Ubicación de Perfumark en Google Maps"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "420px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" 
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
