import React from 'react';

const PhotoCard = ({ photo, isFavourited, onToggle }) => {
  const src = `https://picsum.photos/id/${photo.id}/800/600`;

  return (
    <div className="relative rounded-xl shadow-md overflow-hidden bg-white">
      <img
        src={src}
        alt={`Photo by ${photo.author}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-sm font-medium text-gray-800">{photo.author}</p>
      </div>
      <button
        onClick={() => onToggle(photo.id)}
        className="absolute top-2 right-2 bg-white/70 rounded-full p-1 hover:bg-white transition-colors focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`w-6 h-6 stroke-current stroke-2 ${isFavourited ? 'fill-red-500 text-red-500' : 'fill-transparent text-gray-500'}`}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>
    </div>
  );
};

export default PhotoCard;
