//need a card with inputs for first name, last name, email, favorite color
import "./newUser.css"
function NewUser() {
    return (
        <div className="newUserCard">
            <h2>
                New User
            </h2>
            <div>
                <label>
                    First Name
                    <input type="text" placeholder="first name" />
                </label>

                <label>
                    Last Name
                    <input type="text" placeholder="Last Name" />
                </label>
                <label>
                     Email
                    <input type="text" placeholder="Email" />
                </label>
                <label>
                    Favorite Color
                    <input type="text" placeholder="Favorite Color" />
                </label>
                
            </div>
        </div>
    )
}

export default NewUser