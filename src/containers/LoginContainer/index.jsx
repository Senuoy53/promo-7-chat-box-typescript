import { useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";

const LoginContainer = () => {
  const intialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});

  //   HandleClick Function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //   onClick Function
  const onClick = (e) => {
    //  to stop loading the page
    e.preventDefault();
    setFormErrors(validateForm(formValues));
  };

  //   ValidateForm Function
  const validateForm = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!!!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 5 characters";
    }

    return errors;
  };

  return (
    <div className="LoginContainer">
      <h3>SIGN IN</h3>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
        />
        {formErrors.email && <p className="errors">{formErrors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
        />
        {formErrors.password && <p className="errors">{formErrors.password}</p>}
      </form>
      <button onClick={onClick}>LOGIN</button>
      <a>DO NOT YOU REMEMBER THE PASSWORD?</a>
      <Link to="/registerpage">CREATE A NEW ACCOUNT</Link>
    </div>
  );
};

export default LoginContainer;
