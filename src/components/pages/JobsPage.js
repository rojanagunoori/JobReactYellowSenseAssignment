
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import Loader from "../Loader";
import Cookies from 'js-cookie';

const JobCard = ({ job, toggleBookmark, bookmarkedJobs }) => {
  
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showBookmarkIcon, setShowBookmarkIcon] = useState(false);


  const handleDoubleClick = () => {
   // setIsBookmarked(true);
    setShowBookmarkIcon(true);
    toggleBookmark(job);
   // setIsBookmarked(!isBookmarked);
    setIsBookmarked(prev => !prev);

    setTimeout(() => {
      setShowBookmarkIcon(false);
    }, 1000);
  };
  /*

  useEffect(() => {
   
    console.log("Current job:", job);
    console.log("Bookmarked jobs:", bookmarkedJobs);
  
    
    const localStorageData = localStorage.getItem("bookmarkedJobs");
    const parsedData = localStorageData ? JSON.parse(localStorageData) : [];
  console.log("parsedData ",parsedData)
   
   // const checked = parsedData.some(bookmarkedJob => bookmarkedJob.id === job.id);
   // console.log("Is bookmarked:", checked);
  
   // setIsBookmarked(checked);
  }, [job, bookmarkedJobs]);


  useEffect(() => {
    const isBookmarkedJob = bookmarkedJobs.some(bookmarkedJob => 
      JSON.stringify(bookmarkedJob) === JSON.stringify(job)
    );
   // console.log("isBookmarkedJob checked ",isBookmarkedJob)
    setIsBookmarked(isBookmarkedJob);
  }, [job, bookmarkedJobs]);

  

  useEffect(() => {
    const checked=bookmarkedJobs.some(bookmarkedJob => bookmarkedJob.id === job.id)
   // setIsBookmarked(bookmarkedJobs.some(bookmarkedJob => bookmarkedJob.id === job.id));\
   setIsBookmarked(checked)
   // bookmarkedJobs.some(bookmarkedJob => console.log(bookmarkedJob.id === job.id))
  }, [job.id, bookmarkedJobs]);

  console.log("isBookmarked ",isBookmarked )
  */

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs') || '[]');
    const isBookmarkedJob = savedBookmarks.some(bookmarkedJob => bookmarkedJob.id === job.id);
    setIsBookmarked(isBookmarkedJob);
  }, [job]);



  return (
    <>
     {showBookmarkIcon && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30">
          <FaBookmark size={100} className="text-yellow-500 animate-bounce" />
        </div>
      )}
    <div
      onDoubleClick={handleDoubleClick}
      className="bg-white border border-gray-200 rounded-lg p-4 mb-4 transition-transform duration-300 hover:scale-105 hover:border-rainbow hover:shadow-rainbow max-w-full sm:max-w-md lg:max-w-lg mx-auto relative"
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold ">{job?.title}</h2>
        <button
          onClick={handleDoubleClick}
          className={`focus:outline-none ${(isBookmarked) ? 'text-yellow-500' : 'text-gray-400'} transition-colors duration-300`}
        >
          {isBookmarked ? <FaBookmark size={24} /> : <FaRegBookmark size={24} />}
        </button>
      </div>
      <p className="text-gray-700 mb-2">Location: {job?.primary_details?.Place}</p>
      <p className="text-gray-700 mb-2">
        Salary: {job?.primary_details?.Salary === '-' ? '-' : `${job?.primary_details?.Salary}`}
      </p>
      <div className='flex justify-between items-center'>
      <Link to={`/jobs/${job?.id}`} state={{ job }} className="hover:bg-gray-200 hover:p-2 transition-transform duration-300 hover:scale-105 text-blue-500 font-semibold text-decoration-none">
          View Details
        </Link>
        <a href={job.custom_link} className="hover:bg-gray-200 hover:p-2 transition-transform duration-300 hover:scale-105 inline-block mt-2 text-blue-500 font-semibold ">
          {job.button_text}
        </a>
      </div>
    </div>
    </>
  );
};

function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);


  useEffect(() => {
    const savedBookmarks = Cookies.get('bookmarkedJobs');
    if (savedBookmarks) {
      setBookmarkedJobs(JSON.parse(savedBookmarks)); 
    }
  }, []);


  const fetchJobs = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
      const newJobs = response.data.results.filter(job => job.id != null); 
      const savedBookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs') || '[]');

      setJobs(prevJobs => [...prevJobs, ...newJobs]);
      //localStorage.setItem('jobs', JSON.stringify([...jobs, ...newJobs]));
      Cookies.set('jobs', JSON.stringify([...savedBookmarks,...jobs, ...newJobs]), { expires: 7, path: '/' });

      if (newJobs.length === 0) {
        setHasMore(false);
      } else {
        setJobs(prevJobs => [...prevJobs, ...newJobs]);

       
      
      }
    } catch (err) {
      setError('Failed to fetch jobs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [page]);


  const toggleBookmark = (job) => {
    const existingBookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs') || '[]');
    const isBookmarked = existingBookmarks.some(bookmarkedJob => bookmarkedJob.id === job.id);
    
    //const isBookmarked = bookmarkedJobs.some(bookmarkedJob => bookmarkedJob.id === job.id);
    //console.log("toggleBookmark isBookmarked",isBookmarked)
    let updatedBookmarks;

    if (isBookmarked) {
      updatedBookmarks = existingBookmarks.filter(bookmarkedJob => bookmarkedJob.id !== job.id); 
      //updatedBookmarks = bookmarkedJobs.filter(bookmarkedJob => bookmarkedJob.id !== job.id); 
    } else {
      updatedBookmarks = [...existingBookmarks, job]; 
     // updatedBookmarks = [...bookmarkedJobs, job]; 
    }
    //const savedBookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs') || '[]');
    //updatedBookmarks=[...savedBookmarks,...updatedBookmarks]

    setBookmarkedJobs(updatedBookmarks);

 
    localStorage.setItem('bookmarkedJobs', JSON.stringify(updatedBookmarks));
    Cookies.set('bookmarkedJobs', JSON.stringify(updatedBookmarks), { expires: 7, path: '/' });


   // console.log("Updated Bookmarks: ", updatedBookmarks);
   // console.log("Stored cookie (raw):", Cookies.get('bookmarkedJobs'));
  };

  const loadMoreJobs = () => {
    if (!loading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem('jobs') || '[]');
  //  console.log("storedJobs: ", storedJobs);
    const matchingJobs = jobs.filter(newJob =>
      storedJobs.some(storedJob => storedJob.id === newJob.id)
    );
   // console.log("Matching Jobs: ", matchingJobs);
  }, [jobs])
  

  return (
    <div className="p-4 mb-5">
      <h1 className="text-2xl font-bold mb-4">Jobs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <div key={index} className='flex justify-around'>
              <JobCard job={job} toggleBookmark={toggleBookmark} bookmarkedJobs={bookmarkedJobs} />
            </div>
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>

      <div className="text-center mt-4">
        {loading && <Loader />}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && hasMore && (
          <button onClick={loadMoreJobs} className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            Load More
          </button>
        )}
        {!hasMore && <p>No more details found.</p>}
      </div>
    </div>
  );
}


export default JobsPage;




