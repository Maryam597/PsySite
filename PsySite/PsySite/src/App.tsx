import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
            <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarifs" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;