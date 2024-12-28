import { MoveRight } from 'lucide-react'
import React from 'react'

const Programs = () => {
  return (
      <div className='my-[10%]'>
          <h3 className='text-4xl font-semibold text-center mb-20'>Programs We Offered</h3>
          <div className='grid grid-cols-4 gap-5 max-w-[1400px] m-auto'>
              <div className='bg-[#fddfd0] rounded-xl px-10 py-10 shadow-2xl'>
                  <h4 className='text-3xl font-semibold mb-3'>B.Tech</h4>
                  <ul className='flex flex-col gap-1'>
                      <li className='text-base font-semibold  flex items-center gap-2 '><MoveRight className='shrink-0 text-[#DA7B4C]' size={20}/>Artificial Intelligence & Machine Learning (AI / ML)</li>
                      <li className='text-base font-semibold  flex items-center gap-2 '><MoveRight className='shrink-0 text-[#DA7B4C]' size={20}/>Computer Science & Engg. (CSE)</li>
                      <li className='text-base font-semibold  flex items-center gap-2 '><MoveRight className='shrink-0 text-[#DA7B4C]' size={20}/>Mechanical Engg. (ME)</li>
                      <li className='text-base font-semibold  flex items-center gap-2 '><MoveRight className='shrink-0 text-[#DA7B4C]' size={20}/>Electronics & Communications Engg. (ECE)</li>
                      
                  </ul>
              </div>
              
             
        </div>

    </div>
  )
}

export default Programs