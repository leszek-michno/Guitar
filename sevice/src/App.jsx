import "./assets/styles/App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from './components/NavBar'
import { Footer } from './components/Footer' 
import Homepage from "./pages/homepage";
import Offers from "./pages/Offers";
import Results from "./pages/Results";
import Contact from "./pages/Contact";
import PriceList from "./pages/PriceList";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="container">
        <NavBar />
        <div className="homepage">
         <Routes>
         <Route path="/" element={<Homepage/>} />
         <Route path="Oferta" element={<Offers/>} />
         <Route path="Cennik" element={<PriceList/>} />
         <Route path="Rezultaty" element={<Results/>} />
         <Route path="Kontakt" element={<Contact/>} /> 
        </Routes>  
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
