'use client';

import Link from "next/link";
import React from "react";

// 클라이언트 쪽 라우팅 페이지 이동 시 전체 페이지를 새로 고침하지 않고 빠르게 이동
export default function Navbar() {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-lg font-bold">Twitter Clone</Link>
                <div>
                    <Link href="/profile" className="text-white mr-4">Profile</Link>
                    <Link href="/login" className="text-white">Login</Link>
                </div>
            </div>
        </nav>
    );
}
