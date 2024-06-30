'use client'

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import axiosInstance from '@/utils/axiosInstance'; // axiosInstance를 import

// 폼 제출 이후
export default function Login() {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // 기본 폼 제출 동작을 막음
        try {
            await axiosInstance.post('http://localhost:8080/api/users/login', { loginId, password });
            router.push('/dashboard'); // 성공 시 대시보드로
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
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
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
