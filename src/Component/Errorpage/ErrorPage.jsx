import React from 'react';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import Footer from '../../Pages/Shared/Footer/Footer';

const ErrorPage = () => {
    return (
        <div className=" w-11/12 mx-auto flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex mb-10 flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 max-w-md mb-6">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        <a
          href="/"
          className="px-6 py-3 bg-primary text-black rounded-xl shadow-md hover:bg-purple-700 transition-all"
        >
          Go Home
        </a>
      </div>

      <Footer />
    </div>
    );
};

export default ErrorPage;