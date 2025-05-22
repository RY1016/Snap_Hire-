import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Search, MapPin, Check } from 'lucide-react';
import { getAvailablePhotographers } from '../data/photographers';
import PhotographerCard from '../components/Dashboard/PhotographerCard';

const Availability: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [hasSearched, setHasSearched] = useState(false);

  const timeSlots = [
    'Morning (8AM - 12PM)',
    'Afternoon (12PM - 4PM)',
    'Evening (4PM - 8PM)'
  ];

  // Get tomorrow's date as the minimum selectable date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const availablePhotographers = selectedDate && selectedTimeSlot 
    ? getAvailablePhotographers(selectedDate, selectedTimeSlot)
    : [];

  const handleSearch = () => {
    if (selectedDate && selectedTimeSlot) {
      setHasSearched(true);
    }
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
          <h1 className="text-2xl font-bold mb-6">Find Available Photographers</h1>

          <div className="bg-white rounded-lg shadow-card p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="date" className="label">Select Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="date"
                    id="date"
                    min={minDate}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="input pl-10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="timeSlot" className="label">Preferred Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <select
                    id="timeSlot"
                    value={selectedTimeSlot}
                    onChange={(e) => setSelectedTimeSlot(e.target.value)}
                    className="input pl-10"
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="location" className="label">Location (Optional)</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your preferred location"
                  className="input pl-10"
                />
              </div>
            </div>

            <button
              onClick={handleSearch}
              disabled={!selectedDate || !selectedTimeSlot}
              className="btn btn-primary w-full flex items-center justify-center gap-2"
            >
              <Search size={18} />
              Find Available Photographers
            </button>
          </div>

          {hasSearched && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-success-500 bg-success-50 p-3 rounded-lg">
                <Check size={20} />
                <span className="font-medium">
                  {availablePhotographers.length} photographer{availablePhotographers.length !== 1 ? 's' : ''} available
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {availablePhotographers.map((photographer, index) => (
                  <PhotographerCard
                    key={photographer.id}
                    photographer={photographer}
                    index={index}
                  />
                ))}
              </div>

              {availablePhotographers.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <p>No photographers available for the selected time.</p>
                  <p className="mt-2">Try a different date or time slot.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Availability