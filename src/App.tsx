import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Services from './pages/Services';
import B2BMarketing from './pages/B2BMarketing';
import WebDevelopment from './pages/WebDevelopment';
import Shopify from './pages/Shopify';
import Contact from './pages/Contact';

// Placeholder pages (to be implemented)
const Xtrack = () => <div className="pt-20 min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Xtrack Page - Coming Soon</h1></div>;
const Podcast = () => <div className="pt-20 min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Podcast Page - Coming Soon</h1></div>;
const GoToMarket = () => <div className="pt-20 min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Go-To-Market Page - Coming Soon</h1></div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/services" element={<Services />} />
            <Route path="/b2b-marketing" element={<B2BMarketing />} />
            <Route path="/website-development" element={<WebDevelopment />} />
            <Route path="/shopify" element={<Shopify />} />
            <Route path="/xtrack" element={<Xtrack />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/go-to-market" element={<GoToMarket />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;