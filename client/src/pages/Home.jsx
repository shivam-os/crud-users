import Container from "react-bootstrap/Container";
import { useEffect } from "react";
import { deleteUser, fetchAllUsers } from "../services/user";
import UserCard from "../components/UserCard";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import CustomSpinner from "../components/CustomSpinner";
import { toast } from "react-toastify";

function UsersList(props) {
  const { users, handleDelete } = props;
  return (
    <>
      <Button as={NavLink} to="/user/new" id="add-user-btn">
        Add User
      </Button>
      {users.map((item) => {
        return (
          <UserCard
            key={item._id}
            id={item._id}
            name={item.name}
            email={item.email}
            age={item.age}
            handleDelete={handleDelete}
          />
        );
      })}
    </>
  );
}

export default function Home(props) {
  const { users, setUsers, setIsLoading, isLoading } = props;

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((item) => item._id !== id));
      toast.success("User deleted!", {
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

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetchAllUsers();
        setUsers(response.data.users);
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
      } finally {
        setIsLoading(false);
      }
    };

    getUsers();
  }, [setUsers, setIsLoading]);

  return (
    <Container className="home">
      {isLoading ? (
        <CustomSpinner />
      ) : (
        <UsersList users={users} handleDelete={handleDelete} />
      )}
    </Container>
  );
}
