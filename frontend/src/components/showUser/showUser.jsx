import { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


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
                        <>

                            <Card style={{ width: '18rem' }}>
                               
                                <Card.Body>
                                    <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                                    <Card.Text>
                                    
                              
                                
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item> {user.email}</ListGroup.Item>
                                    <ListGroup.Item> {user.favoriteColor}</ListGroup.Item>
                                </ListGroup>
                                
                            </Card>








                            < div key={user.id}>

                                
                                <h1>
                                   
                                </h1>
                            </div>
                        </>


                    )
                })}
            </ul>

        </div>
    )
}

export default ShowUser