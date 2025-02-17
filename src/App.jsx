import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Testimonials from './pages/Testimonials';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router basename='/within/'>
      <Navbar />
      <ScrollToTop/>

      <div className="flex-1 overflow-y-auto mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer/>
      </div>
    </Router>
    
  );
}

export default App;