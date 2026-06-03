import React, { useState, useCallback, useMemo } from 'react';
import useFetchPhotos from '../hooks/useFetchPhotos';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import PhotoCard from './PhotoCard';

const Gallery = ({ favourites, dispatch }) => {
  const { photos, loading, error } = useFetchPhotos();
  const [query, setQuery] = useState('');

  // dont recreate this fn every render
  const onSearch = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  // only recompute when query or photos change
  const filtered = useMemo(() => {
    return photos.filter(photo =>
      photo.author.toLowerCase().includes(query.toLowerCase())
    );
  }, [photos, query]);

  const toggleFav = useCallback((id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: id });
  }, [dispatch]);


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SearchBar value={query} onChange={onSearch} />
      
      
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="text-center py-10">
          <p className="text-red-500 text-lg font-medium">{error}</p>
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-500 py-10">No photos found for your search.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {filtered.map(photo => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourited={favourites.includes(photo.id)}
              onToggle={toggleFav}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
