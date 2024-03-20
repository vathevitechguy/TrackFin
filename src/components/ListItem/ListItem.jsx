import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// Sidebar List Item component
const ListItem = ({ text, icon, isOpen, to }) => {
  return (
    <li className="my-px">
      <Link
        to={to}
        className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-300 hover:bg-gray-700"
      >
        <span
          className={`flex items-center justify-center text-lg mr-3 ${
            isOpen ? '' : 'w-full justify-center'
          }`}
        >
          <FontAwesomeIcon icon={icon} />
        </span>
        {isOpen && <span className="text-sm font-medium">{text}</span>}
      </Link>
    </li>
  );
};

export default ListItem;
