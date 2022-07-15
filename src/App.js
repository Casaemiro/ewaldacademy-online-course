import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contactus from './components/Contactus'
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
    <Navbar />
   <HomePage />
   <Contactus />
   <Footer />
    </div>
  );
}

export default App;
