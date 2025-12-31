import React from 'react';
import { TrendingUp, Star, Users } from 'lucide-react';

const TopSellingCourses = ({ data }) => {
  return (
    <div className="chart-card" style={{ minHeight: '545px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="chart-header">
        <div>
          <h3>Top Selling Courses</h3>
          <p className="subtitle">Based on revenue performance</p>
        </div>
        <div className="icon-action warning">
          <TrendingUp size={18} />
        </div>
      </div>

      <div className="top-courses-list">
        {data.map((course, index) => (
          <div key={course.id} className="course-item">
            <div className="course-rank">
              <span className={`rank-badge rank-${index + 1}`}>{index + 1}</span>
            </div>
            <div className="course-info">
              <h4 className="course-name">{course.name}</h4>
              <div className="course-meta">
                <span className="course-category">{course.category}</span>
                <span className="dot-separator">•</span>
                <span className="course-rating">
                  <Star size={12} fill="#fbbf24" stroke="#fbbf24" />
                  {course.rating}
                </span>
                <span className="dot-separator">•</span>
                <span className="course-sales">
                  <Users size={12} />
                  {course.sales}
                </span>
              </div>
            </div>
            <div className="course-revenue">
              <span className="revenue-amount">{course.revenue}</span>
              <span className="revenue-label">revenue</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingCourses;
