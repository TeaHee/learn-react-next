import React from 'react'

async function fetchData() {
    const response = await fetch('https://api.github.com/users/bradtraversy/repos')
    const data = await response.json();
    return data;
}

const ReposPage = async () => {
    const response = await fetchData()

  return (
    <div>{response[0].name}</div>
  )
}

export default ReposPage