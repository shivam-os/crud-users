import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export default function UserCard(props) {
  const { id, name, email, age, handleDelete } = props;

  return (
    <Card className="user-card mb-5">
      <Card.Body>
        <Card.Text className="">Name: {name}</Card.Text>
        <hr className="postcard-hr" />
        <Card.Text className="">Email: {email}</Card.Text>
        <hr className="postcard-hr" />
        <Card.Text className="">Age: {age}</Card.Text>
        <div className="button-box">
          <Button className="usercard-button" as={NavLink} to={`/user/${id}`} variant="success">
            Update
          </Button>
          <Button className="usercard-button" onClick={() => handleDelete(id)} variant="danger">
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
