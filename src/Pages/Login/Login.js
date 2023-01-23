import React from "react";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
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
      <button type="submit" className="btn btn-primary d-block mx-auto w-100">
        Login
      </button>
    </form>
  );
};

export default Login;
