import React, { useReducer, useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import LandingPage from './pages/LandingPage';
import ThemeToggle from './components/ThemeToggle';
import favouritesReducer from './reducers/favouritesReducer';

function App() {
  const [showGallery, setShowGallery] = useState(false);
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [],
    () => {
      const stored = localStorage.getItem('favourites');
      return stored ? JSON.parse(stored) : [];
    }
  );

  // Initialize theme properly on first load without a flicker
  useEffect(() => {
    const isDark = localStorage.getItem('theme') !== 'light';
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // save to storage whenever favs change
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  if (!showGallery) {
    return <LandingPage onExplore={() => setShowGallery(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 font-sans transition-colors duration-300">
      <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Photo Gallery</h1>
          <ThemeToggle />
        </div>
      </header>
      
      <main>
        <Gallery favourites={favourites} dispatch={dispatch} />
      </main>
    </div>
  );
}

export default App;
