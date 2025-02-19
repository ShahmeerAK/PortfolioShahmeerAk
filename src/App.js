import './App.css';
import Intro from "./components/intro/intro";
import About from './components/about/About';
import ProjectList from './components/projectList/ProjectList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import { useContext } from 'react';
import { ThemeContext } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const theme = useContext(ThemeContext)
  const darkMode=theme.state.darkMode
  return (
    <div style={{backgroundColor:darkMode? "#222" : "white", color:darkMode && "white"}}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProjectList/>
      <Contact/>
    </div>
  );
}

export default App;
