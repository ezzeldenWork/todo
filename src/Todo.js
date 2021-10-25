import React from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggle from "./hoks/useToggleState";
import EditTodoForm from "./EditTodoForm";

const Todo = ({id, task, completed, removeTodo, toggleTodo, editTodo}) => {
  const [isEditting, toggle] = useToggle();

  return (
    <div>
      <ListItem style={{height: "64px "}}>
        {isEditting ? (
          <EditTodoForm editTodo={editTodo} id={id} task={task} toggle={toggle} />
        ) : (
          <>
            <Checkbox
              tabIndex={-1}
              checked={completed}
              onClick={() => toggleTodo(id)}
            />
            <ListItemText
              style={{textDecoration: completed ? "line-through" : "none"}}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="Edit" onClick={toggle}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </div>
  );
};

export default Todo;
