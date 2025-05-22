import React from 'react';
import { Booking } from '../../types';
import { Calendar, Clock, Check, AlertCircle, X } from 'lucide-react';

interface BookingHistoryProps {
  bookings: Booking[];
}

const BookingHistory: React.FC<BookingHistoryProps> = ({ bookings }) => {
  // Helper function to get status icon and color
  const getStatusDetails = (status: Booking['status']) => {
    switch (status) {
      case 'confirmed':
        return { icon: <Check size={16} />, color: 'text-success-500 bg-success-50' };
      case 'pending':
        return { icon: <Clock size={16} />, color: 'text-warning-500 bg-warning-50' };
      case 'completed':
        return { icon: <Check size={16} />, color: 'text-primary-500 bg-primary-50' };
      case 'cancelled':
        return { icon: <X size={16} />, color: 'text-danger-500 bg-danger-50' };
      default:
        return { icon: <AlertCircle size={16} />, color: 'text-gray-500 bg-gray-50' };
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-card p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-6">Booking History</h2>
      
      {bookings.length > 0 ? (
        <div className="space-y-4">
          {bookings.map((booking) => {
            const { icon, color } = getStatusDetails(booking.status);
            
            return (
              <div key={booking.id} className="flex flex-col sm:flex-row border border-gray-200 rounded-lg p-4 hover:border-primary-200 transition-colors">
                <div className="flex-1">
                  <h3 className="font-medium">{booking.photographerName}</h3>
                  <p className="text-sm text-gray-600 mt-1">{booking.package}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                    <Calendar size={14} />
                    <span>
                      {booking.date.toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
                
                <div className="mt-3 sm:mt-0 sm:ml-4 flex items-center">
                  <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${color}`}>
                    {icon}
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500 italic">No bookings yet.</p>
      )}
    </div>
  );
};

export default BookingHistory;