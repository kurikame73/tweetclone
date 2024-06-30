import React from 'react';
import Feed from '../../components/Feed';
import PostTweetForm from '../../components/PostTweetForm';

export default function Dashboard() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <PostTweetForm />
            <Feed />
        </div>
    );
}
