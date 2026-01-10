import React from 'react';
import { Calendar, Menu } from 'lucide-react';
import './Header.css';

const Header = ({ user, currentDate, onToggleSidebar }) => {
  return (
    <div className="dashboard-header">
      <div className="header-left">
        <button className="sidebar-toggle-btn" onClick={onToggleSidebar} aria-label="Toggle Sidebar">
          <Menu size={20} />
        </button>
        <div className="header-welcome">
          <h1>{user?.welcomeMessage}</h1>
          <p>{user?.subMessage}</p>
        </div>
      </div>
      <div className="header-date">
        <Calendar size={18} />
        <span>{currentDate}</span>
      </div>
    </div>
  );
};

export default Header;
