import './App.css';
import { Routes, Route } from "react-router-dom"
import './Css/Style.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
    </>
  );
}

export default App;
