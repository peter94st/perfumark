import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Droplets } from "lucide-react";

import { soapsList } from "./soapsList";

export function SoapsSection () {
    return (
        <section className="py-16 md:py-20" id="jabones">
            
            {/* ENCABEZADO */}
            <div className="max-w-3xl mx-auto px-6 text-center mb-12">
                <span className="text-brand-teal uppercase tracking-[0.2em] text-xs font-semibold">
                    Cuidado natural
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-brand-petrol mt-3">
                    Jabones
                </h2>
                <div className="h-[2px] w-14 bg-brand-gold mx-auto mt-5" />

                <p className="text-gray-600 leading-relaxed mt-5">
                    Descubre nuestros jabones artesanales con base de aceite de oliva, elaborados con ingredientes naturales y excelentes aromas. Sin glicerina artificial.
                </p>
            </div>

            {/* Imagen central */}
            <div className="max-w-md mx-auto px-6 mb-12">
                <img
                    src="/images/hero/jabones.png"
                    alt="Selección de jabones artesanales de Perfumark"
                    className="w-full h-[220px] md:h-[260px] object-cover rounded-xl shadow-sm"
                />
            </div>

            {/* Carrusel */}
            <div className="max-w-7xl mx-auto px-6">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2
                        },
                        1024:{
                            slidesPerView: 3
                        }
                    }}
                    className="soaps-swiper pb-14!"
                >
                    {soapsList.map((soap) => (
                        <SwiperSlide key={soap.id}>
                            <article
                                className="rounded-xl p-7 h-full border border-black/5 shadow-sm"
                                style={{ backgroundColor: `${soap.colorCode}12` }}
                            >
                                {/* nombre e icono */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className="flex items-center justify-center size-11 rounded-full"
                                        style={{
                                            backgroundColor: `${soap.colorCode}18`,
                                            color: soap.colorCode
                                        }}
                                    >
                                        <Droplets className="size-6" />
                                    </div>
                                    <h3
                                        className="text-xl font-serif font-semibold"
                                        style={{ color: soap.colorCode }}
                                    >
                                        {soap.name}
                                    </h3>
                                </div>

                                {/* propiedades */}
                                <div className="mb-5">
                                    <h4 className="text-xs font-bold tracking-widest text-brand-petrol mb-2">
                                        Propiedades:
                                    </h4>

                                    <div className="flex flex-wrap gap-2">
                                        {soap.properties.map((property) => (
                                            <span className="text-xs font-medium text-gray-700 uppercase" key={property}>
                                                {property}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* tipo de piel */}
                                <div className="mb-5">
                                    <h4 className="text-xs font-bold tracking-widest text-brand-petrol mb-2">
                                        Tipo de piel
                                    </h4>

                                    <div className="flex flex-wrap gap-2">
                                        {soap.skinTypes.map((skin => (
                                            <span
                                                key={skin}
                                                className="text-xs bg-white/70 text-brand-petrol px-3 py-1.5 rounded-full"
                                            >
                                                {skin}
                                            </span>
                                        )))}
                                    </div>
                                </div>

                                {/* para */}
                                {soap.extra.length > 0 && (
                                    <div className="pt-4 border-t border-black/10">
                                        <ul className="space-y-1">
                                            {soap.extra.map((item) => (
                                                <li key={item} className="text-sm text-gray-700">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    )
}
