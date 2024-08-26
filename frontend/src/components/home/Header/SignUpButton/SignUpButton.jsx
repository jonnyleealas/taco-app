import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function SignUpButton({ variant = "secondary" }) {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/api/v1/auth/signup');
  };

  return (
    <Button variant={variant} onClick={handleSignUpClick}>
      Sign Up
    </Button>
  );
}

export default SignUpButton;
