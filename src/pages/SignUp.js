import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "../style/signin.css";


function SignUp({ setIsRegistered }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        if (username && password) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('User registered successfully!');
            setIsRegistered(true); // Redirect to Sign In
        } else {
            alert('Please fill in both fields');
        }
    };

    return (
        <div className='signinpage'>
        <div className='signin__wrapper'>
        <h1>Sign Up</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ margin: '10px' }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ margin: '10px' }}
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ margin: '10px' }}
            />
            <button onClick={handleSignUp} style={{ margin: '10px' }} className='signinbutton'>Creat a new account</button>

            <Link to="/signin">            
                <button style={{ margin: '10px' }} className="signinbutton">Sign In</button>
            </Link>
        </div>
        </div>
    );
}

export default SignUp;