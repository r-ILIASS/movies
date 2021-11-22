import React, { useEffect } from "react";
import Joi from "joi-browser";
import useForm from "../hooks/useForm";

const LoginForm = () => {
  const { renderInput, renderButton, handleSubmit, makeSchema } = useForm();

  useEffect(() => {
    makeSchema({
      username: Joi.string().required().label("Username"),
      password: Joi.string().required().label("Password"),
    });
  }, []);
  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {renderInput("username", "Username")}
        {renderInput("password", "Password", "password")}
        {renderButton("Login")}
      </form>
    </div>
  );
};

export default LoginForm;
