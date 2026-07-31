import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import VimTerminalModal from './components/VimTerminalModal';
import Home from './pages/Home';
import { useLenis } from './hooks/useLenis';

export default function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#05060f] text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Precision Trailing Custom Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>

      {/* Global Footer */}
      <Footer />

      {/* NeoVim Terminal Easter Egg Modal */}
      <VimTerminalModal
        isOpen={isTerminalOpen}
        onClose={(val) => setIsTerminalOpen(val)}
      />
    </div>
  );
}
