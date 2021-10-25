import React from "react";
import {TextField, Paper} from "@material-ui/core";
import useInputState from "./hoks/useInputState";

const TodoForm = ({addTodo}) => {
  const [value, handleChenge, reset] = useInputState("");

  return (
    <Paper style={{margin: " 1rem 0", padding: " 0 1rem "}}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChenge}
          margin="normal"
          label="Add New Todo"
          fullWidth
         />
      </form>
    </Paper>
  );
};

export default TodoForm;
