import { Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
