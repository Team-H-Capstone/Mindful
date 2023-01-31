import { Route, Routes } from "react-router-dom";
import Home from "./components/Hello";
import Navbar from "./components/Navbar";
import About from "./components/About";
import MyDashboard from "./components/Dashboard/MyDashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import CreatePost from "./components/Forum/CreatePost";
import Forum from "./components/Forum/Forum";
import MemoryGame from './components/MemoryGame';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mydashboard" element={<MyDashboard />} />
        <Route path="/memoryGame" element={<MemoryGame />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/forum" element={<Forum />} />

      </Routes>
    </div>
  );
};

export default App;
