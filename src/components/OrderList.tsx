import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchMenu } from "../store/menuSlice";
import { Product } from "../types/product";
import styled from "styled-components";
import Button from './Button';
import { removeFromCart, updateCartQuantity } from "../store/cartSlice";
import { useNavigate } from 'react-router-dom';

const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: grey;
  font-size: 20px;
  cursor: pointer;

  &:hover {
     color: var(--text-color);
  }
`;


const Container = styled.div`
  padding: 40px;
  background-color: #f9f9f9;
  min-height: 100vh;
  position: relative;
   background-color: var(--bg-color);
`;



const Page = styled.div`
  max-width: 900px;
  margin: auto;
`;

const Title = styled.h2`
  font-family: Inter;
  font-weight: 400;
  font-size: 50px;
  color: #35B8BE;
  text-align: center;
`;



const EmptyCartTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 30px;
  color: #35B8BE;     
  text-align: center;
  margin-top: 80px;
`;

const EmptyCartSubtitle = styled.span`
  display: block;       
  font-weight: 400;
  font-size: 18px;
  color: #888888;       
  margin-top: 12px;
  line-height: 1.4;
`;

const OrderList = styled.div`
 display: flex;
  flex-direction: column;
  gap: 26px;
  
`;

const OrderItem = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
   background: var(--cart-bg);
  color: var(--text-color);
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

const Info = styled.div`
  flex: 1;
  padding: 0 16px;
`;

const Name = styled.span`
  font-weight: 600;
margin-left: 20px;
 color: var(--text-color);
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Price = styled.span`
  font-weight: bold;
  color: #2c3e50;
   color: var(--text-color);
`;

const Quantity = styled.input`
  width: 50px;
  padding: 4px;
  text-align: center;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: var(--cart-bg);
  color: var(--text-color);
`;

const Form = styled.div`
  background-color: var(--cart-bg);
    color: var(--text-color);
margin-top: 40px;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const FormRow = styled.div`
display: flex;
  gap: 30px;
  align-items: center;
   margin-left: 200px;
  margin-top: 30px;
  margin-bottom: 20px;
 
label {
    font-weight: 600;
    margin-bottom: 6px;
      color: var(--text-color);
    margin-bottom: 20px;
  }

`;

const Input = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  background-color: var(--cart-bg);
  color: var(--text-color);
`;

const TotalPrice = styled.h3`
  text-align: right;
  margin-right: 55px;
  margin-top: 20px;
  color: var(--text-color);
`;

import BaseButton from './Button';
import { Navigate } from "react-router-dom";

const SubmitButton = styled(BaseButton)`
  margin-left: 350px;
`;

const GoToMenuButton = styled(BaseButton)`
 margin-top: 20px;
`;


const OrderPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const meals = useSelector((state: RootState) => state.menu.items);


const totalPrice = Object.entries(cartItems).reduce((sum, [id, quantity]) => {
    const meal = meals.find((item: Product) => item.id === id);
    if (!meal) return sum;
    return sum + meal.price * quantity;
  }, 0);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order submitted!");

    
  };

  return (
    <Container>
      <Page>
        <Title>Finish your order</Title>


{Object.keys(cartItems).length === 0 ? (
  <EmptyCartTitle>Your cart is empty :(
    <EmptyCartSubtitle>Add items to the shopping cart to place an order</EmptyCartSubtitle>
    <GoToMenuButton type="button" onClick = {() => navigate('/menu')}>Place an Order</GoToMenuButton>
    </EmptyCartTitle>
      
 
) : (
  <>

        <OrderList>
          {Object.entries(cartItems).map(([id, quantity]) => {
            const meal = meals.find((item: Product) => item.id === id);
            if (!meal) return null;


            return (
              <OrderItem key={id}>
                <Image src={meal.img} alt={meal.meal} />
                <Info>
                  <Name>{meal.meal}</Name>
                </Info>
                <Controls>
                 <Price>${(meal.price * quantity).toFixed(2)}</Price>
                  <Quantity type="number" value={quantity} min={1} onChange={(e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity)) {
      dispatch(updateCartQuantity({ productId: id, quantity: newQuantity }));
    }
  }}/>
                  <RemoveButton onClick={() => dispatch(removeFromCart(id))}>X</RemoveButton>
                </Controls>
              </OrderItem>
            );
          })}
        
        </OrderList>
 
 <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice> 

        <form onSubmit={handleSubmit}>
          <Form>
            <FormRow>
              <label htmlFor="street">Street</label>
              <Input id="street" type="text" />
            </FormRow>
            <FormRow>
              <label htmlFor="house">House</label>
              <Input id="house" type="text" />
            </FormRow>
            <SubmitButton type="submit">Order</SubmitButton>
          </Form>
        </form>
       </>
         )}
      </Page>
    </Container>
  );
};

export default OrderPage;