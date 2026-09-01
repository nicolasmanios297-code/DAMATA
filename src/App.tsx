import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FavoritesSection } from './components/FavoritesSection';
import { MenuSection } from './components/MenuSection';
import { ReservationSection } from './components/ReservationSection';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { PizzaModal } from './components/PizzaModal';
import { CartDrawer } from './components/CartDrawer';
import { CartItem, CartItemOption, CategoryId, MenuItem } from './types';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('damata_cart_v2');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('damata_cart_v2', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Could not save cart', e);
    }
  }, [cartItems]);

  const [activeCategory, setActiveCategory] = useState<CategoryId | 'todos'>('todos');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [modalItem, setModalItem] = useState<MenuItem | null>(null);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleAddToCart = (
    item: MenuItem,
    options: CartItemOption,
    quantity: number,
    unitPrice: number
  ) => {
    const cartId = `${item.id}-${options.size || 'std'}-${options.half1Name || ''}-${
      options.half2Name || ''
    }-${options.selectedFlavor || ''}-${options.prepType || ''}-${options.notes || ''}`;

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((it) => it.cartId === cartId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        const newItem: CartItem = {
          cartId,
          item,
          quantity,
          unitPrice,
          options,
        };
        return [...prev, newItem];
      }
    });

    showToast(`¡${item.name} agregado a tu pedido!`);
  };

  const handleUpdateQuantity = (cartId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.cartId === cartId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (cartId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenItemModal = (item: MenuItem) => {
    setModalItem(item);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F4] flex flex-col font-sans selection:bg-[#F27D26] selection:text-black antialiased">
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 bg-[#181818] border border-[#25D366]/40 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="w-5 h-5 text-[#25D366] flex-shrink-0" />
          <span className="text-xs font-bold">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-white/40 hover:text-white ml-2 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Header */}
      <Header
        cartItems={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateToMenu={() => scrollToSection('menu')}
        onNavigateToInstagram={() => scrollToSection('instagram')}
        onNavigateToReservations={() => scrollToSection('reservas')}
        onNavigateToContact={() => scrollToSection('contacto')}
        onNavigateToFeatured={() => scrollToSection('favoritos')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          onOrderNow={() => scrollToSection('menu')}
          onViewMenu={() => scrollToSection('menu')}
        />

        {/* 2. Favoritos de DAMATA */}
        <FavoritesSection onSelectItem={(item) => handleOpenItemModal(item)} />

        {/* 3. Full Interactive Menu */}
        <MenuSection
          onSelectItem={(item) => handleOpenItemModal(item)}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* 4. Table Reservations Section */}
        <ReservationSection />

        {/* 5. Instagram Gallery Feed Section */}
        <InstagramSection />

        {/* 6. Location & Coverage Section */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigateToMenu={() => scrollToSection('menu')}
        onNavigateToReservations={() => scrollToSection('reservas')}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Floating Actions (WhatsApp & Sticky Mobile Cart summary) */}
      <FloatingActions
        cartItems={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Item Customizer Modal (Size, 2 Flavors Half & Half, Drinks, etc.) */}
      <PizzaModal
        item={modalItem}
        isOpen={Boolean(modalItem)}
        onClose={() => setModalItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart & Checkout Drawer with WhatsApp Dispatch */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onNavigateToMenu={() => scrollToSection('menu')}
      />
    </div>
  );
}
