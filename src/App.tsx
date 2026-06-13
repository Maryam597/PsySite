import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarifs" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;