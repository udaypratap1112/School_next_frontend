// 'use client'
// import dynamic from 'next/dynamic'
// const DashboardLayout = dynamic(() => import('@/components/dashboard/DashboardLayout'), { ssr: false });

import DashboardContent from '@/components/dashboard/DashboardContent'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import React from 'react'


const page = () => {

 
  return (
    <div className=' w-full min-h-[calc(100vh-3rem)]   '>
      <DashboardContent/>
    </div>
  )
}

export default page