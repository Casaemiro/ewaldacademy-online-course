import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contactus from './components/Contactus'
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import MusicBasics from './Pages/MusicBasics';
import Admission from './Pages/Admission';
import CourseList from './Pages/CourseList';
import ContactusPage from './Pages/ContactusPage';
import Events from './Pages/Events';
import SociaPop from './components/socialpop';
import Dashboard from './Pages/dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SociaPop />
        <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/contactus" element={<ContactusPage />}/>
        <Route path='/Abt' element={<AboutPage/>}/>
        <Route path='/musiccourse' element={<MusicBasics/>}/>
        <Route path='/admission' element={<Admission />} />
        <Route path='/courselist' element={<CourseList />} />
        <Route path='/events' element={<Events />} />
        <Route path='/dashboard' element={<Dashboard />} />
        </Routes>

        <Contactus />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
