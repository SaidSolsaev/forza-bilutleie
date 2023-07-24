import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import RegisterBooking from "./Components/RegisterBooking";


function App() {
  return (
    <>
      <Navbar />
      
      <Router>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Router>

      <RegisterBooking />
      <Footer />
    </>

  );
}

export default App;
