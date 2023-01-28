import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const ChangePassword = ({ show, handleShow, handleClose, setShow }) => {
  const { changePassword } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = (e) => {
    setError("");
    // If Password and Confirm Password Field Empty Then return
    if (!password && !confirmPassword) return;

    //  Validate Password and Confirm Password
    if (password !== confirmPassword) {
      setError("Password didn't match");
      return;
    }
    if (password.length < 6) {
      setError("Minimum 6 Length Password");
      return;
    }

    // Send Date to Firebase for Changing Current Password
    changePassword(password)
      .then(() => {
        toast.success("Password Changed Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setShow(false));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Change Your Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Enter Your New Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              autoFocus
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-0" controlId="exampleForm.ControlInput2">
            <Form.Label>Confirm Your Password</Form.Label>
            <Form.Control
              name="confirmPassword"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      {error ? <p className="text-danger text-center mb-3">{error}</p> : null}
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit" onClick={handleChangePassword}>
          Save Password
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ChangePassword;
