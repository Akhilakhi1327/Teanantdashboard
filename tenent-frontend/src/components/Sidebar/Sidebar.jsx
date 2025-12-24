import React from 'react';
import { LayoutDashboard, BookOpen, Users, Settings, HelpCircle, LogOut, FileText, BarChart2 } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">L</div>
        <h2>LearnHub</h2>
      </div>
      <nav className="sidebar-nav">
        <a href="#" className="nav-item active">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </a>  
        
      </nav>
      
    </div>
  );
};

export default Sidebar;
