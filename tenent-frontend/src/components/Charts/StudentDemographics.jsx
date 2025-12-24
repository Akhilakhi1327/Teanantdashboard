import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Users } from 'lucide-react';

const StudentDemographics = ({ data }) => {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h3>Student Demographics</h3>
          <p className="subtitle">Age, gender & experience level</p>
        </div>
        <div className="icon-action">
          <Users size={18} />
        </div>
      </div>

      <div className="demographics-content">
        <div className="age-section">
          <h4>AGE DISTRIBUTION</h4>
          <div className="donut-container">
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie
                  data={data.ageDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.ageDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="legend">
              {data.ageDistribution.map((item, index) => (
                <div key={index} className="legend-item">
                  <span className="dot" style={{backgroundColor: item.color}}></span>
                  <span className="legend-label">{item.name}</span>
                  <span className="legend-val">{item.value} ({item.percentage})</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="gender-section">
          <h4>GENDER DISTRIBUTION</h4>
          <div className="gender-list">
            {data.genderDistribution.map((item, index) => (
              <div key={index} className="gender-item">
                <div className="gender-header">
                  <span>{item.name}</span>
                  <span>{item.value} ({item.percentage}%)</span>
                </div>
                <div className="progress-bar-bg">
                  <div 
                    className="progress-bar-fill dark" 
                    style={{width: `${item.percentage}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDemographics;
