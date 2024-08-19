import { useState } from "react";
import "./newUser.css";

function NewUser() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        favoriteColor: "",
    });

    const [error, setError] = useState(""); // State to manage error message

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();
        setError(""); // Reset error message on new submission

        try {
            const response = await fetch("http://localhost:5000/api/v1/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });

            if (response.status === 400) {
                const data = await response.json();
                if (data.error === "Email already exists") {
                    setError("Email already exists"); // Set the error message
                }
            } else if (response.ok) {
                console.log("User created successfully");
                // You can reset the form or give success feedback here
            }
        } catch (e) {
            console.log(e);
            setError("An error occurred while creating the user");
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
                        placeholder="Favorite Color"
                        name="favoriteColor"
                        value={user.favoriteColor}
                        onChange={handleChange}
                    />
                </label>
                {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
                <input type="submit" placeholder="Submit" />
            </div>
        </form>
    );
}

export default NewUser;