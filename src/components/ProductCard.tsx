import React from 'react';
import "../styles/MenuList.css";
import Button from './Button';
import { Product } from '../types/product';
import { Cart } from '../types/cart';


/*type Product = {
  id: string;
  img: string;
  meal: string;
  price: number;
  instructions: string;
  category: string;
}; */

type ProductCardProps = {
  item: Product;
  cart: Cart;
  handleAddToCartClick: (id: string) => void;
}

//function ProductCard
const ProductCard: React.FC<ProductCardProps> = ({ item, cart, handleAddToCartClick }) => {
  return (
    <div className="card">
      <img className="img_burger" src={item.img} alt={item.meal} />
      <div className="container3">
        <div className="name_price">
          <h1 className="name">{item.meal}</h1>
          <p className="price">${item.price.toFixed(2)}</p>
        </div>
        <p className="description">{item.instructions.slice(0, 80)}...</p>
        <div className="card_qty">
          <button className="cart_count">
            <span className="quantity">{cart[item.id] || 0}</span>
          </button>
          <Button onClick={() => handleAddToCartClick(item.id)}>
  Add to cart
</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;