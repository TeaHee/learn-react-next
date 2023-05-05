import React from 'react'
import Link from 'next/link'

async function fetchCourses() {
    console.log("url::", `${process.env.BASE_URL}`)
    const request = await fetch(`${process.env.BASE_URL}/api/courses`)
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