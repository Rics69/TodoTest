'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface ITodo {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}

const TodoDetail = () => {
    const { id } = useParams();
    const [todo, setTodo] = useState<ITodo | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
                .then(res => res.json())
                .then(data => {
                    setTodo(data);
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) return <p className="text-center">Загрузка...</p>;
    if (!todo) return <p className="text-center">Задача не найдена</p>;

    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-xl font-bold mb-2">{todo.title}</h1>
            <p><strong>ID:</strong> {todo.id}</p>
            <p><strong>ID пользователя:</strong> {todo.userId}</p>
            <p><strong>Статус:</strong> {todo.completed ? 'Завершено' : 'В процессе'}</p>
            <Link href="/" className="mt-4 inline-block text-blue-500 hover:underline">Вернуться к списку</Link>
        </div>
    );
};

export default TodoDetail;