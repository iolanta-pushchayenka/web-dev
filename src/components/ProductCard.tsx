import React from 'react';
import "../styles/MenuList.css";
import Button from './Button';
import { Product } from '../types/product';
import { Cart } from '../types/cart';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';


type ProductCardProps = {
  item: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const itemCount = cart[item.id] || 0;
  

  const handleAddToCartClick = () => {
    dispatch(addToCart(item.id));
  };

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
          <Button onClick = {handleAddToCartClick}>
  Add to cart 
</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;