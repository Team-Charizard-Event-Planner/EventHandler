import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@material-ui/core";

const SignupPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.users.loggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      history.push("/events");
    }
  }, [isLoggedIn]);

  const handleBackToLogin = (e) => {
    e.preventDefault();
    console.log("hello");
    history.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = document.getElementById("user-signup").value;
    const pass = document.getElementById("password-signup").value;
    const fName = document.getElementById("first-name-signup").value;
    const lName = document.getElementById("last-name-signup").value;
    const email = document.getElementById("email-signup").value;

    fetch("/auth/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        password: pass,
        first_name: fName,
        last_name: lName,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.isLoggedIn = true;
        dispatch({ type: "USER_DATA", payload: data });
      })
      .catch((err) => console.log("error occured while signing up", err));
  };

  return (
    <div id="SignupPage">
      <Button variant="contained" color="secondary" onClick={handleBackToLogin}>
        Back to Login
      </Button>
      <form id="SignupForm" onSubmit={handleSubmit}>
        <TextField
          id="user-signup"
          label="Username"
          name="username"
          // onChange={handleEmail}
        />
        <br></br>
        <TextField
          id="password-signup"
          type="password"
          label="Password"
          name="password"
          // onChange={handlePassword}
        />
        <br></br>
        <TextField
          id="first-name-signup"
          label="First-name"
          name="first-name"
          // onChange={handleEmail}
        />
        <br></br>
        <TextField
          id="last-name-signup"
          label="Last Name"
          name="last-name"
          // onChange={handleEmail}
        />
        <br></br>
        <TextField
          id="email-signup"
          label="Email"
          name="email"
          // onChange={handleEmail}
        />
        <br></br>
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignupPage;
