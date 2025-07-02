import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import SignUpForm from '../components/SignUpForm';
import { AuthCallbacks, SwitchCallbacks } from '../types/auth';

type SignUpPageProps = AuthCallbacks & SwitchCallbacks;


const SignUpPage: React.FC<SignUpPageProps> = ({onLoginSuccess, onSwitchToLogin }) => {
  return (
    <div>
        <Header />
        <SignUpForm
        onLoginSuccess={onLoginSuccess}
        />
        <Footer />
        </div>
    );
  }


  export default SignUpPage;