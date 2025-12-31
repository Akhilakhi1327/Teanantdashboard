import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Users } from 'lucide-react';

const StudentDemographics = ({ data }) => {
  return (
    <div className="chart-card student-demo-card">
      <div className="chart-header">
        <div>
          <h3>Student Demographics</h3>
          <p className="subtitle">Age, gender & experience level</p>
        </div>
        <div className="icon-action">
          <Users size={18} />
        </div>
      </div>

      <div className="demographics-content demographics-content-styled">
        <div className="age-section age-section-styled">
          <h4 style={{ margin: 0 }}>AGE DISTRIBUTION</h4>
          <div className="donut-container donut-container-styled">
            <div className="chart-wrapper-styled">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.ageDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={55}
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
            </div>
            <div className="legend" style={{ flex: 1 }}>
              {data.ageDistribution.map((item, index) => (
                <div key={index} className="legend-item" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="dot" style={{ backgroundColor: item.color }}></span>
                    <span className="legend-label">{item.name}</span>
                  </div>
                  <span className="legend-val">{item.value} ({item.percentage})</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="gender-section gender-section-styled">
          <h4 style={{ margin: 0 }}>GENDER DISTRIBUTION</h4>
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
                    style={{ width: `${item.percentage}%` }}
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
