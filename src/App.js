import React from "react";
import TodoApp from "./TodoApp";
import NavBar from "./NavBar";
import PageContent from "./PageContent";
import {Switch, Route} from "react-router-dom";
import Form from "./Form";
import {ThemeProveder} from "./contexts/ThemeContext";
import {LanguageProveder} from "./contexts/LangushContext";

function App() {
  return (
    <Switch>
      <ThemeProveder>
        <LanguageProveder>
          <PageContent>
            <NavBar />
            <Route exact path="/">
            <Form />
            </Route>
            <Route exact path="/app">
            <TodoApp />
            </Route>
          </PageContent>
        </LanguageProveder>
      </ThemeProveder>
    </Switch>
  );
}

export default App;
