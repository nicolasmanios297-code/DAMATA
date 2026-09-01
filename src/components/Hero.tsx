import React from 'react';
import { BUSINESS_INFO } from '../data/menuData';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import imgPizzaDamata from '../assets/images/pizza_damata_1788293018160.jpg';

interface HeroProps {
  onOrderNow: () => void;
  onViewMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNow, onViewMenu }) => {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] border-b border-white/10 pt-8 pb-16 sm:py-20 text-left">
      {/* Visual background accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F27D26]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#D32F2F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Value Proposition & High-Density CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Promo Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-white/10 text-xs">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-[#F27D26] font-extrabold uppercase tracking-wider">
                {BUSINESS_INFO.slogan}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-white/70">Medellín, Belén Rincón</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif italic font-black tracking-tight text-white leading-[1.08]">
                Pizza artesanal, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D26] via-[#FFA726] to-[#FFCC80]">
                  sabor inigualable.
                </span>
              </h1>
              <p className="text-sm sm:text-base text-white/70 max-w-xl leading-relaxed">
                Masa crocante elaborada diariamente, queso mozzarella de primera calidad y combinaciones gourmet horneadas al instante. Pide a domicilio o reserva tu mesa en <strong className="text-white">DAMATA Pizza</strong>.
              </p>
            </div>

            {/* Quick Badges Grid */}
            <div className="grid grid-cols-3 gap-3 py-1">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[#F27D26] font-black text-sm sm:text-base">Masa Madre</div>
                <div className="text-[11px] text-white/50">Crocante y ligera</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[#F27D26] font-black text-sm sm:text-base">100% Mozzarella</div>
                <div className="text-[11px] text-white/50">Fundido perfecto</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[#F27D26] font-black text-sm sm:text-base">3:00 PM - 12 AM</div>
                <div className="text-[11px] text-white/50">Todos los días</div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOrderNow}
                className="py-4 px-8 rounded-2xl bg-[#F27D26] hover:bg-[#ff9142] text-black font-extrabold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-3 shadow-xl hover:shadow-[#F27D26]/30 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>HACER PEDIDO AHORA</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewMenu}
                className="py-4 px-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ver Carta Completa</span>
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visual Card with Official Logo & Product Shot */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#F27D26]/40 via-white/10 to-[#D32F2F]/40 blur-lg opacity-70" />

              <div className="relative bg-[#141414] border border-white/15 rounded-3xl p-5 sm:p-6 shadow-2xl space-y-5">
                {/* Image Showcase */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-zinc-900">
                  <img
                    src={imgPizzaDamata}
                    alt="Pizza DAMATA"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Logo Watermark Badge */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md p-2 rounded-2xl border border-white/15 flex items-center gap-2.5 shadow-xl">
                    <Logo size={36} />
                    <div className="pr-1 text-left">
                      <div className="text-xs font-serif italic font-black text-white leading-none">
                        DAMATA Pizza
                      </div>
                      <div className="text-[9px] text-[#F27D26] font-bold">
                        Belén Rincón
                      </div>
                    </div>
                  </div>

                  {/* Highlight pill */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 flex items-center justify-between text-left">
                    <div>
                      <div className="text-xs font-serif italic font-bold text-white">
                        Especialidad DAMATA
                      </div>
                      <div className="text-[10px] text-white/60">
                        Pollo, champiñones, jamón, salsa showy y parmesano
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 pl-2">
                      <span className="text-[10px] text-[#F27D26] block">Desde</span>
                      <span className="text-sm font-mono font-black text-white">
                        $24.000
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Info Ribbon */}
                <div className="grid grid-cols-2 gap-3 text-xs text-white/70">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <Clock className="w-4 h-4 text-[#F27D26] flex-shrink-0" />
                    <span className="text-[11px] leading-tight">3:00 PM a 12:00 AM</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <MapPin className="w-4 h-4 text-[#F27D26] flex-shrink-0" />
                    <span className="text-[11px] leading-tight">{BUSINESS_INFO.address}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
