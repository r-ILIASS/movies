import React, { useState } from "react";
import Joi from "joi-browser";
import Input from "../components/common/Input";

const LoginForm = () => {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(account, schema, options);
    if (!error) return null;

    const tmpErrors = {};
    for (let item of error.details) tmpErrors[item.path[0]] = item.message;
    return tmpErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const tmpErrors = validate();
    setErrors(tmpErrors || {});
    if (tmpErrors) return;

    console.log("submitted");
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, subSchema);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const tmpErrors = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) tmpErrors[input.name] = errorMessage;
    else delete tmpErrors[input.name];
    setErrors(tmpErrors);

    const tmpAccount = { ...account };
    tmpAccount[input.name] = input.value;
    setAccount(tmpAccount);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          value={account.username}
          label="Username"
          onChange={handleChange}
          error={errors.username}
        />
        <Input
          name="password"
          value={account.password}
          label="Password"
          onChange={handleChange}
          error={errors.password}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
