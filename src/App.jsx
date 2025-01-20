import './App.css'
import Navbar from './assets/Navbar/Navbar';
import Home from './assets/Navbar/Home/Home';
import About from './assets/Navbar/About/About';
import Skill from './assets/Skill/Skill';
import Projects from './assets/Project/Project';
import Footer from './assets/Footer/Footer';


function App() {

  return (
    <div className="bg-slate-700 h-auto w-full overflow-hidden m-0 p-0 scroll-smooth">


    <Navbar/>
    <Home/>
    <About/>
    <Skill/>
    <Projects/>
    <Footer/>
  
   
    </div>
       
    




  )
}

export default App
