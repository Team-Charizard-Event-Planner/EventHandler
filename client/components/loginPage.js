import React from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@material-ui/core";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <div id="LoginPage">
      <form
        id="LoginForm"
        method="POST"
        action="/api/login"
        onSubmit={handleLogin}
      >
        <TextField label="username" name="username" onChange={handleSubmit} />
        <br></br>
        <TextField label="password" name="password" onChange={handleSubmit} />
        <br></br>
      </form>
      {/* this should be log in */}
      <Button
        type="submit"
        onClick={() => dispatch({ type: "increment-counter" })}
      >
        Increment Counter
      </Button>
    </div>
  );
};

export default LoginPage;
