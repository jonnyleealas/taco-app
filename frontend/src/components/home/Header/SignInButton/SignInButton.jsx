import Button from 'react-bootstrap/Button';

function SignInButton({ variant = "outline-primary", onClick }) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
     
    >
      Sign In
    </Button>
  );
}

export default SignInButton;
