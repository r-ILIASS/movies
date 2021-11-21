import React, { useState } from "react";

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
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            name="username"
            value={account.username}
            onChange={handleChange}
            className="form-control"
            type="text"
            autoFocus
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            name="password"
            onChange={handleChange}
            value={account.password}
            className="form-control"
            type="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
