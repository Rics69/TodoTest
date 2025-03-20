import Search from "@/components/Search";
import Filters from "@/components/Filters";
import TodoList from "@/components/TodoList";

const Main = () => {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <Search/>
            <Filters/>
            <TodoList/>
        </div>
    )
}

export default Main