"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './registerStyles.module.css'; // Import CSS file
import { useRouter } from 'next/navigation';
const Register: React.FC = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const router = useRouter();
    const handleRegister = async () => {
        const response = await fetch('https://6646f54251e227f23ab0671c.mockapi.io/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Username, Password })
        });

        if (response.ok) {
            alert('Registration successful!');
            router.push('/component');
        } else {
            alert('Registration failed!');
        }
    };

    return (
        <div className={styles['register-container']}> {/* Use className from imported CSS */}
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <h2>Register</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={Username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={Password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleRegister}>Register</button><br />
            <Link href="/component">Back to Login</Link>
        </div>
    );
};

export default Register;