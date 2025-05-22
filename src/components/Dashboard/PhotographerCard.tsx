import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Circle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Photographer } from '../../types';

interface PhotographerCardProps {
  photographer: Photographer;
  index: number;
}

const PhotographerCard: React.FC<PhotographerCardProps> = ({ photographer, index }) => {
  const navigate = useNavigate();
  const delay = index * 0.1;

  // Simulate availability (in a real app, this would come from the backend)
  const isAvailable = photographer.id === '1' || photographer.id === '3' || photographer.id === '5';

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5 }}
      className="card card-hover overflow-hidden"
      onClick={() => navigate(`/photographers/${photographer.id}`)}
    >
      <div className="relative h-48 mb-3 overflow-hidden rounded-md -mx-4 -mt-4">
        <img 
          src={photographer.thumbnailUrl} 
          alt={`${photographer.name}'s work`} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1.5 text-sm">
          <Circle size={8} className={isAvailable ? 'fill-success-500 text-success-500' : 'fill-gray-500 text-gray-500'} />
          <span className={isAvailable ? 'text-success-700' : 'text-gray-700'}>
            {isAvailable ? 'Available' : 'Busy'}
          </span>
        </div>
      </div>
      
      <div className="p-1">
        <h3 className="font-semibold text-lg">{photographer.name}</h3>
        
        <div className="text-sm text-gray-600 mt-1">
          {photographer.categories.join(', ')}
        </div>
        
        <div className="mt-2 text-sm font-medium">
          {photographer.price}
        </div>
        
        <div className="mt-2 flex items-center">
          <div className="flex text-warning-500">
            {Array(5).fill(0).map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                fill={i < Math.floor(photographer.rating) ? 'currentColor' : 'none'} 
                className={i < Math.floor(photographer.rating) ? 'text-warning-500' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="ml-1 text-sm text-gray-600">
            ({photographer.rating})
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export default PhotographerCard;