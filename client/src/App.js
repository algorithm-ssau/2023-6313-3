import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home";
import RegisterPage from "./Pages/Register";
import ProfilePage from "./Pages/Profile";
import CarPage from "./Pages/Car";

function App() {
  return (
    <Routes>
      <Route path={"/home"} element={<HomePage />} />
      <Route path={"/register"} element={<RegisterPage />} />
      <Route path={"/profile"} element={<ProfilePage />} />
      <Route path={"/car"} element={<CarPage />} />
    </Routes>
  );
}

export default App;
