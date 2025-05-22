import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { User } from '../../types';

interface ProfileFormProps {
  user: User;
  onSubmit: (updatedUser: Partial<User>) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ user, onSubmit }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    onSubmit({ name, email });
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-lg shadow-card p-6"
    >
      <h2 className="text-2xl font-semibold mb-6">My Profile</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Picture */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={user.profilePicture}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-2 border-primary-100"
            />
            <button 
              type="button"
              className="absolute bottom-0 right-0 bg-primary-500 text-white p-1 rounded-full"
            >
              <Camera size={16} />
            </button>
          </div>
          <div>
            <p className="font-medium">{user.name}</p>
            <button type="button" className="text-sm text-primary-500 hover:underline">
              Change Profile Picture
            </button>
          </div>
        </div>
        
        {/* Form Fields */}
        <div>
          <label htmlFor="name" className="label">Full Name</label>
          <input
            id="name"
            type="text"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="label">Email Address</label>
          <input
            id="email"
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <button 
          type="submit" 
          className={`btn btn-primary ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </motion.div>
  );
};

export default ProfileForm;