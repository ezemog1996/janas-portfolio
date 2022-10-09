import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <div className='container mt-4'>
      <Navbar />
      <Header />
      <Profile />
      <hr/>
      <Skills />
      <hr/>
      <Projects />
      <hr/>
      <Contact />
      <div className='text-end'>
        Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a>
      </div>
    </div>
  );
}

export default App;
