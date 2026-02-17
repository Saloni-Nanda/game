import React from 'react'
import Navbar from '../components/Navbar'
import Section1 from '../components/Home/Section1'
import Section2 from '../components/Home/Section2'
import Section3 from '../components/Home/Section3'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
    </div>
  )
}

export default HomePage
