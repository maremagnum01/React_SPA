// import logo from './logo.svg';
import './App.css';
import Header from './Componentes/Header';
import Nav from './Componentes/Nav';
import Container from './Componentes/Container';
import SectionResume from './Componentes/SectionResume';
import Portfolio from './Componentes/Portfolio';
import Contact from './Componentes/Contact';
import Footer from './Componentes/Footer';
import {ThemeContext} from './Providers/ThemeContext';
import { useState } from'react';
import Switcher from './Componentes/Switcher';


function App() {
  const [theme, setTheme] = useState('Light');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="App" style={{
          backgroundColor: theme === "Light" ? "#fff" : "#333",
          color: theme === "Light" ? "#000" : "#ccc",
        }}>
        <Header/>
        <Nav/>
        {/* <Switcher/> */}
        <Container/>
        <SectionResume/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
