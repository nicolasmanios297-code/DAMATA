export type PizzaSize = 'personal' | 'mediana' | 'familiar' | 'grande' | 'extragrande';

export interface PizzaSizePrice {
  personal?: number;
  mediana?: number;
  familiar?: number;
  grande?: number;
  extragrande?: number;
  [key: string]: number | undefined;
}

export type CategoryId =
  | 'todos'
  | 'premium'
  | 'gourmet'
  | 'tradicionales'
  | 'pequenas'
  | 'calzones'
  | 'pastas'
  | 'lasagnas'
  | 'ensaladas'
  | 'combos'
  | 'bebidas';

export interface MenuItemOption {
  name: string;
  values: string[];
  priceDeltas?: Record<string, number>;
}

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  price?: number;
  singlePrice?: number;
  sizePrices?: PizzaSizePrice;
  prices?: Record<string, number>;
  portions?: Record<string, string>;
  image: string;
  popular?: boolean;
  featured?: boolean;
  chefChoice?: boolean;
  isChefSpecial?: boolean;
  isPizza?: boolean;
  options?: any;
  preparationTypes?: { name: string; price: number }[];
}

export interface CartItemOption {
  size?: PizzaSize;
  isHalfAndHalf?: boolean;
  half1Name?: string;
  half2Name?: string;
  selectedFlavor?: string;
  prepType?: string;
  notes?: string;
}

export interface CartItem {
  id?: string;
  cartId?: string;
  menuItemId?: string;
  name?: string;
  category?: CategoryId;
  price?: number;
  unitPrice?: number;
  quantity: number;
  item?: MenuItem;
  size?: PizzaSize;
  sizeName?: string;
  isHalfAndHalf?: boolean;
  half1Name?: string;
  half2Name?: string;
  selectedOption?: string;
  notes?: string;
  image?: string;
  options?: CartItemOption;
}

export type DeliveryType = 'domicilio' | 'recoger';
export type PaymentMethod = 'efectivo' | 'nequi' | 'bancolombia' | 'otro' | 'Efectivo' | 'Nequi' | 'Bancolombia' | 'Otro';

export interface OrderDetails {
  name: string;
  phone: string;
  deliveryType: DeliveryType;
  address: string;
  barrio: string;
  indications: string;
  paymentMethod: PaymentMethod;
  notes: string;
}

export interface CheckoutForm {
  name: string;
  phone: string;
  orderType: 'domicilio' | 'recoger';
  address: string;
  neighborhood: string;
  deliveryNotes: string;
  paymentMethod: 'efectivo' | 'nequi' | 'bancolombia' | 'otro';
  cashAmountNeeded?: string;
  orderNotes: string;
}

export interface ReservationDetails {
  name: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  notes: string;
}

export interface ReservationForm {
  name: string;
  phone: string;
  peopleCount: string;
  date: string;
  time: string;
  notes: string;
}
