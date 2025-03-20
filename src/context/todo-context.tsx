'use client'

import {createContext, ReactNode, useContext, useState} from "react";
import useSWR from "swr";

interface ITodo {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}

interface TodoContextType {
    todos: ITodo[];
    filter: 'all' | 'completed' | 'pending';
    setFilter: (filter: 'all' | 'completed' | 'pending') => void;
    toggleCompletion: (id: number) => void;
    search: string;
    setSearch: (search: string) => void;
    loading: boolean;
    error: boolean;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined)

const fetcher = (url: string) => fetch(url).then(res => {
    if (!res.ok) {
        throw new Error('Ошибка загрузки данных');
    }
    return res.json();
});

export function TodoContextProvider({children} : {children: ReactNode}) {
    const { data: todos = [], mutate, isValidating: loading, error } = useSWR<ITodo[]>('https://jsonplaceholder.typicode.com/todos', fetcher);
    const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
    const [search, setSearch] = useState('');

    const toggleCompletion = (id: number) => {
        mutate(
            todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo),
            false
        );
    };

    return (
        <TodoContext.Provider value={{ todos, filter, setFilter, toggleCompletion, search, setSearch, loading, error }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoContext

export function useTodo() {
    return useContext(TodoContext)
}