import React from 'react';
import { BUSINESS_INFO } from '../data/menuData';
import { Instagram, ExternalLink, Heart, MessageCircle, Sparkles, Camera } from 'lucide-react';

import imgPizzaDamata from '../assets/images/pizza_damata_1788293018160.jpg';
import imgPastaMar from '../assets/images/pasta_mar_1788293041363.jpg';
import imgPizzaDamataBbq from '../assets/images/pizza_damata_bbq_1788293054392.jpg';
import imgPizzaPepperoni from '../assets/images/pizza_pepperoni_1788293066467.jpg';
import imgComboItaliano from '../assets/images/combo_italiano_single_1788294570092.jpg';
import imgCalzoneDamata from '../assets/images/calzone_damata_1788293124744.jpg';
import imgLasanaMar from '../assets/images/lasana_mar_1788293139283.jpg';
import imgPastaRabiata from '../assets/images/pasta_rabiata_1788294523396.jpg';

export const InstagramSection: React.FC = () => {
  const posts = [
    {
      id: 1,
      image: imgPizzaDamata,
      caption: 'Nuestra Pizza Especial DAMATA: El secreto de la casa en Belén Rincón con pollo, champiñones, jamón y salsa showy 🍕🔥',
      likes: '482',
      comments: '39',
      tag: '#PizzaDAMATA',
    },
    {
      id: 2,
      image: imgLasanaMar,
      caption: 'Lasaña Delicia del Mar horneada a la perfección con mariscos, camarones y abundante mozzarella gratinado 🧀🌊',
      likes: '356',
      comments: '24',
      tag: '#LasagnaDelMar',
    },
    {
      id: 3,
      image: imgCalzoneDamata,
      caption: 'Calzone Artesanal DAMATA recién salido del horno con corteza trenzada y reducción balsámica gourmet 🥟✨',
      likes: '512',
      comments: '47',
      tag: '#CalzoneDAMATA',
    },
    {
      id: 4,
      image: imgPastaRabiata,
      caption: 'Pasta Rabiata con salsa picante artesanal, chorizo vela, pimentón y queso parmesano recién rallado 🍝🌶️',
      likes: '348',
      comments: '29',
      tag: '#PastaRabiata',
    },
    {
      id: 5,
      image: imgPizzaDamataBbq,
      caption: 'Pizza DAMATA BBQ: Pollo jugoso, tocineta crocante, piña glaseada y salsa barbacoa artesanal 🍕🥓',
      likes: '445',
      comments: '31',
      tag: '#DAMATABbq',
    },
    {
      id: 6,
      image: imgComboItaliano,
      caption: 'Combo DAMATA Italiano completo: Crema del día, pasta bolognesa artesanal, ensalada fresca y pan al ajillo ⭐',
      likes: '389',
      comments: '21',
      tag: '#ComboItaliano',
    },
    {
      id: 7,
      image: imgPastaMar,
      caption: 'Pastas Delicias del Mar en salsa marinera con calamar, camarones y tostadas de ajo al estilo italiano 🍝🌊',
      likes: '394',
      comments: '22',
      tag: '#PastasDelMar',
    },
    {
      id: 8,
      image: imgPizzaPepperoni,
      caption: 'Clásica Pizza Pepperoni con queso mozzarella derretido y borde crocante. ¡Pídela hoy al WhatsApp! ❤️🍕',
      likes: '620',
      comments: '58',
      tag: '#PepperoniDAMATA',
    },
  ];

  return (
    <section id="instagram" className="py-16 sm:py-24 bg-[#0E0E0E] border-t border-white/10 relative text-left">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#E1306C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#F27D26]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#E1306C] mb-2">
              <Camera className="w-4 h-4" />
              <span>Galería de Instagram</span>
              <span className="text-white/30">•</span>
              <span className="text-[#F27D26]">@damat.apizza</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif italic font-black text-white tracking-tight">
              Momentos DAMATA Pizza
            </h2>
            <p className="text-xs sm:text-sm text-white/60 mt-2 max-w-2xl">
              Descubre nuestras últimas publicaciones en Instagram: pizzas recién horneadas, preparaciones artesanales y momentos especiales en Belén Rincón.
            </p>
          </div>

          {/* Direct Link to Official Profile */}
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#E1306C] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#E1306C]/20 hover:scale-[1.02] active:scale-95 self-start sm:self-auto flex-shrink-0 cursor-pointer"
          >
            <Instagram className="w-4 h-4" />
            <span>Seguir {BUSINESS_INFO.instagramUser}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Gallery Grid of Instagram Posts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {posts.map((post) => (
            <a
              key={post.id}
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#E1306C]/60 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#E1306C]/20 block"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Tag pill in corner */}
              <div className="absolute top-2.5 left-2.5 z-10 group-hover:opacity-0 transition-opacity">
                <span className="text-[10px] font-mono font-bold bg-black/60 backdrop-blur-md text-white/90 px-2 py-0.5 rounded-md border border-white/10">
                  {post.tag}
                </span>
              </div>

              {/* Hover Overlay with Post Details & Link Indicator */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-3.5 sm:p-4 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#F77737] font-bold">
                    {BUSINESS_INFO.instagramUser}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#E1306C]/30 flex items-center justify-center border border-[#E1306C]/50">
                    <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs line-clamp-3 text-white/95 font-medium leading-snug">
                  {post.caption}
                </p>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[11px] sm:text-xs font-bold text-white/90">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-white/80" />
                      {post.comments}
                    </span>
                  </div>

                  <span className="text-[10px] text-[#FFA726] font-bold flex items-center gap-0.5">
                    <span>Ver</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Community Banner */}
        <div className="mt-8 sm:mt-12 p-6 rounded-3xl bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-zinc-900/90 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E1306C] to-[#F77737] flex items-center justify-center text-white flex-shrink-0 shadow-lg">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-serif italic font-bold text-white flex items-center justify-center sm:justify-start gap-1.5">
                <span>¿Disfrutaste tu pizza en DAMATA?</span>
                <Sparkles className="w-4 h-4 text-[#FFA726]" />
              </div>
              <p className="text-xs text-white/60">
                Sube tu foto y menciónanos con <strong className="text-white">@damat.apizza</strong> para aparecer en nuestras historias destacadas.
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 flex-shrink-0 cursor-pointer border border-white/15"
          >
            <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
            <span>Visitar @damat.apizza</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};

