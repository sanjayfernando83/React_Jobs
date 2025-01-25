import React from 'react'
import { useState, useEffect } from 'react'
import JobListing from './JobListing';


//import jobs from '../jobs.json'
 
const JobListings = ({isHome =false }) => { 
 

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
  
 
 

    return (
    <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        Browse Jobs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
                        {    
                            jobs.map((job) => ( 
                                <JobListing  job = {job} ></JobListing>
                            ))
                        }  
                    </div>
            </div>
        </section>
    )


}

export default JobListings