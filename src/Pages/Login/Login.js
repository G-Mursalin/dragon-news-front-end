import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
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
        toast.success("Successfully Login");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
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
          placeholder="Enter YourPpassword"
          id="exampleInputPassword1"
          required
        />
      </div>
      <div className="mb-3">
        {error ? (
          <label className="text-danger" for="exampleCheck1">
            {error}
          </label>
        ) : (
          ""
        )}
      </div>
      <button type="submit" className="btn btn-primary d-block mx-auto w-100">
        Login
      </button>
    </form>
  );
};

export default Login;
