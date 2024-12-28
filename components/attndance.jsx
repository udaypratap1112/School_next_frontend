import { jsPDF } from "jspdf";
import React from "react";

const attendanceData=[
    {
      "studentId": "6751a4a5b150a026e03b64ca",
      "name": "Charlene Kutch",
      "attendance": {
        "2024-12-01": true,
        "2024-12-02": true,
        "2024-12-03": true,
        "2024-12-04": true,
        "2024-12-05": true,
        "2024-12-06": true,
        "2024-12-07": false,
        "2024-12-08": true,
        "2024-12-09": false,
        "2024-12-10": true,
        "2024-12-11": true,
        "2024-12-12": false,
        "2024-12-13": true,
        "2024-12-14": true,
        "2024-12-15": false
      }
    },
    {
      "studentId": "6751a540ed5ff165e34cb96c",
      "name": "Jennifer Swaniawski",
      "attendance": {
        "2024-12-01": true,
        "2024-12-02": true,
        "2024-12-03": true,
        "2024-12-04": true,
        "2024-12-05": true,
        "2024-12-06": true,
        "2024-12-07": false,
        "2024-12-08": false,
        "2024-12-09": true,
        "2024-12-10": false,
        "2024-12-11": false,
        "2024-12-12": false,
        "2024-12-13": false,
        "2024-12-14": true,
        "2024-12-15": true
      }
    },
    {
      "studentId": "6751a4a5b150a026e03b64c2",
      "name": "Terrance Price",
      "attendance": {
        "2024-12-01": true,
        "2024-12-02": false,
        "2024-12-03": true,
        "2024-12-04": true,
        "2024-12-05": true,
        "2024-12-06": true,
        "2024-12-07": false,
        "2024-12-08": true,
        "2024-12-09": true,
        "2024-12-10": true,
        "2024-12-11": true,
        "2024-12-12": true,
        "2024-12-13": false,
        "2024-12-14": true,
        "2024-12-15": true
      }
    },
    {
      "studentId": "6751a4a5b150a026e03b64fe",
      "name": "Tonya Abbott",
      "attendance": {
        "2024-12-01": false,
        "2024-12-02": true,
        "2024-12-03": true,
        "2024-12-04": true,
        "2024-12-05": true,
        "2024-12-06": false,
        "2024-12-07": false,
        "2024-12-08": true,
        "2024-12-09": true,
        "2024-12-10": true,
        "2024-12-11": true,
        "2024-12-12": true,
        "2024-12-13": true,
        "2024-12-14": true,
        "2024-12-15": false
      }
    },
    {
      "studentId": "6751a4a5b150a026e03b653a",
      "name": "Grady Turcotte",
      "attendance": {
        "2024-12-01": true,
        "2024-12-02": true,
        "2024-12-03": true,
        "2024-12-04": true,
        "2024-12-05": true,
        "2024-12-06": true,
        "2024-12-07": true,
        "2024-12-08": true,
        "2024-12-09": true,
        "2024-12-10": true,
        "2024-12-11": true,
        "2024-12-12": true,
        "2024-12-13": true,
        "2024-12-14": true,
        "2024-12-15": true
      }
    },
    {
      "studentId": "6751a540ed5ff165e34cb974",
      "name": "Jody Wintheiser",
      "attendance": {
        "2024-12-01": true,
        "2024-12-02": true,
        "2024-12-03": true,
        "2024-12-04": true,
        "2024-12-05": true,
        "2024-12-06": true,
        "2024-12-07": true,
        "2024-12-08": true,
        "2024-12-09": true,
        "2024-12-10": true,
        "2024-12-11": true,
        "2024-12-12": true,
        "2024-12-13": true,
        "2024-12-14": true,
        "2024-12-15": true
      }
    },
    {
      "studentId": "6751a540ed5ff165e34cb908",
      "name": "Hugh Smith",
      "attendance": {
        "2024-12-01": true,
        "2024-12-02": true,
        "2024-12-03": true,
        "2024-12-04": true,
        "2024-12-05": false,
        "2024-12-06": false,
        "2024-12-07": true,
        "2024-12-08": true,
        "2024-12-09": true,
        "2024-12-10": true,
        "2024-12-11": true,
        "2024-12-12": false,
        "2024-12-13": false,
        "2024-12-14": true,
        "2024-12-15": true
      }
    },
    {
      "studentId": "6751a540ed5ff165e34cb8b4",
      "name": "Matthew Wiegand",
      "attendance": {
        "2024-12-01": true,
        "2024-12-02": true,
        "2024-12-03": false,
        "2024-12-04": true,
        "2024-12-05": true,
        "2024-12-06": true,
        "2024-12-07": true,
        "2024-12-08": false,
        "2024-12-09": false,
        "2024-12-10": true,
        "2024-12-11": false,
        "2024-12-12": true,
        "2024-12-13": true,
        "2024-12-14": false,
        "2024-12-15": false
      }
    },
    {
      "studentId": "6751a4a5b150a026e03b654e",
      "name": "Miss Brenda Swift",
      "attendance": {
        "2024-12-01": true,
        "2024-12-02": true,
        "2024-12-03": true,
        "2024-12-04": true,
        "2024-12-05": true,
        "2024-12-06": true,
        "2024-12-07": true,
        "2024-12-08": true,
        "2024-12-09": true,
        "2024-12-10": true,
        "2024-12-11": true,
        "2024-12-12": true,
        "2024-12-13": true,
        "2024-12-14": true,
        "2024-12-15": true
      }
    },
    {
      "studentId": "6751a540ed5ff165e34cb968",
      "name": "Mr. Wilfred Auer",
      "attendance": {
        "2024-12-01": false,
        "2024-12-02": true,
        "2024-12-03": true,
        "2024-12-04": true,
        "2024-12-05": true,
        "2024-12-06": true,
        "2024-12-07": false,
        "2024-12-08": true,
        "2024-12-09": true,
        "2024-12-10": true,
        "2024-12-11": true,
        "2024-12-12": false,
        "2024-12-13": true,
        "2024-12-14": true,
        "2024-12-15": false
      }
    },
    {
      "studentId": "6751a4a5b150a026e03b651e",
      "name": "Cassandra Cremin",
      "attendance": {
        "2024-12-01": true,
        "2024-12-02": false,
        "2024-12-03": true,
        "2024-12-04": true,
        "2024-12-05": false,
        "2024-12-06": true,
        "2024-12-07": false,
        "2024-12-08": true,
        "2024-12-09": true,
        "2024-12-10": false,
        "2024-12-11": true,
        "2024-12-12": true,
        "2024-12-13": true,
        "2024-12-14": true,
        "2024-12-15": true
      }
    },
    {
      "studentId": "6751a4a5b150a026e03b6536",
      "name": "Marco Wilderman",
      "attendance": {
        "2024-12-01": false,
        "2024-12-02": true,
        "2024-12-03": true,
        "2024-12-04": true,
        "2024-12-05": true,
        "2024-12-06": true,
        "2024-12-07": false,
        "2024-12-08": true,
        "2024-12-09": true,
        "2024-12-10": true,
        "2024-12-11": true,
        "2024-12-12": true,
        "2024-12-13": false,
        "2024-12-14": false,
        "2024-12-15": true
      }
    },
    {
      "studentId": "6751a540ed5ff165e34cb898",
      "name": "Grant Wilderman",
      "attendance": {
        "2024-12-01": true,
        "2024-12-02": true,
        "2024-12-03": true,
        "2024-12-04": true,
        "2024-12-05": true,
        "2024-12-06": true,
        "2024-12-07": true,
        "2024-12-08": true,
        "2024-12-09": false,
        "2024-12-10": true,
        "2024-12-11": false,
        "2024-12-12": true,
        "2024-12-13": true,
        "2024-12-14": true,
        "2024-12-15": true
      }
    },
    {
      "studentId": "6751a4a5b150a026e03b64d6",
      "name": "Vincent Wisoky V",
      "attendance": {
        "2024-12-01": false,
        "2024-12-02": false,
        "2024-12-03": false,
        "2024-12-04": true,
        "2024-12-05": true,
        "2024-12-06": true,
        "2024-12-07": true,
        "2024-12-08": true,
        "2024-12-09": false,
        "2024-12-10": true,
        "2024-12-11": true,
        "2024-12-12": true,
        "2024-12-13": true,
        "2024-12-14": true,
        "2024-12-15": true
      }
    },
    {
      "studentId": "6751a540ed5ff165e34cb8b8",
      "name": "Meghan Lebsack",
      "attendance": {
        "2024-12-01": true,
        "2024-12-02": true,
        "2024-12-03": false,
        "2024-12-04": true,
        "2024-12-05": true,
        "2024-12-06": true,
        "2024-12-07": true,
        "2024-12-08": true,
        "2024-12-09": false,
        "2024-12-10": false,
        "2024-12-11": true,
        "2024-12-12": false,
        "2024-12-13": true,
        "2024-12-14": true,
        "2024-12-15": false
      }
    },
    {
      "studentId": "6751a4a5b150a026e03b655a",
      "name": "Abraham Bechtelar",
      "attendance": {
        "2024-12-01": true,
        "2024-12-02": true,
        "2024-12-03": true,
        "2024-12-04": true,
        "2024-12-05": false,
        "2024-12-06": true,
        "2024-12-07": false,
        "2024-12-08": true,
        "2024-12-09": true,
        "2024-12-10": true,
        "2024-12-11": false,
        "2024-12-12": true,
        "2024-12-13": true,
        "2024-12-14": false,
        "2024-12-15": true
      }
    },
    {
      "studentId": "6751a540ed5ff165e34cb88c",
      "name": "Miriam Swaniawski",
      "attendance": {
        "2024-12-01": true,
        "2024-12-02": true,
        "2024-12-03": true,
        "2024-12-04": true,
        "2024-12-05": true,
        "2024-12-06": false,
        "2024-12-07": true,
        "2024-12-08": true,
        "2024-12-09": true,
        "2024-12-10": true,
        "2024-12-11": true,
        "2024-12-12": true,
        "2024-12-13": true,
        "2024-12-14": true,
        "2024-12-15": true
      }
    },
    {
      "studentId": "6751a4a5b150a026e03b64e2",
      "name": "Garry Leffler",
      "attendance": {
        "2024-12-01": false,
        "2024-12-02": true,
        "2024-12-03": false,
        "2024-12-04": true,
        "2024-12-05": true,
        "2024-12-06": true,
        "2024-12-07": true,
        "2024-12-08": false,
        "2024-12-09": true,
        "2024-12-10": false,
        "2024-12-11": false,
        "2024-12-12": true,
        "2024-12-13": true,
        "2024-12-14": true,
        "2024-12-15": false
      }
    },
    {
      "studentId": "6751a540ed5ff165e34cb94c",
      "name": "Anna Sawayn Jr.",
      "attendance": {
        // "2024-12-01": true,
        // "2024-12-02": false,
        "2024-12-03": true,
        "2024-12-04": true,
        "2024-12-05": true,
        "2024-12-06": false,
        "2024-12-07": true,
        "2024-12-08": true,
        "2024-12-09": true,
        "2024-12-10": false,
        "2024-12-11": true,
        "2024-12-12": true,
        "2024-12-13": true,
        "2024-12-14": false,
        "2024-12-15": true
      }
    }
  ]

