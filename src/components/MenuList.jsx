import React from "react";
import './MenuList.css';
import burger1 from '../assets/burger.1.jpg';
import burger2 from '../assets/burger2.jpg';
import burger3 from '../assets/burger3.jpg';
import burger4 from '../assets/burger4.jpg';
import burger5 from '../assets/burger5.jpg';
import burger6 from '../assets/burger6.jpg';


const items = [
    {img: burger1, name:'Burger Classic', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: '$ 9.20 USD'},
    {img: burger2,  name:'Burger Waldo', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: '$ 10.00 USD'},
    {img: burger3,  name:'Burger Cali', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: '$ 8.00 USD'},
    {img: burger4, name:'Burger Bacon Buddy', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: '$ 9.99 USD'},
    {img: burger5,  name:'Burger Spicy', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: '$ 9.20 USD'},
    {img: burger6,  name:'Burger Dreams', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: '$ 8.00 USD'},
];

 function  MenuList () {
    return(
     <main className="main">
       <div className="container">
        <h1>Browse our menu</h1>
        <p>Use our menu to place an order online, or <span className="tooltip" data-tooltip='+3706464620'>phone</span> our store to place a pickup order. Fast and fresh food.</p>
     </div>
     <div className="container2">
        <button className="btn1">Dessert</button>
        <button className="btn2">Dinner</button>
        <button className="btn3">Breakfast</button>
 </div>
 
 <div className="menu_list">
        {items.map((item) => (
            <div className="card">
        <img className="img_burger" src={item.img} alt={item.name} />
         <div className="container3">
         <div className="name_price">
          <h1 className="name">{item.name}</h1>
          <p className="price">{item.price}</p>
          </div>
          <p className="description">{item.description}</p>
          <div className="card_qty">
         <button className="cart_count">
        <span className="quantity">1</span> 
        </button>
        <button className="add_to_cart">Add to card</button>
        </div>
          </div>
          </div>
))} 
    </div>  
    <div className="container3">
        <button className="btn4">See more</button>
 </div>
     </main>

    )
}

export default MenuList;