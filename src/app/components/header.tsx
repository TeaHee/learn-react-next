import { useState } from 'react'

// Header component hiển thị trên mọi page của web
import Link from 'next/link'

const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <div className="logo">
                <Link href={'/'}>Trang chủ</Link>
            </div>
            <div className="links">
                <Link href={'/about'}>About</Link>
                <Link href={'/about/team'}>Our Team</Link>
                <Link href={'/code/repos'}>Code</Link>
            </div>
        </div>
    </header>
  )
}

export default Header

// RSC (React Server Components)

// - Ưu điểm:
//     + Hiển thị nhanh hơn vì không cần phải chờ JS để hiển thị
//     + Thuận tiện cho SEO
//     + Dung lượng nhỏ hơn cả client bundle
//     + Không thể truy cập resources từ phía client
//     + Ẩn đi những dữ liệu quan trọng từ client khi call api
//     + Bảo mật cao, ngăn chặn XSS (Hacker sẽ chuyền đoạn mã độc thông qua các đoạn script từ phía client) tấn công

// - Nhược điểm:
//     + Không tương tác
//     + Không có state component. Không thể dùng `useState` hook.
//     + Không có lifecycle của 1 component. Không thể dùng `useEffect` hook.