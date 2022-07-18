import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contactus from './components/Contactus'
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import MusicBasics from './Pages/MusicBasics';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/contactus" element={<></>}/>
        <Route path='/Abt' element={<AboutPage/>}/>
        <Route path='/musiccourse' element={<MusicBasics/>}/>
        </Routes>

        <Contactus />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
