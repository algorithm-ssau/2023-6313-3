import { Routes, Route } from 'react-router-dom';

import HomePage from './Pages/Home';
import RegisterPage from './Pages/Register';
import ProfilePage from './Pages/Profile';
import RequireAuth from './utils/requireAuth';

function App() {
  return (
    <Routes>
      <Route path={'/home'} element={<HomePage />} />
      <Route path={'/register'} element={<RegisterPage />} />
      <Route element={<RequireAuth />}>
        <Route path={'/profile'} element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
