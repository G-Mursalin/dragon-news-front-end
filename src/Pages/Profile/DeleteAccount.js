import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const DeleteAccount = ({ show, handleShow, handleClose, setShow }) => {
  const { user, deleteYourAccount } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();

  const handleDeleteAccount = () => {
    setError("");
    // Check if user insert correct user name
    if (!displayName) return;
    if (!(user?.displayName === displayName.trim())) {
      setError("Please Type Correctly");
    }

    // Delete Account Firebase
    deleteYourAccount()
      .then(() => {
        toast.success("User deleted");
        navigate("/");
      })
      .catch((error) => {
        toast.error("error.message");
      });

    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Change Your Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Enter Your User Name ({user?.displayName})</Form.Label>
            <Form.Control
              name="displayName"
              type="text"
              onChange={(e) => setDisplayName(e.target.value)}
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      {error ? <p className="text-danger text-center mb-3">{error}</p> : null}
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit" onClick={handleDeleteAccount}>
          Delete Your Account
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteAccount;
