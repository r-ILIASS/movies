import React, { useState } from "react";
import Input from "../components/common/Input";

const LoginForm = () => {
  const [account, setAccount] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  const handleChange = ({ currentTarget: input }) => {
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
        />
        <Input
          name="password"
          value={account.password}
          label="Password"
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
