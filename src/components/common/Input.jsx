import React from "react";

const Input = ({ name, label, value, onChange, error }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
        type="text"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;