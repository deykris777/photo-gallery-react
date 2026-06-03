import React, { useReducer, useEffect } from 'react';
import Gallery from './components/Gallery';
import favouritesReducer from './reducers/favouritesReducer';

function App() {
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [],
    () => {
      const stored = localStorage.getItem('favourites');
      return stored ? JSON.parse(stored) : [];
    }
  );

  // save to storage whenever favs change
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Photo Gallery</h1>
        </div>
      </header>
      
      <main>
        <Gallery favourites={favourites} dispatch={dispatch} />
      </main>
    </div>
  );
}

export default App;
