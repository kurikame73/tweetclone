'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from '../../utils/axiosInstance'; // axiosInstance를 import

export default function Register() {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axiosInstance.post('http://localhost:8080/api/users/register', { loginId, password });
            router.push('/login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Login ID"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
