import {useState, useEffect} from "react"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const getUsers = "http://localhost:5000/api/v1/users"

function ShowUser() {
    const [users, setUsers] = useState([]); // Initialize as an array

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(getUsers);
            const usersData = await response.json(); // Ensure the API returns an array
            setUsers(usersData);
        };

        fetchUsers();
    }, []);


    return (
        <div>
    <ul>
        {users.map((user) => {
            return (
            
                    < div key={user.id}>
                        <h1>
                            {user.firstName} {user.lastName}
                        </h1>
                        <h1>
                            {user.email}
                        </h1>
                        <h1>
                            {user.favoriteColor}
                        </h1>
                    </div>
            
        
        )
        })}
    </ul>
   
        </div>
    )
}

export default ShowUser