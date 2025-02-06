import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home"; // Página de inicio
import Prestadores from "./pages/Prestadores"; // Página de prestadores>

function App() {
  return ( 
    <Router>   
      <Header />     
      <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="/prestadores" element={<Prestadores />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
