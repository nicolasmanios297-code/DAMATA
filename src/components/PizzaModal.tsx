import React, { useState, useEffect } from 'react';
import { CartItemOption, MenuItem, PizzaSize } from '../types';
import { PIZZA_FLAVORS_LIST } from '../data/menuData';
import { formatCOP, getPizzaPrice } from '../utils/helpers';
import { X, Plus, Minus, Check, Sparkles } from 'lucide-react';

interface PizzaModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (
    item: MenuItem,
    options: CartItemOption,
    quantity: number,
    unitPrice: number
  ) => void;
}

export const PizzaModal: React.FC<PizzaModalProps> = ({
  item,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  if (!isOpen || !item) return null;

  const isPizza = !!item.sizePrices;

  // Selected pizza size
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('personal');

  // Half and half options
  const [isHalfAndHalf, setIsHalfAndHalf] = useState(false);
  const [half1, setHalf1] = useState(item.name);
  const [half2, setHalf2] = useState('DAMATA');

  // Option selection for non-pizza items (drinks, pastas)
  const [selectedFlavor, setSelectedFlavor] = useState<string>(
    item.options ? item.options[0] : ''
  );
  const [prepType, setPrepType] = useState<'Agua' | 'Leche'>('Agua');

  // Quantity and custom notes
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  // Reset states on item change
  useEffect(() => {
    if (item) {
      setHalf1(item.name);
      setSelectedSize('personal');
      setIsHalfAndHalf(false);
      setSelectedFlavor(item.options ? item.options[0] : '');
      setQuantity(1);
      setNotes('');
    }
  }, [item]);

  // Compute calculated unit price
  let unitPrice = 0;

  if (isPizza) {
    if (isHalfAndHalf) {
      unitPrice = getPizzaPrice(selectedSize, true, half1, half2);
    } else {
      unitPrice = getPizzaPrice(selectedSize, false, item.name);
    }
  } else {
    unitPrice = item.price || 0;
    if (prepType === 'Leche' && item.category === 'bebidas') {
      unitPrice += 1500;
    }
  }

  const handleAdd = () => {
    const options: CartItemOption = {
      size: isPizza ? selectedSize : undefined,
      isHalfAndHalf: isPizza ? isHalfAndHalf : false,
      half1Name: isPizza && isHalfAndHalf ? half1 : undefined,
      half2Name: isPizza && isHalfAndHalf ? half2 : undefined,
      selectedFlavor: selectedFlavor || undefined,
      prepType: item.category === 'bebidas' && item.options ? prepType : undefined,
      notes: notes.trim() || undefined,
    };

    onAddToCart(item, options, quantity, unitPrice);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 text-left">
      <div
        className="relative w-full max-w-lg bg-[#141414] border border-white/15 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white/80 hover:text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Item Header Image */}
        <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/40" />
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 max-h-[68vh] overflow-y-auto">
          {/* Title & Description */}
          <div className="space-y-1.5">
            <h3 className="text-2xl sm:text-3xl font-serif italic font-black text-white">
              {item.name}
            </h3>
            <p className="text-xs text-white/60 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Pizza Specific Customizations */}
          {isPizza && (
            <div className="space-y-5 pt-2 border-t border-white/10">
              
              {/* Size Selector */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-[#F27D26] block">
                  1. Selecciona el Tamaño
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['personal', 'mediana', 'familiar'] as PizzaSize[]).map((size) => {
                    const price = getPizzaPrice(size, isHalfAndHalf, half1, half2);
                    const isSelected = selectedSize === size;

                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#F27D26] text-black border-[#F27D26] shadow-lg shadow-[#F27D26]/20'
                            : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                        }`}
                      >
                        <div className="text-xs font-bold capitalize">{size}</div>
                        <div className={`text-[10px] ${isSelected ? 'text-black/80' : 'text-white/50'}`}>
                          {size === 'personal' ? '4 porciones' : size === 'mediana' ? '6 porciones' : '8 porciones'}
                        </div>
                        <div className={`text-xs font-mono font-black mt-1 ${isSelected ? 'text-black' : 'text-[#F27D26]'}`}>
                          {formatCOP(price)}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2 Sabores: Mitad y Mitad Switch */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#F27D26]" />
                      <span>¿Deseas 2 sabores? (Mitad y Mitad)</span>
                    </div>
                    <p className="text-[11px] text-white/50">
                      Combina dos especialidades en la misma pizza
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsHalfAndHalf(!isHalfAndHalf)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                      isHalfAndHalf ? 'bg-[#F27D26]' : 'bg-white/20'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-black transition-transform ${
                        isHalfAndHalf ? 'translate-x-6 bg-black' : 'translate-x-1 bg-white'
                      }`}
                    />
                  </button>
                </div>

                {isHalfAndHalf && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 animate-in fade-in duration-200">
                    <div className="space-y-1">
                      <label className="text-[11px] text-[#F27D26] font-bold block">
                        Primera Mitad:
                      </label>
                      <select
                        value={half1}
                        onChange={(e) => setHalf1(e.target.value)}
                        className="w-full bg-[#0A0A0A] border border-white/20 rounded-xl p-2.5 text-xs text-white focus:border-[#F27D26] focus:outline-none"
                      >
                        {PIZZA_FLAVORS_LIST.map((p) => (
                          <option key={`h1-${p.name}`} value={p.name}>
                            {p.name} ({p.type})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] text-[#F27D26] font-bold block">
                        Segunda Mitad:
                      </label>
                      <select
                        value={half2}
                        onChange={(e) => setHalf2(e.target.value)}
                        className="w-full bg-[#0A0A0A] border border-white/20 rounded-xl p-2.5 text-xs text-white focus:border-[#F27D26] focus:outline-none"
                      >
                        {PIZZA_FLAVORS_LIST.map((p) => (
                          <option key={`h2-${p.name}`} value={p.name}>
                            {p.name} ({p.type})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* Flavor/Variation selection for Non-Pizza (Drinks, Pastas) */}
          {item.options && item.options.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-white/10">
              <label className="text-xs font-black uppercase tracking-widest text-[#F27D26] block">
                Selecciona Sabor / Opción
              </label>
              <div className="grid grid-cols-2 gap-2">
                {item.options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedFlavor(opt)}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer ${
                      selectedFlavor === opt
                        ? 'bg-[#F27D26] text-black border-[#F27D26]'
                        : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                    }`}
                  >
                    <span>{opt}</span>
                    {selectedFlavor === opt && <Check className="w-4 h-4 text-black" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Beverage preparation type (Agua / Leche) */}
          {item.category === 'bebidas' && item.options && (
            <div className="space-y-2 pt-2 border-t border-white/10">
              <label className="text-xs font-black uppercase tracking-widest text-[#F27D26] block">
                Preparación
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setPrepType('Agua')}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    prepType === 'Agua'
                      ? 'bg-white text-black border-white'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                  }`}
                >
                  En Agua (Estándar)
                </button>
                <button
                  type="button"
                  onClick={() => setPrepType('Leche')}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    prepType === 'Leche'
                      ? 'bg-white text-black border-white'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                  }`}
                >
                  En Leche (+ $1.500)
                </button>
              </div>
            </div>
          )}

          {/* Notes / Special Instructions */}
          <div className="space-y-1.5 pt-2 border-t border-white/10">
            <label className="text-xs font-bold text-white/80 block">
              Instrucciones especiales para cocina (Opcional)
            </label>
            <input
              type="text"
              placeholder="Ej: Masa bien tostada, sin cebolla, salsas aparte..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-[#F27D26] focus:outline-none"
            />
          </div>
        </div>

        {/* Modal Footer: Quantity & Add Button */}
        <div className="p-5 border-t border-white/10 bg-[#0E0E0E] flex items-center justify-between gap-4">
          <div className="flex items-center bg-black/60 rounded-xl border border-white/10 p-1">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 cursor-pointer"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-10 text-center text-sm font-black font-mono text-white">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#F27D26] to-[#ff9142] text-black font-extrabold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(242,125,38,0.4)] hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-between cursor-pointer"
          >
            <span>AGREGAR AL PEDIDO</span>
            <span className="font-mono font-black text-sm">
              {formatCOP(unitPrice * quantity)}
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};
