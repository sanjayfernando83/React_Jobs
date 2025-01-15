import React from 'react'

import Card from '../components/Card'
import Hero from '../components/Hero'
import JobHolder from '../components/JobHolder'
import MoreJobs from '../components/MoreJobs' 

const HomePage = () => {
  return (
    <> 
        <Hero></Hero>
        <JobHolder></JobHolder>
        <Card></Card>
        <MoreJobs></MoreJobs>
    </>
  )
}

export default HomePage