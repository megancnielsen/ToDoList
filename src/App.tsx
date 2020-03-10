import React, { useState } from 'react';
import './App.css';
import { TodoList } from "./components/Todolist";
import { Todo } from "./components/types";
import AddTodoForm from './components/inputBox';

const initTodos: Array<Todo> = [
  { item: "Run the dog", complete: true },
  { item: "Finish Tabs assignment", complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initTodos);

  console.log("Am i reloading?")

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const addTodo = (newTodo: string) => {
    setTodos([...todos, { item: newTodo, complete: false }])
  }

  return (
      <React.Fragment>
        <TodoList todos={todos} toggleTodoFn={toggleTodo} />  
        <AddTodoForm addTodo={addTodo}/>
      </React.Fragment>
  )
};

export default App;