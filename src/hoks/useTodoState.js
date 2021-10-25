import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
export default (intiolTodos) => {
  const [todos, setTodos] = useState(intiolTodos);
  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([...todos, {id: uuidv4(), task: newTodoText, complete: false}]);
    },
    removeTodo: (todoId) => {
      const updateTodo = todos.filter((todo) => todo.id !== todoId);
      setTodos(updateTodo);
    },

    updateTodoCheck: (todoId) => {
      const updateTodo = todos.map((todo) =>
        todo.id === todoId ? {...todo, complete: !todo.complete} : todo
      );
      setTodos(updateTodo);
    },
    editTodo: (todoId, newTAsk) => {
      const updateTodo = todos.map((todo) =>
        todo.id === todoId ? {...todo, task: newTAsk} : todo
      );
      setTodos(updateTodo);
    },
  };
};

// const removeTodo = (todoId) => {
//   const updateTodo = todos.filter((todo) => todo.id !== todoId);
//   setTodos(updateTodo);
// };

// const updateTodoCheck = (todoId) => {
//   const updateTodo = todos.map((todo) =>
//     todo.id === todoId ? {...todo, complete: !todo.complete} : todo
//   );
//   setTodos(updateTodo);
// };

// const editTodo = (todoId, newTAsk) => {
//   const updateTodo = todos.map((todo) =>
//     todo.id === todoId ? {...todo, task: newTAsk} : todo
//   );
//   setTodos(updateTodo);
// };
