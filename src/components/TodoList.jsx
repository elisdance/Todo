import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos,setTodos] = useState([]);

  const addTodo = todo => {
    const newTodos = [todo,...todos];
    setTodos(newTodos);
  }

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removeArr);
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(item => item.id === todoId ? newValue : item))
  }

  const completeTodo = id => {
    let updated = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete =! todo.isComplete
      }
      return todo;
    });
    setTodos(updated);
  }
  return (
    <div>
      <h1>Today's plans</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo 
      todos={todos}
      removeTodo={removeTodo}
      completeTodo={completeTodo}
      updateTodo={updateTodo}
      />
    </div>
  )
}

export default TodoList