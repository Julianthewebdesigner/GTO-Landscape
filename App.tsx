
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Hardscaping from './pages/Hardscaping';
import LandscapeDesign from './pages/LandscapeDesign';
import PropertyCleanups from './pages/PropertyCleanups';
import PropertyMaintenance from './pages/PropertyMaintenance';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/hardscaping" element={<Hardscaping />} />
          <Route path="/services/landscape-design" element={<LandscapeDesign />} />
          <Route path="/services/property-cleanups" element={<PropertyCleanups />} />
          <Route path="/services/property-maintenance" element={<PropertyMaintenance />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
