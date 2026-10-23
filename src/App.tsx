import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </BrowserRouter>
  );
}
