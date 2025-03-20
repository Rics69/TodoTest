import Link from "next/link";

type TodoInfoProps = {
    todo: {
        id: number,
        title: string,
        completed: boolean,
        userId: number,
    }
}

const TodoInfo = ({todo}: TodoInfoProps) => {
    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-xl font-bold mb-2">{todo.title}</h1>
            <p><strong>ID:</strong> {todo.id}</p>
            <p><strong>ID пользователя:</strong> {todo.userId}</p>
            <p><strong>Статус:</strong> {todo.completed ? 'Завершено' : 'В процессе'}</p>
            <Link href="/" className="mt-4 inline-block text-blue-500 hover:underline">Вернуться к списку</Link>
        </div>
    )
}

export default TodoInfo