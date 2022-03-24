import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateUser from "./pages/CreateUser";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/createuser" element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default App;
