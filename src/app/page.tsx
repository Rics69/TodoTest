import Main from "@/components/Main";
import {TodoContextProvider} from "@/context/todo-context";

export default function Home() {
    return (
        <TodoContextProvider>
            <Main />
        </TodoContextProvider>
    );
}