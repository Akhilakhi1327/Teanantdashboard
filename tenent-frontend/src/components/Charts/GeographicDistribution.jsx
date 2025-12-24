import React from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';

const GeographicDistribution = ({ data }) => {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h3>Geographic Distribution</h3>
          <p className="subtitle">Students by states</p>
        </div>
        <div className="icon-action green">
          <Globe size={18} />
        </div>
      </div>

      <div className="geo-summary">
        <span className="label">TOTAL STUDENTS ACROSS INDIA</span>
        <h2 className="value">{data.totalStudents}</h2>
        <div className="growth-text">
          <ArrowUpRight size={14} />
          <span>{data.growth}</span>
        </div>
      </div>

      <div className="geo-grid">
        {data.states.map((state, index) => (
          <div key={index} className="geo-item">
            <div className="geo-header">
              <span className="state-name">{state.name}</span>
              <span className="state-percent">{state.percentage}%</span>
            </div>
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill dark-green" 
                style={{width: `${state.percentage}%`}}
              ></div>
            </div>
            <span className="student-count">{state.students} students</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeographicDistribution;
