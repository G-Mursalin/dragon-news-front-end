import React, { useContext, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { Image } from "react-bootstrap";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";

const Profile = () => {
  const { user, userUpdateProfile, setRunThisComponentAgain } =
    useContext(AuthContext);
  // const [currentUser, setCurrentUser] = useState(user);

  const handleUpdateProfileInfo = (e) => {
    // Preventing Reload
    e.preventDefault();

    // Get Value from Form
    let displayName = e.target.displayName.value;
    let photoURL = e.target.photoURL.value;

    // Check If the input field is empty or not if then set previous value
    if (displayName.trim().length === 0) {
      displayName = user?.displayName;
    }
    if (photoURL.trim().length === 0) {
      photoURL = user?.photoURL;
    }

    // Send data to firebase
    userUpdateProfile({ displayName, photoURL })
      .then(() => {
        toast.success("Profile successfully updated!");
        setRunThisComponentAgain((pre) => !pre);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section>
      <h2 className="text-center mb-5">Your Profile</h2>
      <Row>
        <Col md={4}>
          {user?.photoURL ? (
            <Image
              roundedCircle
              src={user?.photoURL}
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
          ) : (
            <FaUser />
          )}

          <h6 className="text-center my-2">{user?.displayName}</h6>
        </Col>
        <Col>
          <Form onSubmit={handleUpdateProfileInfo}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="displayName"
                defaultValue={user?.displayName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                name="photoURL"
                defaultValue={user?.photoURL}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default Profile;
