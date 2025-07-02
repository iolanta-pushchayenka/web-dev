import React, {} from 'react';
import styled from 'styled-components';
import Img from '../assets/Img.png';  

const Image = styled.img` 
width: 680px;
height: auto;
`;

const Container1 = styled.div`
margin-left: 640px;
margin-top: -700px;
margin-bottom: 180px;
`;

function ImageSection () {
    return(
         <Container1>
            <Image src={Img} alt="My Custom Image"  />
            </Container1>
    )
}

export default ImageSection;