import React from 'react';
import "../styles/MenuList.css";


class MenuList extends React.Component {
   
    
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        isLoading: true,
        error: null,
        ItemsCount: 6,
        }
    }
   

    componentDidMount () {
        fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
        .then(response => response.json ())
        .then((data) => this.setState ({items: data, isLoading: false})) 
        .catch((error => this.setState ({error, isLoading: false})));
    }


    handleSeeMoreClick = () => {
        this.setState(prevState => ({
        ItemsCount: prevState.ItemsCount + 6
        }));
    };
    
    
    

    render () {
        const { items, isLoading, error } = this.state

        if(isLoading) {
            return <p>Загрузка меню...</p>
        }

        if(error) {
            return <p>Возникла ошибка</p>
        }
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
    
{items.slice(0, this.state.ItemsCount).map((item) => (
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
        <button className="add_to_cart" onClick={this.props.handleAddToCartClick}>Add to card</button>
        </div>
        </div>
        </div>
))}
    </div>  
    {this.state.ItemsCount < items.length && (
    <div className="container3">
        <button className="btn4"   onClick={this.handleSeeMoreClick}>See more</button>
</div>
)}
    </main>


    )
}
}


export default MenuList;
