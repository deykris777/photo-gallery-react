import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="relative rounded-xl shadow-md overflow-hidden bg-white dark:bg-slate-800">
      <div className="w-full h-48 bg-gray-200 dark:bg-slate-700 animate-pulse rounded-t-xl"></div>
      <div className="p-4">
        <div className="h-4 w-32 bg-gray-200 dark:bg-slate-700 animate-pulse rounded mt-3 mx-3 mb-4"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
