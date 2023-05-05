import React from 'react'
import Link from 'next/link'

async function fetchCourses() {
    try {
        let url = process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_BASE_URL_DEVELOPMENT :  process.env.NEXT_PUBLIC_BASE_URL_PRODUCTION
        const request = await fetch(`${url}/api/courses`)
        const courses = await request.json();
        return courses;
    } catch (error) {
        console.error("api error", { error });
        throw error;
    }
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