import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, X, Camera, MapPin } from 'lucide-react';
import { PricingTier } from '../../types';

interface BookingFormProps {
  photographerId: string;
  photographerName: string;
  pricingTiers: PricingTier[];
  onClose: () => void;
  onSubmit: (booking: {
    date: string;
    timeSlot: string;
    package: string;
    location: string;
    notes: string;
  }) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({
  photographerName,
  pricingTiers,
  onClose,
  onSubmit
}) => {
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    'Morning (8AM - 12PM)',
    'Afternoon (12PM - 4PM)',
    'Evening (4PM - 8PM)'
  ];

  // Get tomorrow's date as the minimum selectable date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onSubmit({
        date,
        timeSlot,
        package: selectedPackage,
        location,
        notes
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <Camera size={24} className="text-primary-500" />
            <h2 className="text-xl font-semibold">Book {photographerName}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label htmlFor="package" className="label">Select Package</label>
            <select
              id="package"
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
              className="input"
              required
            >
              <option value="">Choose a package</option>
              {pricingTiers.map((tier, index) => (
                <option key={index} value={tier.name}>
                  {tier.name} - {tier.description}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="date" className="label">Preferred Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="date"
                id="date"
                min={minDate}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="input pl-10"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="timeSlot" className="label">Preferred Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <select
                id="timeSlot"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="input pl-10"
                required
              >
                <option value="">Select time slot</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="location" className="label">Shoot Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="input pl-10"
                placeholder="Enter the shoot location"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="notes" className="label">Additional Notes</label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="input min-h-[100px]"
              placeholder="Any special requests or details about your shoot..."
            />
          </div>

          <div className="pt-4 border-t">
            <button
              type="submit"
              className={`btn btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending Request...' : 'Send Booking Request'}
            </button>
            <p className="text-sm text-gray-500 text-center mt-3">
              You'll receive a confirmation email once the photographer accepts your booking
            </p>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default BookingForm