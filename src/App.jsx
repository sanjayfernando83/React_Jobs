import React from 'react'
import NavPane from './components/NavPane'
import Hero from './components/Hero'
import Card from './components/Card'
import JobHolder from './components/JobHolder'
import MoreJobs from './components/MoreJobs'

const App = () => {
  return (
    <>
    <NavPane/>
    <Hero/>
    <Card/>
    <JobHolder/>
    <MoreJobs/>
    </>
  )
}

export default App