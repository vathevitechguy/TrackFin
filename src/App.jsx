import React from 'react';
import LandingPage from './landing';
import Dashboard from './dashboard';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Overview from './dashboard/Pages/Overview';
import AddExpense from './dashboard/Pages/AddExpense';
import Budget from './dashboard/Pages/Budget';
import Trends from './dashboard/Pages/Trends';
import AIRecommendation from './dashboard/Pages/AIRecommendation';
import Account from './dashboard/Pages/Account';

const routes = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          { index: true, element: <Overview /> },
          { path: 'overview', element: <Overview /> },
          { path: 'add-expense', element: <AddExpense /> },
          { path: 'budget', element: <Budget /> },
          { path: 'trends', element: <Trends /> },
          { path: 'ai-recommendation', element: <AIRecommendation /> },
          { path: 'account', element: <Account /> },
        ],
      },
    ],
  },
];

const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
