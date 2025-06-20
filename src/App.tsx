import React, {useState, useEffect } from "react";
import MenuPage from './pages/MenuPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NotFound from './components/NotFound';
import Orders from './Orders';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store/store';
import { setIsAuthenticated,  setIsRegistering } from './store/authSlice';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import OrderPage from './pages/OrderPage';
import { ThemeProvider } from './context/ThemeContext'




const App: React.FC = () => {
  const isRegistering = useSelector((state: RootState) => state.auth.isRegistering);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const isLogged = localStorage.getItem('isLoggedIn') === 'true';
    dispatch(setIsAuthenticated(isLogged));
  }, [dispatch]);

  const handleLoginSuccess = () => {
    dispatch(setIsAuthenticated(true));
    localStorage.setItem('isLoggedIn', 'true');
  };

  return (
   
    <BrowserRouter>
  <Routes>
     <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess}/>} />
        <Route
          path="/order"
          element={isLoggedIn ? <OrderPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/menu"
          element={
          isLoggedIn ? <MenuPage /> : <Navigate to="/login" />
          } />
       <Route path="/signup" element={<SignUpPage onLoginSuccess={handleLoginSuccess}/>} />
       <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
  
  );
}

export default App;