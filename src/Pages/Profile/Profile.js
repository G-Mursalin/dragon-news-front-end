import React, { useContext, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { Image } from "react-bootstrap";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import useTitle from "../../Hooks/useTitle";
import uploadImageToBackEnd from "./../../utils/UploadImageToBackEnd/uploadImageToBackEnd";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";

const Profile = () => {
  const { user, userUpdateProfile, setRunThisComponentAgain } =
    useContext(AuthContext);
  useTitle("Profile");
  const [wait, setWait] = useState(false);

  // For Password Change Model
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const handleClosePasswordChange = () => setShowPasswordChange(false);
  const handleShowPasswordChange = () => setShowPasswordChange(true);

  // For Delete Account Model
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const handleCloseDeleteAccount = () => setShowDeleteAccount(false);
  const handleShowDeleteAccount = () => setShowDeleteAccount(true);

  const handleUpdateProfileInfo = async (e) => {
    setWait(true);
    // Preventing Reload
    e.preventDefault();

    // Get Value from Form
    let displayName = e.target.displayName.value;
    let photo = e.target.photo.files[0];
    let photoURL = "";

    // Check If the input field is empty or not if then set previous value
    if (displayName.trim().length === 0) {
      displayName = user?.displayName;
    }
    if (!photo) {
      photoURL = user?.photoURL;
    } else {
      photoURL = await uploadImageToBackEnd(photo);
    }

    // Send data to firebase
    userUpdateProfile({ displayName, photoURL })
      .then(() => {
        toast.success("Profile successfully updated!");
        setRunThisComponentAgain((pre) => !pre);
        setWait(false);
      })
      .catch((error) => {
        setWait(false);
        toast.error(error.message);
      });
  };

  return (
    <section>
      <h2 className="text-center mb-5">Your Profile</h2>
      <Row>
        <Col md={4}>
          {user?.photoURL ? (
            <div className="d-flex justify-content-center">
              <Image
                roundedCircle
                src={user?.photoURL}
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </div>
          ) : (
            <FaUser />
          )}

          <h6 className="text-center my-2">{user?.displayName}</h6>
        </Col>
        <Col>
          <Form onSubmit={handleUpdateProfileInfo}>
            {/* Name */}
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="displayName"
                defaultValue={user?.displayName}
              />
            </Form.Group>
            {/* Photo */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Photo ((PNG or JPG))</Form.Label>
              <Form.Control accept=".jpg, .png" type="file" name="photo" />
            </Form.Group>
            {/* Email */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Your Email (Email Address cannot be changed)
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              {wait ? "Please Wait..." : "Update"}
            </Button>
            <div>
              <Button
                variant="primary"
                className="w-100 my-2"
                onClick={handleShowPasswordChange}
              >
                Change Your Password
              </Button>
              <ChangePassword
                show={showPasswordChange}
                setShow={setShowPasswordChange}
                handleShow={handleShowPasswordChange}
                handleClose={handleClosePasswordChange}
              />
            </div>
            <div>
              <Button
                variant="primary"
                className="w-100"
                onClick={handleShowDeleteAccount}
              >
                Delete Your Account
              </Button>
              <DeleteAccount
                show={showDeleteAccount}
                setShow={setShowDeleteAccount}
                handleShow={handleShowDeleteAccount}
                handleClose={handleCloseDeleteAccount}
              />
            </div>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default Profile;
