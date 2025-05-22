import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoginForm from '../components/Auth/LoginForm';
import SignUpForm from '../components/Auth/SignUpForm';
import ForgotPasswordForm from '../components/Auth/ForgotPasswordForm';
import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const Auth: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // If already authenticated, redirect to dashboard
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Camera size={32} className="text-primary-500" />
          <h1 className="text-3xl font-bold text-primary-500">SNAPHIRE</h1>
        </div>
        <p className="text-gray-600">Find and book the perfect photographer for your needs</p>
      </motion.div>
      
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
      </Routes>
    </div>
  );
};

export default Auth;