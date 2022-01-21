import { useState } from "react";

// importer useNavigate
import { Link, useNavigate } from "react-router-dom";
import { ValuesType } from "../../utils/types";
import { RegisterContainerWrapper } from "./RegisterContainerWrapper";

// Importer firebaseAuth et firebaseService
import { firebaseAuth, firebaseService } from "../../services/firebaseService";

const RegisterContainer = () => {
  const intialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState<ValuesType>(intialValues);
  const [formErrors, setFormErrors] = useState<ValuesType>({
    username: "",
    email: "",
    password: "",
  });

  // Appeler signIn function
  const { signUp } = firebaseAuth();

  // Appeler create function
  const { create } = firebaseService("/users");

  // naviger entre les pages sans click
  const history = useNavigate();

  //   HandleClick Funtion
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  //   onClick Funtion
  const onclick = (e: any) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));

    // To test if password or email contain errors
    const { password, email, username } = validateForm(formValues);

    if (password || email || username) return;

    // SignUp
    signUp({
      email: formValues.email,
      password: formValues.password,
    })
      .then((res) => {
        console.log("ress sucess", res);

        // Si login sucess : sauvegarder les données dans firestore
        create({
          // ? pour eviter le null
          uid: res.user?.uid,
          name: formValues.username,
          email: res.user?.email,
        }).then((res) => {
          // naviger entre les pages sans click
          history("/login");
        });

        // Vider les inputs
        setFormValues(intialValues);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  //   ValidateForm Funtion
  const validateForm = (values: ValuesType) => {
    const errors: any = {};
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
    <RegisterContainerWrapper>
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

      <p id="agreement">
        Already have an account? Login{" "}
        <b>
          <Link to="/login">here</Link>
        </b>{" "}
      </p>
    </RegisterContainerWrapper>
  );
};

export default RegisterContainer;
