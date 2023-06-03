import React from "react";
// import "./App.css";
// import ParentComp from "./components/ParentComp/ParentComp.jsx";
import "./index.css";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
// import Profile from "./pages/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
// import NotFound from "./pages/NotFound/NotFound";
import { useEffect, useState } from "react";
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
    <div className="relative min-h-screen">
      <div className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
