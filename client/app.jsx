import React from "react";
import LoginPage from "./components/loginPage";
import SignupPage from "./components/signupPage";
import EventContainer from "./containers/eventContainer";
import EventViewContainer from "./containers/eventViewContainer";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Link to="/">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/events">EventContainer</Link>
      <Link to="eventdetails">EventView</Link>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/events" component={EventContainer} />
        <Route exact path="/eventdetails" component={EventViewContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
