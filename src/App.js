import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Inspire from './pages/Inspire'
import Plan from './pages/Plan'
import MyTrips from './pages/MyTrips';
import NoPage from './pages/NoPage'
import NewTrip from './pages/NewTrip';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/inspire" element={<Inspire />} />
        <Route path="/mytrips" element={<MyTrips />} />
        <Route path="/plan/new-trip" element={<NewTrip />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
