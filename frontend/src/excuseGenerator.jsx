import React, { useState, useEffect } from 'react';
import { Sparkles, Dices, Clipboard, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import './App.css';

const excuses = [
  "My pet goldfish needed emotional support",
  "I got stuck in a time loop",
  "My keyboard only types in emojis today",
  "A rainbow appeared in my living room",
  "My coffee gained sentience",
  "My plants demanded attention",
  "A unicorn borrowed my car",
  "I had to alphabetize my sock drawer",
  "My shadow went on strike",
  "The internet was too heavy today"
];

const ExcuseGenerator = () => {
  const [excuse, setExcuse] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const generateExcuse = () => {
    setIsGenerating(true);
    setShowSparkles(false);

    setTimeout(() => {
      const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
      setExcuse(randomExcuse);
      setIsGenerating(false);
      setShowSparkles(true);
      setHistory((prev) => [randomExcuse, ...prev.slice(0, 4)]);

      setTimeout(() => setShowSparkles(false), 1000);
    }, 500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(excuse);
    alert("Excuse copied to clipboard!");
  };

  return (
    <div className={` w-screen min-h-screen pt-10  transition-all duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-pink-400 via-yellow-300 to-cyan-400'}`}>
      <div className="fixed top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-all"
        >
          {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-700" />}
        </button>
      </div>
      <div className="max-w-2xl mx-auto relative">
        {/* Parallax Background */}
        <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://source.unsplash.com/random/?galaxy,stars')" }}></div>

        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-lg animate-pulse relative">
          🎭 Sorry Not Sorry 🎭
        </h1>

        {/* Machine Display */}
        <div className="relative bg-white/90 rounded-xl p-8 shadow-lg border-4 border-purple-500 animate-pulse">
          <div className="flex items-center justify-center mb-6 space-x-2">
            <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse" />
            <div className="w-4 h-4 rounded-full bg-yellow-500 animate-pulse" />
            <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
          </div>

          {/* Excuse Display */}
          <div className="min-h-32 flex items-center justify-center relative">
            {showSparkles && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-yellow-500 animate-spin" />
              </div>
            )}
            <p className="text-2xl font-bold text-center text-purple-600 transition-all duration-300 transform">
              {isGenerating ? "Computing..." : excuse || "Press the button for an excuse!"}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={generateExcuse}
            disabled={isGenerating}
            className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-bold text-xl transform transition-all duration-300 hover:scale-105 hover:rotate-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
          >
            <Dices className={`w-8 h-8 ${isGenerating ? 'animate-spin' : ''}`} />
            <span>{isGenerating ? "Generating..." : "Generate Excuse!"}</span>
          </button>
          {excuse && (
            <button
              onClick={copyToClipboard}
              className="p-6 bg-blue-500 rounded-xl text-white font-bold text-xl transform transition-all duration-300 hover:scale-105 hover:rotate-1 flex items-center justify-center space-x-3"
            >
              <Clipboard className="w-6 h-6" />
              <span>Copy</span>
            </button>
            



          )}
        </div>

        {/* Excuse History */}
        {history.length > 0 && (
          <div className="mt-8 bg-white/80 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Previous Excuses:</h2>
            <ul className="list-disc list-inside">
              {history.map((item, index) => (
                <li key={index} className="text-gray-800">{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer */}
        <p className="text-center mt-8 text-white text-lg font-semibold">
          🌈 For when reality is just too boring! 🦄
        </p>
      </div>
      <Link to="/feedback" className='flex justify-end pr-10 pt-[275px] '>
      <button className='bg-yellow-400 text-black font-bold text-lg px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-all'>Feedback Form</button>
      
      </Link>
    </div>
  );
};

export default ExcuseGenerator;
