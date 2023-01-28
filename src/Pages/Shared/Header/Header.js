import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { Image } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";

const Header = () => {
  const { user, userLogOut, loading } = useContext(AuthContext);
  // const [currentUser, setCurrentUser] = useState(user);

  const navigate = useNavigate();
  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        toast.success("Successfully LogOut");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Please Try Again");
      });
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="mb-2"
    >
      <Container>
        <Navbar.Brand
          className="btn btn-outline-primary"
          onClick={() => navigate("/")}
        >
          Dragon News
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/home")}>Home</Nav.Link>
          </Nav>
          {user ? (
            <Nav>
              <NavDropdown
                title={
                  user?.displayName
                    ? user.displayName
                    : user?.email.split("@")[0]
                }
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item onClick={() => navigate("/profile")}>
                  View Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogOut}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link eventKey={2} href="#memes">
                {user?.photoURL ? (
                  <Image
                    style={{
                      height: "30px",
                      width: "30px",
                      objectFit: "cover",
                    }}
                    roundedCircle
                    src={user?.photoURL}
                  />
                ) : (
                  <FaUser />
                )}
              </Nav.Link>
            </Nav>
          ) : (
            <>
              <Link to="/login" className="me-3">
                {!loading ? <Button variant="dark">Login</Button> : ""}
              </Link>
              <Link to="/signup">
                {!loading ? <Button variant="dark">Signup</Button> : ""}
              </Link>
            </>
          )}
          <div className="d-block d-lg-none">
            <LeftSideNav />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
