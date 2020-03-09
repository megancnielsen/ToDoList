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

  const addTodo = ( newTodo: string ) => {
    setTodos([...todos, { item: newTodo, complete: false }])
  }

  return (
    <div className="App">
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo}/>
    </React.Fragment>
    </div>
  )
};

export default App;