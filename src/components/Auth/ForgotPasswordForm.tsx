import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail } from 'lucide-react';

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
    } catch (err) {
      setError('Failed to send reset link. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-card text-center"
      >
        <Mail className="mx-auto text-primary-500 mb-4" size={48} />
        <h2 className="text-2xl font-bold mb-4">Check Your Email</h2>
        <p className="text-gray-600 mb-6">
          We've sent a password reset link to {email}. Please check your inbox and follow the instructions.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="btn btn-primary w-full"
        >
          Return to Login
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-card"
    >
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-primary-500 mb-6"
      >
        <ArrowLeft size={18} />
        <span>Back to Login</span>
      </button>

      <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-danger-50 text-danger-600 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="label">Email Address</label>
          <input
            id="email"
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            required
          />
        </div>
        
        <button 
          type="submit" 
          className={`btn btn-primary w-full ${isLoading ? 'opacity-70 cursor-wait' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Sending Reset Link...' : 'Send Reset Link'}
        </button>
      </form>
    </motion.div>
  );
};

export default ForgotPasswordForm;