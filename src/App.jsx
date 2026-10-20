import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AuthLayout>
        <AuthPage />
      </AuthLayout>
    </Router>
  );
}

export default App
