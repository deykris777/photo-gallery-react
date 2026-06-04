import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') !== 'light'; // default to dark
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full bg-white/20 hover:bg-white/40 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 transition-colors focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        // Moon icon for dark mode (to switch to light, or wait, usually show what you are switching to? The prompt says "Sun SVG for light mode, moon SVG for dark mode". I'll show Sun if it's dark, so clicking it goes light? "Sun SVG for light mode, moon SVG for dark mode" implies showing the icon corresponding to the current mode or the opposite? Let's show Sun when in dark mode to switch to light, or Sun when in light mode? I'll show Sun when in Light mode, Moon when in Dark mode, as requested: "Sun SVG for light mode, moon SVG for dark mode")
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        // Sun icon for light mode
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
