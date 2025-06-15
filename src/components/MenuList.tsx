import React, {useState, useEffect} from 'react';
import "../styles/MenuList.css";
import ProductCard from './ProductCard';
import Button from './Button';
import styled from 'styled-components';
import { Product } from '../types/product';
import { Cart } from '../types/cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setSelectedCategory, seeMoreItems } from '../store/menuSlice';
import { fetchMenu } from '../store/menuSlice';
import type { AppDispatch } from '../store/store';  


const ButtonContainer = styled.div`
width: 1200px;
height: 52px;
margin-top: 80px;
margin-left: 20px;
gap:30px;
display: flex; 
justify-content: center; 
align-items: center; 
`;

type MenuListProps = {
    handleAddToCartClick: (id: string) => void;
    cart: Record<string, number>;
  };

const MenuList: React.FC<MenuListProps>  = ({handleAddToCartClick, cart}) => {
  
const dispatch = useDispatch<AppDispatch>();

    const {
        items,
        isLoading,
        error,
        selectedCategory,
        itemsCount,
      } = useSelector((state: RootState) => state.menu);

    useEffect(() => {
     dispatch(fetchMenu());
         }, [dispatch]);

    
    const handleSeeMoreClick = () => {
        dispatch(seeMoreItems());
    };
    

    const handleSelectedCategoryChange = (category: string) => {
        dispatch(setSelectedCategory(category));
    };


    const filteredItems = selectedCategory === null
  ? items
  : items.filter(item => item.category === selectedCategory);

  const categories = [...new Set(items.map(item => item.category))];

        if(isLoading) {return <p>Загрузка меню...</p>}
        if(error) {return <p>Error: {error}</p>
        }
   
   return(
<main className="main">
    <div className="container">
        <h1>Browse our menu</h1>
        <p>Use our menu to place an order online, or <span className="tooltip" data-tooltip='+3706464620'>phone</span> our store to place a pickup order. Fast and fresh food.</p>
</div>
    <ButtonContainer>
        {categories.map(category => (
            <Button
            key={category}
            selected={selectedCategory === category}
            onClick = {() => handleSelectedCategoryChange(category)}>
                {category}
            </Button>
        ))}
</ButtonContainer>

<div className="menu_list">
    
{filteredItems.slice(0, itemsCount).map((item) => (
    <ProductCard
    key={item.id}
    item={item}
  />
))}
</div>  

    {filteredItems.length > itemsCount &&(
    <div className="see_more">
          <Button onClick={handleSeeMoreClick}>
  See more 
</Button>
</div>
)}
    </main>
)
}

export default MenuList;
