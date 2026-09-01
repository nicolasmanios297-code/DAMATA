import React, { useState } from 'react';
import { CategoryId, MenuItem } from '../types';
import { CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { formatCOP } from '../utils/helpers';
import { Search, Plus, Sparkles, Flame, ChefHat, Filter } from 'lucide-react';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  activeCategory: CategoryId | 'todos';
  onSelectCategory: (cat: CategoryId | 'todos') => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectItem,
  activeCategory,
  onSelectCategory,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === 'todos' ? true : item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-14 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full text-left">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#F27D26] mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Carta Completa Artesanal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif italic font-black text-white">
            Nuestro Menú
          </h2>
          <p className="text-xs sm:text-sm text-white/60 mt-1">
            Pizzas en 3 tamaños, pastas artesanales, lasagnas doradas, ensaladas y combos.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por nombre o ingrediente..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#141414] border border-white/15 focus:border-[#F27D26] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-white/40 focus:outline-none transition-colors"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Pills Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
        <button
          onClick={() => onSelectCategory('todos')}
          className={`px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
            activeCategory === 'todos'
              ? 'bg-[#F27D26] text-black shadow-lg shadow-[#F27D26]/20 scale-105'
              : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
          }`}
        >
          <Filter className="w-3.5 h-3.5" />
          <span>Todo el Menú ({MENU_ITEMS.length})</span>
        </button>

        {CATEGORIES.map((cat) => {
          const count = MENU_ITEMS.filter((i) => i.category === cat.id).length;
          const isSelected = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                isSelected
                  ? 'bg-[#F27D26] text-black shadow-lg shadow-[#F27D26]/20 scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-black/30 text-black' : 'bg-white/10 text-white/50'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Category Description Ribbon */}
      {activeCategory !== 'todos' && (
        <div className="mb-6 p-4 rounded-2xl bg-[#141414] border border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5 text-white/80">
            <span className="text-xl">
              {CATEGORIES.find((c) => c.id === activeCategory)?.icon}
            </span>
            <span>{CATEGORIES.find((c) => c.id === activeCategory)?.desc}</span>
          </div>
          <span className="text-[#F27D26] font-bold">
            {filteredItems.length} opciones disponibles
          </span>
        </div>
      )}

      {/* Menu Item Cards Grid */}
      {filteredItems.length === 0 ? (
        <div className="py-20 text-center bg-[#141414] rounded-3xl border border-white/10">
          <p className="text-sm text-white/50">
            No encontramos platillos con el término "{searchTerm}".
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              onSelectCategory('todos');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold"
          >
            Restablecer búsqueda
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isPizza = !!item.sizePrices;
            const displayPrice =
              item.sizePrices?.personal || item.sizePrices?.mediana || item.price || 0;

            return (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="group bg-[#121212] hover:bg-[#181818] border border-white/10 hover:border-[#F27D26]/60 rounded-3xl p-4 transition-all duration-200 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:shadow-[#F27D26]/10"
              >
                <div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-3.5 bg-zinc-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute top-2.5 left-2.5 flex gap-1.5">
                      {item.popular && (
                        <span className="bg-[#F27D26] text-black font-black text-[9px] uppercase px-2 py-0.5 rounded shadow flex items-center gap-1">
                          <Flame className="w-2.5 h-2.5 fill-black" /> Popular
                        </span>
                      )}
                      {item.chefChoice && (
                        <span className="bg-white text-black font-black text-[9px] uppercase px-2 py-0.5 rounded shadow flex items-center gap-1">
                          <ChefHat className="w-2.5 h-2.5" /> Recomendado
                        </span>
                      )}
                    </div>

                    {isPizza && (
                      <div className="absolute bottom-2 left-2.5 right-2.5 flex justify-between text-[10px] text-white/80 font-mono bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/10">
                        <span>Personal / Mediana / Familiar</span>
                        <span className="text-[#F27D26] font-bold">2 Sabores</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-serif italic font-bold text-white group-hover:text-[#F27D26] transition-colors leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3.5 mt-3.5 border-t border-white/10 flex items-center justify-between">
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
                    className="bg-[#F27D26] group-hover:bg-[#ff9142] text-black font-extrabold px-3.5 py-2 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{isPizza ? 'Personalizar' : 'Pedir'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
