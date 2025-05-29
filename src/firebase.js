import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyD41Dc3SwQAdewx4IdFuPfLxornd0xkJdg",
  authDomain: "my-app-d3395.firebaseapp.com",
  projectId: "my-app-d3395",
  storageBucket: "my-app-d3395.appspot.com",
  messagingSenderId: "439936798571",
  appId: "1:439936798571:web:22d280d3b1dbd65ede062e",
  measurementId: "G-16JF9JVW6V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export { auth };