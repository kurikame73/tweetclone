'use client'

import React, {useEffect, useState} from "react";
import axios from "axios";
import Tweet from './Tweet';

interface Tweet {
    id: number;
    content: string;
    author: {
        id: number;
        username: string;
    };
    createdAt: string
}

const fetchTweets = async () => {
    const response = await axios.get('http://localhost:8080/api/tweets');
    return response.data;
}

export default function Feed() {
    const [tweets, setTweets] = useState<Tweet[]>([]);

    useEffect(() => {
        const getTweets = async () => {
            const data = await fetchTweets();
            setTweets(data);
        }
        getTweets();
    }, []);

    const handleDeleteTweet = (id: number) => {
        setTweets(tweets.filter(tweet => tweet.id != id));
    };

    return (
        <div>
            {tweets.map((tweet) => (
                <Tweet key={tweet.id} {...tweet} onDelete={handleDeleteTweet} />
            ))}
        </div>
    );
}