import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from "./pages/Services";
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import ProductsPage from "./pages/ProductsPage";
import VirtualAcademyPage from "./pages/VirtualAcademyPage";
import AIResearchPage from "./pages/AIResearchPage";
import BlogPage from "./pages/BlogPage";
import ResourcesPage from "./pages/ResourcesPage";
import Contact from "./pages/contact";
import Portal from "./pages/Portal";
import About from "./pages/about";


function App() {
  return (
    <>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/virtual-academy" element={<VirtualAcademyPage/>} />
        <Route path="/AI-Research" element={<AIResearchPage/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/resources" element={<ResourcesPage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/portal" element={<Portal/>} />
        <Route path="/about" element={<About/>} />
          {/* Add additional routes as needed */}
        </Routes>
        <LiveChat />
        <Footer />
      </div>
    </>
  );
}

export default App;
