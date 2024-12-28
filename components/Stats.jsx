import React from 'react'

const Stats = () => {
  return (
      <div className='flex  py-[8%] px-[15%] justify-between gap-10'>
          <div className='flex flex-col basis-full justify-center items-center text-greenDark'>
              <h5 className='text-7xl font-bold '>94%</h5>
              <p className='text-xl text-center mt-5 text-black'>Member&apos;s satisfaction with their coaching experience</p>
          </div>
          <div className='flex flex-col basis-full justify-center items-center text-greenDark'>
              <h5 className='text-7xl font-bold '>4.7/5 stars</h5>
              <p className='text-xl text-center mt-5 text-black'>Member rated the value of our coaching sessions</p>
          </div>
          <div className='flex flex-col basis-full justify-center items-center text-greenDark'>
              <h5 className='text-7xl font-bold '>100%</h5>
              <p className='text-xl text-center mt-5 text-black'>Members rated the effectiveness when completing a post-coaching survey</p>
          </div>
          
    </div>
  )
}

export default Stats