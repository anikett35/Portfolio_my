import './App.css'
import Navbar from './assets/Navbar/Navbar';
import Home from './assets/Home/Home';
import About from './assets/About/About';
import Skill from './assets/Skill/Skill';
import Projects from './assets/Project/Project';
import Footer from './assets/Footer/Footer';
import WorkExperience from './assets/Experinced/Experinced';


function App() {

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen text-white">


    <Navbar/>
    <Home/>
    <WorkExperience/>
    <Projects/>
    <Skill/>
    <About/>
    <Footer/>
  
   
    </div>
       
    




  )
}

export default App
