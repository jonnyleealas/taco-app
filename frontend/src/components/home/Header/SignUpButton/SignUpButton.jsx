import Button from 'react-bootstrap/Button';

function SignUpButton({ variant = "primary", onClick }) {
  return (
    <Button variant={variant} onClick={onClick}>
      Sign Up
    </Button>
  );
}

export default SignUpButton;
