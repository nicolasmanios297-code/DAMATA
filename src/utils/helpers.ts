import { CartItem, OrderDetails, PizzaSize, ReservationDetails } from '../types';
import { BUSINESS_INFO, MENU_ITEMS } from '../data/menuData';

export const formatCOP = (amount: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(amount).replace('COP', '').trim();
};

export const checkIsRestaurantOpen = (): {
  isOpen: boolean;
  statusText: string;
  scheduleHint: string;
  nextTime: string;
} => {
  const now = new Date();
  const hours = now.getHours();
  // Open 3:00 PM (15:00) to 12:00 AM (midnight, 24:00)
  const isOpen = hours >= 15 && hours < 24;

  if (isOpen) {
    return {
      isOpen: true,
      statusText: 'Abierto Ahora',
      scheduleHint: 'Hoy hasta las 12:00 AM',
      nextTime: 'Cierra a las 12:00 AM',
    };
  } else {
    return {
      isOpen: false,
      statusText: 'Cerrado',
      scheduleHint: 'Abre hoy a las 3:00 PM',
      nextTime: 'Abre hoy a las 3:00 PM',
    };
  }
};

export const getSizeLabel = (size?: PizzaSize): string => {
  switch (size) {
    case 'personal':
      return 'Personal (4 Porciones)';
    case 'mediana':
      return 'Mediana (6 Porciones)';
    case 'familiar':
      return 'Familiar (8 Porciones)';
    default:
      return '';
  }
};

export const getPizzaPrice = (
  size: PizzaSize,
  isHalfAndHalf: boolean,
  half1Name?: string,
  half2Name?: string
): number => {
  const p1 = MENU_ITEMS.find((i) => i.name.toLowerCase() === half1Name?.toLowerCase());
  const price1 = p1?.sizePrices?.[size] || 24000;

  if (!isHalfAndHalf || !half2Name) {
    return price1;
  }

  const p2 = MENU_ITEMS.find((i) => i.name.toLowerCase() === half2Name?.toLowerCase());
  const price2 = p2?.sizePrices?.[size] || price1;

  return Math.max(price1, price2);
};

export const buildWhatsAppOrderLink = (
  items: CartItem[],
  orderDetails: OrderDetails,
  subtotal: number,
  deliveryFee: number
): string => {
  const total = subtotal + (orderDetails.deliveryType === 'domicilio' ? deliveryFee : 0);

  const productList = items
    .map((cartItem, index) => {
      let detail = `${index + 1}. *${cartItem.item.name}*`;
      if (cartItem.options.isHalfAndHalf) {
        detail += `\n   🍕 Mitad 1: ${cartItem.options.half1Name}\n   🍕 Mitad 2: ${cartItem.options.half2Name}`;
      }
      if (cartItem.options.size) {
        detail += ` - Tamaño: ${getSizeLabel(cartItem.options.size)}`;
      }
      if (cartItem.options.selectedFlavor) {
        detail += ` - Sabor: ${cartItem.options.selectedFlavor}`;
      }
      if (cartItem.options.prepType) {
        detail += ` (${cartItem.options.prepType})`;
      }
      if (cartItem.options.notes) {
        detail += `\n   📝 Nota: "${cartItem.options.notes}"`;
      }
      detail += `\n   Cantidad: ${cartItem.quantity} x ${formatCOP(cartItem.unitPrice)} = ${formatCOP(cartItem.unitPrice * cartItem.quantity)}`;
      return detail;
    })
    .join('\n\n');

  const totalQuantities = items.reduce((acc, curr) => acc + curr.quantity, 0);

  const rawMessage = `Hola DAMATA Pizza 🍕

Quiero realizar este pedido:

🍕 PRODUCTOS
${productList}

📦 CANTIDADES
${totalQuantities} ${totalQuantities === 1 ? 'producto' : 'productos'} en total

📝 OBSERVACIONES
${orderDetails.notes.trim() || 'Sin observaciones adicionales'}

👤 NOMBRE
${orderDetails.name.trim() || 'Cliente'}

📱 TELÉFONO
${orderDetails.phone.trim()}

🛵 TIPO DE PEDIDO
${orderDetails.deliveryType === 'domicilio' ? '🛵 Domicilio' : '🏪 Recoger en el local'}

${
  orderDetails.deliveryType === 'domicilio'
    ? `📍 DIRECCIÓN\n${orderDetails.address.trim()}\n\n🏘️ BARRIO\n${orderDetails.barrio.trim() || 'Belén Rincón / Sector'}${
        orderDetails.indications ? `\n\n📌 INDICACIONES:\n${orderDetails.indications.trim()}` : ''
      }`
    : `📍 RECOGER EN PUNTO\n${BUSINESS_INFO.address} - ${BUSINESS_INFO.neighborhood}`
}

💳 MÉTODO DE PAGO
${orderDetails.paymentMethod}

💰 TOTAL
${formatCOP(total)}${orderDetails.deliveryType === 'domicilio' ? ` (Incluye domicilio: ${formatCOP(deliveryFee)})` : ` (Subtotal: ${formatCOP(subtotal)})`}

Gracias.`;

  const encoded = encodeURIComponent(rawMessage);
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encoded}`;
};

export const buildWhatsAppReservationLink = (res: ReservationDetails): string => {
  const message = `Hola DAMATA Pizza 🍕

Quiero realizar una reserva de mesa:

👤 NOMBRE: ${res.name.trim()}
👥 PERSONAS: ${res.guests}
📅 FECHA: ${res.date}
⏰ HORA: ${res.time}
📱 TELÉFONO: ${res.phone.trim()}
📝 OBSERVACIONES: ${res.notes.trim() || 'Ninguna'}

¡Muchas gracias!`;

  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
};
