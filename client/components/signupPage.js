import React from "react";
// import { TextField } from '@material-ui/core'

const SignupPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <div id="SignupPage">
      <form
        id="SignupForm"
        method="POST"
        action="/api/signup"
        onSubmit={handleSubmit}
      ></form>
    </div>
  );
};

export default SignupPage;
