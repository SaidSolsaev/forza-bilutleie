import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import CarPage from "./Pages/CarsPage";
import Contact from "./Pages/Contact";


function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/våre-biler" element={<CarPage />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </Router>

      <Footer />
    </>

  );
}

export default App;
