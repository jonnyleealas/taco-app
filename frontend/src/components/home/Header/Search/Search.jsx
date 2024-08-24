import Button from 'react-bootstrap/Button';

function SearchButton({ variant = "outline-success", onClick }) {
  return (
    <Button variant={variant} onClick={onClick}>
      Search
    </Button>
  );
}

export default SearchButton;
