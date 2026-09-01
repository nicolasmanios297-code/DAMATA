import React from 'react';
import { BUSINESS_INFO } from '../data/menuData';
import { MapPin, Clock, Phone, Navigation, ShieldCheck, Bike } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const coverageNeighborhoods = [
    'Belén Rincón',
    'El Saladito',
    'Belén San Bernardo',
    'La Mota',
    'Belén Las Playas',
    'Belén Aliadas',
    'Loma de los Bernal',
    'Rodeo Alto',
    'Guayabal',
    'Sectores aledaños en Medellín',
  ];

  return (
    <section id="contacto" className="py-14 sm:py-20 bg-[#0A0A0A] border-t border-white/10 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-10 pb-4 border-b border-white/10">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#F27D26] mb-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>Punto de Venta y Cobertura</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif italic font-black text-white">
            Ubicación y Domicilios
          </h2>
          <p className="text-xs sm:text-sm text-white/50 mt-1">
            Visítanos en nuestro acogedor local o recibe tus pizzas calientes y crocantes en tu puerta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-3xl bg-[#141414] border border-white/10 space-y-6 shadow-xl">
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/20 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Dirección del Local
                  </h3>
                  <p className="text-sm text-white/90 font-medium">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-[#F27D26]">
                    {BUSINESS_INFO.neighborhood}, {BUSINESS_INFO.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Horario de Atención
                  </h3>
                  <p className="text-sm text-white/90 font-medium">
                    {BUSINESS_INFO.scheduleDays}
                  </p>
                  <p className="text-xs text-white/60">
                    De 3:00 PM a 12:00 AM (Medianoche)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <div className="p-3 rounded-2xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Línea Directa de Pedidos
                  </h3>
                  <p className="text-sm text-[#25D366] font-mono font-bold">
                    {BUSINESS_INFO.whatsappPhone}
                  </p>
                  <p className="text-xs text-white/50">
                    Atención personalizada por WhatsApp y llamadas
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-[#F27D26]" />
                  <span>Cómo llegar con Google Maps</span>
                </a>
              </div>

            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-3xl bg-[#141414] border border-white/10 space-y-5 shadow-xl">
              
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#F27D26] text-black">
                  <Bike className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-serif italic font-bold text-white">
                    Zonas de Cobertura de Domicilios
                  </h3>
                  <p className="text-xs text-white/50">
                    Envíos rápidos directos desde el horno hasta tu mesa
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                {coverageNeighborhoods.map((neighborhood) => (
                  <div
                    key={neighborhood}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2 text-xs text-white/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] flex-shrink-0" />
                    <span className="truncate">{neighborhood}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 flex items-center gap-3 text-xs text-white/60">
                <ShieldCheck className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                <span>
                  Empaque térmico especial para garantizar que tu pizza llegue crujiente y caliente.
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
