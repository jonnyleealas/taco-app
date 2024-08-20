import { useState } from "react";
import "./newUser.css";

function NewUser() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [message, setMessage] = useState(""); // State to manage success/error messages

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();
        setMessage(""); // Reset message on new submission

        try {
            const response = await fetch("http://localhost:5000/api/v1/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });

            if (response.status === 400) {
                const data = await response.json();
                if (data.error === "Email already exists") {
                    setMessage("Email already exists"); // Set the error message
                }
            } else if (response.ok) {
                // Reset the form and show success message
                setUser({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                });
                setMessage("Create user successful");

                // Remove the success message after 10 seconds
                setTimeout(() => {
                    setMessage("");
                }, 10000);
            }
        } catch (e) {
            console.log(e);
            setMessage("An error occurred while creating the user");
        }
    };

    return (
        <form onSubmit={onSubmitForm}>
            <div className="newUserCard">
                <label>
                    First Name
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Last Name
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleChange}
                        required
                    />
                </label>
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
                    Favorite Color
                    <input
                        type="text"
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </label>
                {message && <p style={{ color: message === "Create user successful" ? "green" : "red" }}>{message}</p>} {/* Display message */}
                <input type="submit" value="Submit" />
            </div>
        </form>
    );
}

export default NewUser;
