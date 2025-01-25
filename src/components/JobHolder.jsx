import React from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

//import jobs from '../jobs.json'
 
const JobHolder = ({isHome =false }) => { 
 

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
      
    useEffect(() => {
      const fetchJobs = async () => {
          try {
              const res = await fetch('http://localhost:9999/jobs');
              const data = await res.json();
              setLoading(false); // Set loading to false after successful fetch
              isHome?setJobs(data.slice(0,3)): setJobs(data)  ; 
          } catch (E) {
              console.log('Error fetching data', E);
          }
      };
  
      fetchJobs();
  }, [isHome]); // Dependency array still includes isHome
  
 

    
    

    return <>
          <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                  <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Browse Jobs
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  
                      {   
                          
                          jobs.map((job) => (
  
                           
                          <div className="bg-white rounded-xl shadow-md relative">
                          <div className="p-4">
                              <div className="mb-6">
                                <div className="text-gray-600 my-2">{job.type}</div>
                                <h3 className="text-xl font-bold">{job.title}</h3>
                              </div>

                              <div className="mb-5">
                                {job.description}
                              </div>

                              <h3 className="text-indigo-500 mb-2">{job.salary}/ Year</h3> 
                              <div className="border border-gray-100 mb-5"></div>

                              <div className="flex flex-col lg:flex-row justify-between mb-4">
                                  <div className="text-orange-700 mb-3">
                                    <FaMapMarker className='inline text-lg mb-1'/>
                                      {job.location}
                                  </div>
                                  <NavLink
                                    to="{`/job/${job.id}`}"
                                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                                  >
                                  Read More
                                  </NavLink>
                              </div>
                          </div>
                        </div>  
                      ))} 
                  
                </div>
            </div>
          </section>
        </> ;

}

export default JobHolder