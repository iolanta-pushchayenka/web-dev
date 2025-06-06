import React, {useState, useEffect } from "react";
import MenuPage from './pages/MenuPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Orders from './Orders';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store/store';
import { setIsAuthenticated,  setIsRegistering } from './store/authSlice';

function App() {
  
  const isRegistering = useSelector((state: RootState) => state.auth.isRegistering);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isAuthenticated);
 const dispatch = useDispatch();
 
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  //const [isRegistering, setIsRegistering] = useState<boolean>(false);


  useEffect(() => {
    const isLogged = localStorage.getItem('isLoggedIn') === 'true';
    dispatch(setIsAuthenticated(isLogged));
  }, [dispatch]);
  


  const handleLoginSuccess = () => {
    dispatch(setIsAuthenticated(true));
    localStorage.setItem('isLoggedIn', 'true');
  };


  return isLoggedIn ? (
   <div>
    <MenuPage />
     <Orders />
     </div>
  ) : isRegistering ?(
    <SignUpPage
    onLoginSuccess={handleLoginSuccess}
    onSwitchToLogin={() => dispatch(setIsRegistering(false))}
  />
) : (
  <LoginPage
  onLoginSuccess={handleLoginSuccess}
  onSwitchToRegister={() => dispatch(setIsRegistering(true))}
/>
);
}


export default App;








