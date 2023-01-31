import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Logins = () => {
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const { providerLogin, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGitHubLogin = () => {
    // Firebase GitHub Signup
    providerLogin(gitHubProvider)
      .then((result) => {
        navigate(from, { replace: true });
        setUser(result.user);
        toast.success("Successfully Login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    // Firebase Google Signup
    providerLogin(googleProvider)
      .then((result) => {
        navigate(from, { replace: true });
        toast.success("Successfully Login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="d-grid gap-2">
      <Button
        variant="outline-primary"
        className="d-flex align-items-center justify-content-center gap-2"
        onClick={handleGoogleLogin}
      >
        <FaGoogle /> Login with Google
      </Button>
      <Button
        onClick={handleGitHubLogin}
        variant="outline-dark"
        className="d-flex align-items-center justify-content-center gap-2"
      >
        <FaGithub /> Login with GitHub
      </Button>
    </div>
  );
};

export default Logins;
