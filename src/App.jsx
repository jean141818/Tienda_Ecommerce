import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Datos de ejemplo para productos
  const products = [
  {
    id: 1,
    name: "Laptop Gaming",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400",
    description: "Laptop potente para gaming"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    description: "Teléfono inteligente de última generación"
  },
  {
    id: 3,
    name: "Auriculares Bluetooth",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "Auriculares inalámbricos con cancelación de ruido"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    description: "Reloj inteligente con monitor de salud"
  }
  ];

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="App">
      <Header 
        cartItemsCount={getTotalItems()} 
        onCartClick={() => setShowCart(!showCart)}
      />
      
      <div className="main-content">
        {showCart ? (
          <Cart 
            cart={cart}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onClose={() => setShowCart(false)}
          />
        ) : (
          <ProductList products={products} onAddToCart={addToCart} />
        )}
      </div>
    </div>
  );
}

export default App;