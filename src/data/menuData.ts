import { MenuItem } from '../types';

import imgPizzaDamata from '../assets/images/pizza_damata_1788293018160.jpg';
import imgPastaMar from '../assets/images/pasta_mar_1788293041363.jpg';
import imgPizzaDamataBbq from '../assets/images/pizza_damata_bbq_1788293054392.jpg';
import imgPizzaPepperoni from '../assets/images/pizza_pepperoni_1788293066467.jpg';
import imgPizza4Estaciones from '../assets/images/pizza_4_estaciones_1788293078961.jpg';
import imgComboGourmet from '../assets/images/combo_gourmet_1788293090268.jpg';
import imgComboItaliano from '../assets/images/combo_italiano_single_1788294570092.jpg';
import imgCalzoneDamata from '../assets/images/calzone_damata_1788293124744.jpg';
import imgLasanaMar from '../assets/images/lasana_mar_1788293139283.jpg';
import imgPastaCarbonara from '../assets/images/pasta_carbonara_1788293151104.jpg';
import imgEnsaladaMielMostaza from '../assets/images/ensalada_miel_mostaza_1788293162909.jpg';
import imgPastaRabiata from '../assets/images/pasta_rabiata_1788294523396.jpg';
import imgPastaBolognesa from '../assets/images/pasta_bolognesa_1788294534514.jpg';
import imgPizzaJamonQueso from '../assets/images/pizza_jamon_queso_1788294547571.jpg';
import imgLimonadaNatural from '../assets/images/limonada_natural_1788294559063.jpg';

export const BUSINESS_INFO = {
  name: 'DAMATA Pizza',
  slogan: '¡Sabor único!',
  subtitle: 'Pizza artesanal, pastas, lasagnas y mucho más.',
  whatsappPhone: '+57 312 884 7620',
  whatsappRaw: '573128847620',
  schedule: 'Todos los días de 3:00 PM a 12:00 AM',
  scheduleDays: 'Lunes a Domingo',
  address: 'CLL 3C #77 A-55',
  neighborhood: 'Belén Rincón - El Saladito',
  city: 'Medellín, Colombia',
  instagramUser: '@damat.apizza',
  instagramUrl: 'https://www.instagram.com/damat.apizza?igsi=MXNrcjczbnc2dW1jMw==',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=CLL+3C+%2377+A-55+Belen+Rincon+Medellin',
};

