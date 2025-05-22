import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Camera, Users, Heart, Building, Baby, Mountain as Mountains, BellRing as Ring } from 'lucide-react';
import { photographers, getCategoryStats } from '../data/photographers';
import { CategoryStats } from '../types';
import PhotographerCard from '../components/Dashboard/PhotographerCard';

const Categories: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categoryStats, setCategoryStats] = useState<CategoryStats[]>([]);

  useEffect(() => {
    setCategoryStats(getCategoryStats());
  }, []);

  const filteredPhotographers = selectedCategory
    ? photographers.filter(p => p.categories.includes(selectedCategory))
    : [];

  const categoryIcons = {
    'Wedding': <Ring size={24} />,
    'Portrait': <Camera size={24} />,
    'Family': <Users size={24} />,
    'Events': <Heart size={24} />,
    'Corporate': <Building size={24} />,
    'Newborn': <Baby size={24} />,
    'Product': <Mountains size={24} />
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

        <h1 className="text-2xl font-bold mb-6">Photography Categories</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryStats.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-white rounded-lg shadow-card p-6 hover:shadow-card-hover transition-shadow cursor-pointer ${
                selectedCategory === category.name ? 'ring-2 ring-primary-500' : ''
              }`}
              onClick={() => setSelectedCategory(
                selectedCategory === category.name ? null : category.name
              )}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary-50 text-primary-500 rounded-lg">
                  {categoryIcons[category.name as keyof typeof categoryIcons] || <Camera size={24} />}
                </div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Available:</span>
                  <span className="font-medium text-primary-500">
                    {category.count} photographer{category.count !== 1 ? 's' : ''}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Price Range:</span>
                  <span className="font-medium">{category.priceRange}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Popular Times:</span>
                  <span className="font-medium">{category.popularTimes}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8"
          >
            <h2 className="text-xl font-semibold mb-6">
              {filteredPhotographers.length} Photographer{filteredPhotographers.length !== 1 ? 's' : ''} in {selectedCategory}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotographers.map((photographer, index) => (
                <PhotographerCard
                  key={photographer.id}
                  photographer={photographer}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Categories