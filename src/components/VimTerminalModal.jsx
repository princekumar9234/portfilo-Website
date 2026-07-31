import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaTerminal, FaPlay } from 'react-icons/fa';
import confetti from 'canvas-confetti';

export default function VimTerminalModal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Vim Terminal v2.0 - ThePrince Portfolio Console' },
    { type: 'system', text: 'Type ":help" for commands or press ESC to close.' }
  ]);
  const inputRef = useRef(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Global hotkey trigger ':'
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === ':' && !isOpen && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        onClose(true); // Open modal
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false); // Close modal
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Konami Code Detection
  useEffect(() => {
    let konamiIndex = 0;
    const konamiSequence = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'b', 'a'
    ];

    const handleKonami = (e) => {
      if (e.key.toLowerCase() === konamiSequence[konamiIndex].toLowerCase()) {
        konamiIndex++;
        if (konamiIndex === konamiSequence.length) {
          triggerConfetti();
          alert('🎉 Konami Easter Egg Activated! ThePrimeagen & Prince approve!');
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKonami);
    return () => window.removeEventListener('keydown', handleKonami);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: cmd }];

    if (cmd === ':help') {
      newHistory.push({
        type: 'output',
        text: 'Available Commands:\n  :help     - Show available commands\n  :projects - Navigate to projects section\n  :skills   - View skills overview\n  :github   - Open GitHub repository\n  :party    - Trigger confetti explosion\n  :clear    - Clear console output\n  :q        - Quit console'
      });
    } else if (cmd === ':projects') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      newHistory.push({ type: 'output', text: 'Navigating to #projects...' });
    } else if (cmd === ':skills') {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      newHistory.push({ type: 'output', text: 'Navigating to #skills...' });
    } else if (cmd === ':github') {
      window.open('https://github.com/princekumar9234', '_blank');
      newHistory.push({ type: 'output', text: 'Opening GitHub profile in new tab...' });
    } else if (cmd === ':party') {
      triggerConfetti();
      newHistory.push({ type: 'output', text: '🎉 Party mode engaged!' });
    } else if (cmd === ':clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cmd === ':q' || cmd === ':quit') {
      onClose(false);
      return;
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not recognized: "${cmd}". Type :help for commands.`
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-2xl bg-[#0a0d1d] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden font-mono"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d1326] border-b border-white/10">
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                <FaTerminal />
                <span>NeoVim Command Palette</span>
              </div>
              <button
                onClick={() => onClose(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-4 h-72 overflow-y-auto space-y-2 text-sm text-slate-300">
              {history.map((item, idx) => (
                <div key={idx}>
                  {item.type === 'user' && (
                    <div className="text-cyan-400 font-semibold flex items-center gap-2">
                      <FaPlay className="text-[10px]" /> {item.text}
                    </div>
                  )}
                  {item.type === 'system' && (
                    <div className="text-slate-400 italic">{item.text}</div>
                  )}
                  {item.type === 'output' && (
                    <div className="text-emerald-400 whitespace-pre-wrap">{item.text}</div>
                  )}
                  {item.type === 'error' && (
                    <div className="text-rose-400">{item.text}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Input Footer */}
            <form onSubmit={handleCommand} className="flex items-center px-4 py-3 bg-[#070914] border-t border-white/10">
              <span className="text-cyan-400 font-bold mr-2">:</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type :help, :projects, :github..."
                className="w-full bg-transparent text-white focus:outline-none text-sm"
              />
              <button type="submit" className="text-xs bg-cyan-500 text-black px-3 py-1 rounded font-bold hover:bg-cyan-400 transition-colors">
                Exec
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
