// src/Login.js
import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            alert(response.data.message);
        } catch (error) {
            setError(error.response ? error.response.data.message : 'Server Error');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-left">
                    <h1>Welcome to...</h1>
                    <p>COLLEGE EVENT MANAGEMENT SYSTEM </p>
                </div>
                <div className="login-right">
                    <h2>Login</h2>
                    <p>Welcome! Login to get amazing discounts and offers only for you.</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="User Name"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="remember-me">
                            <input type="checkbox" /> Remember me
                        </div>
                        <button type="submit">LOGIN</button>
                        {error && <p className="error-message">{error}</p>}
                    </form>
                    <div className="extra-links">
                        <a href="#">New User? <span>Signup</span></a>
                        <a href="#">Forgot your password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
