import React, { useEffect, useState } from 'react';
import "./Home.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login"); 
      return;
    }

    fetch('http://localhost:8080/', {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json()) 
    .then(data => setMessage(data.msg)) 
    .catch(err => console.log(err));
  }, [token, navigate]);

  if (!token) return null; 

  return (
    <div className='home-container'>
      Welcome to the Application
    </div>
  );
};

export default Home;
