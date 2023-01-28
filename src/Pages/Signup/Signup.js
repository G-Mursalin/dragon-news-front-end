import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import uploadImageToImgBBAndGetURL from "../../utils/UploadImageToImgBB/uploadImageToImgBBAndGetURL";

const Signup = () => {
  const { createUser, userUpdateProfile, verifyEmail } =
    useContext(AuthContext);
  useTitle("SignUp");
  const [error, setError] = useState("");
  const [termsConditions, setTermsConditions] = useState(false);
  const [wait, setWait] = useState(false);
  const navigate = useNavigate();

  // Form Handler
  const handleSignup = async (e) => {
    setError("");
    setWait(true);
    // Preventing Page Re-Load
    e.preventDefault();

    // Get Data From Form
    const name = e.target.name.value;
    const photo = e.target.photo.files[0];
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setWait(false);
      setError("Password didn't match");
      return;
    }

    const photoURL = await uploadImageToImgBBAndGetURL(photo);

    // Firebase Signup
    createUser(email, password)
      .then((userCredential) => {
        setError("");
        e.target.reset();
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success(
          "Successfully created your account. A verification link sends to your email. Please verify your email and login. (Check the spam folder if it's not in the inbox)"
        );
        setWait(false);
        navigate("/login");
      })
      .catch((error) => {
        setWait(false);
        setError(error.message);
      });
  };

  // Terms and Conditions Handler
  const handleTermsConditions = (e) => {
    setTermsConditions(e.target.checked);
  };

  // Handle Update User Profile
  const handleUpdateUserProfile = (displayName, photoURL) => {
    userUpdateProfile({ displayName, photoURL })
      .then(() => {})
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Handle Email Verification
  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => {
        toast.error(error.message);
      });
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
      {/* Photo  */}
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          Your Photo (PNG or JPG)
        </label>
        <input
          className="form-control"
          type="file"
          name="photo"
          accept=".jpg, .png"
          id="formFile"
          required
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
      <div className="mb-3">
        {error ? (
          <label className="text-danger" htmlFor="exampleCheck1">
            {error}
          </label>
        ) : (
          ""
        )}
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          onClick={handleTermsConditions}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Accept Our <Link to="/terms-conditions">Terms and Conditions</Link>
        </label>
      </div>
      <button
        disabled={!termsConditions}
        type="submit"
        className="btn btn-primary d-block mx-auto w-100"
      >
        {wait ? "Please Wait..." : "SignUp"}
      </button>
    </form>
  );
};

export default Signup;
