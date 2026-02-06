import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[200px] w-full gap-4">
            {/* Spinner with a nice primary color */}
            <span className="loading loading-spinner loading-lg text-primary"></span>
            
            {/* Optional Loading Text */}
            <p className="text-sm font-medium text-gray-500 animate-pulse">
                Loading, please wait...
            </p>
        </div>
    );
};

export default Loading;