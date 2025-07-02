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
background-color: #f4fdff;
`;


function HomePage () {

  
return (
    <Main>
    <Header />
    <HeroSection />
    <ImageSection />
    <Footer />
        </Main>
        );
      }
    
      export default HomePage;