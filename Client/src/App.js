import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LikedSongs from "./pages/LikedSongs/LikedSongs";
import Library from "./pages/Library/Library";
import Playlist from "./pages/Playlist/Playlist";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
function App() {
  return (
    <div className="App" id="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route
            path="/reset-password/:email/:token"
            element={<ResetPassword />}
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Home />} />
          <Route path="/:playlist" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/liked" element={<LikedSongs />} />
          <Route path="/library" element={<Library />} />
          <Route path="/playlist/:id" element={<Playlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
