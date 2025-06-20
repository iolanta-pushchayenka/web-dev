import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ImageSection from '../components/ImageSection';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { addToCart } from '../store/cartSlice';

const Main = styled.div `
overflow: hidden;
overflow-x: hidden; 
background-color: var(--bg-color);
  color: var(--text-color);
`;


function HomePage () {

const cart = useSelector((state: RootState) => state.cart.cart);
const totalCount = Object.values(cart).reduce((sum, count) => sum + count, 0);

return (
    <Main>
    <Header addToCartCount={totalCount}/>
    <HeroSection />
    <ImageSection />
    <Footer />
        </Main>
        );
      }
    
      export default HomePage;