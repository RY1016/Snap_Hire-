import React from 'react';
import { PricingTier } from '../../types';

interface PricingTiersProps {
  tiers: PricingTier[];
}

const PricingTiers: React.FC<PricingTiersProps> = ({ tiers }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">Pricing</h3>
      
      <ul className="space-y-3">
        {tiers.map((tier, index) => (
          <li 
            key={index}
            className="border border-gray-200 rounded-md p-3 bg-white hover:border-primary-200 transition-colors"
          >
            <div className="font-medium">{tier.name}</div>
            <div className="text-gray-600 text-sm mt-1">{tier.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingTiers;