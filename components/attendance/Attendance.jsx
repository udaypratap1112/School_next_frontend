"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "@/customHooks/useFetch";
import ToogleButton from "../utilsComponents/ToogleButton";

const Attendance = ({ classId = "BA" }) => {
  const { data: students, loading, error, } = useFetch( "http://localhost:4000/students/by-course?classId=10th&term=2024-25" );
  const { data: data2, loading: loading2, error: error2, executeRequest, } = useFetch("http://localhost:4000/class/attendance/", "POST");
  const [attendance, setAttendance] = useState({});

  

  useEffect(() => {
    const initialAttendance = {};
    students?.data.forEach((student) => {
      initialAttendance[student._id] = false; // false = absent, true = present
    });
    setAttendance(initialAttendance);
  }, [students]);

  // Handle attendance change for a student
  const handleAttendanceChange = (studentId) => {
    setAttendance((prevState) => ({
      ...prevState,
      [studentId]: !prevState[studentId], // Toggle attendance
    }));
  };

  // Submit attendance
  const handleSubmit = async (e) => {
    e.preventDefault();
    const attendanceData = {
      classId,
      year: "2024-25",
      // attendanceDate: new Date().toISOString().split("T")[0], // Current date
      attendanceDate: new Date('2024-12-03'), // Current date
      records: Object.keys(attendance).map((studentId) => ({
        studentId,
        isPresent: attendance[studentId],
      })),
    };

    console.log(attendanceData);

    try {
      executeRequest(attendanceData);
    } catch (err) {
      setError("Failed to submit attendance.");
    }
  };

  if (loading) return <p>Loading students...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-[calc(100vh-1rem)]">
      <div className="sticky-header max-w-4xl mx-auto p-8 mt-8 bg-white dark:bg-gray-900 shadow-md rounded-md">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200"> Attendance </h2>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-900 shadow-md rounded-md mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center mb-6">
          Mark Attendance for Course:{" "}
          <span className="text-indigo-600 dark:text-indigo-400">{classId}</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <table className="w-full border-collapse border border-gray-200 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left text-gray-600 dark:text-gray-300">
                  Student Name
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-center text-gray-600 dark:text-gray-300">
                  Present
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-center text-gray-600 dark:text-gray-300">
                  Absent
                </th>
              </tr>
            </thead>
            <tbody>
              {students?.data.map((student) => (
                <tr
                  key={student._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-200">
                    {student.name}
                  </td>
                  {/* <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-center">
                    <input
                      type="radio"
                      name={`attendance-${student._id}`}
                      className="form-radio text-indigo-600 dark:text-indigo-400"
                      checked={attendance[student._id] === true}
                      onChange={() => handleAttendanceChange(student._id)}
                    />
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-center">
                    <input
                      type="radio"
                      name={`attendance-${student._id}`}
                      className="form-radio text-indigo-600 dark:text-indigo-400"
                      checked={attendance[student._id] === false}
                      onChange={() => handleAttendanceChange(student._id)}
                    />
                  </td> */}
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-center" onClick={() => handleAttendanceChange(student._id)}>
                    <ToogleButton isChecked={attendance[student._id] === true}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-3 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 dark:focus:ring-indigo-500"
            >
              Submit Attendance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Attendance;
