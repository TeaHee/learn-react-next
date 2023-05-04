import React from 'react'
import Link from 'next/link';
import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa'
import { resolve } from 'path';

// hàm gọi api
async function fetchData() {
    const request = await fetch('https://api.github.com/users/bradtraversy/repos')

    await new Promise((resolve) => setTimeout(resolve, 1000)) // chờ 1s trước khi trả về data được gọi từ api

    const data = await request.json();
    return data;
}

const ReposPage = async () => {
    // vì hàm fetchData là synchronous nên phải dùng await
    const response = await fetchData()

  return (
    <div className='repos-container'>
        <h2>Repositories</h2>
        <ul className="repo-list">
            {response.map((data: any) => (
                // hiển thị dữ liệu từ api bằng cặp `{}`
                <li key={data.id}>
                    <Link href={`/code/repos/${data.name}`}>
                        <h3>{data.name}</h3>
                        <p>{data.description}</p>
                        <div className="repo-details">
                            <span><FaStar /> {data.stargazers_count}</span>
                            <span><FaCodeBranch /> {data.forks_count}</span>
                            <span><FaEye /> {data.watchers_count}</span>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ReposPage