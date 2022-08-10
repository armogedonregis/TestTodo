import React, {createContext, useState, useContext} from "react";
import { ITodos } from "../../interfaces/todo";
import { ItemList } from "../data";

export type InitialContext = {
    todo: ITodos,
    HandlerDo: (e: any) => void
}

// Создание контекста

export const TodoContext = createContext<InitialContext>({
    todo: ItemList,
    HandlerDo:() => Function()
});

// Вызов контекста

export const useTasks = () => useContext(TodoContext);

export const TodoProvider: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {

  // Стейт под список тасков

  const [todo, setTodo] = useState<ITodos>(ItemList);

  // Функция свитчера таска

  const HandlerDo = (num: number) => {
      setTodo({
        ...todo,
        ...todo.todos.map(item => {
            item.tasks.map((x) => {
                if(x.num === num){
                    x.done = !x.done
                }
                return todo
            })
        })
        })        
    };

  return (
    <TodoContext.Provider value={{todo, HandlerDo}}>
        { children }
    </TodoContext.Provider>
  );
};