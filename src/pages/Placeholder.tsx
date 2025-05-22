import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';

const Placeholder: React.FC = () => {
  const navigate = useNavigate();
  const { feature } = useParams<{ feature: string }>();

  // Convert feature slug to readable title
  const getTitle = () => {
    if (!feature) return 'Feature';
    
    return feature
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="py-12">
      <button 
        onClick={() => navigate('/dashboard')}
        className="flex items-center gap-2 text-primary-500 mb-6"
      >
        <ArrowLeft size={18} />
        <span>Back to Dashboard</span>
      </button>
      
      <div className="text-center py-10 bg-white rounded-lg shadow-card">
        <Construction size={48} className="mx-auto mb-4 text-gray-400" />
        <h1 className="text-2xl font-bold mb-2">{getTitle()}</h1>
        <p className="text-gray-600 mb-6">
          This feature is coming soon! We're working hard to bring you this functionality.
        </p>
        <button 
          onClick={() => navigate('/dashboard')}
          className="btn btn-primary"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Placeholder;