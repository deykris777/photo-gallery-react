import { useState, useEffect } from 'react';

function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list?limit=30');
        if (!response.ok) {
          throw new Error('Failed to fetch photos');
        }
        const json = await response.json();
        // console.log('photos fetched', json)
        setPhotos(json);
      } catch (err) {
        setError("Couldn't load photos. Try refreshing the page.");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return { photos, loading, error };
}

export default useFetchPhotos;
