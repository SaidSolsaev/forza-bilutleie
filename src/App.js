import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
      
      <Router>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Router>

      <Footer />
    </>

  );
}

export default App;
