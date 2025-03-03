import React from 'react';
import { Link } from 'react-router-dom';
// import { button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const LandingPage = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 animate-pulse">🎭 Sorry Not Sorry 🎭</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          The ultimate excuse generator for when you need a creative and hilarious reason to get out of anything! 
          Whether it's work, school, or social plans – we've got you covered.
        </p>
      </div>
      
      <div className="flex space-x-4 mt-4">
        <Link to="/login">
          <button className="bg-white text-purple-600 font-bold text-lg px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-all">
            Login
          </button>
        </Link>
        <Link to="/home">
          <button className="bg-yellow-400 text-black font-bold text-lg px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-all">
            Explore Excuses
          </button>
        </Link>
      </div>
      
      <div className="mt-12 flex items-center space-x-2">
        <Sparkles className="w-6 h-6 text-yellow-300 animate-spin" />
        <p className="text-sm">Generate fun excuses and share them with friends! 🚀</p>
      </div>
    </div>
    </>
  );
};

export default LandingPage;








