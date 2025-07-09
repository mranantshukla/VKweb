import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterStudent from './components/RegisterStudent';
import RegisterTeacher from './components/RegisterTeacher';
import RegisterGuardian from './components/RegisterGuardian';
import ForgotPassword from './components/ForgotPassword';
import DashboardAdmin from './components/DashboardAdmin';
import DashboardStudent from './components/DashboardStudent';
import DashboardTeacher from './components/DashboardTeacher';
import DashboardGuardian from './components/DashboardGuardian';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register-student" element={<RegisterStudent />} />
            <Route path="/register-teacher" element={<RegisterTeacher />} />
            <Route path="/register-guardian" element={<RegisterGuardian />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard-admin" element={<DashboardAdmin />} />
            <Route path="/dashboard-student" element={<DashboardStudent />} />
            <Route path="/dashboard-teacher" element={<DashboardTeacher />} />
            <Route path="/dashboard-guardian" element={<DashboardGuardian />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
