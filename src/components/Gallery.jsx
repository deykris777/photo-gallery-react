import React, { useState, useCallback, useMemo } from 'react';
import useFetchPhotos from '../hooks/useFetchPhotos';
import SearchBar from './SearchBar';
import SkeletonCard from './SkeletonCard';
import PhotoCard from './PhotoCard';
import Lightbox from './Lightbox';

const Gallery = ({ favourites, dispatch }) => {
  const { photos, loading, error } = useFetchPhotos();
  const [query, setQuery] = useState('');
  const [showFavouritesOnly, setShowFavouritesOnly] = useState(false);
  
  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // dont recreate this fn every render
  const onSearch = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  // only recompute when query, photos, or favourite state changes
  const filtered = useMemo(() => {
    let list = photos;
    if (showFavouritesOnly) {
      list = list.filter(p => favourites.includes(p.id));
    }
    if (query) {
      list = list.filter(p =>
        p.author.toLowerCase().includes(query.toLowerCase())
      );
    }
    return list;
  }, [photos, query, showFavouritesOnly, favourites]);

  const toggleFav = useCallback((id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: id });
  }, [dispatch]);

  const openLightbox = useCallback((photoId) => {
    const index = filtered.findIndex(p => p.id === photoId);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  }, [filtered]);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const navigateLightbox = useCallback((direction) => {
    setLightboxIndex(prev => {
      if (prev === null) return null;
      let next = prev + direction;
      if (next < 0) next = filtered.length - 1;
      if (next >= filtered.length) next = 0;
      return next;
    });
  }, [filtered.length]);

  const isFavourited = useCallback((id) => {
    return favourites.includes(id);
  }, [favourites]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <SearchBar value={query} onChange={onSearch} />
        </div>
        <button
          onClick={() => setShowFavouritesOnly(!showFavouritesOnly)}
          className={`px-4 py-2 rounded-full font-medium transition-colors focus:outline-none flex-shrink-0 ${
            showFavouritesOnly 
              ? 'border border-red-400 text-red-500 bg-red-50 dark:bg-red-900/20' 
              : 'border border-gray-300 dark:border-slate-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800'
          }`}
        >
          {showFavouritesOnly ? '✕ All Photos' : '♥ Favourites'}
        </button>
      </div>
      
      {loading ? (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 30 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-10">
          <p className="text-red-500 text-lg font-medium">{error}</p>
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 py-10">
          {showFavouritesOnly && favourites.length === 0 && !query
            ? "You haven't favourited any photos yet."
            : "No photos found for your search."}
        </p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 opacity-0 animate-fadeIn" style={{ animationFillMode: 'forwards' }}>
          {filtered.map(photo => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourited={isFavourited(photo.id)}
              onToggle={toggleFav}
              onClick={openLightbox}
            />
          ))}
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox 
          photos={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
          isFavourited={isFavourited}
          onToggleFavourite={toggleFav}
        />
      )}
    </div>
  );
};

export default Gallery;
