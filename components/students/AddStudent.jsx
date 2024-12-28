"use client";

import React, { useState } from "react";

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    course: "",
    gender: "",
    feeStructure: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student);
    setStudent({ name: "", course: "", gender: "", feeStructure: "" });
  };

  return (
    <div className="p-6 rounded-lg max-w-[1000px] m-auto dark:text-zinc-300 text-zinc-700 ">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Student</h2>
      <div className="bg-dashboardBgSecondary dark:bg-dashboardBgSecondaryDark p-10 rounded-md border dark:border-zinc-800  ">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
          <div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="font-semibold ml-1 text-sm inline-block mb-1 "
              >
                Name{" "}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="dark:bg-dashboardBgDark dark:border-zinc-800 w-full focus:outline-none border py-2 px-1 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="font-semibold ml-1 text-sm inline-block mb-1 "
              >
                Course{" "}
              </label>
              <select className="dark:bg-dashboardBgDark dark:border-zinc-800 w-full focus:outline-none border py-2 px-1 rounded-md">
                <option value="">All Courses</option>
                <option value="BA">BA</option>
                <option value="B.Tech CS">B.Tech CS</option>
                <option value="B.Sc">BSc</option>
                <option value="B.Com">BCom</option>
                <option value="B.Tech Mechanical">B.Tech ME</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="font-semibold ml-1 text-sm inline-block mb-1 "
              >
                Gender
              </label>
              <select className="dark:bg-dashboardBgDark dark:border-zinc-800 w-full focus:outline-none border py-2 px-1 rounded-md">
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <label htmlFor="name" className="font-semibold ml-1 text-sm inline-block mb-1 " > Fee Structure </label>
              <select className="dark:bg-dashboardBgDark dark:border-zinc-800 w-full focus:outline-none border py-2 px-1 rounded-md">
                <option value="">Select Fee</option>
                <option value="10">10th Class</option>
                <option value="11">11th Class</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="font-semibold ml-1 text-sm inline-block mb-1 " > Enrollment Term </label>
              <select className="dark:bg-dashboardBgDark dark:border-zinc-800 w-full focus:outline-none border py-2 px-1 rounded-md">
                <option value="2024-25">2024-25</option>
                <option value="2024-25">2025-26</option>
                <option value="2024-25">2026-27</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="font-semibold ml-1 text-sm inline-block mb-1 "
              >
                Address
              </label>
              <textarea
                type=""
                name="name"
                id="name"
                className="dark:bg-dashboardBgDark dark:border-zinc-800 w-full focus:outline-none border py-2 px-1 rounded-md"
              />
            </div>
          </div>

          <button className="rounded-md py-2 px-5 w-fit bg-black text-white dark:bg-zinc-300 dark:text-black">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
