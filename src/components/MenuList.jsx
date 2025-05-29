import React, {useState, useEffect} from 'react';
import "../styles/MenuList.css";
import ProductCard from './ProductCard';
import Button from './Button';
import styled from 'styled-components';


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



function MenuList (props) {
    const { handleAddToCartClick, cart} = props;
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [itemsCount, setItemsCount] = useState(6);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect( () => {
        fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
        .then(response => response.json ())
        .then(data => {
            setItems(data);
            setIsLoading(false);
         })
        .catch(error => {
            setError(error);
            setIsLoading(false);
        });
    }, []);

    
    const handleSeeMoreClick = () => {
        setItemsCount(prevCount => prevCount + 6);
    };
    

    const handleSelectedCategoryChange = (category) => {
        setSelectedCategory(category);
        setItemsCount(6);
    };


    const filteredItems = selectedCategory === null
  ? items
  : items.filter(item => item.category === selectedCategory);

  const categories = [...new Set(items.map(item => item.category))];

        if(isLoading) {return <p>Загрузка меню...</p>}
        if(error) {return <p>Error: {error.message}</p>
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
item ={item}
cart={cart}
handleAddToCartClick={handleAddToCartClick}
></ProductCard>
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
