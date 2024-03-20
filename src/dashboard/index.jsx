import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar/SideBar';

// Main content component
const MainContent = ({ isOpen }) => {
  const mainContentStyle = {
    marginLeft: isOpen ? 'calc(64px + 12rem)' : 'calc(64px + 1rem)', // Adjusted left margin based on sidebar state
  };

  return (
    <div
      style={mainContentStyle}
      className="flex-auto h-full bg-gray-200 p-8 transition-all duration-300"
    >
      {/* <h1 className="text-2xl font-semibold mb-4">Main Content</h1> */}
      <Outlet />
    </div>
  );
};

// Dashboard layout component
const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
      <MainContent isOpen={isSidebarOpen} />
    </div>
  );
};

export default DashboardLayout;
