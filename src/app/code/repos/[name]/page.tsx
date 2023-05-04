import Repo from '@/app/components/repo'
import RepoDirs from '@/app/components/repoDirs'
import Link from 'next/link'
import React from 'react'

// dynamic router
// đặt tên thư mục có tên [name]

// param property bắt buộc phải khai báo kiểu dữ liệu
const RepoPage = ({params}: any) => {
  return (
    <div className='card'>
      <Link href={'/code/repos'} className='btn btn-back'>Back to Repositories</Link>
      <Repo name={params.name}></Repo>
      <RepoDirs name={params.name}></RepoDirs>
    </div>
  )
}

export default RepoPage