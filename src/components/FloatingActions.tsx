import React from 'react';
import { CartItem } from '../types';
import { BUSINESS_INFO } from '../data/menuData';
import { formatCOP } from '../utils/helpers';
import { Phone, ShoppingBag } from 'lucide-react';

interface FloatingActionsProps {
  cartItems: CartItem[];
  onOpenCart: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  cartItems,
  onOpenCart,
}) => {
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {totalQuantity > 0 && (
        <button
          type="button"
          onClick={onOpenCart}
          className="pointer-events-auto flex items-center gap-3 bg-[#F27D26] hover:bg-[#ff9142] text-black px-4 py-3 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 animate-in slide-in-from-bottom-5 cursor-pointer border border-black/10"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-black text-[#F27D26] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
              {totalQuantity}
            </span>
          </div>
          <div className="text-left leading-tight">
            <div className="text-[10px] uppercase font-black tracking-wider text-black/70">
              Ver Pedido
            </div>
            <div className="text-xs font-mono font-black">{formatCOP(totalAmount)}</div>
          </div>
        </button>
      )}

      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group cursor-pointer"
        title="Escribir directamente a DAMATA Pizza por WhatsApp"
      >
        <Phone className="w-6 h-6 fill-black text-black group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
};
