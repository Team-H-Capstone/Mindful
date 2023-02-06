import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Hello";
import Navbar from "./components/Navbar";
import About from "./components/About";
import MyDashboard from "./components/Dashboard/MyDasboard";
import Login from "./components/Login";
import Register from "./components/Register";
import CreatePost from "./components/Forum/CreatePost";
import Forum from "./components/Forum/Forum";
import MemoryGame from "./components/MemoryGame";
import EditProfile from "./components/Dashboard/Profile";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Post from "./components/Forum/Post";
import GoogleCalendar from "./components/Calendar/GoogleCalendar";

const App = () => {
  const location = useLocation();

  return (
    <div>
     {/* {location.pathname !== '/music' && <Navbar />} */}
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
        <Route path="/post/:id" element={<Post />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="/music" element={<MusicPlayer />} />
        <Route path="/calendar" element={<GoogleCalendar />} />
      </Routes>
    </div>
  );
};

export default App;
