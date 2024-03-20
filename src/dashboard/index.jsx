import React, { useState } from 'react';
import { faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import ListItem from '../components/ListItem/ListItem';
import { logo } from '../landing/assets';
import { logoCollapsed } from '../assests';

// Sidebar component
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      className={`bg-gray-800 h-full fixed transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="py-4">
        <img
          src={isOpen ? logo : logoCollapsed}
          alt="trackfin"
          className={` mx-auto ${
            isOpen ? 'w-[124px] h-[32px]' : 'w-[40px] h-[40px]'
          }`}
          onClick={toggle}
        />
      </div>
      <nav>
        <ul>
          <ListItem text="Home" icon={faHome} isOpen={isOpen} />
          <ListItem text="Profile" icon={faUser} isOpen={isOpen} />
          <ListItem text="Settings" icon={faCog} isOpen={isOpen} />
        </ul>
      </nav>
    </div>
  );
};

// Main content component
const MainContent = ({ isOpen }) => {
  return (
    <div
      className={`ml-${
        isOpen ? '64' : '32'
      } flex-auto h-full bg-gray-200 p-8 transition-all duration-300`}
    >
      <h1 className="text-2xl font-semibold mb-4">Main Content</h1>
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
