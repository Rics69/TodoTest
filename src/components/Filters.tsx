'use client'
import {useTodo} from "@/context/todo-context";

const Filters = () => {
    const { filter, setFilter } = useTodo();

    return (
        <div className="flex gap-2 mb-4">
            <button className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setFilter('all')}>Все</button>
            <button className={`px-4 py-2 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setFilter('completed')}>Выполненные</button>
            <button className={`px-4 py-2 rounded ${filter === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setFilter('pending')}>Невыполненные</button>
        </div>
    )
}

export default Filters