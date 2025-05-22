import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import SideMenu from './SideMenu';

const Header: React.FC = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <button 
          onClick={toggleSideMenu}
          className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label={isSideMenuOpen ? "Close menu" : "Open menu"}
        >
          {isSideMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <div 
          className="flex items-center gap-2 text-xl font-bold text-primary-500 cursor-pointer"
          onClick={() => navigate(isAuthenticated ? '/dashboard' : '/')}
        >
          <Camera className="text-primary-500" />
          <span>SNAPHIRE</span>
        </div>
        
        <div className="w-10"></div> {/* Spacer to balance the header */}
      </div>

      <SideMenu isOpen={isSideMenuOpen} onClose={toggleSideMenu} />
    </header>
  );
};

export default Header;