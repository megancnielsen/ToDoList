import React from 'react';
import { Todo } from "./types";

export interface ListProps {
    todo: Todo;
    toggleTodo: (selectedTodo: Todo) => any;
}

export const ToDoListItem: React.FC<ListProps> = ({ todo, toggleTodo })=> {
    return (
        <li>
            <label style={{textDecoration: todo.complete ? "line-through" : undefined}}>
                <input type="checkbox" checked={todo.complete}
                onChange={() => toggleTodo(todo)} />
                {todo.item}
            </label>
        </li>
    );
}

export default ToDoListItem;