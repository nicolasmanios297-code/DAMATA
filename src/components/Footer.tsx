import React from 'react';
import { BUSINESS_INFO } from '../data/menuData';
import { Logo } from './Logo';
import { Instagram, Phone, MapPin, Clock, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigateToMenu: () => void;
  onNavigateToReservations: () => void;
  onOpenCart: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateToMenu,
  onNavigateToReservations,
  onOpenCart,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 text-white/70 text-xs text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size={42} />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-serif italic font-black tracking-tight text-white">
                    DAMATA
                  </span>
                  <span className="text-[10px] font-black uppercase bg-[#F27D26] text-black px-1.5 py-0.5 rounded tracking-widest">
                    PIZZA
                  </span>
                </div>
                <p className="text-[10px] text-white/50 tracking-wider">
                  ¡SABOR ÚNICO!
                </p>
              </div>
            </div>

            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              Pizzería artesanal en Medellín, especializada en pizzas crujientes sobre masa madre, pastas al dente, lasagnas gratinadas, ensaladas frescas y combos.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#E1306C] hover:text-white flex items-center justify-center border border-white/10 transition-colors"
                title="Instagram @damat.apizza"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#25D366] hover:text-black flex items-center justify-center border border-white/10 transition-colors"
                title="WhatsApp DAMATA"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Navegación Rápida
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <button
                  onClick={onNavigateToMenu}
                  className="hover:text-[#F27D26] transition-colors cursor-pointer"
                >
                  Menú y Especialidades
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateToReservations}
                  className="hover:text-[#F27D26] transition-colors cursor-pointer"
                >
                  Reservar Mesa
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCart}
                  className="hover:text-[#F27D26] transition-colors cursor-pointer"
                >
                  Ver Carrito de Compras
                </button>
              </li>
              <li>
                <a
                  href="#instagram"
                  className="hover:text-[#E1306C] text-white/80 transition-colors flex items-center gap-1"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                  <span>Momentos DAMATA (@damat.apizza)</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Contacto y Punto de Venta
            </h4>
            <div className="space-y-2.5 text-xs text-white/60">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F27D26] flex-shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address}, {BUSINESS_INFO.neighborhood}, {BUSINESS_INFO.city}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white/80 font-mono"
                >
                  {BUSINESS_INFO.whatsappPhone}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#F27D26] flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.schedule}</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <p>© {new Date().getFullYear()} DAMATA Pizza. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Hecho con <Heart className="w-3 h-3 text-[#D32F2F] fill-[#D32F2F]" /> en Medellín
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Subir</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
