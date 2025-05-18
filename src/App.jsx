import React, {useState, useEffect } from "react";
import MenuPage from './pages/MenuPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Orders from './Orders';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const storedStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(storedStatus);
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
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
    onSwitchToLogin={() => setIsRegistering(false)}
  />
) : (
  <LoginPage
  onLoginSuccess={handleLoginSuccess}
  onSwitchToRegister={() => setIsRegistering(true)}
/>
);
}

export default App;
