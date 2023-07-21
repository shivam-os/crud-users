import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { fetchSingleUser, updateUser } from "../services/user";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function UpdateUser(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { setUsers } = props;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const inputData = { name, email, age };
      const response = await updateUser(id, inputData);
      setUsers((prev) =>
        prev.map((item) => (item._id !== id ? item : response.data.updatedUser))
      );
      toast.success("User updated!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
    } catch (err) {
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
      console.log(err);
    }
    navigate("/");
  };

  useEffect(() => {
    const getUser = async (id) => {
      try {
        const response = await fetchSingleUser(id);
        setName(response.data.existingUser.name);
        setEmail(response.data.existingUser.email);
        setAge(response.data.existingUser.age);
      } catch (err) {
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
        console.log(err);
      }
    };
    getUser(id);
  }, [id]);

  return (
    <Container>
      <h2>Edit An Existing User</h2>
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
            Update
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
