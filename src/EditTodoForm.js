import {TextField} from "@material-ui/core";
import useInputState from "./hoks/useInputState";

const EditTodoForm = ({editTodo, id, task, toggle}) => {
  const [value, handelCheng, reset] = useInputState(task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggle()
      }}
      style={{marginLeft: "1rem", width: "50%"}}
    >
      <TextField
        value={value}
        margin="normal"
        onChange={handelCheng}
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default EditTodoForm;
