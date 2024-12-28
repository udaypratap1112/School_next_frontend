'use client'

import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import DashboardContent from './DashboardContent'
import Fees from '../students/StudentList'

const DashboardLayout = () => {
  return (
    <div className="flex border-2  border-black   m-auto overflow-hidden h-full bg-[#1E1E1E]">
    
      <Sidebar />
      
      <div className=" grow flex  h-full">
        <Header />
        <main className="flex-1  bg-dashboardBg">
          <DashboardContent />
          {/* <Fees/> */}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout

