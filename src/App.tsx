import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <Router>
      <AdminLayout>
        <AppRoutes />
      </AdminLayout>
    </Router>
  );
};

export default App;