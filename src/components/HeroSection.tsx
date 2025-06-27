import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const SlyledButton = styled.div `
margin-top: 50px;
`;

const Head = styled.h2`
width: 606px;
height: 180px;
font-family: 'Inter';
font-weight: 400;
font-size: 60px;
span {
color: #35B8BE;
}
line-height: 60px;
`;


const Container1 = styled.div `
margin-left: 70px;
margin-top: 100px;
margin-bottom: 170px;
`;

const Paragraf = styled.p`
width: 539px;
height: 73px;
font-family: 'Inter';
font-weight: 400;
font-size: 18px;
line-height: 24.12px;
color: #546285;
`;

const Trust = styled.div`
  margin-top: 30px;
  color: #666;
  width: 282px;
  height: 57px;
  margin-left: 2px;


  .star {
    color: #00B67A;
    margin-right: 5px;
    width: 26px;
    height: 25px;
    font-size: 35px;
  }

  a {
    color: #35b8be;
    text-decoration: none;
     font-family: 'Inter';
font-weight: 400;
font-size: 18px;
line-height: 20px;
  }

   .trust-name {
    color: var(--text-color);
    font-size: 25px;

  }

  .review-note {
  font-family: 'Inter';
font-weight: 400;
font-size: 18px;
line-height: 20px;
color: var(--text-color);
  }

.trust-line {
   
    margin-bottom: 10px;
  }

  .rating-line {
    display: flex;
    gap: 10px; 
    white-space: nowrap;

  }

`;


function HeroSection () {
  const navigate = useNavigate();
  
    return (
        <Container1>
          <Head>Beautiful food & takeaway,<span>delivered</span> to your door.</Head>
          <Paragraf>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</Paragraf>
         <SlyledButton>
          <Button type="button" onClick ={() => navigate('/menu')} >Place an Order</Button>
          </SlyledButton>
        <Trust>
  <div className="trust-line">
    <span className="star">★</span> 
    <span className="trust-name">Trustpilot</span>
    </div>
  <div className="rating-line">
    <a href="#">4.8 out of 5</a> 
    <span className="review-note">based on 2000+ reviews</span>
  </div>
</Trust>
</Container1>
    )
}

export default HeroSection;