'use client'

import Sidebar from "@/components/dashboard/Sidebar";
import { CiSearch } from "react-icons/ci";
import { usePathname } from 'next/navigation'
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export default function DashboardLayout({ children }) {
  const [isOpen,setIsOpen]=useState(false)
//   const pathname = usePathname()
// console.log(pathname);
  return (
    <div className=" border-2  bg-dashboardBg dark:bg-dashboardBgDark dark   border-black  m-auto  flex  text-zinc-800 dark:text-zinc-200 relative">
      <Sidebar isOpen={isOpen}/>
      <main className=" grow relative">
          <AdminHeader setIsOpen={setIsOpen}/>
          {children}
        
        </main>
      
    </div>
  );
}



function AdminHeader({ setIsOpen }) {
  

  return (
    <div className="flex justify-between items-center  px-3 h-[100px]  sticky  backdrop-blur-2xl rounded-md z-30">
    <p className="text-xl text-zinc-500 md:flex items-center gap-2 hidden"  >Admin/Dashboard</p>
      {/* <label htmlFor="search" className="flex bg-white dark:bg-zinc-800 border dark:border-zinc-700  px-3 justify-between items-center rounded-md grow max-w-[220px]">
        <input type="text" id='search' placeholder="Search Students" className="h-8 md:h-9 gap-5 grow focus:outline-none bg-inherit" />
        <CiSearch className=""/>
      </label> */}
    <div className="flex items-center gap-2 ">
      <span className="w-8 aspect-square md:w-10  rounded-full border inline-block bg-black"></span>
      <div>
        <h6 className="text-sm md:text-base">Uday Pratap</h6>
        <p className="text-zinc-500 text-xs md:text-sm">uday06122000@gmail.com</p>
        
        </div>
        <IoMdMenu  className="text-4xl" onClick={()=>{setIsOpen(prev=>!prev)}}/>
    </div>
  </div>
  )
}