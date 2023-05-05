import { NextResponse } from 'next/server'
import courses from './data.json'

// Nextjs cũng có thể là 1 server, cho phép tạo các api get, post... để bên phía client sử dụng
export async function GET(request: any) {
    return NextResponse.json(courses)
}

// create course
export async function POST(request: any) {
    const {title, description, level, link} = await request.json();
    const newCourse = {
        id: uuidv4(),
        title,
        description,
        level,
        link
    }

    courses.push(newCourse);

    return NextResponse.json(courses)
}

// create random uuid
const uuidv4 = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return (
        s4() +
        s4() +
        '-' +
        s4() +
        '-' +
        s4() +
        '-' +
        s4() +
        '-' +
        s4() +
        s4() +
        s4()
    );

}
