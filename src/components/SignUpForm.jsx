import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createUserWithEmailAndPassword } from "firebase/auth";
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
margin-top: -50px;
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

function SignUpForm({ onLoginSuccess, onSwitchToLogin  }) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, userEmail, userPassword);
      alert("Регистрация прошла успешно!");
      localStorage.setItem('isLoggedIn', 'true');  
      onLoginSuccess();  
    } catch (error) {
      alert("Ошибка регистрации: " + error.message);
    }
  };

  return (
    <Main>
      <FormWrapper>
        <Title>Sign Up</Title>
        <FormContainer>
          <form onSubmit={handleSignUp}>
            <FieldGroup>
              <Label htmlFor="useremail">Email</Label>
              <Input
                type="email"
                id="useremail"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
            </FieldGroup>
            <FieldGroup>
            <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                required
              />
            </FieldGroup>
            <ButtonGroup>
              <Button type="submit">Register</Button>
              <Button
                type="button"
                cancel
                onClick={() => {
                  setUserEmail('');
                  setUserPassword('');
                }}
              >
                Cancel
              </Button>
            </ButtonGroup>
          </form>
          
        </FormContainer>
        <TextSwitch onClick={onSwitchToLogin}>
          Already have an account? <span>Log in </span>
            </TextSwitch>
      </FormWrapper>
    </Main>
  );
}

export default SignUpForm;