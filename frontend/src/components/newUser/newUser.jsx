import {useState} from "react"
import "./newUser.css"
function NewUser() {
    const [user, setUser] =  useState({
        firstName: "",
        lastName: "",
        email: "",
        favoriteColor: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(e.target,"event")
        setUser({
            ...user,
            [name]: value
        })
    }
    const onSubmitForm = async (e) => {
        e.preventDefault()

        try{
            const response = await fetch("http://localhost:5000/api/v1/users", {
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(user)
            })
            console.log(response)
        } catch (e) {
            console.log(e)

        }
    }

    return (
        
        <form onSubmit={onSubmitForm}>
            <div className="newUserCard">
            <label>
                First Name
                <input type="text" placeholder="Fist Name" name="firstName" value={user.firstName} onChange={handleChange} />
            </label>
            <label>
                Last Name
                <input type="text" placeholder="Last Name" name="lastName" value={user.lastName} onChange={handleChange} />
            </label>
            <label>
                Email
                <input type="text" placeholder="Email" name="email" value={user.email} onChange={handleChange} />
            </label>
            <label>
                Favorite Color
                <input type="text" placeholder="Favorite Color" name="favoriteColor" value={user.favoriteColor} onChange={handleChange} />
            </label>
            <input type="submit" placeholder="Submit" />
        </div>
        </form>
    )
}

export default NewUser