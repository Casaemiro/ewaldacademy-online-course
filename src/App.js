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
import { useState, useEffect } from 'react';
import { db } from './firebaseconfig'
import { collection, getDocs } from 'firebase/firestore'
function App() {


  const [posts, setPosts] = useState([
    { Caption: "", description: "", hashtag: "" }
  ])
  const [program, setProgram] = useState([
    { name: "", description: "", cost: 0 }
  ])


  const postsCollectionRef = collection(db, 'posts')
  const programCollectionRef = collection(db, 'programs')
  useEffect(() => {

    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      const data2 = await getDocs(programCollectionRef);
      console.log(data2)

      setProgram(data2.docs.map((post) => ({ ...post.data() })))
      setPosts(data.docs.map((post) => ({ ...post.data() })))


    }
    getPosts()

  }, [])

  console.log(posts)
  console.log(program)



  return (
    <Router>
      <div className="App">
        <Navbar />
        <SociaPop />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/contactus" element={<ContactusPage />} />
          <Route path='/Abt' element={<AboutPage />} />
          <Route path='/musiccourse' element={<MusicBasics />} />
          <Route path='/admission' element={<Admission programs = {program}/>} />
          <Route path='/courselist' element={<CourseList />} />
          <Route path='/events' element={<Events post={posts} />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>

        <Contactus />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
