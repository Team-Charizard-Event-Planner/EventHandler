import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";

const LoginPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = useSelector((state) => state.users.loggedIn);

  let history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/events");
    }
  }, [isLoggedIn]);

  const handleSignUp = () => {
    history.push("/signup");
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("handleSub");
    e.preventDefault();
    fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "USER_DATA", payload: data });
        // console.log("what is this?", data);
        // if (data === "Logging in") console.log("success");
        //   else {
        //     fetch("/auth/verify", {
        //       method: "POST",
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //       //set state for username or first name in redux
        //       body: JSON.stringify({}),
        //     });
        //   }
        // })
        // .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div id="LoginPage">
      <Button variant="contained" color="secondary" onClick={handleSignUp}>
        Sign Up
      </Button>
      <form id="LoginForm" onSubmit={handleSubmit}>
        <TextField
          id="email-login"
          label="email"
          name="email"
          onChange={handleEmail}
        />
        <br></br>
        <TextField
          id="password-login"
          type="password"
          label="password"
          name="password"
          onChange={handlePassword}
        />

        <br></br>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
