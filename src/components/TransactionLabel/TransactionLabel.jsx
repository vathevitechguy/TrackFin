import React, { useState } from 'react';

const TransactionLabel = ({ transaction }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const labelColor = 'bg-gray-300'; // Grey background color
  const borderColor =
    transaction.type === 'income' ? 'border-green-500' : 'border-red-500'; // Color of the transaction type
  const amountColor =
    transaction.type === 'income' ? 'text-green-500' : 'text-red-500';
  const formattedAmount = `${
    transaction.type === 'income' ? '+$' : '-$'
  }${Math.abs(transaction.amount).toLocaleString()}`; // Format the amount

  return (
    <div>
      {/* Transaction Label */}
      <div
        className={`flex items-center justify-between py-2 px-4 rounded-lg cursor-pointer ${labelColor} border-r-4 ${borderColor}`} // Corrected border style to apply to the right
        onClick={toggleDetails}
      >
        <div className="font-semibold">{transaction.name}</div>{' '}
        {/* Increased font weight */}
        <div className={`font-semibold ${amountColor}`}>
          {formattedAmount}
        </div>{' '}
        {/* Increased font weight */}
      </div>

      {/* Pop-up with more details */}
      {showDetails && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <h2 className="text-2xl font-semibold mb-3">{transaction.name}</h2>
            <p className="text-gray-700 mb-4">Amount: {formattedAmount}</p>
            {/* Additional details can be added here */}
            <button
              onClick={toggleDetails}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionLabel;
