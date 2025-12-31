import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight } from 'lucide-react';

const EnrollmentTrends = ({ data }) => {
  return (
    <div className="chart-card" style={{ minHeight: '481px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '44px' }}>
      <div className="chart-header">
        <div>
          <h3>Enrollment Trends (12 Months)</h3>
          <div className="chart-stats">
            <div className="stat-item">
              <span className="label">Total Enrollments</span>
              <span className="value">{data.totalEnrollments}</span>
            </div>
            <div className="stat-item">
              <span className="label">Completions</span>
              <span className="value success">{data.completions}</span>
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
          <AreaChart data={data.data}>
            <defs>
              <linearGradient id="colorEnrollments" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1e293b" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#1e293b" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorCompletions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
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
            />
            <Tooltip 
              contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
            />
            <Area 
              type="monotone" 
              dataKey="enrollments" 
              stroke="#1e293b" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorEnrollments)" 
              name="Enrollments"
            />
            <Area 
              type="monotone" 
              dataKey="completions" 
              stroke="#10b981" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorCompletions)" 
              name="Completions"
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="chart-legend">
          <div className="legend-item">
            <span className="dot success"></span>
            <span>Completions</span>
          </div>
          <div className="legend-item">
            <span className="dot danger"></span>
            <span>Dropouts</span>
          </div>
          <div className="legend-item">
            <span className="dot dark"></span>
            <span>Enrollments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentTrends;
