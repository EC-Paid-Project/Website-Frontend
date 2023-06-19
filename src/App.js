import React from "react";
// import "./App.css";
// import ParentComp from "./components/ParentComp/ParentComp.jsx";
import "./index.css";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import CartPage from "./pages/CartPage";
import { useEffect, useState } from "react";
import UserProfile from "./pages/UserProfile";
import AboutPage from "./pages/AboutPage";
import MyAddressForm from "./pages/addressForm";
import PaymentPage from "./pages/CashOrOnline";
import ConfirmationPage from "./pages/confirmMessage";
// import NotFound from "./pages/NotFound/NotFound";
// import Profile from "./pages/Profile/Profile";
// import ForceRedirect from "./components/ForceRedirect";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useLocation } from 'react-router-dom';

function App() {
  const [isConnected, setIsconnected] = useState(false);
  // const user =  JSON.parse(localStorage.getItem('user'))._id

  const checkUserToken = () => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user-token"));
      // const username = JSON.parse(localStorage.getItem("user-token")).name;
      if (user) {
        setIsconnected(true);
      } else {
        setIsconnected(false);
      }
    }
  };
  useEffect(() => {
    checkUserToken();
  }, [isConnected]);

  // eslint-disable-next-line no-unused-vars
  const Logout = () => {
    if (localStorage.getItem("user-token")) {
      localStorage.clear();
      setIsconnected(false);
    }
  };

  return (
    <div className="relative min-h-max">
      <div className="relative">
        <Routes>
          <Route exact path="/product/:id" element={<ProductPage />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/profile" element={<UserProfile />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/paymentPage" element={<PaymentPage />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/addressForm" element={<MyAddressForm />} />
          <Route exact path="/confirm" element={<ConfirmationPage />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
