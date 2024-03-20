import React, { useState, useEffect } from 'react';
import DisplayExpenses from '../DisplayExpenses/DisplayExpenses';

const AddExpense = () => {
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [availableCategories, setAvailableCategories] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `/api/categories?userId=${currentUser.id}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const categoriesData = await response.json();
        setAvailableCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error.message);
      }
    };

    if (currentUser) {
      fetchCategories();
    }
  }, [currentUser]);

  const handleAddExpense = async () => {
    if (
      !label ||
      !amount ||
      isNaN(amount) ||
      Number(amount) <= 0 ||
      !category ||
      !date
    ) {
      alert('Invalid Entries. Make sure all fields are filled correctly.');
      return;
    }

    try {
      const response = await fetch('/api/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          label,
          amount: parseFloat(amount),
          category,
          date,
          userId: currentUser.id,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to add expense');
      }
      // Navigate to home page after adding expense
      history.push('/');
    } catch (error) {
      console.error('Error adding expense:', error.message);
    }
  };

  const handleRemoveCategory = async () => {
    // Implement category removal logic similar to adding expenses
  };

  const handleResetExpenses = async () => {
    // Logic to reset expenses for the specified month
    // This function will reset expenses for the current user and the specified month
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="flex max-w-screen-xl mx-auto mt-8">
      {/* Add Expense Section */}
      <div className="w-1/2 p-6">
        <h2 className="text-2xl font-semibold mb-4">Add Expense</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Label <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="mt-1 p-2 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="Ex: Car payments"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Amount <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 p-2 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="Ex: 3000"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="mt-1 p-2 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Select a Category
          </label>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="mt-1 p-2 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            <option value="">Select a category or create a new one</option>
            {availableCategories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center mt-4">
          <button
            onClick={handleAddExpense}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-4"
          >
            Add Expense
          </button>
          <button
            onClick={handleRemoveCategory}
            className="bg-red-500 text-white py-2 px-4 rounded-lg"
          >
            Remove Category
          </button>
        </div>
        {/* Reset Expenses Section */}
        <div className="bottom-10 absolute">
          <h2 className="text-2xl font-semibold mb-3">Reset Your Expenses</h2>
          <p className="text-gray-700 mb-4">
            Resets your expenses back to 0 for the specified month.
          </p>
          <button
            onClick={handleResetExpenses}
            className="bg-red-500 text-white py-2 px-4 rounded-lg"
          >
            Reset Expenses
          </button>
        </div>
      </div>

      {/* Expenses Column */}
      <div className="flex-grow p-6">
        <h2 className="text-2xl font-semibold mb-3">February Expenses</h2>
        <DisplayExpenses />
      </div>
    </div>
  );
};

export default AddExpense;
