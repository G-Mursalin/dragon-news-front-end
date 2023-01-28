import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);

  const navigate = useNavigate();

  const forgotPassword = (e) => {
    // Preventing Page Reload
    e.preventDefault();

    // Get Data Form Form
    const email = e.target.email.value;

    //  Send Reset Password to email through Firebase
    resetPassword(email)
      .then(() => {
        toast.success(
          "Password reset email sent. Please check your email and login (Check the spam folder if it's not in the inbox)"
        );
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <form onSubmit={forgotPassword} className="w-75 mx-auto mb-2 mt-5">
      <h4>Please Enter Your Email Address:</h4>
      {/* Email */}
      <div className="mb-3">
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
      <button
        type="submit"
        className="btn btn-primary d-block mx-auto w-100 my-2"
      >
        Send
      </button>
    </form>
  );
};

export default ForgotPassword;
