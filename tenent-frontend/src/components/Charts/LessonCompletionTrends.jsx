import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { CheckCircle } from 'lucide-react';

const LessonCompletionTrends = ({ data }) => {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h3>Lesson Completion Trends</h3>
          <div className="chart-stats">
            <div className="stat-item">
              <span className="label">Total Completed</span>
              <span className="value success-dark">{data.totalCompleted}</span>
            </div>
            <div className="stat-item">
              <span className="label">Completion Rate</span>
              <span className="value">{data.completionRate}</span>
            </div>
          </div>
        </div>
        <div className="icon-action">
          <CheckCircle size={18} />
        </div>
      </div>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data.data} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="week" 
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
              cursor={{fill: 'transparent'}}
              contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
            />
            <Legend 
              iconType="circle" 
              wrapperStyle={{paddingTop: '20px'}}
            />
            <Bar 
              dataKey="started" 
              name="Lessons started" 
              fill="#e2e8f0" 
              radius={[4, 4, 0, 0]} 
              barSize={20}
            />
            <Bar 
              dataKey="completed" 
              name="Lessons completed" 
              fill="#105144" 
              radius={[4, 4, 0, 0]} 
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LessonCompletionTrends;
