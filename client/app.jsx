import React from "react";
import LoginPage from "./components/loginPage";
import SignupPage from "./components/signupPage";
import EventContainer from "./containers/eventContainer";
import MainContainer from "./containers/MainContainer";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Link to="/">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/event">EventContainer</Link>
      <Link to="eventdetails/:id">EventView</Link>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/event" component={EventContainer} />
        <Route exact path="/eventdetails/:id" component={MainContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
