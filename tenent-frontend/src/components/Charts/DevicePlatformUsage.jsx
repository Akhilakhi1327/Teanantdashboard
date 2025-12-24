import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Monitor, Smartphone, Tablet } from 'lucide-react';

const iconMap = {
  Monitor,
  Smartphone,
  Tablet
};

const DevicePlatformUsage = ({ data }) => {
  return (
    <div className="chart-card">
      <div className="chart-header no-border">
        <div>
          <h3>Device & Platform Usage</h3>
          <p className="subtitle">Student access patterns</p>
        </div>
      </div>

      <div className="device-chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data.data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {data.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="device-legend">
        {data.data.map((item, index) => {
          const IconComponent = iconMap[item.icon] || Monitor;
          return (
            <div key={index} className="device-card">
              <div className="device-icon">
                <IconComponent size={16} />
              </div>
              <span className="device-percent">{item.value}%</span>
              <span className="device-name">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DevicePlatformUsage;
