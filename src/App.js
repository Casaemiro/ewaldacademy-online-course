import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contactus from './components/Contactus'
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<HomePage/>} />
        </Routes>
        <Routes>
          <Route path="/about" element={<AboutPage/>} />
        </Routes>

        <Contactus />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
