






import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BottomNavBar = () => {

  const [darkMode, setDarkMode] = useState(false);


  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className=""
    >
       <nav className={`fixed bottom-0 left-0 right-0 bg-maroon-700 dark:bg-gray-900 shadow-lg p-4 flex justify-around items-center transition-colors duration-300 ease-in-out border-t border-maroon-800 dark:border-gray-700 rounded-t-lg transform translate-y-0 hover:translate-y-[-4px]`}>
      
        <Link
          to="/jobs"
          className="group text-gray-200 dark:text-gray-300 transition-transform duration-300 transform hover:scale-110 hover:text-blue-500 dark:hover:text-blue-400 relative cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <svg
              className="w-8 h-8 transition-transform duration-300 transform group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c.554 0 1.08.113 1.567.317l2.004-.89a3 3 0 00-5.142 0l2.004.89c.486-.204 1.012-.317 1.567-.317z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 13v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5m14-4v1m-5 5l-5 5"
              />
            </svg>
            <span className="text-sm mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">Jobs</span>
          </div>
          <div className="absolute inset-0 bg-blue-100 dark:bg-blue-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
        </Link>

        
        <Link
          to="/bookmarks"
          className="group text-gray-200 dark:text-gray-300 transition-transform duration-300 transform hover:scale-110 hover:text-blue-500 dark:hover:text-blue-400 relative cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <svg
              className="w-8 h-8 transition-transform duration-300 transform group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 16h.01M18 16h.01M7 20h10M7 8l5-5 5 5M4 10v10a1 1 0 001 1h14a1 1 0 001-1V10"
              />
            </svg>
            <span className="text-sm mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">Bookmarks</span>
          </div>
          <div className="absolute inset-0 bg-blue-100 dark:bg-blue-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
        </Link>

        {/* 
        <button
          onClick={toggleDarkMode}
          className="text-gray-200 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-transform duration-300 transform hover:scale-110 focus:outline-none relative cursor-pointer"
        >
          {darkMode ? (
            <svg
              className="w-8 h-8 transition-transform duration-300 transform group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12.42c.7-1.94.7-3.92 0-5.42m-2-2a9 9 0 11-4 4"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8 transition-transform duration-300 transform group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v2M12 18v2m8-8h-2M6 12H4m15.364 6.364l-1.414-1.414m-9.9-9.9l-1.414 1.414m0 9.9l1.414-1.414m9.9-9.9l1.414 1.414"
              />
            </svg>
          )}
          <div className="absolute inset-0 bg-blue-100 dark:bg-blue-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
        </button>*/}
      </nav>
    </div>
  );
};

export default BottomNavBar;






/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BottomNavBar = () => {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md p-4 flex justify-around items-center transition-colors duration-300 ease-in-out border-t border-gray-200 dark:border-gray-700">

        
        <Link
          to="/jobs"
          className="group text-gray-600 dark:text-gray-300 transition-transform duration-300 transform hover:scale-110 hover:text-blue-500 dark:hover:text-blue-400 relative cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <svg
              className="w-8 h-8 transition-transform duration-300 transform group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c.554 0 1.08.113 1.567.317l2.004-.89a3 3 0 00-5.142 0l2.004.89c.486-.204 1.012-.317 1.567-.317z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 13v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5m14-4v1m-5 5l-5 5"
              />
            </svg>
            <span className="text-sm mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">Jobs</span>
          </div>
          <div className="absolute inset-0 bg-blue-100 dark:bg-blue-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
        </Link>

       
        <Link
          to="/bookmarks"
          className="group text-gray-600 dark:text-gray-300 transition-transform duration-300 transform hover:scale-110 hover:text-blue-500 dark:hover:text-blue-400 relative cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <svg
              className="w-8 h-8 transition-transform duration-300 transform group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 16h.01M18 16h.01M7 20h10M7 8l5-5 5 5M4 10v10a1 1 0 001 1h14a1 1 0 001-1V10"
              />
            </svg>
            <span className="text-sm mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">Bookmarks</span>
          </div>
          <div className="absolute inset-0 bg-blue-100 dark:bg-blue-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
        </Link>

        
        <button
          onClick={toggleDarkMode}
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-transform duration-300 transform hover:scale-110 focus:outline-none relative cursor-pointer"
        >
          {darkMode ? (
            <svg
              className="w-8 h-8 transition-transform duration-300 transform group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12.42c.7-1.94.7-3.92 0-5.42m-2-2a9 9 0 11-4 4"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8 transition-transform duration-300 transform group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v2M12 18v2m8-8h-2M6 12H4m15.364 6.364l-1.414-1.414m-9.9-9.9l-1.414 1.414m0 9.9l1.414-1.414m9.9-9.9l1.414 1.414"
              />
            </svg>
          )}
          <div className="absolute inset-0 bg-blue-100 dark:bg-blue-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
        </button>
      </nav>
    </div>
  );
};

export default BottomNavBar;
*/