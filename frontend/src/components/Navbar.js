import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const navigate = useNavigate();

    useEffect(() => {
        const handleStorageChange = () => {
            setToken(localStorage.getItem("token")); 
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token"); 
        setToken(null); 
        window.dispatchEvent(new Event("storage")); 
        navigate("/login"); 
    };

    return (
        <nav className="navbar">
            <div className="nav-links">
                {token ? (
                    <button onClick={handleLogout} className="nav-button">Logout</button>
                ) : (
                    <>
                        <Link to="/signup" className="nav-button">Sign Up</Link>
                        <Link to="/login" className="nav-button login-btn">Login</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
