import React from 'react';

function Cart({ cart, onRemove, onUpdateQuantity, onClose }) {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (cart.length === 0) {
    return (
      <div className="cart">
        <div className="cart-header">
          <h2>Carrito de Compras</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="empty-cart">
          <p>Tu carrito está vacío</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Carrito de Compras</h2>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
      
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h4>{item.name}</h4>
              <p>${item.price}</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
            </div>
            <button 
              className="remove-btn"
              onClick={() => onRemove(item.id)}
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-total">
        <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
        <button className="checkout-btn">Proceder al Pago</button>
      </div>
    </div>
  );
}

export default Cart;