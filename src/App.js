import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Budget from './pages/Budget'
import Inspire from './pages/Inspire'
import Itinerary from './pages/Itinerary'
import Plan from './pages/Plan'
import MyTrips from './pages/MyTrips';
import NoPage from './pages/NoPage'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/plan/budget" element={<Budget />} />
        <Route path="/plan/itinerary" element={<Itinerary />} />
        <Route path="/inspire" element={<Inspire />} />
        <Route path="/mytrips" element={<MyTrips />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
