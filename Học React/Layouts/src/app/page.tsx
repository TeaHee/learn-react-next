// Lib use to navigate
import Link from 'next/link'
// 
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Learn React + Next</h1>
      <ul>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/about'}>About</Link></li>

        {/* Nested router */}
        <li><Link href={'/about/team'}>Team</Link></li>
      </ul>
    </div>
  )
}

export default HomePage