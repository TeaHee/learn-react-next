import { NextResponse } from 'next/server'
import courses from './data.json'

// Nextjs cũng có thể là 1 server, cho phép tạo các api get, post... để bên phía client sử dụng
export async function GET(request: any) {
    return NextResponse.json(courses)
}