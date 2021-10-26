import React, {useEffect} from "react";
import useTodoState from "./hoks/useTodoState";
import {Typography, Paper, AppBar, Toolbar, Grid} from "@material-ui/core";
import TodosList from "./TodosList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const intiolTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const {todos, addTodo, removeTodo, updateTodoCheck, editTodo} =
    useTodoState(intiolTodos);
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Grid container justifyContent="center" style={{marginTop: "1rem"}}>
      <Grid item xs={11} md={8} lg={4}>
        <TodoForm addTodo={addTodo} />
        <TodosList
          todo={todos}
          remove={removeTodo}
          toggleTodo={updateTodoCheck}
          editTodo={editTodo}
        />
      </Grid>
    </Grid>
  );
};

export default TodoApp;
