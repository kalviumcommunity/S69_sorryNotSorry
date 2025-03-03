import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Sparkles } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 p-6">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-purple-600 mb-4">🎭 Welcome Back! 🎭</h1>
        <p className="text-gray-700 mb-6">Sign in to unlock the best excuses of all time!</p>
        
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg shadow-lg hover:scale-105 transition-all"
          >
            Login
          </button>
        </form>
        
        <div className="mt-4 text-sm text-gray-700">
          <p>Don't have an account? <Link to="/signup" className="text-purple-500 font-bold">Sign up</Link></p>
        </div>
        
        <div className="mt-6 flex items-center justify-center space-x-2 text-yellow-500">
          <Sparkles className="w-6 h-6 animate-spin" />
          <p className="text-sm">Excuses that make life easier! 🚀</p>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default LoginPage;
