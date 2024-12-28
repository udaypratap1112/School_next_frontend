'use client'
import { LuGraduationCap } from "react-icons/lu";
import { FaGraduationCap,FaUserTie,FaDollarSign } from "react-icons/fa";
import React from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis,linearGradient,ResponsiveContainer,ReferenceLine, Legend, Label,PieChart, Pie, Sector, Cell, Bar,BarChart } from "recharts";
import Example from "./PieChart";
import MyAreaChart from "./MyAreaChart";

const count=[
  {
    "_id": "Chemistry",
    "Total Students": 18,
    "male": 11,
    "female": 7
  },
  {
    "_id": "Mathematics",
    "Total Students": 27,
    "male": 16,
    "female": 11
  },
  {
    "_id": "Physics",
    "Total Students": 20,
    "male": 9,
    "female": 11
  },
  {
    "_id": "Biology",
    "Total Students": 20,
    "male": 12,
    "female": 8
  },
  {
    "_id": "Computer Science",
    "Total Students": 35,
    "male": 26,
    "female": 9
  }
]



      

function DashboardContent() {
  return (
    <div className="px-5">

  

      <div className=" mb-8 mt-2 px-2 ">
        {/* <p className="text-xl">hi Paul</p> */}
        <h5 className="text-2xl  font-bold">Dashboard</h5>
        <p className="text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illum eaque aspernatur aliquid. Dolores, optio?</p>
      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
        {/* Example Cards */}
       
        <div className="px-3 py-2 rounded-md  bg-dashboardBgSecondary dark:bg-dashboardBgSecondaryDark border dark:border-zinc-800 shadow-sm flex flex-col ">
          <div className="mb-2 flex justify-between items-center">
            <div>
              <p className="text-zinc-500 text-xl">Total Students</p>
              <h5 className="text-3xl font-normal">1299</h5>
            </div>
            <div className="bg-gradient-to-b from-[#000000] to-[#434343]  p-3 rounded-md shadow-md"> <LuGraduationCap className="text-white text-3xl "/> </div>
          </div>
          <span className="w-full inline-block bg-gradient-to-r from-zinc-50 via-zinc-200 to-zinc-50 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 h-[1px] mb-1"></span>
          <div> <p className="font-medium text-zinc-500 "><span className="text-green-500">+55%</span> than last year</p> </div>
        </div>
        <div className="px-3 py-2 rounded-md  bg-dashboardBgSecondary dark:bg-dashboardBgSecondaryDark border dark:border-zinc-800 shadow-sm flex flex-col ">
          <div className="mb-2 flex justify-between items-center">
            <div>
              <p className="text-zinc-500 text-xl">Total Students</p>
              <h5 className="text-3xl font-normal">1299</h5>
            </div>
            <div className="bg-gradient-to-b from-[#000000] to-[#434343]  p-3 rounded-md"> <LuGraduationCap className="text-white text-3xl "/> </div>
          </div>
          <span className="w-full inline-block bg-gradient-to-r from-zinc-50 via-zinc-200 to-zinc-50 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 h-[1px] mb-1"></span>
          <div> <p className="font-medium text-zinc-500 "><span className="text-green-500">+55%</span> than last year</p> </div>
        </div>
        <div className="px-3 py-2 rounded-md  bg-dashboardBgSecondary dark:bg-dashboardBgSecondaryDark border dark:border-zinc-800 shadow-sm flex flex-col ">
          <div className="mb-2 flex justify-between items-center">
            <div>
              <p className="text-zinc-500 text-xl">Total Students</p>
              <h5 className="text-3xl font-normal">1299</h5>
            </div>
            <div className="bg-gradient-to-b from-[#000000] to-[#434343]  p-3 rounded-md"> <LuGraduationCap className="text-white text-3xl "/> </div>
          </div>
          <span className="w-full inline-block bg-gradient-to-r from-zinc-50 via-zinc-200 to-zinc-50 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 h-[1px] mb-1"></span>
          <div> <p className="font-medium text-zinc-500 "><span className="text-green-500">+55%</span> than last year</p> </div>
        </div>
        <div className="px-3 py-2 rounded-md  bg-dashboardBgSecondary dark:bg-dashboardBgSecondaryDark border dark:border-zinc-800 shadow-sm flex flex-col ">
          <div className="mb-2 flex justify-between items-center">
            <div>
              <p className="text-zinc-500 text-xl">Expected Revenue</p>
              <h5 className="text-3xl font-normal">$987788</h5>
            </div>
            <div className="bg-gradient-to-b from-[#000000] to-[#434343]  p-3 rounded-md"> <LuGraduationCap className="text-white text-3xl "/> </div>
          </div>
          <span className="w-full inline-block bg-gradient-to-r from-zinc-50 via-zinc-200 to-zinc-50 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 h-[1px] mb-1"></span>
          <div> <p className="font-medium text-zinc-500 "><span className="text-green-500">+8.43%</span> than last year</p> </div>
        </div>
       
       
       

      </div>

          <div className=" grid grid-cols-[1fr_1fr_1fr] grid-rows-2 gap-6 my-5 h-[70vh]  rounded-xl ">
        <div className="h-full col-span-2 row-span-2 bg-dashboardBgSecondary dark:bg-dashboardBgSecondaryDark border dark:border-zinc-800 flex flex-col rounded-xl shadow-sm ">
          <h5 className="m-5 text-xl text-zinc-600 dark:text-zinc-300 font-semibold">Total Students by Course</h5>
          <div className="min-h-[300px] basis-[100%]">
            <MyAreaChart data2={count} />
          </div>
          
        </div>
        <div className="bg-dashboardBgSecondary dark:bg-dashboardBgSecondaryDark  border dark:border-zinc-800 shadow-sm flex flex-col rounded-xl ">
          <h5 className="m-5 text-xl text-zinc-600 dark:text-zinc-300">Male to Female Ratio</h5>
          <div className="basis-[100%] ">
            <Example />
          </div>
          
        </div>
      </div>
      
      
      
    </div>
  );
}

export default DashboardContent;
{/* <div className="bg-dashboardBgSecondary border border-dashboardBorderColor w-fit rounded-2xl ">
        <BarChart
            layout="vertical"
            width={1000}
            height={300}
            data={barData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgb(50,50,50)" />
            <XAxis type="number"  tick={{ fontSize: 12, fill: '#8884d8' }} tickLine={false} ></XAxis>
            <YAxis type="category" tick={{ fontSize: 12, fill: '#8884d8' }}  dataKey="name" stroke='white' tickLine={false}  />
            <Tooltip />
            <Legend />
          <Bar dataKey="pv" stackId="a"  fill={"#0088FE" } barSize={10}/>
            <Bar dataKey="amt" stackId="a" fill={"#00C49F" } />
        
          </BarChart>
      </div> */}