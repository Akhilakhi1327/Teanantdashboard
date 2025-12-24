import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity } from 'lucide-react';

const DailyActiveLearners = ({ data }) => {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h3>Daily Active Learners</h3>
          <div className="chart-stats">
            <div className="stat-item">
              <span className="label">This Week</span>
              <span className="value">{data.thisWeek}</span>
            </div>
            <div className="stat-item">
              <span className="label">Daily Avg</span>
              <span className="value">{data.dailyAvg}</span>
            </div>
          </div>
        </div>
        <div className="icon-action">
          <Activity size={18} />
        </div>
      </div>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data.data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 12}} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 12}} 
            />
            <Tooltip 
              contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#105144" 
              strokeWidth={2} 
              dot={{r: 4, fill: '#105144'}} 
              activeDot={{r: 6, fill: '#105144'}} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DailyActiveLearners;
