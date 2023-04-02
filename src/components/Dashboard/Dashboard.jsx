import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

import {LineChart, Line, XAxis, YAxis} from 'recharts';


const Dashboard = () => {

    const studentMarks = [
      { id: 1, name: "Student 1", math: 90, physics: 85, chemistry: 95 },
      { id: 2, name: "Student 2", math: 80, physics: 75, chemistry: 85 },
      { id: 3, name: "Student 3", math: 70, physics: 80, chemistry: 75 },
      { id: 4, name: "Student 4", math: 85, physics: 90, chemistry: 80 },
      { id: 5, name: "Student 5", math: 92, physics: 87, chemistry: 89 },
      { id: 6, name: "Student 6", math: 75, physics: 80, chemistry: 72 },
      { id: 7, name: "Student 7", math: 78, physics: 70, chemistry: 63 },
      { id: 8, name: "Student 8", math: 71, physics: 77, chemistry: 85 },
      { id: 9, name: "Student 9", math: 80, physics: 78, chemistry: 81 },
      { id: 10, name: "Student 10", math: 82, physics: 83, chemistry: 84 },
    ];

  //  console.log(studentMarks);


    return (
      <div className=" p-10">
        <div className="md:container mx-auto ml-4 mr-4 md:ml-0 md:mr-0 ">
          dashboard
          <LineChart width={500} height={300} data={studentMarks}>
            <XAxis dataKey="name" />
            <YAxis />
            <Line stroke="#8884d8" type="monotone" dataKey={"physics"}></Line>
          </LineChart>
        </div>
      </div>
    );
};

export default Dashboard;