import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";

const LoginPage = () => {
  // const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const isLoggedIn = false;
  // isLoggedIn global state
  // let history = useHistory();

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     history.push("/home");
  //   } else history.push("/login");
  // });

  // const handleSignUp = () => {
  //   history.push("/signup");
  // };

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
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
      .then((res) => res.json())
      .then((data) => {
        // dispatch({type: 'LOGIN_CHECK', payload: isLoggedIn })
        console.log(data);
        if (data === "Logging in") console.log("success");
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
      {/* onClick={handleSignUp} */}
      <Button variant="contained" color="secondary">
        Sign Up
      </Button>
      <form id="LoginForm" onSubmit={handleSubmit}>
        <TextField
          id="emailLogin"
          label="email"
          name="email"
          onChange={handleChange}
        />
        <br></br>
        <TextField
          id="passwordLogin"
          label="password"
          name="password"
          onChange={handleChange}
        />
        <br></br>
        <Button type="submit" variant="contained" color="secondary">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;