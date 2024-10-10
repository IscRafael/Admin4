import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [menuPosition, setMenuPosition] = useState<'left' | 'top' | 'right'>('top');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleChangeMenuPosition = (position: 'left' | 'top' | 'right') => {
    setMenuPosition(position);
    if (position === 'left' || position === 'right') {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {menuPosition === 'left' && (
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      <div className="flex flex-col flex-1 w-full">
        <Header 
          onChangeMenuPosition={handleChangeMenuPosition} 
          menuPosition={menuPosition}
          toggleSidebar={toggleSidebar}
        />
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 overflow-y-auto">
            <div className="container px-6 mx-auto">
              {children}
            </div>
          </main>
          {menuPosition === 'right' && (
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;