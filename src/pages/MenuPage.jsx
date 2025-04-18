import React  from "react";
import Header from '../components/Header';
import MenuList from '../components/MenuList';
import Footer from '../components/Footer';


class MenuPage extends React.Component {
  
  state = {
    addToCartCount: 0,
  };
  

 handleAddToCartClick = () => {
      this.setState(prevState => ({
        addToCartCount: prevState.addToCartCount + 1}));
 };
  

 
  render () {
  return (
      <div>
        <Header addToCartCount={this.state.addToCartCount} />
        <MenuList handleAddToCartClick={this.handleAddToCartClick}/>
        <Footer />
      </div>
    );
  }
}
  export default MenuPage;