import React, { useState, ChangeEvent, FormEvent } from 'react';

interface AddTodoProps {
    addTodo: ( newTodo: string ) => any;

}

const AddTodoForm: React.FC<AddTodoProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState<string>("");
    console.log("I am todo component, am I reloading?")
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    }

    return (
    <form onSubmit={onSubmit}>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button type="submit">Add Todo item</button>
    </form>
    );
}


export default AddTodoForm;