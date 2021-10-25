import React, {useEffect} from "react";
import useTodoState from "./hoks/useTodoState";
import {Typography, Paper, AppBar, Toolbar, Grid} from "@material-ui/core";
import TodosList from "./TodosList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const intiolTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const {todos, addTodo, removeTodo, updateTodoCheck, editTodo} = useTodoState(intiolTodos);
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#ddd",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{height: "64px"}}>
        <Toolbar>
          <Typography color="inhert"> TODOS App </Typography>
        </Toolbar>
      </AppBar>

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
    </Paper>
  );
};

export default TodoApp;
