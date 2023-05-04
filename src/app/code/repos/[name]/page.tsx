import Repo from '@/app/components/repo'
import RepoDirs from '@/app/components/repoDirs'
import Link from 'next/link'
import React from 'react'
import { Suspense } from 'react'

// dynamic router
// đặt tên thư mục có tên [name]

// param property bắt buộc phải khai báo kiểu dữ liệu
const RepoPage = ({params}: any) => {
  return (
    <div className='card'>
      <Link href={'/code/repos'} className='btn btn-back'>Back to Repositories</Link>

      {/* Xử lí việc data chưa được trả về ngay lập tức, tương tự như spinner */}
      <Suspense fallback={<div>Loading repo...</div>}>
        {/* @ts-expect-error Server Component */}
        <Repo name={params.name} />
      </Suspense>

      {/* Sử dụng được cho từng component riêng hoặc chung cho tất cả component*/}
      <Suspense fallback={<div>Loading directories...</div>}>
        {/* @ts-expect-error Server Component */}
        <RepoDirs name={params.name} />
      </Suspense>
    </div>
  )
}

export default RepoPage