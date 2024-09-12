
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Job Portal</h1>
      <p className="text-lg mb-4">Find your next job or manage your bookmarks.</p>
      <div className="space-x-4">
        <Link to="/jobs" className="button-animate bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          View Jobs
        </Link>
        <Link to="/bookmarks" className="button-animate bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
          View Bookmarks
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
