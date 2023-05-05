'use client';
import { useState, useEffect } from 'react'
// Lib use to navigate
import Link from 'next/link'
// 

import LoadingPage from './loading';
import React from 'react'
import Courses from './components/courses'
import CourseSearch from './components/courseSearch';

const HomePage = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses')
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    }

    fetchCourses()
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <>
      <h1>Welcome to Learn React + Next</h1>
      <CourseSearch getSearchResult={(result: any) => setCourses(result)} />
      <Courses courses={courses} />
    </>
  )
}

export default HomePage