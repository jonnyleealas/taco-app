import { useState } from "react";
import './login.css';
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons for showing/hiding password

function Login() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
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
            // Make a GET request to check if the email exists and the password is correct
            const response = await fetch(`http://localhost:5000/api/v1/users?email=${encodeURIComponent(user.email)}&password=${encodeURIComponent(user.password)}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (response.status === 400) {
                const data = await response.json();

                if (data.error === "Email does not exist") {
                    return setMessage("Email does not exist"); // Set the error message
                }

                if (data.error === "Incorrect password") {
                    return setMessage("Incorrect password"); // Set the error message
                }
            } else if (response.ok) {
                const data = await response.json();

                if (data.success) {
                    setMessage("Login successful");
                    
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
                    setMessage("An unexpected error occurred");
                }
            }
        } catch (e) {
            console.log(e);
            setMessage("An error occurred while checking the user");
        }
    };

    return (
        <form onSubmit={onSubmitForm}>
            <div className="newUserCard">
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
                            type={showPassword ? "text" : "password"} // Toggle between text and password
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
           
                {message && <p style={{ color: message === "Login successful" ? "green" : "red" }}>{message}</p>} {/* Display message */}
                <input type="submit" value="Login" />
                <div>Don't have an account? <a href="/signup">Sign Up</a></div>
            </div>
        </form>
    );
}

export default Login;
