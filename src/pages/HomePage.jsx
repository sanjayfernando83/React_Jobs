import React from 'react'

import Card from '../components/Card'
import Hero from '../components/Hero'
import JobListings from '../components/JobListings'
import MoreJobs from '../components/MoreJobs' 

const HomePage = () => {
  return (
    <> 
        <Hero></Hero>
        <JobListings isHome={true} ></JobListings>
        <Card></Card>
        <MoreJobs></MoreJobs>
    </>
  )
}

export default HomePage