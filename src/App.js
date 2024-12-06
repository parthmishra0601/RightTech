import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import { Route, Routes } from 'react-router-dom';
import Team from './Components/Team';
import Collaborations from './Components/Collaborations';
import Associates from './Components/Associates';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/associates" element={<Associates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
