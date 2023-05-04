import Link from 'next/link';
import React from 'react'

async function fetchContents(name: string) {
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const request = await fetch(`https://api.github.com/repos/bradtraversy/${name}/contents`, {
        next: {
            revalidate: 60
        }
    })
    const data = await request.json();
    return data;
}

const RepoDirs = async ({ name }: any) => {
    const contents = await fetchContents(name)
    const dirs = contents.filter((data: any) => data.type === 'dir')
    return (
        <>
            <h3>Directories</h3>
            <ul>
                {dirs.map((dir: any) => (
                    <li key={dir.path}>
                        <Link href={`/code/repos/${name}/${dir.path}`}>
                            {dir.path}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default RepoDirs