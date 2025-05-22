import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import ProfileForm from '../components/Profile/ProfileForm';
import BookingHistory from '../components/Profile/BookingHistory';

const Profile: React.FC = () => {
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

  const handleProfileUpdate = (updatedUser: Partial<typeof user>) => {
    console.log('Profile updated:', updatedUser);
    // In a real app, this would save to a server
  };

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
          <ProfileForm user={user} onSubmit={handleProfileUpdate} />
          
          <BookingHistory bookings={user.bookings} />
          
          <div className="bg-white rounded-lg shadow-card p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={() => navigate('/filters/availability')}
                className="btn btn-primary"
              >
                Book New Session
              </button>
              {user.bookings.length > 0 && (
                <button 
                  onClick={() => navigate(`/chat/${user.bookings[0].photographerId}`)}
                  className="btn btn-secondary"
                >
                  Message Photographer
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;