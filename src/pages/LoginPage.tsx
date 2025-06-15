import React, {useState, useEffect} from 'react';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { AuthCallbacks, SwitchCallbacks } from '../types/auth';

type LoginPageProps = AuthCallbacks & SwitchCallbacks;


const LoginPage: React.FC<LoginPageProps> = ({onLoginSuccess, onSwitchToRegister }) => {
  return (
    <div>
        <Header />
        <LoginForm 
        onLoginSuccess={onLoginSuccess}
        />
        <Footer />
        </div>
    );
  }


  export default LoginPage;
