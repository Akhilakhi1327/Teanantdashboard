import React from 'react';
import { Calendar } from 'lucide-react';
import './Header.css';

const Header = ({ user, currentDate }) => {
  return (
    <div className="dashboard-header">
      <div className="header-welcome">
        <h1>{user?.welcomeMessage}</h1>
        <p>{user?.subMessage}</p>
      </div>
      <div className="header-date">
        <Calendar size={18} />
        <span>{currentDate}</span>
      </div>
    </div>
  );
};

export default Header;
