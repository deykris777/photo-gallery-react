import React from 'react';
import ThemeToggle from '../components/ThemeToggle';

const LandingPage = ({ onExplore }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-500">
      
      {/* Theme Toggle in top right */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-70 animate-float z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-70 animate-float-delayed z-0"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-70 animate-float z-0" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight drop-shadow-sm">
          Photo Gallery
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-10 max-w-2xl font-medium">
          Explore, search and save your favourite photos
        </p>
        <button
          onClick={onExplore}
          className="group relative px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold text-lg rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            Explore Photos
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-slate-700 dark:to-purple-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
