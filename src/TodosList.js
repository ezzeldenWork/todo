import React from "react";
import {Paper, List, Divider} from "@material-ui/core";
import Todo from "./Todo";

const TodosList = (props) => {
  if (props.todo.length)
    return (
      <Paper>
        <List>
          {props.todo.map((todo, index) => (
            <>
              <Todo
                {...todo}
                key={todo.id}
                removeTodo={props.remove}
                toggleTodo={props.toggleTodo}
                editTodo={props.editTodo}
              />
              {index < props.todo.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return (
    <>
      <div className="null" style={{textAlign: "center", margin: "1rem"}}>
        <h1 style={{color: "rgb(1 1 1 / 39%)"}}>Empty List</h1>
        <p style={{color: "rgb(1 1 1 / 50%)"}}>Add Todo Items</p>
      </div>
    </>
  );
};

export default TodosList;
