import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import  Loader  from "../Loader";
import Cookie from 'js-cookie';

const JobCard = ({ job }) => {
  const [isBookmarked, setIsBookmarked] = useState(job?.is_bookmarked);
  const [showBookmarkIcon, setShowBookmarkIcon] = useState(false);


  const handleDoubleClick = () => {
    setIsBookmarked(true);
    setShowBookmarkIcon(true);


    setTimeout(() => {
      setShowBookmarkIcon(false);
    }, 1000);
  };

  const toggleBookmark = () => setIsBookmarked(!isBookmarked);
  return(
  
    <>
   
      {showBookmarkIcon && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <FaBookmark size={100} className="text-yellow-500 animate-bounce" />
        </div>
      )}

      <div
        onDoubleClick={handleDoubleClick}
        className="bg-white border border-gray-200 rounded-lg p-4 mb-4 transition-transform duration-300 hover:scale-105 hover:border-rainbow hover:shadow-rainbow max-w-full sm:max-w-md lg:max-w-lg mx-auto relative"
      >
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold ">{job?.title}</h2>
         {/* <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`focus:outline-none ${
              isBookmarked ? 'text-yellow-500' : 'text-gray-400'
            } transition-colors duration-300`}
          >
            {isBookmarked ? <FaBookmark size={24} /> : <FaRegBookmark size={24} />}
          </button>*/}
        </div>
        <p className="text-gray-700 mb-2">Location: {job?.primary_details?.Place}</p>
        <p className="text-gray-700 mb-2">
          Salary: {job?.primary_details?.Salary === '-' ? '-' : `${job?.primary_details?.Salary}`}
        </p>

        <div className='flex justify-between items-center '>
        <Link to={`/jobs/${job?.id}`} state={{ job }} className="text-blue-500 font-semibold ">
          View Details
        </Link>

        <a
          href={job.custom_link}
          className="inline-block mt-2 text-blue-500 font-semibold underline"
        >
          {job.button_text}
        </a>
        </div>
      </div>
    </>
   
);}

function BookmarksPage() {
  const [bookmarkedJobs, setBookmarkedJobs] = useState(()=>{
    const localStorageData = localStorage.getItem("bookmarkedJobs");
    return JSON.parse(localStorageData)
  });
    console.log("bookmarkedJobs ",bookmarkedJobs)
  const [page, setPage] = useState(1);   
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);  
  const [hasMore, setHasMore] = useState(true);  

  useEffect(() => {
    //const savedJobs = Cookie.get('bookmarkedJobs')|| [];
  
   //console.log(savedJobs); 
   // setBookmarkedJobs(savedJobs);
    setLoading(false);
  }, []);

  const removeCookie = () => {
    
    Cookie.remove('bookmarkedJobs');
  };


  
      
      
      
    console.log("bookmarkedJobs ",bookmarkedJobs)

return (
    <div className="p-4 mb-5">
    <h1 className="text-2xl font-bold mb-4">Bookmarked Jobs</h1>

    
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {bookmarkedJobs.length > 0 ? (
        bookmarkedJobs.map((job, index) => (
          <div key={index} className='flex justify-around '>
            <JobCard job={job} />
          </div>
        ))
      ) : (
        <p>No bookmarked jobs.</p>
      )}
      </div>

      
      <div className="text-center mt-4">
        {loading &&<><Loader/>{/* <p>Loading more jobs...</p>*/}</>}
        {error && <p className="text-red-500">{error}</p>}
        
        {!hasMore && <p>No more details found.</p>}
      </div>
    </div>
  );
  
}

export default BookmarksPage;
