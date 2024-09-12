
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./jobDetails.css"
import NoPage from '../NoPage';

function JobDetailPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  
  const { job } = location.state || {};
console.log(job,job==undefined)



useEffect(() => {
  setLoading(true);
  if(job===undefined){
    <NoPage/>
  }
  if (job) {
 
    setLoading(false);
    //return;
}else{
setLoading(false);
return <p>No job details available</p>;
}
},[])
  if (job==undefined) {
    return <NoPage/>
  }



  if (loading) {
    //return <div>Loading...</div>;
  }

  if (error) {
    //return <div>Error: {error}</div>;
  }
 /* useEffect(() => {
    // Simulate fetching data from location or API
    const fetchJobDetails = () => {
      if (location.state && location.state.job) {
        setJob(location.state.job);
      } else {
        setError('No job details available');
      }
      setLoading(false);
    };

    fetchJobDetails();
  }, [location.state]);*/

 /* useEffect(() => {
    setLoading(true);
    if (job) {
   
      setLoading(false);
      //return;
}else{
  setLoading(false);
  return <p>No job details available</p>;
}
},[])*/
 

  const jobTypeMapping = {
    76: "Full-Time",
   
  };
  
  const jobCategoryMapping = {
    20: "IT and Software",
   
  };
  
  const qualificationMapping = {
    74: "Bachelor's Degree",
   
  };
  
  const experienceMapping = {
    80: "2-4 Years",
   
  };
  
  const shiftTimingMapping = {
    78: "Day Shift",
   
  };
  
  const jobRoleMapping = {
    931: "Software Engineer",
    
  };
  
  const cityLocationMapping = {
    2954: "Hyderabad",
    
  };
  
  const localityMapping = {
    48612: "Madhapur",
    
  };
  const detailLines = job?.other_details?.split('\r\n').filter(line => line.trim() !== '');
