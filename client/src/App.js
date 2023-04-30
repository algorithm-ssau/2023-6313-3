import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home";
import RegisterPage from "./Pages/Register";
import ProfilePage from "./Pages/Profile";

function App() {
  return (
    <Routes>
      <Route path={"/home"} element={<HomePage />} />
      <Route path={"/register"} element={<RegisterPage />} />
      <Route path={"/profile"} element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
