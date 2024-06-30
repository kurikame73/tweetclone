'use client'

import React from 'react';

export default function LoadingScreen() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

/*
import React, { Component } from 'react';

class LoadingScreen extends Component {
    render() {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
}

export default LoadingScreen;
*/