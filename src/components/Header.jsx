import React from 'react';

function Header({ cartItemsCount, onCartClick }) {
  return (
    <header className="header">
      <div className="container">
        <h1>🛍️ Mi Tienda Online</h1>
        <button className="cart-button" onClick={onCartClick}>
          🛒 Carrito ({cartItemsCount})
        </button>
      </div>
    </header>
  );
}

export default Header;