import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import MenuList from '../components/MenuList';
import Footer from '../components/Footer';


function MenuPage () {
  
const [addToCartCount, setAddToCartCount] = useState(0);

const handleAddToCartClick = () => {
  setAddToCartCount(prevCount => prevCount + 1);
};

  return (
      <div>
        <Header addToCartCount={addToCartCount} />
        <MenuList handleAddToCartClick={handleAddToCartClick}/>
        <Footer />
      </div>
    );
  }

  export default MenuPage;