/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUsPage from './pages/AboutUsPage';

import ServicesPage from './pages/ServicesPage';
import LandscapeArchitecturePage from './pages/LandscapeArchitecturePage';
import LawnCarePage from './pages/LawnCarePage';
import HardscapingPage from './pages/HardscapingPage';
import SeasonalCleanupPage from './pages/SeasonalCleanupPage';

import PortfolioPage from './pages/PortfolioPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogsPage from './pages/BlogsPage';

export default function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900 bg-[#fbf9f1] selection:bg-emerald-200 selection:text-emerald-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/landscape-architecture" element={<LandscapeArchitecturePage />} />
            <Route path="/services/lawn-care" element={<LawnCarePage />} />
            <Route path="/services/hardscaping" element={<HardscapingPage />} />
            <Route path="/services/seasonal-cleanup" element={<SeasonalCleanupPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


