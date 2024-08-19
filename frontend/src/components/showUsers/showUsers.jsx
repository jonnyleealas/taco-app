import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const getUsers = "http://localhost:5000/api/v1/users";

function ShowUsers() {
    const [users, setUsers] = useState([]); // Initialize as an array

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(getUsers);
            const usersData = await response.json(); // Ensure the API returns an array
            setUsers(usersData);
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/v1/users/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // Remove the deleted user from the state
                setUsers(users.filter(user => user.id !== id));
            } else {
                console.error('Failed to delete the user');
            }
        } catch (error) {
            console.error('An error occurred while deleting the user', error);
        }
    };

    return (
        <Container>
            <Row>
                {users.map((user) => (
                    <Col md={4} key={user.id} className="mb-4">
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                                <Button 
                                    variant="danger" 
                                    onClick={() => handleDelete(user.id)}
                                >
                                    Delete
                                </Button>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                                <ListGroup.Item>Favorite Color: {user.favoriteColor}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ShowUsers;
