import React, { useState } from 'react';
import { CartItem, DeliveryType, OrderDetails, PaymentMethod } from '../types';
import { buildWhatsAppOrderLink, formatCOP } from '../utils/helpers';
import {
  X,
  Plus,
  Minus,
  Trash2,
  Send,
  ShoppingBag,
  Bike,
  Store,
  MapPin,
  CreditCard,
  User,
  Phone,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartId: string, quantity: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
  onNavigateToMenu: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onNavigateToMenu,
}) => {
  if (!isOpen) return null;

  const [deliveryType, setDeliveryType] = useState<DeliveryType>('domicilio');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [barrio, setBarrio] = useState('Belén Rincón');
  const [indications, setIndications] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('Nequi');
  const [notes, setNotes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const subtotal = items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  const deliveryFee = deliveryType === 'domicilio' ? 5000 : 0;
  const total = subtotal + deliveryFee;

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (items.length === 0) {
      setErrorMessage('Tu pedido está vacío. Agrega productos de la carta.');
      return;
    }

    if (!name.trim()) {
      setErrorMessage('Por favor ingresa tu nombre completo.');
      return;
    }

    if (!phone.trim()) {
      setErrorMessage('Por favor ingresa tu número de teléfono / WhatsApp.');
      return;
    }

    if (deliveryType === 'domicilio' && !address.trim()) {
      setErrorMessage('Por favor ingresa tu dirección exacta de entrega.');
      return;
    }

    const orderDetails: OrderDetails = {
      name,
      phone,
      deliveryType,
      address,
      barrio,
      indications,
      paymentMethod,
      notes,
    };

    const whatsappUrl = buildWhatsAppOrderLink(
      items,
      orderDetails,
      subtotal,
      deliveryFee
    );

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-end text-left">
      <div
        className="w-full max-w-lg bg-[#0E0E0E] border-l border-white/15 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#141414]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#F27D26] text-black">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-serif italic font-black text-white">
                Tu Pedido DAMATA
              </h2>
              <p className="text-[11px] text-white/50">
                {items.length} {items.length === 1 ? 'producto' : 'productos'} en total
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center border border-white/10 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {errorMessage && (
            <div className="p-3 bg-[#D32F2F]/20 border border-[#D32F2F] text-[#FF8A80] text-xs rounded-xl font-bold">
              {errorMessage}
            </div>
          )}

          {items.length === 0 ? (
            <div className="py-14 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-white/30">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-white">Tu carrito está vacío</p>
                <p className="text-xs text-white/50">
                  Explora nuestras pizzas gourmet, artesanales, pastas y bebidas.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNavigateToMenu();
                }}
                className="px-5 py-2.5 rounded-xl bg-[#F27D26] text-black text-xs font-black uppercase tracking-wider shadow hover:bg-[#ff9142] cursor-pointer"
              >
                Ver Menú
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-white/50 pb-1 border-b border-white/5">
                <span>Resumen de platillos</span>
                <button
                  type="button"
                  onClick={onClearCart}
                  className="text-white/40 hover:text-[#FF5252] text-[11px] underline cursor-pointer"
                >
                  Vaciar carrito
                </button>
              </div>

              {items.map((cartItem) => (
                <div
                  key={cartItem.cartId}
                  className="p-3.5 rounded-2xl bg-[#141414] border border-white/10 space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>{cartItem.item.name}</span>
                        {cartItem.options.size && (
                          <span className="text-[10px] text-[#F27D26] bg-[#F27D26]/10 px-1.5 py-0.2 rounded border border-[#F27D26]/20 capitalize">
                            {cartItem.options.size}
                          </span>
                        )}
                      </div>

                      {cartItem.options.isHalfAndHalf && (
                        <p className="text-[11px] text-[#F27D26]">
                          Mitad 1: {cartItem.options.half1Name} / Mitad 2: {cartItem.options.half2Name}
                        </p>
                      )}
                      {cartItem.options.selectedFlavor && (
                        <p className="text-[11px] text-white/60">
                          Sabor: {cartItem.options.selectedFlavor}
                        </p>
                      )}
                      {cartItem.options.prepType && (
                        <p className="text-[11px] text-white/60">
                          Preparación: {cartItem.options.prepType}
                        </p>
                      )}
                      {cartItem.options.notes && (
                        <p className="text-[11px] text-white/40 italic">
                          "{cartItem.options.notes}"
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveItem(cartItem.cartId)}
                      className="text-white/30 hover:text-[#FF5252] p-1 transition-colors cursor-pointer"
                      title="Eliminar producto"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <div className="flex items-center bg-black/40 rounded-lg border border-white/10 p-0.5">
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(cartItem.cartId, cartItem.quantity - 1)
                        }
                        className="w-6 h-6 rounded flex items-center justify-center text-white/60 hover:text-white cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center text-xs font-mono font-bold text-white">
                        {cartItem.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(cartItem.cartId, cartItem.quantity + 1)
                        }
                        className="w-6 h-6 rounded flex items-center justify-center text-white/60 hover:text-white cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-mono font-black text-xs text-[#F27D26]">
                      {formatCOP(cartItem.unitPrice * cartItem.quantity)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Checkout Form */}
          {items.length > 0 && (
            <form onSubmit={handleSendWhatsAppOrder} className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#F27D26]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Datos para el Envío a WhatsApp</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDeliveryType('domicilio')}
                  className={`p-3 rounded-2xl border text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    deliveryType === 'domicilio'
                      ? 'bg-[#F27D26] text-black border-[#F27D26] shadow-md'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <Bike className="w-4 h-4" />
                  <span>Domicilio</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryType('recoger')}
                  className={`p-3 rounded-2xl border text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    deliveryType === 'recoger'
                      ? 'bg-[#F27D26] text-black border-[#F27D26] shadow-md'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <Store className="w-4 h-4" />
                  <span>Recoger en local</span>
                </button>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-white/70 flex items-center gap-1">
                  <User className="w-3 h-3 text-[#F27D26]" />
                  <span>Nombre completo *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre y apellido"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#141414] border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-white/30 focus:border-[#F27D26] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-white/70 flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#F27D26]" />
                  <span>Teléfono de contacto / WhatsApp *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ej: 312 884 7620"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#141414] border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-white/30 focus:border-[#F27D26] focus:outline-none"
                />
              </div>

              {deliveryType === 'domicilio' && (
                <div className="space-y-3 p-3 rounded-2xl bg-white/5 border border-white/5 animate-in fade-in">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-white/70 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#F27D26]" />
                      <span>Dirección de entrega *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Calle 3C #77 A-55, Apto 302"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-[#141414] border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-white/30 focus:border-[#F27D26] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-white/70 block">
                        Barrio / Sector
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Belén Rincón"
                        value={barrio}
                        onChange={(e) => setBarrio(e.target.value)}
                        className="w-full bg-[#141414] border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-white/30 focus:border-[#F27D26] focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-white/70 block">
                        Indicaciones
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Tocar timbre 201"
                        value={indications}
                        onChange={(e) => setIndications(e.target.value)}
                        className="w-full bg-[#141414] border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-white/30 focus:border-[#F27D26] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-white/70 flex items-center gap-1">
                  <CreditCard className="w-3 h-3 text-[#F27D26]" />
                  <span>Método de pago preferido</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Nequi', 'Bancolombia', 'Efectivo'] as PaymentMethod[]).map((pm) => (
                    <button
                      key={pm}
                      type="button"
                      onClick={() => setPaymentMethod(pm)}
                      className={`p-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        paymentMethod === pm
                          ? 'bg-white text-black border-white shadow'
                          : 'bg-[#141414] border-white/10 text-white/70 hover:bg-white/5'
                      }`}
                    >
                      {pm}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-white/70 flex items-center gap-1">
                  <MessageSquare className="w-3 h-3 text-[#F27D26]" />
                  <span>Observaciones generales</span>
                </label>
                <input
                  type="text"
                  placeholder="Ej: Traer cambio de $50.000, enviar servilletas..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#141414] border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-white/30 focus:border-[#F27D26] focus:outline-none"
                />
              </div>

              <div className="p-4 rounded-2xl bg-[#141414] border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between text-white/60">
                  <span>Subtotal productos:</span>
                  <span className="font-mono">{formatCOP(subtotal)}</span>
                </div>
                {deliveryType === 'domicilio' && (
                  <div className="flex justify-between text-white/60">
                    <span>Domicilio estimado (Belén):</span>
                    <span className="font-mono">{formatCOP(deliveryFee)}</span>
                  </div>
                )}
                <div className="flex justify-between text-white font-black text-sm pt-2 border-t border-white/10">
                  <span>TOTAL ESTIMADO:</span>
                  <span className="font-mono text-[#F27D26] text-base">
                    {formatCOP(total)}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2.5 shadow-xl hover:scale-[1.01] active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4 fill-black" />
                <span>ENVIAR PEDIDO POR WHATSAPP</span>
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
