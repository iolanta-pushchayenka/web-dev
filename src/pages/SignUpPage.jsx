import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import SignUpForm from '../components/SignUpForm';


function SignUpPage ({onLoginSuccess, onSwitchToLogin }) {
  return (
    <div>
        <Header />
        <SignUpForm
        onLoginSuccess={onLoginSuccess}
        onSwitchToRegister={onSwitchToLogin}
        />
        <Footer />
        </div>
    );
  }


  export default SignUpPage;