import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
      <div>
          <p>Meals Page</p>
          <Link href='meals/post1'>post</Link>
    </div>
  )
}

export default page