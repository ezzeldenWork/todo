import React, {useContext} from "react";
import {TextField, Paper} from "@material-ui/core";
import useInputState from "./hoks/useInputState";
import {ThemeContext} from "./contexts/ThemeContext";
import {LanguageContext} from "./contexts/LangushContext";

const content = {
  english: {
    addNew: "Add New Todo",
  },
  french: {
    addNew: "Chercher",
  },
  spanish: {
    addNew: "Ajouter une nouvelle tâche",
  },
};

const TodoForm = ({addTodo}) => {
  const [value, handleChenge, reset] = useInputState("");
  const {isDarkMode, toggleTheme} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
  const {addNew, flag, todoLable} = content[language];
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
          label={addNew}
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