console.log("detailLines ",detailLines)
const parseLine = (line) => {
  const [key, ...valueParts] = line.split(':');
  return {
    key: key.trim(),
    value: valueParts.join(':').trim()
  };
};
  

  const decodedJobType = jobTypeMapping[job?.job_type] || "Unknown";
  const decodedJobCategory = jobCategoryMapping[job?.job_category_id] || "Unknown";
  const decodedQualification = qualificationMapping[job?.qualification] || "Unknown";
  const decodedExperience = experienceMapping[job?.experience] || "Unknown";
  const decodedShiftTiming = shiftTimingMapping[job?.shift_timing] || "Unknown";
  const decodedJobRole = jobRoleMapping[job?.job_role_id] || "Unknown";
  const decodedCityLocation = cityLocationMapping[job?.city_location] || "Unknown";
  const decodedLocality = localityMapping[job?.locality] || "Unknown";


  const formattedPremiumDate = new Date(job?.premium_till).toLocaleDateString();


  const parsedContent =job?.content && JSON.parse(job.content);
  console.log("parsedContent ",parsedContent)

  const {V3} = job.contentV3 



  const statusText = job?.status === 1 ? 'Active' : 'Inactive';



 



  return (
   <div>{job ?  <div className="job-details-container bg-bodyBg min-h-screen">
    <h1 className="main-heading">Job Details</h1>
    <div className="container-style mx-auto">
      <h2 className="title-section text-maroon bg-mainHeadingBg p-4 rounded-lg">{job.title}</h2>
      <p className="company-section">Company: {job.company_name}</p>

      <div className="container-style">
        <h3 className='text-darkMaroon text-xl font-semibold'>Primary Details</h3>
        <p className='text-subParaColor mt-2'><strong>Place:</strong> {job.primary_details.Place}</p>
        <p><strong>Salary:</strong> {job.primary_details.Salary}</p>
        <p><strong>Job Type:</strong> {job.primary_details.Job_Type}</p>
        <p><strong>Experience:</strong> {job.primary_details.Experience}</p>
        <p><strong> Qualification: </strong> {job.primary_details.Qualification}</p>
      </div>
      
      {job.fee_details.V3.length > 0 ? (
        job.fee_details.V3.map((item, index) => (
          <div key={index} className="container-style">
            <p><strong>Fee :</strong> {item}</p>
            
          </div>
        ))
      ) : (
        null
      )}
      

      <div className=" container-style ">
        <h3>Job Tags</h3>
        <div className="">
          {job.job_tags.map((tag, index) => (
            <div
              key={index}
              className="tag"
              style={{
                backgroundColor: tag.bg_color,
                color: tag.text_color,
                padding: '10px',
                margin: '15px',
                borderRadius: '4px',
                marginTop: '10px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              {tag.value}
            </div>
          ))}
        </div>
      </div>

      <div className="container-style">
    <h2>Job Details</h2>
    <div className="job-detail-section">
      <p><strong>Job Type:</strong> {decodedJobType}</p>
      <p><strong>Job Category:</strong> {decodedJobCategory}</p>
      <p><strong>Qualification:</strong> {decodedQualification}</p>
      <p><strong>Experience:</strong> {decodedExperience}</p>
      <p><strong>Shift Timing:</strong> {decodedShiftTiming}</p>
      <p><strong>Job Role:</strong> {decodedJobRole}</p>
      <p><strong>Salary:</strong> {job?.salary_min===null?"-":job?.salary_min=="-"?"-":`₹${job?.salary_min}`} - {job?.salary_max=="-"?"-":`₹${job?.salary_max}`}</p>
      <p><strong>Location:</strong> {decodedCityLocation}, {decodedLocality}</p>
      <p><strong>Premium Till:</strong> {formattedPremiumDate}</p>
    </div>
  </div>


  <div className="container-style bg-gray-100 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4 text-maroon-800">Job Content</h2>
  <div className="job-content-section">
    <div className="grid grid-cols-1 gap-4">
      {parsedContent && parsedContent.length>0 && Object.entries(parsedContent).map(([key, value]) => (
        <div key={key} className="content-block p-4 border border-gray-300 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-maroon-600">{key}</h3>
          <p className="text-gray-700">{value}</p>
        </div>
      ))}
    </div>
  </div>
</div>



  <div className="container-style max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5">
  <h2 className="text-2xl font-bold mb-4 text-maroon-800">Job Premium</h2>
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        {job.is_premium && (
          <span className="inline-block bg-yellow-400 text-white text-xs px-2 py-1 rounded-full font-bold ml-3 mt-3">
            Premium
          </span>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">Advertiser: {job.advertiser}</h2>
        <p className="text-gray-500">Amount: ₹{job.amount}</p>
        <p className="text-gray-500">Views: {job.views} | Shares: {job.shares} | Facebook Shares: {job.fb_shares}</p>

        <div className="mt-4">
          <a href={job.custom_link} className="text-blue-500 font-semibold underline">
            {job.button_text}
          </a>
        </div>

        <div className="mt-4">
          <p className="font-bold">WhatsApp:</p>
          <a href={job.contact_preference.whatsapp_link} target="_blank" rel="noopener noreferrer" className="text-green-500 underline">
            {job.whatsapp_no}
          </a>
        </div>

        <div className="mt-2">
          <p>Contact Preference:</p>
          <p className="text-gray-500">
            Preferred Call Time: {job.contact_preference.preferred_call_start_time} - {job.contact_preference.preferred_call_end_time}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-500">Updated On: {new Date(job.updated_on).toLocaleDateString()}</p>
          <p className="text-sm text-gray-500">Created On: {new Date(job.created_on).toLocaleDateString()}</p>
        </div>

        <div className="mt-4">
          {job.is_bookmarked ? (
            <span className="text-blue-500">Bookmarked</span>
          ) : (
            <span className="text-gray-500">Not Bookmarked</span>
          )}
          <span className="ml-4">
            {job.is_applied ? 'Applied' : 'Not Applied'}
          </span>
        </div>
      </div>
    </div>
  </div>


  <div className="container-style max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-5 mt-5">
    <h2 className="text-2xl font-bold mb-4">Job Creatives</h2>

   
    {job.creatives.length > 0 && (
      <div className="mb-5">
        <h3 className="text-xl font-semibold mb-2">Creatives</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {job.creatives.map((creative, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <img
                src={creative?.thumb_url}
                alt={`Creative ${index}`}
                className="w-full h-40 object-cover"
              />
              <a
                href={creative?.file}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 text-blue-500 underline"
              >
                View Full Image
              </a>
            </div>
          ))}
        </div>
      </div>
    )}

   
    {job.videos.length > 0 && (
      <div className="mb-5">
        <h3 className="text-xl font-semibold mb-2">Videos</h3>
       
        <p>No videos available at this time.</p>
      </div>
    )}


    {job.locations.length > 0 && (
      <div className="mb-5">
        <h3 className="text-xl font-semibold mb-2">Locations</h3>
        <ul>
          {job.locations.map((location, index) => (
            <li key={index}>
              Locale: {location.locale}, State ID: {location.state}
            </li>
          ))}
        </ul>
      </div>
    )}

    
    {job.tags.length > 0 && (
      <div className="mb-5">
        <h3 className="text-xl font-semibold mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>


  <div className="container-style max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-5 mt-5">
    <h2 className="text-2xl font-bold mb-4">Job Requirements</h2>
    
    {V3.length > 0 && (
      <div>
        {V3.map((item, index) => (
          <div key={index} className="mb-4 p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{item.field_name}</h3>
            <p className="text-gray-700">{item.field_value}</p>
          </div>
        ))}
      </div>
    )}
  </div>

  <div className="container-style bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Additional Job Details</h2>
    <div className="mb-4">
      <strong>Status:</strong> {statusText}
    </div>
    <div className="mb-4">
      <strong>Expires On:</strong> {new Date(job.expire_on).toLocaleDateString()}
    </div>
    <div className="mb-4">
      <strong>Job Hours:</strong> {job.job_hours}
    </div>
    <div className="mb-4">
      <strong>Openings Count:</strong> {job.openings_count}
    </div>
    <div className="mb-4">
      <strong>Job Role:</strong> {job.job_role}
    </div>
    <div className="mb-4">
      <strong>Job Category:</strong> {job.job_category}
    </div>
    <div className="mb-4">
      <strong>Number of Applications:</strong> {job.num_applications}
    </div>
    <div className="mb-4">
      <strong>Enable Lead Collection:</strong> {job.enable_lead_collection ? 'Yes' : 'No'}
    </div>
    <div className="mb-4">
      <strong>Job Seeker Profile Mandatory:</strong> {job.is_job_seeker_profile_mandatory ? 'Yes' : 'No'}
    </div>
    <div className="mb-4">
      <strong>Job Location:</strong> {job.job_location_slug}
    </div>
    <div className="mb-4 container-style">
      <strong>Other Details:</strong>
      {detailLines.map((line, index) => {
      const { key, value } = parseLine(line);
      return (
        <div key={index} className="content-block p-4 border-b border-gray-300">
          <h3 className="text-lg font-semibold">{key}</h3>
          <p className="text-gray-700">{value}</p>
        </div>
      );
    })}

    </div>
    <div className="mb-4">
      <strong>Fees Charged:</strong> {job.fees_text ? job.fees_text : `₹${job.fees_charged}`}
    </div>

    <div className="mb-4">
      <strong>Question Bank ID:</strong> {job.question_bank_id ? job.question_bank_id : 'Not Available'}
    </div>
    <div className="mb-4">
      <strong>Screening Retry:</strong> {job.screening_retry !== null ? job.screening_retry : 'Not Applicable'}
    </div>
  </div>

     
    </div>
  </div>:<p>No job details available</p>}</div>
  );
}

export default JobDetailPage;
