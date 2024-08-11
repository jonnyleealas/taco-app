//need a card with inputs for first name, last name, email, favorite color
import "./newUser.css"
function NewUser() {
    return (
        <div className="newUserCard">
            <h2>
                New User
            </h2>
            <input value= "first name" />
            <input value= "last name" />
            <input value= "email" />
            <input value= "favorite color" />
            <p>
                Please enter new user info
            </p>
        </div>
    )
}

export default NewUser