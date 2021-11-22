import { useState } from "react";
import Joi from "joi-browser";
import Input from "../components/common/Input";

const useForm = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [schema, setSchema] = useState({});

  const makeSchema = (schemaObj) => {
    setSchema(schemaObj);
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);
    if (!error) return null;

    const tmpErrors = {};
    for (let item of error.details) tmpErrors[item.path[0]] = item.message;
    return tmpErrors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, subSchema);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const name = input.name;
    const value = input.value;

    const tmpErrors = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) tmpErrors[name] = errorMessage;
    else delete tmpErrors[name];
    setErrors(tmpErrors);

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tmpErrors = validate();
    setErrors(tmpErrors || {});
    if (tmpErrors) return;
    // Call the server
    loginSubmit();
  };

  const loginSubmit = () => {
    console.log("login");
  };

  const renderInput = (name, label, type = "text") => {
    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={handleChange}
        error={errors[name]}
      />
    );
  };

  const renderButton = (label) => {
    return (
      <button disabled={validate()} type="submit" className="btn btn-primary">
        {label}
      </button>
    );
  };

  return {
    data,
    errors,
    handleChange,
    handleSubmit,
    makeSchema,
    validate,
    renderInput,
    renderButton,
  };
};

export default useForm;
