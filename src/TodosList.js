import React, {useContext} from "react";
import {Paper, List, Divider} from "@material-ui/core";
import Todo from "./Todo";
import {ThemeContext} from "./contexts/ThemeContext";
import {LanguageContext} from "./contexts/LangushContext";

const content = {
  english: {
    empty: "Empty List    ",
    addNew: "Add New Todo",
  },
  french: {
    empty: "Liste vide",
    addNew: "Chercher",
  },
  spanish: {
    empty: "Lista vacía",
    addNew: "Agregar elementos de Todo",
  },
};

const TodosList = (props) => {
  const {isDarkMode} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
  const {empty, addNew} = content[language];
  const isDarkModeLite = isDarkMode ? "#ddd" : "#333";
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
        <h1 style={{color: isDarkModeLite}}>{empty}</h1>
        <p style={{color: isDarkModeLite}}>{addNew}</p>
      </div>
    </>
  );
};

export default TodosList;