export const CATEGORIES = [
  { id: 'premium', name: 'Pizzas Premium', icon: '👑', desc: 'Nuestras creaciones más exclusivas con ingredientes selectos' },
  { id: 'gourmet', name: 'Pizzas Gourmet', icon: '🔥', desc: 'Combinaciones audaces y recetas artesanales de la casa' },
  { id: 'tradicionales', name: 'Tradicionales', icon: '✨', desc: 'Los grandes clásicos sobre masa madre crujiente' },
  { id: 'pequenas', name: 'Pizzas Pequeñas', icon: '🍕', desc: 'Opciones personales y familiares directas' },
  { id: 'calzones', name: 'Calzones', icon: '🥟', desc: 'Masa doblada y horneada a la piedra con reducción balsámica' },
  { id: 'pastas', name: 'Pastas', icon: '🍝', desc: 'Penne y espaguetis artesanales con salsas de la casa' },
  { id: 'lasagnas', name: 'Lasagnas', icon: '🧀', desc: 'Capas generosas de queso fundido y pan al ajillo' },
  { id: 'ensaladas', name: 'Ensaladas', icon: '🥗', desc: 'Frescura, vegetales crujientes y aderezos especiales' },
  { id: 'combos', name: 'Combos Gourmet', icon: '⭐', desc: 'Menús completos con crema, plato fuerte, ensalada y bebida' },
  { id: 'bebidas', name: 'Bebidas', icon: '🥤', desc: 'Limonadas saborizadas y jugos naturales refrescantes' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // 🍕 PIZZAS PREMIUM
  {
    id: 'pizza-damata',
    name: 'DAMATA',
    category: 'premium',
    description: 'Salsa pomodoro y mozzarella, variedad de lechuga, pollo, champiñones, jamón, salsa showy, parmesano y perejil.',
    sizePrices: {
      personal: 24000,
      mediana: 41900,
      familiar: 57000,
    },
    image: imgPizzaDamata,
    popular: true,
    chefChoice: true,
  },
  {
    id: 'pizza-iberica',
    name: 'IBÉRICA',
    category: 'premium',
    description: 'Salsa pomodoro y mozzarella, pepperoni, chorizo vela, jamón serrano y orégano molido.',
    sizePrices: {
      personal: 24000,
      mediana: 42900,
      familiar: 57000,
    },
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'pizza-carbonara',
    name: 'CARBONARA',
    category: 'premium',
    description: 'Pollo adobado en salsa bechamel, tocineta, queso mozzarella, crema de leche y perejil.',
    sizePrices: {
      personal: 24000,
      mediana: 41900,
      familiar: 57000,
    },
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pizza-bacon-pepperoni',
    name: 'BACON PEPPERONI',
    category: 'premium',
    description: 'Salsa pomodoro y mozzarella, pepperoni, tocineta, maicito y orégano molido.',
    sizePrices: {
      personal: 24000,
      mediana: 41900,
      familiar: 57000,
    },
    image: imgPizzaPepperoni,
    popular: true,
  },
  {
    id: 'pizza-delicias-del-mar',
    name: 'DELICIAS DEL MAR',
    category: 'premium',
    description: 'Salsa marinera, mozzarella, anillos de calamar, camarones, trozos de pulpo, atún salteado, cebolla, apio, pimentón y perejil.',
    sizePrices: {
      mediana: 49900,
      familiar: 69900,
    },
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    chefChoice: true,
  },

  // 🍕 PIZZAS GOURMET
  {
    id: 'pizza-damata-bbq',
    name: 'DAMATA BBQ',
    category: 'gourmet',
    description: 'Salsa pomodoro y mozzarella, tomate en cubos, pollo, tocineta, piña, cebolla roja y salsa BBQ.',
    sizePrices: {
      personal: 23000,
      mediana: 41900,
      familiar: 57000,
    },
    image: imgPizzaDamataBbq,
    popular: true,
  },
  {
    id: 'pizza-vg-supreme',
    name: 'VG SUPREME',
    category: 'gourmet',
    description: 'Salsa pomodoro y mozzarella, tomates en cubos, champiñones, aceitunas, cebolla roja y maicitos.',
    sizePrices: {
      personal: 22000,
      mediana: 34900,
      familiar: 48900,
    },
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pizza-cuatro-estaciones',
    name: 'CUATRO ESTACIONES',
    category: 'gourmet',
    description: 'Cuatro sabores para disfrutar: pepperoni, hawaiana, pepperoni-jalapeños y vegetales.',
    sizePrices: {
      personal: 22500,
      mediana: 34900,
      familiar: 48900,
    },
    image: imgPizza4Estaciones,
  },
  {
    id: 'pizza-miel-mostaza',
    name: 'MIEL MOSTAZA',
    category: 'gourmet',
    description: 'Pollo adobado en miel mostaza, queso mozzarella derretido y tocineta.',
    sizePrices: {
      personal: 22500,
      mediana: 39900,
      familiar: 51900,
    },
    image: imgEnsaladaMielMostaza,
  },
  {
    id: 'pizza-ranchera',
    name: 'RANCHERA',
    category: 'gourmet',
    description: 'Salsa pomodoro, mozzarella, tocineta, chorizo y chicharrón.',
    sizePrices: {
      personal: 19500,
      mediana: 34900,
      familiar: 48900,
    },
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'pizza-bolognesa',
    name: 'BOLOGNESA',
    category: 'gourmet',
    description: 'Salsa pomodoro y mozzarella, champiñones, jamón, salsa bolognesa y orégano.',
    sizePrices: {
      personal: 19500,
      mediana: 33900,
      familiar: 46900,
    },
    image: 'https://images.unsplash.com/photo-1594007654729-407edc4be65b?auto=format&fit=crop&w=800&q=80',
  },

  // 🍕 PIZZAS TRADICIONALES
  {
    id: 'pizza-pollo-champinones',
    name: 'POLLO Y CHAMPIÑONES',
    category: 'tradicionales',
    description: 'Salsa pomodoro, mozzarella, pollo y champiñones.',
    sizePrices: {
      personal: 23900,
      mediana: 35900,
      familiar: 49900,
    },
    image: imgPizzaDamata,
    popular: true,
  },
  {
    id: 'pizza-matriciana',
    name: 'MATRICIANA',
    category: 'tradicionales',
    description: 'Salsa pomodoro, mozzarella, jamón tajado, tocineta y maicitos.',
    sizePrices: {
      personal: 19500,
      mediana: 34900,
      familiar: 46900,
    },
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pizza-maiz-tocineta',
    name: 'MAÍZ TOCINETA',
    category: 'tradicionales',
    description: 'Salsa pomodoro, mozzarella, tocineta y maicitos.',
    sizePrices: {
      personal: 19500,
      mediana: 34900,
      familiar: 46900,
    },
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pizza-hawaiana',
    name: 'HAWAIANA',
    category: 'tradicionales',
    description: 'Salsa pomodoro, mozzarella, jamón y piña glaseada.',
    sizePrices: {
      personal: 19500,
      mediana: 33900,
      familiar: 41500,
    },
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'pizza-chicago',
    name: 'CHICAGO',
    category: 'tradicionales',
    description: 'Salsa pomodoro, mozzarella, pepperoni, chorizo, champiñones, reducción balsámica y cebolla roja.',
    sizePrices: {
      personal: 20000,
      mediana: 32900,
      familiar: 41900,
    },
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80',
  },

  // 🍕 PIZZAS PEQUEÑAS
  {
    id: 'pizza-pequena-jamon-queso',
    name: 'JAMÓN Y QUESO',
    category: 'pequenas',
    description: 'Salsa pomodoro artesanal, generoso queso mozzarella fundido y jamón seleccionado.',
    sizePrices: {
      personal: 16000,
      familiar: 29900,
    },
    image: imgPizzaJamonQueso,
    popular: true,
  },
  {
    id: 'pizza-pequena-pepperoni',
    name: 'PEPPERONI',
    category: 'pequenas',
    description: 'Clásica combinación con abundante pepperoni crocante y mozzarella derretido.',
    sizePrices: {
      personal: 18000,
      familiar: 32000,
    },
    image: imgPizzaPepperoni,
    popular: true,
  },
  {
    id: 'pizza-pequena-mixta',
    name: 'MIXTA',
    category: 'pequenas',
    description: 'Jamón y queso + pepperoni en una sola pizza generosa.',
    sizePrices: {
      familiar: 34900,
    },
    image: imgPizzaPepperoni,
  },

  // 🥟 CALZONES
  {
    id: 'calzone-damata-especial',
    name: 'CALZONE DAMATA',
    category: 'calzones',
    description: 'Masa madre rellena de queso mozzarella fundido, carnes selectas, hierbas finas y bañada en elegante reducción balsámica de la casa.',
    price: 26000,
    image: imgCalzoneDamata,
    popular: true,
    chefChoice: true,
  },

  // 🍝 PASTAS
  {
    id: 'pasta-rabiata',
    name: 'RABIATA',
    category: 'pastas',
    description: 'Penne, salsa de tomate picante, chorizo vela, pepperoni, aceite de oliva, pimentón, ajo y parmesano.',
    price: 27000,
    image: imgPastaRabiata,
    popular: true,
  },
  {
    id: 'pasta-carbonara',
    name: 'CARBONARA',
    category: 'pastas',
    description: 'Penne o espaguetis en suave salsa bechamel, tocineta ahumada crujiente, queso parmesano y perejil.',
    price: 27000,
    image: imgPastaCarbonara,
    popular: true,
  },
  {
    id: 'pasta-delicias-del-mar',
    name: 'DELICIAS DEL MAR',
    category: 'pastas',
    description: 'Pastas en cremosa salsa marinera de la casa con camarones frescos, anillos de calamar, pimentón, tostadas al ajillo y queso parmesano.',
    price: 46000,
    image: imgPastaMar,
    chefChoice: true,
    popular: true,
  },
  {
    id: 'pasta-bolognesa',
    name: 'BOLOGNESA',
    category: 'pastas',
    description: 'Penne o espaguetis con salsa bolognesa tradicional de carne, acompañada con queso parmesano y perejil.',
    price: 26500,
    image: imgPastaBolognesa,
    popular: true,
  },
  {
    id: 'pasta-napolitana',
    name: 'NAPOLITANA',
    category: 'pastas',
    description: 'Salsa napolitana, mozzarella, parmesano, pepperoni, tomates cherry, albahaca, panay.',
    price: 26000,
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80',
  },

  // 🧀 LASAGNAS
  {
    id: 'lasagna-especial',
    name: 'ESPECIAL',
    category: 'lasagnas',
    description: 'Salsa bolognesa, pollo desmechado, champiñones, jamón tajado, mozzarella, pan y perejil.',
    price: 31900,
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80',
    popular: true,
    chefChoice: true,
  },
  {
    id: 'lasagna-mixta',
    name: 'MIXTA',
    category: 'lasagnas',
    description: 'Salsa bolognesa, mozzarella, pollo, carne y pan tajado al ajillo.',
    price: 27500,
    image: 'https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'lasagna-carbonara',
    name: 'CARBONARA',
    category: 'lasagnas',
    description: 'Pollo adobado en salsa bechamel, tocineta, crema de leche, pan y parmesano.',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'lasagna-delicias-del-mar',
    name: 'DELICIAS DEL MAR',
    category: 'lasagnas',
    description: 'Atún salteado y mariscos en salsa marinera, camarones, calamar, queso mozzarella gratinado al horno y tostadas de ajo.',
    price: 46000,
    image: imgLasanaMar,
    popular: true,
    chefChoice: true,
  },
  {
    id: 'lasagna-vegetariana',
    name: 'VEGETARIANA',
    category: 'lasagnas',
    description: 'Salsa napolitana, mozzarella, champiñones, aceitunas, tomate cherry, maíz tierno y finas hierbas.',
    price: 26000,
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80',
  },

  // 🥗 ENSALADAS
  {
    id: 'ensalada-cesar',
    name: 'ENSALADA CÉSAR',
    category: 'ensaladas',
    description: 'Pechuga asada, lechuga, tomate, croutons, parmesano y salsa showy.',
    price: 23000,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'ensalada-miel-mostaza',
    name: 'MIEL MOSTAZA',
    category: 'ensaladas',
    description: 'Variedad de lechugas frescas, tomates cherry, tocineta crujiente, cubos de queso y aderezo especial de miel mostaza.',
    price: 25500,
    image: imgEnsaladaMielMostaza,
    popular: true,
  },
  {
    id: 'ensalada-toscana',
    name: 'ENSALADA TOSCANA',
    category: 'ensaladas',
    description: 'Pollo desmechado, tocineta, mozzarella, aceitunas, salsa showy, variedad de tomates y lechugas.',
    price: 26500,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  },

  // ⭐ COMBOS GOURMET
  {
    id: 'combo-damata-gourmet',
    name: 'DAMATA GOURMET',
    category: 'combos',
    description: 'Crema caliente del día + Lasagna al horno con queso gratinado + Ensalada fresca de la casa + Pan al ajillo + Limonada natural.',
    price: 21500,
    image: imgComboGourmet,
    popular: true,
    chefChoice: true,
  },
  {
    id: 'combo-damata-italiano',
    name: 'DAMATA ITALIANO',
    category: 'combos',
    description: 'Crema caliente del día + Pasta artesanal a la bolognesa + Ensalada fresca + Pan al ajillo + Limonada natural.',
    price: 22500,
    image: imgComboItaliano,
    popular: true,
  },

  // 🥤 BEBIDAS
  {
    id: 'bebida-limonada-saborizada',
    name: 'LIMONADA SABORIZADA',
    category: 'bebidas',
    description: 'Refrescante limonada frappeada con sabores naturales a elección.',
    price: 8000,
    options: ['Cereza', 'Coco', 'Hierbabuena'],
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'bebida-limonada-natural',
    name: 'LIMONADA NATURAL',
    category: 'bebidas',
    description: 'Tradicional zumo de limón fresco con hielo frappé y toque secreto.',
    price: 6000,
    image: imgLimonadaNatural,
    popular: true,
  },
  {
    id: 'bebida-jugos-naturales',
    name: 'JUGOS NATURALES',
    category: 'bebidas',
    description: 'Frutas seleccionadas frescas preparadas al instante en agua o en leche.',
    options: ['Fresa', 'Mango', 'Mandarina', 'Mora', 'Frutos rojos', 'Piña'],
    price: 6000,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
  },
];

export const PIZZA_FLAVORS_LIST = MENU_ITEMS.filter(
  (item) =>
    item.category === 'premium' ||
    item.category === 'gourmet' ||
    item.category === 'tradicionales' ||
    item.category === 'pequenas'
).map((p) => ({
  id: p.id,
  name: p.name,
  type: p.category,
  sizePrices: p.sizePrices,
}));

export const RESTAURANT_INFO = {
  ...BUSINESS_INFO,
  phoneFormatted: BUSINESS_INFO.whatsappPhone,
  phoneRaw: BUSINESS_INFO.whatsappRaw,
  scheduleText: BUSINESS_INFO.schedule,
  deliveryFeeEstimated: 4000,
};

export const PIZZA_SIZES_INFO: Record<string, { name: string; portions: string }> = {
  personal: { name: 'Personal', portions: '4 porciones' },
  mediana: { name: 'Mediana', portions: '6 porciones' },
  familiar: { name: 'Familiar', portions: '8 porciones' },
  grande: { name: 'Familiar', portions: '8 porciones' },
  extragrande: { name: 'Extra Grande', portions: '10 porciones' },
};

export const PIZZA_FLAVORS_POOL = MENU_ITEMS.filter(
  (it) => it.category === 'premium' || it.category === 'gourmet' || it.category === 'tradicionales'
).map((p) => ({
  name: p.name,
  category: p.category,
  prices: {
    personal: p.sizePrices?.personal || 24000,
    mediana: p.sizePrices?.mediana || 38000,
    grande: p.sizePrices?.familiar || 52000,
    familiar: p.sizePrices?.familiar || 52000,
    extragrande: (p.sizePrices?.familiar || 52000) + 12000,
  } as Record<string, number>,
}));

