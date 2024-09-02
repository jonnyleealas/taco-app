import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons for showing/hiding password
import './SignInModal.css'; // Assuming you still want to use the CSS

function SignInModal({ show, handleClose }) {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState(""); // State to manage success/error messages
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();
        setMessage(""); // Reset message on new submission

        try {
            // Make a POST request to the backend login route
            const response = await fetch('http://localhost:5000/api/v1/auth/login', {  // Updated URL
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.status === 400) {
                const data = await response.json();
                setMessage(data.error || 'Invalid credentials'); // Set error message
            } else if (response.ok) {
                const data = await response.json();
                setMessage('Login successful');
                
                // Clear form and redirect or perform other actions as needed
                setUser({
                    email: "",
                    password: "",
                });

                // Remove the success message after 10 seconds
                setTimeout(() => {
                    setMessage("");
                }, 10000);
            } else {
                setMessage('An unexpected error occurred');
            }
        } catch (e) {
            console.log(e);
            setMessage('An error occurred while logging in');
        }
    };

    const handleGoogleSignIn = () => {
        // Trigger Google authentication (you can redirect to your backend endpoint for Google OAuth)
        window.location.href = 'http://localhost:5000/api/v1/auth/google';
    };

    return (
        <Modal id="signInModal" show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <form onSubmit={onSubmitForm}>
            <div>
                <label>
                    Email
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Password
                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            className="password-toggle"
                            onClick={handlePasswordToggle}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </label>
                {message && <p style={{ color: message === 'Login successful' ? 'green' : 'red' }}>{message}</p>}
                <input type="submit" value="Login" />
                <div>Don't have an account? <a href="/signup">Sign Up</a></div>
            </div>
        </form>
    </Modal.Body>
    <Modal.Footer className="footer-buttons">
        <div className="full-width">
            <button className="gsi-material-button">
                <div className="gsi-material-button-content-wrapper">
                    <img
                        src=".\assets\web_light_sq_ctn@2x.png"
                        alt="Google"
                        className="gsi-material-button-icon"
                    />
                    <div className="gsi-material-button-contents" onClick={handleGoogleSignIn}>
                        Sign In with Google
                    </div>
                </div>
            </button>
        </div>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
    </Modal.Footer>
</Modal>


    );
}

export default SignInModal;
