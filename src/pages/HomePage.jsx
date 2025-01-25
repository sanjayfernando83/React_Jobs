import React from 'react'

import Card from '../components/Card'
import Hero from '../components/Hero'
import JobHolder from '../components/JobHolder'
import MoreJobs from '../components/MoreJobs' 

const HomePage = () => {
  return (
    <> 
        <Hero></Hero>
        <JobHolder isHome={true} ></JobHolder>
        <Card></Card>
        <MoreJobs></MoreJobs>
    </>
  )
}

export default HomePage