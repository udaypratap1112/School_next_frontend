'use client'

import React, { useState } from 'react';
import { TbLayoutDashboardFilled } from "react-icons/tb";

import { BsCurrencyDollar } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGraduationCap, } from "react-icons/fa";
import { BsFileSpreadsheetFill } from "react-icons/bs";



function Sidebar({isOpen}) {



  const pathname = usePathname()
  function isActive(path) {
    return path == pathname
  }

  return (
    <div className={`w-80 fixed z-50 transition-all ${isOpen?"-translate-x-0":"-translate-x-[110%]"} bg-dashboardBgSecondary dark:bg-dashboardBgSecondaryDark m-2 rounded-md border dark:border-zinc-800  z-10 lg:sticky lg:-translate-x-0 top-2 h-[calc(100vh-20px)]`} >
      <div className="p-6 text-xl font-bold">
        Admin Panel
      </div>
      <nav className="mt-2 w-4/5  ml-5">
        <Link href="/dashboard" className={`py-2.5 px-4 rounded  duration-200  font-medium hover:font-bold transition-all flex items-center gap-2  ${isActive('/dashboard')?'bg-[#f0f0f0] dark:bg-zinc-700 ':''}`}>
        <TbLayoutDashboardFilled  className='text-2xl'/> Dashboard
        </Link>
        <Link href="/dashboard/student" className={`py-2.5 px-4 rounded  duration-200  font-medium hover:font-bold transition-all flex items-center gap-2  ${isActive('/dashboard/student')?'bg-[#f0f0f0] dark:bg-zinc-700 ':''}`}>
        <FaGraduationCap className='text-2xl'/> Students
        </Link>
        <Link href="/dashboard/attendance" className={`py-2.5 px-4 rounded  duration-200  font-medium hover:font-bold transition-all flex items-center gap-2  ${isActive('/dashboard/attendance')?'bg-[#f0f0f0] dark:bg-zinc-700 ':''}`}>
        <BsFileSpreadsheetFill  className='text-2xl'/> Attendance
        </Link>
       
        
      </nav>
    </div>
  );
}

export default Sidebar;
