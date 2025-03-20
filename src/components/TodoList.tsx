'use client'

import {useState} from "react";
import {useTodo} from "@/context/todo-context";
import Link from "next/link";

const TodoList = () => {
    const { todos, filter, setFilter, toggleCompletion, search, setSearch, loading, error } = useTodo();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'pending') return !todo.completed;
        return todo.title.toLowerCase().includes(search.toLowerCase());
    });

    const totalPages = Math.ceil(filteredTodos.length / itemsPerPage);
    const displayedTodos = filteredTodos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <>
            {error ? (
                <div className="text-red-500 text-center">Ошибка загрузки данных. Попробуйте позже.</div>
            ) : (
                <ul className="border rounded p-4 bg-white shadow">
                    {loading ? (
                        Array.from({ length: 10 }).map((_, index) => (
                            <li key={index} className="border-b py-2 animate-pulse flex justify-between items-center">
                                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/6"></div>
                            </li>
                        ))
                    ) : (
                        displayedTodos.map(todo => (
                            <li key={todo.id} className="border-b py-2 flex justify-between items-center">
                                <Link href={`/todos/${todo.id}`} className="text-blue-500 hover:underline">{todo.title}</Link>
                                <button
                                    onClick={() => toggleCompletion(todo.id)}
                                    className={`px-2 py-1 rounded ${todo.completed ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
                                >
                                    {todo.completed ? 'Закончен' : 'Создан'}
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            )}
            <div className="flex justify-between mt-4">
                <button className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50" disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>Назад</button>
                <span>Страница {currentPage} из {totalPages}</span>
                <button className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50" disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>Вперед</button>
            </div>
        </>
    )
}

export default TodoList