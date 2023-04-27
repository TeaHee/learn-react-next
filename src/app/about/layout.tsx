import React from 'react'

// Tạo layout.tsx và layout này sẽ là thằng cha tất cả các page khi được khai báo bởi param children 
const AboutLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <h1>THIS IS THE ABOUT LAYOUT</h1>
        {children}
    </div>
  )
}

export default AboutLayout