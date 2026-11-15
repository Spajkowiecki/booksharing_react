import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyBooks from "./pages/MyBooks/MyBooks";
import Settings from "./pages/Settings/Settings";
import Catalogue from "./pages/Catalogue/Catalogue";
import MySharings from "./pages/MySharings/MySharings";
import Favorites from "./pages/Favorites/Favorites";
import Profile from "./pages/Profile/Profile";
// import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/myBooks" element={<MyBooks />} />
          <Route path="/mySharings" element={<MySharings />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
