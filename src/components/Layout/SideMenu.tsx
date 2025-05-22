import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { ChevronRight, Home, Calendar, User, LogOut } from 'lucide-react';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    onClose();
  };

  if (!isAuthenticated) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-black/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      <motion.nav 
        className="absolute top-0 left-0 h-full w-72 bg-white shadow-lg overflow-y-auto"
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3 p-2">
            <img 
              src={user?.profilePicture} 
              alt="Profile" 
              className="w-12 h-12 rounded-full object-cover border border-gray-200"
            />
            <div>
              <p className="font-medium">{user?.name}</p>
              <button 
                onClick={() => handleNavigation('/profile')}
                className="text-sm text-primary-500 hover:underline flex items-center"
              >
                View Profile <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <ul className="py-2">
          <MenuItem 
            icon={<Home size={18} />} 
            label="Home"
            onClick={() => handleNavigation('/dashboard')}
          />
          <MenuItem 
            icon={<Calendar size={18} />} 
            label="Filter by Availability"
            onClick={() => handleNavigation('/filters/availability')}
          />
          <MenuItem 
            icon={<User size={18} />} 
            label="Categories"
            onClick={() => handleNavigation('/categories')}
          />
          <MenuItem 
            icon={<Calendar size={18} />} 
            label="My Bookings"
            onClick={() => handleNavigation('/bookings')}
          />
          <MenuItem 
            icon={<LogOut size={18} />} 
            label="Logout"
            onClick={handleLogout}
            className="text-danger-500"
          />
        </ul>
      </motion.nav>
    </motion.div>
  );
};

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  className?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, onClick, className }) => {
  return (
    <li>
      <button 
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors ${className || ''}`}
      >
        {icon}
        <span>{label}</span>
      </button>
    </li>
  );
};

export default SideMenu;