import React from 'react';
import { ToDoListItem } from "./ListItem";
import { Todo } from "./types";

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodoFn: (selectedTodo: Todo) => any;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodoFn }) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.item}>
                    <ToDoListItem todo={todo} toggleTodoFML={toggleTodoFn} />
                </li>
            ))}
        </ul>
    )
}
