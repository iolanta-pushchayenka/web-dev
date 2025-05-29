import React, {useState, useEffect} from 'react';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';


function LoginPage ({onLoginSuccess, onSwitchToRegister }) {
  return (
    <div>
        <Header />
        <LoginForm 
        onLoginSuccess={onLoginSuccess}
        onSwitchToRegister={onSwitchToRegister}
        />
        <Footer />
        </div>
    );
  }


  export default LoginPage;
