import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div>
      <h1 className="mb-3">Here is our Terms and Conditions:</h1>
      <div>
        <h4>1. USER REGISTRATION</h4>
        <p>
          You may be required to registration with the side. You agree to keep
          your password confidential and will be responsible for all use of your
          account and password. We reserve the right to remove, reclaim, or
          change a user you select if we determine, in our solid discretion,
          that such user name is inappropriate, obscene, otherwise
          objectionable.
        </p>
      </div>
      <h6>
        Go back to:{" "}
        <Link to="/signup" className="text-decoration-none">
          Signup
        </Link>
      </h6>
    </div>
  );
};

export default TermsAndConditions;
