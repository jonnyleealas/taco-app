//need a card with inputs for first name, last name, email, favorite color
import "./newUser.css"
function NewUser() {
    return (
        
        <form>
            <div className="newUserCard">
            <label>
                First Name
                <input type="text" placeholder="Fist Name" />
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
            <input type="submit" placeholder="Submit" />
        </div>
        </form>
    )
}

export default NewUser