"use client";

import useFetch from "@/customHooks/useFetch";
import React, { useRef, useState } from "react";
import { FiEdit3 } from "react-icons/fi";
// import { FaRegEye } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


const Students = () => {
  const [filters, setFilters] = useState({ course: '', feeStatus: '', gender: '',name:'',enrollmentTerm:'' })
  const studentListRef = useRef();
  const { data: studentsData, loading, error, } = useFetch(`http://localhost:4000/students/filter?classId=${filters.course}&feeStatus=${filters.feeStatus}&gender=${filters.gender}`);
  const [currentPage, setCurrentPage] = useState(1)
  const TotalPage = studentsData ? Math.ceil(studentsData.data.length / 10) : 1

 
  function handlePageChange(n) {
    if (n < 1 || n > TotalPage) { return console.log("page not available"); }
    setCurrentPage(n)
 }

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => (
      { ...prevFilters, [name]: value }));
    setCurrentPage(1)
  };

  const generatePDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4");
  
    const pageWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const margin = 10;
    const lineHeight = 10;
    const tableStartY = margin + 30;
    const rowHeight = 10;
  
    const maxLinesPerPage = Math.floor((pageHeight - tableStartY) / rowHeight);
  
    let currentPage = 1;
    let y = tableStartY;
  
    // Header
    pdf.setFontSize(14);
    pdf.text("Student List", pageWidth / 2, margin, { align: "center" });
    pdf.setFontSize(12);
    pdf.text("Generated on: " + new Date().toLocaleString(), margin, margin + 10);
  
    // Set border style (lighter and thinner)
    pdf.setDrawColor(200, 200, 200); // Light gray border
    pdf.setLineWidth(0.3); // Thin border
  
    // Draw Table Header with Borders
    pdf.setFontSize(10);
    pdf.rect(margin, y - rowHeight, pageWidth - 2 * margin, rowHeight); // Header border
    pdf.text("Name", margin + 2, y - 2);
    pdf.text("Course", margin + 60, y - 2);
    pdf.text("Gender", margin + 110, y - 2);
    pdf.text("Fee Status", margin + 160, y - 2);
  
    y += rowHeight;
  
    // Draw Student Data with Borders
    studentsData?.data.forEach((student, index) => {
      if ((index + 1 - (currentPage - 1) * maxLinesPerPage) >= maxLinesPerPage) {
        pdf.addPage();
        currentPage++;
        y = tableStartY;
  
        // Redraw Header on New Page
        pdf.rect(margin, y - rowHeight, pageWidth - 2 * margin, rowHeight);
        pdf.text("Name", margin + 2, y - 2);
        pdf.text("Course", margin + 60, y - 2);
        pdf.text("Gender", margin + 110, y - 2);
        pdf.text("Fee Status", margin + 160, y - 2);
  
        y += rowHeight;
      }
  
      // Draw Row Borders
      pdf.rect(margin, y - rowHeight, pageWidth - 2 * margin, rowHeight);
  
      // Add Student Data to the Table
      pdf.text(student.name, margin + 2, y - 2);
      pdf.text(student.classId, margin + 60, y - 2);
      pdf.text(student.gender, margin + 110, y - 2);
      pdf.text(student.feeStatus ? "Paid" : "Unpaid", margin + 160, y - 2);
  
      y += rowHeight;
    });
  
    // Save the PDF
    pdf.save("students-list.pdf");
  };
  
  


  return (
    <div className="bg-dashboardBgSecondary dark:bg-dashboardBgSecondaryDark relative rounded-md border dark:border-zinc-800 overflow-hidden mx-2  mb-2 flex flex-col h-[calc(100vh-20px)]">
      {/* Filter Section */}
      <div className="mb-8 py-2 px-3 backdrop-blur-xl  flex justify-between  items-center sticky">
        <h2 className="text-base sm:text-xl md:text-2xl font-semibold">All Students</h2>

        {/* Filters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 ">
          {/* Course Filter */}
          <select
            className="bg-white text-sm dark:bg-zinc-900 border dark:border-zinc-800 border-gray-300 rounded-md px-2 "
            value={filters.course} name='course'
            onChange={(e) =>handleFilterChange(e)}
          >
            <option value="">All Classes</option>
            <option value="10th">10th class</option>
            <option value="5th">5th class</option>
            <option value="B.Sc">BSc</option>
            <option value="B.Com">BCom</option>
            <option value="B.Tech Mechanical">B.Tech ME</option>
          </select>

          {/* Fee Status Filter */}
          <select
            className="text-xs md:text-sm bg-white dark:bg-zinc-900 border dark:border-zinc-800 border-gray-300 rounded-md p-2"
            value={filters.feeStatus} name='feeStatus'
            onChange={(e) =>handleFilterChange(e)}
          >
            <option value="">All Fee Status</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
          </select>

          {/* Gender Filter */}
          <select
            className="text-xs md:text-sm bg-white dark:bg-zinc-900 border dark:border-zinc-800 border-gray-300 rounded-md p-2"
            vvalue={filters.gender} name='gender'
            onChange={(e) =>handleFilterChange(e)}
          >
            <option value="">All Genders</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <div onClick={generatePDF} className="text-xs md:text-sm content-center bg-white dark:bg-zinc-300 text-zinc-900 border dark:border-zinc-800 border-gray-300 rounded-md p-2">Export List</div>
        </div>
      </div>

      <div>
        <div className="headings ">
          <ul className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] border-b dark:border-zinc-800 font-bold uppercase text-xs md:text-xs text-zinc-500">
            <li className="px-1 sm:px-2 md:px-3 py-2 flex items-center gap-1"> Name <FaCaretDown /> </li>
            <li className="px-1 sm:px-2 md:px-3 py-2 flex items-center gap-1"> Course <FaCaretDown /> </li>
            <li className="px-1 sm:px-2 md:px-3 py-2 flex items-center gap-1"> Gender <FaCaretDown /> </li>
            <li className="px-1 sm:px-2 md:px-3 py-2 flex items-center gap-1"> Fee Status <FaCaretDown /> </li>
            <li className="px-1 sm:px-2 md:px-3 py-2 flex items-center gap-1"> Action <FaCaretDown /> </li>
          </ul>
        </div>
        
      </div>

      {/* Student list */}
      <div ref={studentListRef} className=" overflow-auto divide-y dark:divide-zinc-800 grow text-inherit" id="student-list">
        {
        studentsData?.data.slice((currentPage - 1) * 10, currentPage * 10)
          .map((student, ind) => (
            <div key={ind} className=" ">
              <ul className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr]  py-6">
                <li className="px-1 sm:px-2 md:px-3 text-sm md:text-base font-medium">{student.name}</li>
                <li className="px-1 sm:px-2 md:px-3 text-zinc-500 text-xs font-medium">{student.classId }</li>
                <li className="px-1 sm:px-2 md:px-3 text-zinc-500 text-xs font-medium uppercase ">{student.gender }</li>
                <li className="px-1 sm:px-2 md:px-3"><span className="bg-green-500/20 px-4 py-[2px] rounded-md">Paid</span></li>
                <li className="px-1 sm:px-2 md:px-3 flex gap-8 ">
                  <FiEdit3 className="hover:text-red-400"/>
                  <FaRegEye className="hover:text-red-400" />
                </li>
              </ul>
            </div>
          ))
        }
      </div>

      {/* pagination */}
    <div className="pagination px-3 py-5  flex justify-between items-center ">
        <div  className="font-light text-xs sm:text-sm md:text-base">Showing {(currentPage - 1) * 10 + 1} to {Math.min(currentPage * 10,studentsData ? studentsData.data.length : 0)} of {studentsData ? studentsData.data.length : 0} entries</div>
        
        <div className="flex gap-1">
          <span className={`w-9 md:w-12 aspect-square text-xs md:text-base select-none  border border-zinc-400 dark:border-zinc-700 hover:scale-105 transition-all  rounded-full grid place-content-center ${currentPage<=1?'opacity-30 cursor-not-allowed':''}`} onClick={()=>{handlePageChange(currentPage-1)}}><IoIosArrowBack /></span>
          {showPages(currentPage, TotalPage).map((val,i)=>{
            return <span key={i} className={`w-9 md:w-12 aspect-square text-xs md:text-base select-none  border border-zinc-400 dark:border-zinc-700 hover:scale-105 transition-all rounded-full grid place-content-center ${currentPage==val?"bg-pink-500 text-white":''}`}>{ val}</span>
          })}
         <span className={`w-9 md:w-12 aspect-square text-xs md:text-base select-none  border border-zinc-400 dark:border-zinc-700 hover:scale-105 transition-all  rounded-full grid place-content-center ${currentPage>=TotalPage?'opacity-30 cursor-not-allowed':''}`} onClick={()=>{handlePageChange(currentPage+1)}}><IoIosArrowForward /></span>
        </div>
      </div>
    </div>
  );
};

export default Students;


function showPages(currentPageIndex, totalPage) {
  
  if (totalPage <= 3) {
    return new Array(totalPage).fill(null).map((v,ind)=>ind+1)
  }

  if (currentPageIndex <= 1) {
    return [currentPageIndex,currentPageIndex+1,currentPageIndex+2]
  } else if (currentPageIndex >= totalPage) {
    return [currentPageIndex-2,currentPageIndex-1,currentPageIndex]
  } else {
   return [currentPageIndex-1,currentPageIndex,currentPageIndex+1]
  }

}

