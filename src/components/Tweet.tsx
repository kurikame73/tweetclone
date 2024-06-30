'use client';

import axios from 'axios';

interface TweetProps {
    id: number;
    content: string;
    author: {
        id: number;
        username: string;
    };
    createdAt: string;
    onDelete: (id: number) => void;
}

export default function Tweet({ id, content, author, createdAt, onDelete }: TweetProps) {
    const handleDelete = async () => {
        try {
            await axios.delete(`/api/tweets/${id}`);
            onDelete(id); // 트윗 삭제 후 콜백 함수 호출
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="border-b border-gray-200 p-4">
            <p>{content}</p>
            <p className="text-sm text-gray-500">
                {author.username} - {new Date(createdAt).toLocaleDateString()}
            </p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