const AttendanceRegister = () => {
  // Extract all unique dates from the attendance data
  const dates = Object.keys(
    attendanceData.reduce((acc, student) => {
      Object.keys(student.attendance).forEach((date) => {
        acc[date] = true;
      });
      return acc;
    }, {})
    );

    const generatePDF = () => {
        const doc = new jsPDF();
        const margin = { top: 20, left: 10, right: 10, bottom: 20 };
        const lineHeight = 10;
        const columnWidths = [60, ...dates.map(() => 50)]; // Student Name + Dates columns widths
        const startX = margin.left;
        let startY = margin.top;
    
        // Define column headers (Student Name + Dates)
        const tableHeaders = ["Student Name", ...dates];
    
        // Draw headers
        tableHeaders.forEach((header, index) => {
            const x = startX + columnWidths.slice(0, index).reduce((a, b) => a + b, 0);
            doc.setFontSize(8)
          doc.text(header, x, startY);
        });
    
        startY += lineHeight;
    
        // Draw a line under the headers
        doc.line(margin.left, startY, margin.left + columnWidths.reduce((a, b) => a + b, 0), startY);
        startY += lineHeight;
    
        // Check if the table fits on the current page
        const pageHeight = doc.internal.pageSize.height - margin.top - margin.bottom;
    
        // Draw the rows
        attendanceData.forEach((student, rowIndex) => {
          if (startY + lineHeight > pageHeight) {
            doc.addPage(); // Add a new page if the content exceeds the page height
            startY = margin.top; // Reset Y to the top margin for the new page
            // Redraw headers on the new page
            tableHeaders.forEach((header, index) => {
              const x = startX + columnWidths.slice(0, index).reduce((a, b) => a + b, 0);
              doc.text(header, x, startY);
            });
            startY += lineHeight;
            doc.line(margin.left, startY, margin.left + columnWidths.reduce((a, b) => a + b, 0), startY);
            startY += lineHeight;
          }
    
          // Draw each student's data
          const row = [student.name, ...dates.map((date) => (student.attendance[date] ? "P" : "A"))];
    
          row.forEach((cell, index) => {
            const x = startX + columnWidths.slice(0, index).reduce((a, b) => a + b, 0);
            doc.text(cell, x, startY);
          });
    
          startY += lineHeight;
        });
    
        // Save the generated PDF
        doc.save("attendance_report.pdf");
      };
   

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-xs ">
            <th className="px-4 py-2 border-b text-left ">Student Name</th>
            {dates.map((date) => (
              <th key={date} className="px-4 py-2 border-b text-center">
                {date}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((student) => (
            <tr key={student.studentId} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b text-xs">{student.name}</td>
              {dates.map((date) => (
                <td
                  key={date}
                  className={`px-4 py-2 border-b text-center text-xs ${
                    student.attendance[date] ? "bg-green-100" : "bg-red-300"
                  }`}
                >   {student.attendance[date]==undefined?"NA":student.attendance[date] ? "P" : "A"}
                     
                      
                </td>
              ))}
            </tr>
          ))}
        </tbody>
          </table>
          
          <button className="border" onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default AttendanceRegister;
