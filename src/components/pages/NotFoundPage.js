
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-4">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 underline">Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;
