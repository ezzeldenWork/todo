import React, {useContext} from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Switch,
  withStyles,
} from "@material-ui/core";
import styles from "./styles/NavBarStyles";
import {ThemeContext} from "./contexts/ThemeContext";
import {LanguageContext} from "./contexts/LangushContext";

const content = {
  english: {
    flag: "🔅",
    todoLable: "Todo App",
  },
  french: {
    flag: "🎡",
    todoLable: "Application à faire",
  },
  spanish: {
    flag: "🎋",
    todoLable: "Aplicación Todo",
  },
};
function NavBar(props) {
  const {isDarkMode, toggleTheme} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
  const {classes} = props;
  const { flag, todoLable} = content[language];
  return (
    <div className={classes.root}>
      <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <spna>{flag}</spna>
          </IconButton>
          <Typography className={classes.tittle} variant="h6" color="inherit">
            {todoLable}
          </Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow}></div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(NavBar);
