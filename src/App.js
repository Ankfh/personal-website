import './App.css';
import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom'
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Footer from './Pages/Footer';


function App() {
  return (
   
    <Router>
      <Navbar />
      

      <Routes>  
          <Route index path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

      </Routes>

      <Footer/>
    </Router>
   
   
   
  
  );
}

export default App;
