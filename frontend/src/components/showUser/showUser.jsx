import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';

const getUserById = (id) => `http://localhost:5000/api/v1/users/${id}`;

function ShowUser() {
    const [user, setUser] = useState(null); // Initialize as null to handle single user
    const { id } = useParams(); // Get the `id` from the route parameters

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(getUserById(id));
            const userData = await response.json();
            setUser(userData);
        };

        fetchUser();
    }, [id]); // Dependency array includes `id` to refetch if it changes

    return (
        <div>
            {user && (
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{user.email}</ListGroup.Item>
                        <ListGroup.Item>{user.favoriteColor}</ListGroup.Item>
                    </ListGroup>
                </Card>
            )}
        </div>
    );
}

export default ShowUser