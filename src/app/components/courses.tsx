import React from 'react'
import Link from 'next/link'

async function fetchCourses() {
    let url = process.env.NODE_ENV === 'development' ? process.env.BASE_URL_DEVELOPMENT :  process.env.BASE_URL_PRODUCTION
    console.log("NODE_ENV ::", `${process.env.NODE_ENV }`)
    console.log("url::", `${url}`)
    const request = await fetch(`${url}/api/courses`)
    const courses = await request.json();
    return courses;
}

const courses = async () => {
    const courses = await fetchCourses()
  return (
    <div className='courses'>
        {courses.map((data:any) => (
            <div className="card" key={data.id}>
                <h2>{data.title}</h2>
                <small>Level: {data.level}</small>
                <p>{data.description}</p>
                <Link href={data.link} target='_blank' className='btn'>
                    Go to Courses
                </Link>
            </div>
        ))}
    </div>
  )
}

export default courses