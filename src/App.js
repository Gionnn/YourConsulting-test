import "./App.css";
import { Routes, Route } from "react-router-dom";
import Masini from "./pages/Masini";
import Persoane from "./pages/Persoane";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/persoane' element={<Persoane />} />
        <Route path='/masini' element={<Masini />} />
      </Routes>
    </>
  );
};

export default App;
