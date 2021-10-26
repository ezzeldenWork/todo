import React, {useContext} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import {LanguageContext} from "./contexts/LangushContext";
import {Link} from "react-router-dom";

const word = {
  english: {
    email: "Emial",
    signIn: "Sign In ",
    password: "Password",
    rememberMe: "Remember me",
  },
  french: {
    email: "Adresse Elctronique",
    signIn: "S'identifier",
    password: "Mot de passe",
    rememberMe: "Souviens-toi de moi",
  },
  spanish: {
    email: "Emial in spanish",
    signIn: "Iniciar sesión",
    password: "Contraseña",
    rememberMe: "Recuérdame",
  },
};

function Form(props) {
  const {language, chengeLanguash} = useContext(LanguageContext);
  const {classes} = props;
  const {email, signIn, password, rememberMe} = word[language];
  return (
    <min className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5"> {signIn} </Typography>
        <Select value={language} onChange={chengeLanguash}>
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="french">French</MenuItem>
          <MenuItem value="spanish">Spanish</MenuItem>
        </Select>

        <form className={classes.form} action="/app">
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">{email}</InputLabel>
            <Input id="email" type="email" name="email" autoFocus></Input>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">{password}</InputLabel>
            <Input id="password" type="password" name="password"></Input>
          </FormControl>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={rememberMe}
          />
          {/* <Link
            to="/app"
            style={{
              width: "90%",
              padding: "10px",
              backgroundColor: "#3f51b5",
              display: "block",
              color: "#fff",
              textAlign: "center",
              textDecoration: "none",
              margin: "0 auto",
              borderRadius: "5px", 
            }}
          > */}
           <Button variant="contained"  type="submit" fullWidth color="primary">
            {signIn}
          </Button>
          {/* </Link> */}
        </form>
      </Paper>
    </min>
  );
}

export default withStyles(styles)(Form);
