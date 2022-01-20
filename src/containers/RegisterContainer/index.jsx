import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const RegisterContainer = () => {
  const intialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});

  //   HandleClick Funtion
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  //   onClick Funtion
  const onclick = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
  };

  //   ValidateForm Funtion
  const validateForm = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "Username is required";
    }
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
    <div className="RegisterContainer">
      <h3>CREATE AN ACCOUNT</h3>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formValues.username}
          onChange={handleChange}
        />
        {formErrors.username && <p className="errors">{formErrors.username}</p>}
        <input
          type="text"
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

      <button onClick={onclick}>CREATE</button>
      {/* <div id="footer"> */}
      <p id="agreement">
        Already have an account? Login{" "}
        <b>
          <Link to="/loginpage">here</Link>
        </b>{" "}
      </p>

      {/* </div> */}
    </div>
  );
};

export default RegisterContainer;
