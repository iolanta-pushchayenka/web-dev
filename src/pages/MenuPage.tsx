import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import MenuList from '../components/MenuList';
import Footer from '../components/Footer';


function MenuPage () {
  
  const [cart, setCart] = useState<Record<string, number>>({});

  const handleAddToCartClick = (itemId: string) => {
    setCart(prevCart => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1
    }));
  };

  useEffect(() => {
    console.log("Cart changed:", cart); 
  }, [cart]);

const totalCount = Object.values(cart).reduce((sum, count) => sum + count, 0);


  return (
      <div>
        <Header addToCartCount={totalCount} />
        <MenuList handleAddToCartClick={handleAddToCartClick} cart={cart}/>
        <Footer />
      </div>
    );
  }

  export default MenuPage;