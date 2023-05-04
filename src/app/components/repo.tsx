import Link from 'next/link';
import React from 'react'
import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa'

async function fetchRepo(name: any) {
    const request = await fetch(`https://api.github.com/repos/bradtraversy/${name}`)
    const data = await request.json();
    return data;
}

const Repo = async ({name}: any) => {
    const repo = await fetchRepo(name)
  return (
    <>
    <h2>{repo.name}</h2>
    <p>{repo.description}</p>
    <div className="card-stats">
        <div className="card-stat">
            <FaStar></FaStar>
            <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
            <FaCodeBranch></FaCodeBranch>
            <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
            <FaEye></FaEye>
            <span>{repo.watchers_count}</span>
        </div>
    </div>
    </>
  )
}

export default Repo