
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar.js';
import Shop from './pages/Shop/Shop';
import EventsPage from './pages/EventsPage/EventsPage';
import SellerProfilePage from './pages/SellerProfilePage/SellerProfilePage.js';
import LandingPage from './pages/LandingPage/LandingPage.js';
import MapPage from './pages/MapPage/MapPage.js';
import LoginPage from './pages/LoginPage/LoginPage.js';
import Footer from './components/Footer/Footer.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/parceiros" element={<Shop />} />
          <Route path="/eventos" element={<EventsPage />} />
          <Route path="/mapa" element={<MapPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/perfil/:vendedorId" element={<SellerProfilePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;