'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import TodoInfo from "@/components/TodoInfo";

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
        <TodoInfo todo={todo}/>
    );
};

export default TodoDetail;