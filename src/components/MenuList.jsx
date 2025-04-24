import React, {useState, useEffect} from 'react';
import "../styles/MenuList.css";


function MenuList (props) {

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

       // const { items, isLoading, error } = this.state

        if(isLoading) {
            return <p>Загрузка меню...</p>
        }

        if(error) {
            return <p>Error: {error.message}</p>
        }
   
   return(
<main className="main">
    <div className="container">
        <h1>Browse our menu</h1>
        <p>Use our menu to place an order online, or <span className="tooltip" data-tooltip='+3706464620'>phone</span> our store to place a pickup order. Fast and fresh food.</p>
</div>
    <div className="container2">
        <button className="btn1" onClick={() => handleSelectedCategoryChange("Dessert") }>Dessert</button>
        <button className="btn2" onClick={() => handleSelectedCategoryChange("Dinner")}>Dinner</button>
        <button className="btn3" onClick={() => handleSelectedCategoryChange("Breakfast")}>Breakfast</button>
</div>

<div className="menu_list">
    
{filteredItems.slice(0, itemsCount).map((item) => (
<div className="card" key={item.id}>
        <img className="img_burger" src={item.img} alt={item.meal} />
        <div className="container3">
        <div className="name_price">
        <h1 className="name">{item.meal}</h1>
        <p className="price">${item.price.toFixed(2)}</p>
        </div>
        <p className="description">{item.instructions.slice(0, 80)}...</p>
        <div className="card_qty">
        <button className="cart_count">
        <span className="quantity">1</span>
        </button>
        <button className="add_to_cart" onClick={props.handleAddToCartClick}>Add to cart</button>
        </div>
        </div>
        </div>
))}
    </div>  
    {filteredItems.length > itemsCount &&(
    <div className="container3">
        <button className="btn4" onClick={handleSeeMoreClick}>See more</button>
</div>
)}
    </main>


    )
}



export default MenuList;
