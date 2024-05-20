"use client";

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './login.module.css'; // Import CSS file

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    const response = await fetch('https://6646f54251e227f23ab0671c.mockapi.io/Login');
    const data = await response.json();
    const user = data.find((user: any) => user.Username === username && user.Password === password);
    if (user) {
      login(username);
      alert('Login successful!');
      router.push('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className={styles['login-container']}> {/* Use className from imported CSS */}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />  <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button> 
      <br />  
      <Link href="/Register">Go to Register</Link>
    </div>
  );
};

export default Login;
