import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/menuData';
import { checkIsRestaurantOpen, formatCOP } from '../utils/helpers';
import { CartItem } from '../types';
import { Logo } from './Logo';
import {
  ShoppingBag,
  Phone,
  Clock,
  Menu as MenuIcon,
  X,
  MapPin,
  CalendarCheck,
  Instagram,
} from 'lucide-react';

interface HeaderProps {
  cartItems: CartItem[];
  onOpenCart: () => void;
  onNavigateToMenu: () => void;
  onNavigateToInstagram: () => void;
  onNavigateToReservations: () => void;
  onNavigateToContact: () => void;
  onNavigateToFeatured: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItems,
  onOpenCart,
  onNavigateToMenu,
  onNavigateToInstagram,
  onNavigateToReservations,
  onNavigateToContact,
  onNavigateToFeatured,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [status, setStatus] = useState(checkIsRestaurantOpen());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(checkIsRestaurantOpen());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  return (
    <>
      {/* Top micro bar for schedules and quick status */}
      <div className="bg-[#050505] border-b border-white/5 text-[11px] text-white/70 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    status.isOpen ? 'bg-emerald-400' : 'bg-amber-400'
                  }`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    status.isOpen ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}
                />
              </span>
              <strong className={status.isOpen ? 'text-emerald-400' : 'text-amber-400'}>
                {status.statusText}
              </strong>
              <span>({status.nextTime})</span>
            </span>

            <span className="text-white/30">•</span>

            <span className="flex items-center gap-1 text-white/60">
              <Clock className="w-3 h-3 text-[#F27D26]" />
              {BUSINESS_INFO.schedule}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-white/60">
              <MapPin className="w-3 h-3 text-[#F27D26]" />
              {BUSINESS_INFO.address} ({BUSINESS_INFO.neighborhood})
            </span>
            <span className="text-white/30">•</span>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#25D366] hover:underline font-bold"
            >
              <Phone className="w-3 h-3" />
              <span>WhatsApp: {BUSINESS_INFO.whatsappPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-2.5'
            : 'bg-[#0A0A0A] border-b border-white/10 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Brand Logo with Official DAMATA Visuals */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center gap-3 transition-transform active:scale-95"
            >
              <Logo size={42} />
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-serif italic font-black tracking-tight text-white group-hover:text-[#F27D26] transition-colors">
                    DAMATA
                  </span>
                  <span className="text-[10px] font-black uppercase bg-[#F27D26] text-black px-1.5 py-0.5 rounded tracking-widest">
                    PIZZA
                  </span>
                </div>
                <span className="text-[10px] text-white/50 tracking-wider">
                  ¡SABOR ÚNICO!
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-extrabold text-white/75">
            <button
              onClick={onNavigateToFeatured}
              className="hover:text-[#F27D26] transition-colors cursor-pointer"
            >
              Favoritos
            </button>
            <button
              onClick={onNavigateToMenu}
              className="hover:text-[#F27D26] transition-colors cursor-pointer"
            >
              Carta y Menú
            </button>
            <button
              onClick={onNavigateToReservations}
              className="hover:text-[#F27D26] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Reservas</span>
            </button>
            <button
              onClick={onNavigateToInstagram}
              className="hover:text-[#F27D26] text-white/80 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
              <span>Instagram</span>
            </button>
            <button
              onClick={onNavigateToContact}
              className="hover:text-[#F27D26] transition-colors cursor-pointer"
            >
              Ubicación
            </button>
          </nav>

          {/* Action CTAs: Order Drawer + WhatsApp */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenCart}
              className="relative py-2 px-3 sm:px-4 rounded-xl bg-[#F27D26] hover:bg-[#ff9142] text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg hover:shadow-[#F27D26]/20 active:scale-95 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-black flex-shrink-0" />
              <span className="hidden sm:inline">Tu Pedido</span>
              {totalQuantity > 0 && (
                <span className="bg-black text-[#F27D26] text-[11px] font-black px-1.5 py-0.5 rounded-full">
                  {totalQuantity}
                </span>
              )}
              {totalAmount > 0 && (
                <span className="hidden md:inline font-mono font-black border-l border-black/20 pl-2">
                  {formatCOP(totalAmount)}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#121212] border-b border-white/10 px-4 py-4 space-y-3 animate-in slide-in-from-top-2 text-left">
            <div className="p-3 bg-black/40 rounded-xl border border-white/5 text-xs text-white/70 space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <span
                  className={`w-2 h-2 rounded-full ${
                    status.isOpen ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}
                />
                <span className={status.isOpen ? 'text-emerald-400' : 'text-amber-400'}>
                  {status.statusText}
                </span>
                <span>- {status.nextTime}</span>
              </div>
              <p className="text-[11px] text-white/50">{BUSINESS_INFO.schedule}</p>
            </div>

            <div className="grid grid-cols-1 gap-2 pt-2 text-xs font-bold uppercase tracking-wider text-white/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToFeatured();
                }}
                className="p-2.5 rounded-lg hover:bg-white/5 text-left"
              >
                Favoritos de la Casa
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToMenu();
                }}
                className="p-2.5 rounded-lg hover:bg-white/5 text-left"
              >
                Menú y Especialidades
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToReservations();
                }}
                className="p-2.5 rounded-lg hover:bg-white/5 text-left"
              >
                Reservar Mesa
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToInstagram();
                }}
                className="p-2.5 rounded-lg bg-gradient-to-r from-[#E1306C]/20 to-[#F77737]/20 text-[#FFA726] font-bold text-left flex items-center justify-between"
              >
                <span>Galería Instagram (@damat.apizza)</span>
                <Instagram className="w-4 h-4 text-[#E1306C]" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToContact();
                }}
                className="p-2.5 rounded-lg hover:bg-white/5 text-left"
              >
                Ubicación y Horarios
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
