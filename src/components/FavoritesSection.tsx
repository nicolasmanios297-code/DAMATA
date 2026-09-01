import React from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menuData';
import { formatCOP } from '../utils/helpers';
import { Star, Plus, Flame, ChefHat } from 'lucide-react';

interface FavoritesSectionProps {
  onSelectItem: (item: MenuItem) => void;
}

export const FavoritesSection: React.FC<FavoritesSectionProps> = ({ onSelectItem }) => {
  const favoriteIds = [
    'pizza-damata',
    'pizza-iberica',
    'lasagna-especial',
    'pasta-delicias-del-mar',
    'combo-damata-gourmet',
    'bebida-limonada-saborizada',
  ];

  const favorites = MENU_ITEMS.filter((item) => favoriteIds.includes(item.id));

  return (
    <section id="favoritos" className="py-14 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full text-left">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-1.5 text-[#F27D26] text-xs font-black uppercase tracking-widest mb-1.5">
            <Star className="w-3.5 h-3.5 fill-[#F27D26]" />
            <span>Selección de la Casa</span>
          </div>
          <h2 className="font-serif italic font-black text-3xl sm:text-4xl text-white">
            Favoritos de DAMATA
          </h2>
          <p className="text-white/50 text-xs sm:text-sm mt-1">
            Las creaciones más pedidas y recomendadas por nuestros comensales en Medellín.
          </p>
        </div>

        <a
          href="#menu"
          className="text-xs uppercase tracking-widest text-[#F27D26] hover:text-white font-bold transition-colors flex items-center gap-1.5 self-start md:self-auto"
        >
          <span>Ver carta completa</span>
          <span>→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((item) => {
          const displayPrice =
            item.sizePrices?.personal || item.sizePrices?.mediana || item.price || 0;
          const isPizza = Boolean(item.sizePrices);

          return (
            <div
              key={`fav-${item.id}`}
              onClick={() => onSelectItem(item)}
              className="group bg-[#121212] hover:bg-[#181818] border border-white/10 hover:border-[#F27D26]/60 rounded-3xl p-4 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:shadow-[#F27D26]/10"
            >
              <div>
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4 bg-zinc-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="text-[10px] uppercase font-black bg-[#F27D26] text-black px-2.5 py-1 rounded-md shadow flex items-center gap-1">
                      <Flame className="w-3 h-3 fill-black" /> Favorito
                    </span>
                    {item.chefChoice && (
                      <span className="text-[10px] uppercase font-black bg-white/90 text-black px-2 py-1 rounded-md shadow flex items-center gap-1">
                        <ChefHat className="w-3 h-3" /> Especial
                      </span>
                    )}
                  </div>

                  {isPizza && (
                    <div className="absolute bottom-3 left-3">
                      <span className="text-[10px] text-white/90 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 font-mono">
                        Personal · Mediana · Familiar
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif italic font-bold text-xl text-white group-hover:text-[#F27D26] transition-colors leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10">
                <div>
                  <span className="text-[10px] text-white/40 uppercase block">
                    {isPizza ? 'Desde' : 'Precio'}
                  </span>
                  <span className="font-mono text-base font-black text-[#F27D26]">
                    {formatCOP(displayPrice)}
                  </span>
                </div>

                <button
                  type="button"
                  className="bg-[#F27D26] group-hover:bg-[#ff9142] text-black font-extrabold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Pedir</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
