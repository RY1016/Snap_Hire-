import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MessageSquare, AlertTriangle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import BookingHistory from '../components/Profile/BookingHistory';

const Bookings: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  if (!user) {
    return (
      <div className="py-12 text-center">
        <p>You must be logged in to view this page.</p>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 btn btn-primary"
        >
          Go to Login
        </button>
      </div>
    );
  }

  const pendingBookings = user.bookings.filter(booking => booking.status === 'pending');
  const upcomingBookings = user.bookings.filter(booking => booking.status === 'confirmed');
  const pastBookings = user.bookings.filter(booking => booking.status === 'completed');

  return (
    <div className="py-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <button 
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-primary-500 mb-6"
        >
          <ArrowLeft size={18} />
          <span>Back to Dashboard</span>
        </button>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">My Bookings</h1>

          {/* Booking Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-warning-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-warning-500 mb-2">
                <AlertTriangle size={20} />
                <h3 className="font-medium">Pending</h3>
              </div>
              <p className="text-2xl font-bold">{pendingBookings.length}</p>
            </div>
            <div className="bg-primary-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-primary-500 mb-2">
                <Calendar size={20} />
                <h3 className="font-medium">Upcoming</h3>
              </div>
              <p className="text-2xl font-bold">{upcomingBookings.length}</p>
            </div>
            <div className="bg-success-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-success-500 mb-2">
                <Calendar size={20} />
                <h3 className="font-medium">Completed</h3>
              </div>
              <p className="text-2xl font-bold">{pastBookings.length}</p>
            </div>
          </div>

          {/* Booking History */}
          <BookingHistory bookings={user.bookings} />
          
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-card p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={() => navigate('/filters/availability')}
                className="btn btn-primary flex items-center justify-center gap-2"
              >
                <Calendar size={18} />
                Book New Session
              </button>
              <button 
                className="btn btn-secondary flex items-center justify-center gap-2"
                onClick={() => navigate('/chat')}
              >
                <MessageSquare size={18} />
                Message Photographer
              </button>
            </div>
          </div>

          {/* Booking Guidelines */}
          <div className="bg-white rounded-lg shadow-card p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">Booking Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Cancellation Policy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free cancellation up to 48 hours before</li>
                  <li>• 50% refund for cancellations within 48 hours</li>
                  <li>• No refund for same-day cancellations</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">What to Know</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Arrive 10 minutes before your session</li>
                  <li>• Weather rescheduling is free</li>
                  <li>• Bring any props or outfits discussed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Bookings