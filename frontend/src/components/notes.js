// ChatGPT



// i need to send an object in the use state. fix this code: import {useState} from "react"
// import "./newUser.css"
// function NewUser() {
//     const [user, setUser] =  useState('')

//     const onSubmitForm = async (e) => {
//         e.preventDefault()

//         try{
//             const body = {user}
//             const response = await fetch("http://localhost:5000/api/v1/users", {
//                 method:"POST",
//                 headers: {"Content-Type": "application/json"},
//                 body: JSON.stringify(body)
//             })
//             console.log(response)
//         } catch (e) {
//             console.log(e)

//         }
//     }

//     return (
        
//         <form onSubmit={onSubmitForm}>
//             <div className="newUserCard">
//             <label>
//                 First Name
//                 <input type="text" placeholder="Fist Name" value={user} onChange={(e => setUser(e.target.value))}/>
//             </label>
//             <label>
//                 Last Name
//                 <input type="text" placeholder="Last Name" />
//             </label>
//             <label>
//                 Email
//                 <input type="text" placeholder="Email" />
//             </label>
//             <label>
//                 Favorite Color
//                 <input type="text" placeholder="Favorite Color" />
//             </label>
//             <input type="submit" placeholder="Submit" />
//         </div>
//         </form>
//     )
// }

// export default NewUser

// ChatGPT
// To send an object in the useState, you should initialize user as an object and update the state accordingly when input fields change. Here's how you can fix the code:

// javascript
// Copy code
// import { useState } from "react";
// import "./newUser.css";

// function NewUser() {
//     // Initialize user state as an object
//     const [user, setUser] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         favoriteColor: ""
//     });

//     // Handle input changes to update the user state
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUser({
//             ...user,
//             [name]: value
//         });
//     };

//     const onSubmitForm = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch("http://localhost:5000/api/v1/users", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(user)
//             });
//             console.log(response);
//         } catch (e) {
//             console.log(e);
//         }
//     };

//     return (
//         <form onSubmit={onSubmitForm}>
//             <div className="newUserCard">
//                 <label>
//                     First Name
//                     <input 
//                         type="text" 
//                         placeholder="First Name" 
//                         name="firstName" 
//                         value={user.firstName} 
//                         onChange={handleChange} 
//                     />
//                 </label>
//                 <label>
//                     Last Name
//                     <input 
//                         type="text" 
//                         placeholder="Last Name" 
//                         name="lastName" 
//                         value={user.lastName} 
//                         onChange={handleChange} 
//                     />
//                 </label>
//                 <label>
//                     Email
//                     <input 
//                         type="text" 
//                         placeholder="Email" 
//                         name="email" 
//                         value={user.email} 
//                         onChange={handleChange} 
//                     />
//                 </label>
//                 <label>
//                     Favorite Color
//                     <input 
//                         type="text" 
//                         placeholder="Favorite Color" 
//                         name="favoriteColor" 
//                         value={user.favoriteColor} 
//                         onChange={handleChange} 
//                     />
//                 </label>
//                 <input type="submit" placeholder="Submit" />
//             </div>
//         </form>
//     );
// }

// export default NewUser;
// Key Changes:
// useState Initialization: The user state is now an object with properties for firstName, lastName, email, and favoriteColor.
// handleChange Function: This function updates the specific property of the user object based on the input name and value.
// Form Inputs: Each input has a name attribute corresponding to the properties in the user object. The value of each input is linked to the respective property in user, and changes are handled by the handleChange function.
// This way, when the form is submitted, the user object will contain all the necessary information, and it will be sent to the server correctly.



// postgresql://postgres:54321@localhost:5432/postgres