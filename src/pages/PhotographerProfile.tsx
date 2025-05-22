import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star, MessageSquare, Calendar } from 'lucide-react';
import { getPhotographerById } from '../data/photographers';
import Gallery from '../components/PhotographerProfile/Gallery';
import PricingTiers from '../components/PhotographerProfile/PricingTiers';
import Reviews from '../components/PhotographerProfile/Reviews';
import BookingForm from '../components/PhotographerProfile/BookingForm';

const PhotographerProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);
  
  const photographer = id ? getPhotographerById(id) : undefined;
  
  if (!photographer) {
    return (
      <div className="py-12 text-center">
        <p>Photographer not found.</p>
        <button 
          onClick={() => navigate('/dashboard')}
          className="mt-4 btn btn-primary"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  const handleBookingSubmit = async (bookingDetails: {
    date: string;
    timeSlot: string;
    package: string;
    notes: string;
  }) => {
    // In a real app, this would send the booking request to a server
    console.log('Booking details:', bookingDetails);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Close the form and show success message
    setShowBookingForm(false);
    alert('Booking request sent successfully! The photographer will respond shortly.');
  };

  return (
    <div className="py-6">
      <button 
        onClick={() => navigate('/dashboard')}
        className="flex items-center gap-2 text-primary-500 mb-6"
      >
        <ArrowLeft size={18} />
        <span>Back to Dashboard</span>
      </button>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="bg-white rounded-lg shadow-card p-6 mb-8">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-6">
            <img 
              src={photographer.profilePicture} 
              alt={photographer.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
            />
            
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{photographer.name}</h1>
              
              <div className="flex items-center mt-2">
                <div className="flex text-warning-500">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < Math.floor(photographer.rating) ? 'currentColor' : 'none'} 
                      className={i < Math.floor(photographer.rating) ? 'text-warning-500' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {photographer.rating} ({photographer.reviewCount} reviews)
                </span>
              </div>
              
              <p className="mt-1 text-gray-600">
                {photographer.categories.join(' • ')}
              </p>
              
              <div className="mt-4 flex flex-wrap gap-3">
                <button 
                  onClick={() => navigate(`/chat/${photographer.id}`)}
                  className="btn btn-success flex gap-2"
                >
                  <MessageSquare size={18} />
                  Chat Now
                </button>
                
                <button 
                  onClick={() => setShowBookingForm(true)}
                  className="btn btn-primary flex gap-2"
                >
                  <Calendar size={18} />
                  Request Booking
                </button>
              </div>
            </div>
          </div>
          
          {/* About Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">About Me</h3>
            <p className="text-gray-700">{photographer.about}</p>
            <p className="mt-3 font-medium">
              <span className="font-semibold">Service Area:</span> {photographer.serviceArea}
            </p>
          </div>
        </div>
        
        {/* Pricing Section */}
        <div className="bg-white rounded-lg shadow-card p-6 mb-8">
          <PricingTiers tiers={photographer.pricingTiers} />
        </div>
        
        {/* Portfolio Section */}
        <div className="bg-white rounded-lg shadow-card p-6 mb-8">
          <Gallery images={photographer.portfolioImages} />
        </div>
        
        {/* Reviews Section */}
        <div className="bg-white rounded-lg shadow-card p-6">
          <Reviews reviews={photographer.reviews} />
        </div>
      </motion.div>

      <AnimatePresence>
        {showBookingForm && (
          <BookingForm
            photographerId={photographer.id}
            photographerName={photographer.name}
            pricingTiers={photographer.pricingTiers}
            onClose={() => setShowBookingForm(false)}
            onSubmit={handleBookingSubmit}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotographerProfile;