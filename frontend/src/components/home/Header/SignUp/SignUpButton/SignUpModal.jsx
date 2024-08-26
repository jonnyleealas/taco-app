import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SignUp from '../SignUp'; // Import the existing SignUp component

function SignUpModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Use the SignUp component here */}
        <SignUp />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignUpModal;
