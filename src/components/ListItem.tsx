import React from 'react';
import { Todo } from "./types";

export interface ListProps {
    todo: Todo;
    toggleTodoFML: (selectedTodo: Todo) => any;
}

export const ToDoListItem: React.FC<ListProps> = ({ todo, toggleTodoFML })=> {
    return (
        <li>
            <label style={{textDecoration: todo.complete ? "line-through" : undefined}}>
                <input type="checkbox" checked={todo.complete}
                onChange={() => toggleTodoFML(todo)} />
                {todo.item}
            </label>
        </li>
    );
}

export default ToDoListItem;