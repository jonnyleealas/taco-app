import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SignInButton from './SignUp/SignInButton/SignInButton';
import SignUpButton from './SignUp/SignUpButton/SignUpButton';
import Search from './Search/Search';
import SignInModal from './SignUp/SignInButton/SignInModal';
import SignUpModal from './SignUp/SignUpButton/SignUpModal';

function NavScrollExample() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleSignInShow = () => setShowSignInModal(true);
  const handleSignInClose = () => setShowSignInModal(false);

  const handleSignUpShow = () => setShowSignUpModal(true);
  const handleSignUpClose = () => setShowSignUpModal(false);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="d-flex w-100 justify-content-between">
              <Nav
                className="my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
                <Form className="d-flex ms-3">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Search />
                </Form>
              </Nav>
              <div className="d-flex align-items-center">
                <SignInButton onClick={handleSignInShow} />
                <SignUpButton onClick={handleSignUpShow} />
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <SignInModal show={showSignInModal} handleClose={handleSignInClose} />
      <SignUpModal show={showSignUpModal} handleClose={handleSignUpClose} />
    </>
  );
}

export default NavScrollExample;
