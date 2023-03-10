import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
  const { userLogin, setLoading, setUser } = useContext(AuthContext);
  useTitle("LogIn");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    // Preventing Unnecessary Page Load
    e.preventDefault();

    // Get Data From Form
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Firebase Login
    userLogin(email, password)
      .then((userCredential) => {
        setError("");
        e.target.reset();
        if (userCredential?.user?.emailVerified) {
          toast.success("Successfully Login");
          navigate(from, { replace: true });
          setUser(userCredential?.user);
        } else {
          toast.error("Email is not verified");
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="w-75 mx-auto mb-2">
        <h4>Please Login</h4>
        {/* Email */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Your Email"
            aria-describedby="emailHelp"
            required
          />
        </div>
        {/* Password */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter Your Password"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="mb-3">
          {error ? (
            <label className="text-danger" htmlFor="exampleCheck1">
              {error}
            </label>
          ) : (
            ""
          )}
        </div>
        <Link className="text-decoration-none" to="/forgot-password">
          Forgot Password?
        </Link>
        <button
          type="submit"
          className="btn btn-primary d-block mx-auto w-100 my-2"
        >
          LogIn
        </button>
        <p className="text-center">
          New to Dragon News?{" "}
          <Link to="/signup" className="text-decoration-none">
            SignUp
          </Link>
        </p>
      </form>

      <h5>
        If you don't want to verify your email. Feel free to log in with below
        email and password:
      </h5>
      <h5>Email: golammursalin309@gmail.com</h5>
      <h5>Password: 123456</h5>
    </div>
  );
};

export default Login;
