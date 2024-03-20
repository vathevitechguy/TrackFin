import React from 'react';
import { Link } from 'react-router-dom';
import {
  faChartPie,
  faAdd,
  faDollarSign,
  faBarChart,
  faWandMagicSparkles,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import ListItem from '../../components/ListItem/ListItem';
import { logo } from '../../landing/assets';
import { logoCollapsed } from '../../assests';

const Sidebar = ({ isOpen, toggle }) => {
  const toggleSidebar = () => {
    toggle();
  };

  return (
    <div
      className={`bg-gray-800 h-full fixed transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="py-4">
        <Link to="/dashboard">
          <img
            src={isOpen ? logo : logoCollapsed}
            alt="trackfin"
            className={`mx-auto ${
              isOpen ? 'w-[124px] h-[32px]' : 'w-[40px] h-[40px]'
            }`}
            onClick={toggle}
          />
        </Link>
      </div>
      <nav>
        <ul>
          <ListItem
            text="Overview"
            icon={faChartPie}
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
            to="/dashboard/overview"
          />
          <ListItem
            text="Add Expense"
            icon={faAdd}
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
            to="/dashboard/add-expense"
          />
          <ListItem
            text="Add/Update Your Budget"
            icon={faDollarSign}
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
            to="/dashboard/budget"
          />
          <ListItem
            text="Trends"
            icon={faBarChart}
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
            to="/dashboard/trends"
          />
          <ListItem
            text="AI Recommendation"
            icon={faWandMagicSparkles}
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
            to="/dashboard/ai-recommendation"
          />
        </ul>
      </nav>
      <div className="absolute bottom-0 left-0 w-full">
        <ul>
          <ListItem
            text="Account Settings"
            icon={faCog}
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
            link="/dashboard/account"
          />
          <ListItem
            text="Logout"
            icon={faSignOutAlt}
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
            link="/logout"
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
