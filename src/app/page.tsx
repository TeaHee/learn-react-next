// Lib use to navigate
import Link from 'next/link'
// 
import React from 'react'
import Courses from './components/courses'

const HomePage = () => {
  return (
    <>
      <h1>Welcome to Learn React + Next</h1>
      
      {/* @ts-expect-error Server Component */}
      <Courses></Courses>
    </>
  )
}

export default HomePage