
import { Link } from "react-router";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Inicio", to: "/" },
  { label: "Productos", to: "/productos" },
  { label: "Sobre nosotros", to: "/nosotros" },
  { label: "Contacto", to: "/contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-petrol text-white">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Marca */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <div className="flex items-center">
                <span className="font-['Montserrat'] font-semibold uppercase tracking-[0.35em]">
                  Perfumar
                </span>
                <img src="/iconPerfumarkWhiteBg.svg" alt="" className="w-6 h-6 object-contain ml-0.5"/>
              </div>
              <span className="text-[10px] tracking-[0.28em] uppercase text-brand-gold">
                Bienestar & Belleza
              </span>
            </Link>

            <div className="w-12 h-px bg-brand-gold" />

            <p className="text-white/75 text-sm leading-relaxed max-w-xs">
              Pequeños detalles que hacen especial
              cada momento.
            </p>
          </div>

          {/* Navegación */}
          <div className="space-y-5">
            <h3 className="text-lg font-serif text-brand-gold">
              Enlaces
            </h3>

            <nav className="flex flex-col items-start gap-3">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-white/75 hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div className="space-y-5">
            <h3 className="text-lg font-serif text-brand-gold">
              Encuéntranos
            </h3>

            <div className="flex gap-3 text-sm text-white/75">
              <MapPin className="size-5 text-brand-gold shrink-0" />
              <span>
                Calle de Canillas, 102
                <br />
                28002 Madrid
              </span>
            </div>

            <a
              href="tel:+34917479450"
              className="flex items-center gap-3 text-sm text-white/75 hover:text-brand-gold transition-colors"
            >
              <Phone className="size-5 text-brand-gold" />
              917 47 94 50
            </a>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Perfumark%2C+Calle+de+Canillas+102%2C+Madrid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand-gold hover:text-white transition-colors"
            >
              Cómo llegar
              <ArrowUpRight className="size-4" />
            </a>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="border-t border-white/15 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Perfumark. Todos los derechos reservados.
          </p>

          <p className="text-xs text-white/50">
            Belleza & Bienestar
          </p>
        </div>

      </div>
    </footer>
  );
}
