import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-16 pb-8 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;