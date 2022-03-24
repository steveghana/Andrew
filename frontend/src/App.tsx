import { Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import "./App.css";
import { useState, useEffect } from "react";
import { fetchData } from "./api/api";
import Welcome from "./components/Welcome";
import Home from "./components/Home";

function App() {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  //----------------------------------------
  //Fetch users once the component mounts
  //----------------------------------------
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await fetchData.get("/users");
        localStorage.setItem("users", JSON.stringify(result.data));
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        setUsers(users);
        setIsLoading(false);
      } catch (error) {
        setError("Server error, Please try again");
      }
    };

    fetchUsers();
  }, []);

  //----------------------------------------
  //Delete User from local storage
  //----------------------------------------

  const handleDelete = () => {
    console.log("User has been deleted from localstorage");
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route
          path="/users"
          element={
            <Users
              users={users}
              isLoading={isLoading}
              handleDelete={handleDelete}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
