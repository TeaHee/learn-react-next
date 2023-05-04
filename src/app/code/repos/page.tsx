import React from 'react'
import Link from 'next/link';
import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa'

async function fetchData() {
    const response = await fetch('https://api.github.com/users/bradtraversy/repos')
    const data = await response.json();
    return data;
}

const ReposPage = async () => {
    const response = await fetchData()

  return (
    <div className='repos-container'>
        <h2>Repositories</h2>
        <ul className="repo-list">
            {response.map((data: any) => (
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