import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import MenuList from '../components/MenuList';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { addToCart } from '../store/cartSlice';


function MenuPage () {
  
 // const [cart, setCart] = useState<Record<string, number>>({});

 const dispatch = useDispatch<AppDispatch>();
  
  // Получаем корзину из Redux
  const cart = useSelector((state: RootState) => state.cart.cart);

  const handleAddToCartClick = (itemId: string) => {
    dispatch(addToCart(itemId))
  };

  useEffect(() => {
    console.log("Cart changed:", cart); 
  }, [cart]);

const totalCount = Object.values(cart).reduce((sum, count) => sum + count, 0);


  return (
      <div>
        <Header addToCartCount={totalCount}/>
        <MenuList handleAddToCartClick={handleAddToCartClick} cart={cart} />
        <Footer />
      </div>
    );
  }

  export default MenuPage;