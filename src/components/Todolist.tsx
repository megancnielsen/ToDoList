import React from 'react';
import { ToDoListItem } from "./list";
import { Todo } from "./types";

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: (selectedTodo: Todo) => any;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.item}>
                    <ToDoListItem todo={todo} toggleTodo={toggleTodo} />
                </li>
            ))}
        </ul>
    )
}