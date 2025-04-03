import React, { useEffect, useState } from "react";
import LoginComponent from "../components/LoginComponent";

const LandingPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = (user: any) => {
    setUser(user);
    setIsAuthenticated(true);
  };
  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
  }   
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  }
  , []);
  
};

export default LandingPage;