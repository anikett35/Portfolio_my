import './App.css'
import Navbar from './assets/Navbar/Navbar';
import Home from './assets/Home/Home';
import About from './assets/About/About';
import Skill from './assets/Skill/Skill';
import Projects from './assets/Project/Project';
import Footer from './assets/Footer/Footer';
import WorkExperience from './assets/Experinced/Experinced';

import SpaceBackground from './components/SpaceBackground';

function App() {

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-text selection:bg-primary/30 selection:text-white">
      {/* 3D Ambient Background */}
      <SpaceBackground />
      
      <div className="relative z-10 flex flex-col">
        <Navbar/>
        <Home/>
        <WorkExperience/>
        <Projects/>
        <Skill/>
        <About/>
        <Footer/>
      </div>
    </div>
       
    




  )
}

export default App
