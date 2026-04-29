import React from 'react';

const LoadingPage = () => {
    return (
        <div>
           <div className="flex items-center justify-center h-[60vh]">
      <div className="h-12 w-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
        </div>
    );
};

export default LoadingPage;