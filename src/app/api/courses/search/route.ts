import { NextResponse } from 'next/server'
import courses from '../data.json'

export async function GET(request: any) {
    const {searchParams} = new URL(request.url)
    const query = searchParams.get('query')
    const filteredCourses = courses.filter((c:any) => {
        return c.title.toLowerCase().includes(query?.toLowerCase())
    })
    return NextResponse.json(filteredCourses)
}