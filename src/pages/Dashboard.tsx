import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { photographers } from '../data/photographers';
import PhotographerCard from '../components/Dashboard/PhotographerCard';
import SearchBar from '../components/Dashboard/SearchBar';

const Dashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Filter photographers based on search query
  const filteredPhotographers = photographers.filter(photographer => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      photographer.name.toLowerCase().includes(query) ||
      photographer.categories.some(category => category.toLowerCase().includes(query))
    );
  });

  // Split photographers into recommended and others (just for demo)
  const recommendedPhotographers = filteredPhotographers.slice(0, 3);
  const otherPhotographers = filteredPhotographers.slice(3);

  return (
    <div className="py-6">
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="relative mb-8 rounded-2xl overflow-hidden flex items-center justify-center" // Added flexbox classes
>
  <img
    src="https://i.imgur.com/0HX130n.png"
    alt="Photography showcase"
    className="w-[200] h-[200] object-contain object-center" // Changed object-cover to object-contain and added object-center
  />
</motion.div>
      
      <SearchBar onSearch={handleSearch} />
      
      {filteredPhotographers.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No photographers found matching "{searchQuery}"</p>
          <button 
            onClick={() => setSearchQuery('')}
            className="mt-3 text-primary-500 hover:underline"
          >
            Clear search
          </button>
        </div>
      ) : (
        <>
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Recommended Photographers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedPhotographers.map((photographer, index) => (
                <PhotographerCard 
                  key={photographer.id} 
                  photographer={photographer} 
                  index={index}
                />
              ))}
            </div>
          </section>
          
          {otherPhotographers.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-4">More Photographers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPhotographers.map((photographer, index) => (
                  <PhotographerCard 
                    key={photographer.id} 
                    photographer={photographer} 
                    index={index + recommendedPhotographers.length}
                  />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;