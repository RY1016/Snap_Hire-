import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../../types';

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-3">Client Reviews</h3>
      
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="font-medium">{review.clientName}</div>
              <div className="flex items-center">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < Math.floor(review.rating) ? 'currentColor' : 'none'} 
                    className={i < Math.floor(review.rating) ? 'text-warning-500' : 'text-gray-300'}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm">{review.comment}</p>
          </div>
        ))}
        
        {reviews.length === 0 && (
          <p className="text-gray-500 italic">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default Reviews;