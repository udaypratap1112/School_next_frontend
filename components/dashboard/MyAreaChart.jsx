
import React from 'react'
import { Area, CartesianGrid, Label, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, AreaChart } from 'recharts'


const MyAreaChart = ({data2}) => {

    return (
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <AreaChart
          data={data2}
          margin={{ top: 10, right: 30, left: 0, bottom: 40 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9d4edd" stopOpacity="0.4" />
              <stop offset="95%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0088FE" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#1E1E2C" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF5E4D" stopOpacity={0.2} />
              <stop offset="95%" stopColor="transparent" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* <CartesianGrid strokeDasharray="3 3" stroke="rgb(50,50,50)" /> */}
          <XAxis axisLine={true} dataKey="_id" stroke="#71717a" tickLine={false} tick={{ fontSize: 12, fill: "#71717a",fontWeight:'600' }} padding={{ left: 0 ,right:0}} >
            <Label value="Course Categories"  offset={-20} position="insideBottom" />
          </XAxis>
          <YAxis
            domain={[0, "dataMax + 10"]}
            tickCount={15}
            // axisLine={false}
            tick={{ fontSize: 12, fill: "#71717a",fontWeight:'600' }} 
            stroke="#71717a"
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#081028", // Dark background
              color: "#fff", // White text
              padding: "20px", // Padding
              borderRadius: "8px", // Rounded corners
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)", // Soft shadow
              fontFamily: "Arial, sans-serif", // Font style
              fontSize: "14px",
              border: "none", // Font size,
            }}
            itemStyle={{
              paddingBlock: 0, // Item text color
            }}
          />
          <Legend verticalAlign="top" iconType="rect" align="right" />
          
          <Area type="monotone" dataKey="male" stroke="#0088fe" strokeWidth={1} fillOpacity={1} fill="url(#colorPv)" />
          <Area type="monotone" dataKey="female" stroke="violet" strokeWidth={1} fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="Total Students" stroke="orange" strokeWidth={1} fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    );
}

export default MyAreaChart