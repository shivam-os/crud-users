import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { createUser } from "../services/user";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

export default function CreateUser(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const { setUsers } = props;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser({ name, email, age });
      setUsers((prev) => [response.data.createdUser, ...prev]);
      navigate("/");
      toast.success("User created!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      console.log(err);
      toast.error("Something has went wrong!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <Container>
      <h2>Add New User</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Ex. Rahul"
            onChange={(e) => setName(e.target.value)}
            value={name}
            size="lg"
            pattern="[A-Za-z ]*"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ex. abc@email.com"
            required
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            min="1"
            max="130"
            required
            placeholder="Ex. 28"
            size="lg"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>

        <div className="button-box">
          <Button className="usercard-button" type="submit" variant="success">
            Submit
          </Button>
          <Button
            className="usercard-button"
            as={NavLink}
            to="/"
            variant="danger"
          >
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
}
