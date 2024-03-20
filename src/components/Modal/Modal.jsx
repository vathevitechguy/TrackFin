import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from './LoadingSpinner';
import { logo } from '../../landing/assets';

const Modal = (props) => {
  const { type, isOpen, onClose, onSubmit, loading } = props;
  const [modalType, setModalType] = useState({});
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (type === 'signin') {
      setModalType({
        title: 'Sign In',
        buttonText: 'Sign In',
        description: 'Welcome back! Please sign in to continue.',
      });
    } else if (type === 'signup') {
      setModalType({
        title: 'Sign Up',
        buttonText: 'Sign Up',
        description: 'Join us! Create your account to get started.',
      });
    }
  }, [type]);

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('Modal')) {
      onClose();
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!formData.fullName) {
      isValid = false;
      errors.fullName = 'Full name is required';
    } else {
      const fullNameWords = formData.fullName.trim().split(' ');
      if (fullNameWords.length !== 2) {
        isValid = false;
        errors.fullName = 'First & last name are required';
      }
    }

    if (!formData.email) {
      isValid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      errors.email = 'Invalid email format';
    }

    if (type === 'signup') {
      if (!formData.password) {
        isValid = false;
        errors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        isValid = false;
        errors.password = 'Password must be at least 6 characters';
      }
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleOverlayClick}
    >
      <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full space-y-6">
        <div className="flex justify-between items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <button onClick={onClose} className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <h2 className="text-white text-2xl font-semibold">{modalType.title}</h2>

        <p className="text-white">{modalType.description}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white">
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            {formErrors.fullName && (
              <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              Email Address
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>

          {type === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-white">
                Password
                <span className="text-sm text-gray-400 ml-1">
                  (min. 6 characters)
                </span>
              </label>
              <input
                type="password"
                className="mt-1 p-2 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {formErrors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.password}
                </p>
              )}
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
          >
            {loading?.loadingMutation ? (
              <LoadingSpinner />
            ) : (
              modalType.buttonText
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
