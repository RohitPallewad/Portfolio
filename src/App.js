import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Projects from './components/Projects';
import MySkills from './components/MySkills';
import Contact from './components/Contact';

function App() {
  return (
    <div className='flex flex-col'>
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Projects/>
      <MySkills/>
      <Contact/>
    </div>
  );
}

export default App;
