import React from "react";
// import { useDispatch } from "react-redux";
import { Button, TextField } from "@material-ui/core";

const LoginPage = () => {
  // const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //need redux store
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === "incorrect username/password")
          console.log("incorrect password");
        else {
          fetch("/user/verify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="LoginPage">
      <form
        id="LoginForm"
        method="POST"
        action="/api/user/login"
        onSubmit={handleSubmit}
      >
        {/* need to add in action here for redux */}
        <TextField id="email-login" label="email" name="email" onChange={handleChange} />
        <br></br>
        {/* need to add in action here for redux */}
        <TextField id="password-login" label="password" name="password" onChange={handleChange} />
        <br></br>
      </form>
      <Button type="submit" variant="contained" color="secondary">
        Login
      </Button>
    </div>
  );
};

export default LoginPage;
