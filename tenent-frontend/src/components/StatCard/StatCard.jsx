import React from 'react';
import { Users, UserCheck, IndianRupee, BookOpen, CheckSquare, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import './StatCard.css';

const iconMap = {
  Users,
  UserCheck,
  IndianRupee,
  BookOpen,
  CheckSquare
};

const StatCard = ({ title, value, percentage, trend, subtext, subtextTrend, icon }) => {
  const IconComponent = iconMap[icon] || Users;
  const isPositive = trend === 'up';
  const isSubtextPositive = subtextTrend === 'up';

  return (
    <div className="stat-card">
      <div className="stat-header">
        <div className="stat-icon-wrapper">
          <IconComponent size={20} />
        </div>
        <div className={`stat-badge ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          <span>{percentage}</span>
        </div>
      </div>
      
      <div className="stat-body">
        <h4 className="stat-title">{title}</h4>
        <h2 className="stat-value">{value}</h2>
      </div>

      <div className="stat-footer">
        <span className={`trend-icon ${isSubtextPositive ? 'positive' : 'negative'}`}>
          {isSubtextPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        </span>
        <span className="stat-subtext">{subtext}</span>
      </div>
    </div>
  );
};

export default StatCard;
