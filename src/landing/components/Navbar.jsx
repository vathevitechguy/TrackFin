import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import Modal from '../../components/Modal/Modal';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('signin'); // State to manage the type of modal
  // const history = useHistory();

  const toggleHandler = () => setToggle((prev) => !prev);

  const handleSignInClick = () => {
    setShowModal(true);
    setModalType('signin'); // Set modal type to 'signin' for sign in
  };

  const handleSignUpClick = () => {
    setShowModal(true);
    setModalType('signup'); // Set modal type to 'signup' for sign up
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="trackfin" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => {
          return (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
              } text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          );
        })}
        <li
          className="font-poppins font-normal cursor-pointer text-[16px] text-white"
          onClick={handleSignInClick}
        >
          Sign In
        </li>
        <li
          className="font-poppins font-normal cursor-pointer text-[16px] text-white"
          onClick={handleSignUpClick}
        >
          Sign Up
        </li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={toggleHandler}
        />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => {
              return (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                  } text-white`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              );
            })}
            <li
              className="font-poppins font-normal cursor-pointer text-[16px] text-white"
              onClick={handleSignInClick}
            >
              Sign In
            </li>
            <li
              className="font-poppins font-normal cursor-pointer text-[16px] text-white"
              onClick={handleSignUpClick}
            >
              Sign Up
            </li>
          </ul>
        </div>
      </div>
      {/* Render the Modal component */}
      {showModal && (
        <Modal
          isOpen={true}
          type={modalType} // Pass the modal type as a prop
          onClose={handleCloseModal} // Pass the close modal handler as a prop
        />
      )}
    </nav>
  );
};

export default Navbar;
