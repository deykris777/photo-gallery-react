import React from 'react';

const PhotoCard = ({ photo, isFavourited, onToggle, onClick }) => {
  const src = `https://picsum.photos/id/${photo.id}/800/600`;

  return (
    <div 
      className="group relative rounded-xl shadow-md dark:shadow-slate-700 overflow-hidden bg-white dark:bg-slate-800 cursor-pointer hover:scale-105 transition-transform duration-300"
      onClick={() => onClick(photo.id)}
    >
      <img
        src={src}
        alt={`Photo by ${photo.author}`}
        className="w-full h-48 object-cover group-hover:brightness-110 transition duration-300"
      />
      
      {/* Slide-up overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex items-center justify-between">
        <p className="text-sm font-medium text-white truncate pr-2">{photo.author}</p>
        
        <div className="flex space-x-2 items-center flex-shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle(photo.id);
            }}
            className="bg-white/20 rounded-full p-1.5 hover:bg-white/40 transition-colors focus:outline-none"
            aria-label="Toggle Favourite"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`w-5 h-5 stroke-current stroke-2 ${isFavourited ? 'fill-red-500 text-red-500' : 'fill-transparent text-white'}`}
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
            className="bg-white/20 rounded-full p-1.5 hover:bg-white/40 transition-colors focus:outline-none text-white"
            aria-label="Download Photo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
