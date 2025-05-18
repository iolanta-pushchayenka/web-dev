import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ImageSection from '../components/ImageSection';
import useFetch from '../libs/useFetch';

const Main = styled.div `
overflow: hidden;
overflow-x: hidden; 
`;


function HomePage () {

  const logFetch = useFetch(); 

  useEffect(() => {
    logFetch(
      '/api/home',
      { method: 'GET', body: null },
      { status: 200 }
    );
  }, [logFetch]);

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