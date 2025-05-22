import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Layouts
import MainLayout from './components/Layout/MainLayout';

// Pages
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import PhotographerProfile from './pages/PhotographerProfile';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Bookings from './pages/Bookings';
import Categories from './pages/Categories';
import Availability from './pages/Availability';
import Placeholder from './pages/Placeholder';

// Protected route component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Auth />}>
        <Route path="signup" element={<Auth />} />
        <Route path="forgot-password" element={<Auth />} />
      </Route>
      
      {/* Protected routes */}
      <Route 
        path="/" 
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="photographers/:id" element={<PhotographerProfile />} />
        <Route path="chat/:id" element={<Chat />} />
        <Route path="profile" element={<Profile />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="categories" element={<Categories />} />
        <Route path="filters/availability" element={<Availability />} />
        
        {/* Placeholder routes */}
        <Route path="filters/:type" element={<Placeholder />} />
        <Route path="settings" element={<Placeholder />} />
        <Route path="terms" element={<Placeholder />} />
        <Route path="privacy" element={<Placeholder />} />
        <Route path="contact" element={<Placeholder />} />
      </Route>
      
      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;