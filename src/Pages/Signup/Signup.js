import React from "react";

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    console.log({ name, photoURL, email, password, confirmPassword });
  };
  return (
    <form onSubmit={handleSignup} className="w-75 mx-auto mb-2">
      <h4>Please Signup</h4>
      {/* Name */}
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          className="form-control"
          id="exampleInputName"
          aria-describedby="emailHelp"
          required
        />
      </div>
      {/* Photo URL */}
      <div className="mb-3">
        <label htmlFor="exampleInputPhotoURL" className="form-label">
          Photo URL
        </label>
        <input
          type="text"
          name="photoURL"
          className="form-control"
          id="exampleInputPhotoURL"
          placeholder="Your Photo URL"
          aria-describedby="emailHelp"
        />
      </div>
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
          placeholder="Minimum 6 Length Password"
          id="exampleInputPassword1"
          required
        />
      </div>
      {/* Confirm Password */}
      <div className="mb-3">
        <label htmlFor="exampleInputConfirmPassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          className="form-control"
          id="exampleInputConfirmPassword"
          placeholder="Confirm Password"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary d-block mx-auto w-100">
        Signup
      </button>
    </form>
  );
};

export default Signup;
