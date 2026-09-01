import React, { useState } from 'react';
import { ReservationDetails } from '../types';
import { BUSINESS_INFO } from '../data/menuData';
import { buildWhatsAppReservationLink } from '../utils/helpers';
import { Calendar, Users, Clock, Phone, User, MessageSquare, Send, Sparkles, MapPin } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const today = new Date().toISOString().split('T')[0];

  const [form, setForm] = useState<ReservationDetails>({
    name: '',
    phone: '',
    guests: '2 personas (Pareja)',
    date: today,
    time: '19:00',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    const url = buildWhatsAppReservationLink(form);
    window.open(url, '_blank');
  };

  return (
    <section id="reservas" className="py-14 sm:py-20 bg-[#0A0A0A] border-t border-white/10 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#F27D26]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Experiencia en el Local</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif italic font-black text-white leading-tight">
              ¿Quieres reservar tu mesa?
            </h2>

            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Celebra cumpleaños, aniversarios o una cena especial con amigos y familia en <strong className="text-white">DAMATA Pizza</strong>. Reserva tu espacio y te confirmamos de inmediato por WhatsApp.
            </p>

            <div className="p-4 rounded-2xl bg-[#141414] border border-white/10 space-y-2 text-xs text-white/70">
              <div className="flex items-center gap-2 text-[#F27D26] font-bold">
                <Clock className="w-4 h-4" />
                <span>Horario de atención en local:</span>
              </div>
              <p>{BUSINESS_INFO.schedule}</p>
              <div className="flex items-center gap-1.5 text-white/50 text-[11px] pt-1 border-t border-white/5">
                <MapPin className="w-3.5 h-3.5 text-[#F27D26]" />
                <span>{BUSINESS_INFO.address}, {BUSINESS_INFO.neighborhood}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#141414] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-lg font-serif italic font-bold text-white">
                  Formulario de Reserva
                </h3>
                <span className="text-xs font-bold text-[#25D366] bg-[#25D366]/10 px-3 py-1 rounded-full border border-[#25D366]/30">
                  Confirmación Inmediata
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/80 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#F27D26]" />
                      <span>Nombre del Titular *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre completo"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-[#F27D26] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/80 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-[#F27D26]" />
                      <span>Teléfono / WhatsApp *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: 312 884 7620"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-[#F27D26] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/80 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#F27D26]" />
                      <span>Número de Personas *</span>
                    </label>
                    <select
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#F27D26] focus:outline-none"
                    >
                      <option value="1 persona">1 persona</option>
                      <option value="2 personas (Pareja)">2 personas (Pareja)</option>
                      <option value="3 a 4 personas">3 a 4 personas</option>
                      <option value="5 a 8 personas">5 a 8 personas</option>
                      <option value="Más de 8 personas (Evento)">Más de 8 personas (Evento/Celebración)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/80 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#F27D26]" />
                      <span>Fecha *</span>
                    </label>
                    <input
                      type="date"
                      required
                      min={today}
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#F27D26] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-bold text-white/80 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#F27D26]" />
                      <span>Hora Estimada de Llegada *</span>
                    </label>
                    <select
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#F27D26] focus:outline-none"
                    >
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="22:00">10:00 PM</option>
                      <option value="23:00">11:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white/80 flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-[#F27D26]" />
                    <span>Ocasión especial u observaciones</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Es un cumpleaños, traer velas..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-[#F27D26] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-[1.01] active:scale-95"
                >
                  <Send className="w-4 h-4 fill-black" />
                  <span>SOLICITAR RESERVA POR WHATSAPP</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
