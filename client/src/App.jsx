import { Routes, Route } from 'react-router-dom';

import HomePage from './Pages/Home';
import RegisterPage from './Pages/Register';
import ProfilePage from './Pages/Profile';
import CarPage from './Pages/Car';
import RequireAuth from './utils/requireAuth.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route element={<RequireAuth />}>
        <Route path='/profile' element={<ProfilePage />} />
      </Route>
      <Route path='/cars' element={<HomePage />} />
      <Route path='/cars/:id' element={<CarPage />} />
    </Routes>
  );
}

export default App;
