import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
             <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">

        {/* Big 404 */}
        <h1 className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Tile Not Found 🧩
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          The tile you're looking for doesn't exist or may have been moved.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:scale-105 transition"
          >
            Go Home
          </Link>

          <Link
            href="/all-tiles"
            className="px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            Browse Tiles
          </Link>
        </div>

        </div>
        </div>
        </div>
        
    );
};

export default NotFoundPage;