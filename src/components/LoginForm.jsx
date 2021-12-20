import React, { useEffect } from "react";
import Joi from "joi-browser";
import useForm from "../hooks/useForm";

const LoginForm = () => {
  const { renderInput, renderButton, handleSubmit, setSchema } = useForm();

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  useEffect(() => {
    setSchema(schema);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const doSubmit = () => {
    console.log("Login Submit!");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e, doSubmit)}>
        {renderInput("username", "Username")}
        {renderInput("password", "Password", "password")}
        {renderButton("Login")}
      </form>
    </div>
  );
};

export default LoginForm;
