
import { useState } from "react";
import { NavLink, Link } from "react-router";
import { MapPin, Menu, X, Flower2 } from "lucide-react";

const links = [
  { to: "/", label: "Inicio", end: true },
  { to: "/productos", label: "Productos" },
  { to: "/nosotros", label: "Sobre nosotros" },
  { to: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `px-5 py-2 rounded-full text-sm transition-all duration-200 ${
      isActive
        ? "bg-brand-teal text-white shadow-sm"
        : "text-brand-petrol hover:text-brand-teal"
    }`;

  return (
    <header className="relative z-50 bg-brand-cream border-b-2 border-brand-teal/80">
      <div className="max-w-7xl mx-auto px-6 h-22.5 flex items-center justify-between">

        {/* LOGOTIPO */}
        <Link
          to="/"
          className="flex flex-col items-center justify-center self-stretch min-w-47.5 bg-white/60 rounded-b-2xl"
        >
          <Flower2 className="size-9 text-brand-teal mb-1" />

          <span className="text-3xl font-serif font-semibold text-brand-petrol leading-none">
            Perfumar
          </span>

          <span className="text-[9px] tracking-[0.28em] text-brand-petrol uppercase mt-1">
            Bienestar & Belleza
          </span>
        </Link>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={navClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* ACCESOS DERECHA */}
        <div className="hidden md:flex items-center gap-5 text-brand-petrol">
          <Link
            to="/contacto"
            aria-label="Cómo llegar y contactar"
            className="hover:text-brand-teal transition-colors"
          >
            <MapPin className="size-5" />
          </Link>

          <span className="h-7 w-px bg-brand-petrol/30" />

          <Link
            to="/contacto"
            className="text-sm font-medium hover:text-brand-teal transition-colors"
          >
            Visítanos
          </Link>
        </div>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          className="md:hidden p-2 text-brand-petrol"
        >
          {menuOpen ? (
            <X className="size-7" />
          ) : (
            <Menu className="size-7" />
          )}
        </button>
      </div>

      {/* NAVEGACIÓN MÓVIL */}
      {menuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-brand-cream border-b border-brand-teal/20 shadow-lg p-5 flex flex-col gap-3">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={navClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
