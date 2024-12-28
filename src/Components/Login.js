import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./Redux/userSlice";
import "../Components/Login.css";

// Validation
const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "*Required";
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
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
    errors.password = "*Must contain at least one special character";
  }

  return errors;
};

const Login = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn); // Get login state from Redux

  // Check if already logged in on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser && !isLoggedIn) {
      dispatch(login(storedUser)); // Set user login state in Redux
    }
  }, [dispatch, isLoggedIn]);

  const handleCancel = () => {
    navigate("/");
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      // Save the logged-in user in localStorage
      localStorage.setItem("loggedInUser", values.username);
      dispatch(login(values.username)); // Dispatch login to Redux
      setModalShow(false); 
    },
  });

  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Login
      </Button>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formik.handleSubmit} className="login-form">
            <div>
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
                onBlur={formik.handleBlur}
              />
              {formik.errors.username && formik.touched.username && (
                <div style={{ color: "red" }}>{formik.errors.username}</div>
              )}
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email && (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              )}
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password && (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              )}
            </div>
            <div className="login-button-container">
              <Button variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Login
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
