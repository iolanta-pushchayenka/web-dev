import React, {useState,useEffect} from  'react';
import styled from 'styled-components';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; 
import Button from './Button';

const TextSwitch = styled.p`
  color: grey;
  text-align: center;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;

  span {
    color: #35B8BE;
    text-decoration: underline;
  }
`;

const StyledParagraph = styled.p `
color: grey;
margin-top: 30px;
text-align: center;
font-size: 16px;
 cursor: pointer;

span {
    color: #35B8BE;
    text-decoration: underline;
  }
    

`;


const ButtonGroup = styled.div`
 display: flex;
 gap: 30px;
 margin-left: 230px;
 margin-bottom: 20px;
`;

const Main = styled.div`
  overflow: hidden;
  background-color: #f4fdff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  max-width: 700px;
  width: 100%;
`;

const FormContainer = styled.div`
  
  margin-top: 53px;
  box-shadow: 0 4px 12px rgba(53, 184, 190, 0.3);
  border: 2px solid #35B8BE;
  border-radius: 8px;
  padding: 10px;
`;

const FieldGroup = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 90px;
  margin-top: 30px;
`;

const Label = styled.label`
  width: 100px;
  color: #08090A;
  margin-right: 10px;
  font-family: Inter, sans-serif;
  font-weight: 400px;
  font-size: 18px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
`;

const Title = styled.h2`
  font-family: Inter;
  font-size: 35px;
  color: #35B8BE;
  margin-top: 150px;
  text-align: center;
`;

function LoginForm({ onLoginSuccess, onSwitchToRegister  }) {

  const[userEmail, setUserEmail] = useState('');
  const[userPassword, setUserPassword] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, userEmail, userPassword);
      localStorage.setItem('isLoggedIn', 'true');
      onLoginSuccess();
    } catch (error) {
      alert("Ошибка входа: " + error.message);
    }
  };

  
    return(
        <Main>
            <FormWrapper>
            <Title>Log in</Title>
    <FormContainer>
   
            <form onSubmit={handleLogin}>
            <FieldGroup>
            <Label htmlFor="useremail">Email</Label>
            <Input type="email" id="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required/>
            </FieldGroup>
            <FieldGroup>
                <Label htmlFor="username">Password</Label>
            <Input type="password"  id="password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                required/>
            </FieldGroup>
           <ButtonGroup>
           <Button type="submit">Submit</Button>
              <Button type="button" cancel onClick={() => {
                setUserEmail('');
                setUserPassword('');
              }}>Cancel</Button>
            </ButtonGroup>
            </form>
            
        </FormContainer>
        <TextSwitch onClick={onSwitchToRegister}>
              Don't have an account? <span>Sign Up</span>
            </TextSwitch>
        </FormWrapper>
        </Main>
       
    )
}

export default LoginForm;