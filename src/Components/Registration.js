import { useFormik } from "formik";
import React, { useState } from "react";
import "../Components/Registration.css";
import { useNavigate } from "react-router-dom";

// Validation function
const validate = (values) => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = "*Required";
  } else if (values.firstname.length > 15) {
    errors.firstname = "*Must be 15 characters or less";
  }

  if (!values.surname) {
    errors.surname = "*Required";
  } else if (values.surname.length > 20) {
    errors.surname = "*Must be 20 characters or less";
  }

  if (!values.username) {
    errors.username = "*Required";
  } else if (values.username.length > 20) {
    errors.username = "*Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "*Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "*Invalid email address";
  }

  if (!values.password) {
    errors.password = "*Required";
  } else if (values.password.length < 8) {
    errors.password = "*Must be 8 characters or more";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "*Must contain at least one uppercase letter";
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = "*Must contain at least one lowercase letter";
  } else if (!/[0-9]/.test(values.password)) {
    errors.password = "*Must contain at least one number";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
    errors.password = "*Must contain at least one special character";
  }

  if (!values.validatePassword) {
    errors.validatePassword = "*Required";
  } else if (values.validatePassword !== values.password) {
    errors.validatePassword = "*Passwords do not match. Please try again!";
  }

  return errors;
};

const RegisterForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      validatePassword: "",
    },
    validate,
    onSubmit: (values) => {
      setIsSubmitted(true);
    },
  });

  const handleCancel = () => {
    navigate("/");
  };

  if (isSubmitted) {
    return (
      <div>
        <p>Registration was successful. Welcome!</p>
      </div>
    );
  }
  

  return (
    <div className="register-form">
      <p>Register</p>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
            placeholder="First Name"
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <div className="error-message">{formik.errors.firstname}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="surname">Surname</label>
          <input
            id="surname"
            name="surname"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.surname}
            placeholder="Last Name"
          />
          {formik.touched.surname && formik.errors.surname ? (
            <div className="error-message">{formik.errors.surname}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            placeholder="Username"
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="error-message">{formik.errors.username}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="tester123@gmail.com"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error-message">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error-message">{formik.errors.password}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="validatePassword">Confirm Password</label>
          <input
            id="validatePassword"
            name="validatePassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.validatePassword}
            placeholder="Confirm Password"
          />
          {formik.touched.validatePassword && formik.errors.validatePassword ? (
            <div className="error-message">
              {formik.errors.validatePassword}
            </div>
          ) : null}
        </div>

        <div className="form-buttons">
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" disabled={!formik.isValid || !formik.dirty}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
