import React, { useState,useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
    return percent ? (
      <text
        x={x}
        y={y}
        fill="#8884d8"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

const EventGenresChart = ({events}) => {
  const [data, setData] = useState([]);
  
      useEffect(() => {
        setData(getData());
      }, [`${data}`]);
  
      const getData = () => {
          const data = genres.map((g) => {
            const value = events.filter((event) => event.summary.includes(g) ).length
            // const city = location.split((/, | - /))[0]
            return { g, value };
          })
          return data;
      };
  
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={500} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
export default EventGenresChart
