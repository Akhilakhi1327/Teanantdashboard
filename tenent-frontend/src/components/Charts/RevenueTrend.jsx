import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight } from 'lucide-react';

const RevenueTrend = ({ data }) => {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h3>Revenue Trend (12 Months)</h3>
          <div className="chart-stats">
            <div className="stat-item">
              <span className="label">Total Revenue</span>
              <span className="value">{data.totalRevenue}</span>
            </div>
            <div className="stat-item">
              <span className="label">Avg/Month</span>
              <span className="value">{data.avgMonth}</span>
            </div>
          </div>
        </div>
        <div className="growth-badge">
          <ArrowUpRight size={14} />
          <span>{data.growth}</span>
        </div>
      </div>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data.data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 12}} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 12}} 
              tickFormatter={(value) => `$${value/1000}k`}
            />
            <Tooltip 
              contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#0f766e" 
              strokeWidth={2} 
              dot={{r: 0}} 
              activeDot={{r: 6, fill: '#0f766e'}} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueTrend;
