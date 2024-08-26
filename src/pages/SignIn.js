import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "../style/signin.css";


function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            alert('Sign in successful!');
        // Redirect to a different page or perform some action
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className='signinpage'>
        <div className='signin__wrapper'>
            <h1>Sign In</h1>
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
            
            <button onClick={handleSignIn} style={{ margin: '10px' }} className="signinbutton">Sign In</button>

            <Link to="/signup">            
                <button style={{ margin: '10px' }} className="signinbutton">Creat a new account</button>
            </Link>
        </div>
        </div>
        
    );
}

export default SignIn;
