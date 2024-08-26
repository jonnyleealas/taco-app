import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function SignUpButton({ variant = "secondary", onClick}) {
  const navigate = useNavigate();



  return (
    <Button variant={variant} onClick={onClick}>
      Sign Up
    </Button>
  );
}

export default SignUpButton;
