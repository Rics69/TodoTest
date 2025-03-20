'use client'
import {useTodo} from "@/context/todo-context";

const Search = () => {
    const { search, setSearch } = useTodo();

    return (
        <div className="flex justify-between items-center mb-4">
            <input
                type="text"
                placeholder="Поиск по заголовку"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-2 rounded w-full"
            />
        </div>
    )
}

export default Search