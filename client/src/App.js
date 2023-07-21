import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import UpdateUser from "./pages/UpdateUser";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              users={users}
              setUsers={setUsers}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/user/new"
          element={<CreateUser setUsers={setUsers}/>}
        />
        <Route
          path="/user/:id"
          element={<UpdateUser setUsers={setUsers}/>}
        />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
