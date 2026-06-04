import React, { useEffect, useCallback } from 'react';

const Lightbox = ({ photos, currentIndex, onClose, onNavigate, isFavourited, onToggleFavourite }) => {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onNavigate(-1);
    if (e.key === 'ArrowRight') onNavigate(1);
  }, [onClose, onNavigate]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling on body when lightbox is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown]);

  if (!photos || photos.length === 0 || currentIndex === null) return null;

  const photo = photos[currentIndex];
  const src = `https://picsum.photos/id/${photo.id}/1200/900`;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center animate-fadeIn opacity-100"
      onClick={handleBackdropClick}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 z-50 focus:outline-none"
        aria-label="Close Lightbox"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative w-full max-w-5xl px-4 md:px-12 flex items-center justify-between" onClick={handleBackdropClick}>
        <button 
          onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
          className="text-white hover:text-gray-300 p-2 focus:outline-none hidden sm:block"
          aria-label="Previous Photo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 flex flex-col items-center justify-center max-h-[90vh]">
          <img 
            src={src} 
            alt={`Photo by ${photo.author}`} 
            className="max-w-full max-h-[75vh] object-contain rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          
          <div className="mt-4 flex flex-col items-center w-full max-w-2xl px-4" onClick={(e) => e.stopPropagation()}>
            <p className="text-white text-lg font-medium mb-4">{photo.author}</p>
            
            <div className="flex space-x-4 items-center">
              <button
                onClick={(e) => { e.stopPropagation(); onToggleFavourite(photo.id); }}
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors focus:outline-none flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className={`w-6 h-6 stroke-current stroke-2 ${isFavourited(photo.id) ? 'fill-red-500 text-red-500' : 'fill-transparent text-white'}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>

              <a
                href={photo.download_url}
                download={`photo-${photo.id}`}
                onClick={e => e.stopPropagation()}
                className="px-4 py-2 bg-white dark:bg-slate-700 rounded-lg text-sm font-medium hover:opacity-80 flex items-center dark:text-white text-gray-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </a>
            </div>
          </div>
        </div>

        <button 
          onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
          className="text-white hover:text-gray-300 p-2 focus:outline-none hidden sm:block"
          aria-label="Next Photo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Mobile nav buttons */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:hidden pointer-events-none">
        <button 
          onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
          className="text-white/70 hover:text-white p-2 pointer-events-auto bg-black/20 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
          className="text-white/70 hover:text-white p-2 pointer-events-auto bg-black/20 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
