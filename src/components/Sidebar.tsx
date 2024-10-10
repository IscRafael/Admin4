import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiBarChart2, FiBox, FiCalendar, FiLayers, FiList, FiX } from 'react-icons/fi';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { icon: <FiHome className="w-5 h-5" />, title: "Dashboard", to: "/" },
    { icon: <FiBarChart2 className="w-5 h-5" />, title: "Analytics", to: "/analytics" },
    { icon: <FiBox className="w-5 h-5" />, title: "Widgets", to: "/widgets" },
    { icon: <FiCalendar className="w-5 h-5" />, title: "Calendar", to: "/calendar" },
    { icon: <FiLayers className="w-5 h-5" />, title: "Components", to: "/components" },
    {
      icon: <FiList className="w-5 h-5" />,
      title: "Articulos",
      subItems: [
        { title: "Products", href: "/articulos/products" },
        { title: "Category", href: "/articulos/category" }
      ]
    }
  ];

  return (
    <aside className={`z-20 w-64 overflow-y-auto bg-white flex-shrink-0 ${isOpen ? 'block' : 'hidden'} lg:block`}>
      <div className="py-4 text-gray-500">
        <div className="flex justify-between items-center px-6 mb-4">
          <Link to="/" className="text-lg font-bold text-gray-800">Lead</Link>
          <button onClick={toggleSidebar} className="lg:hidden">
            <FiX className="w-6 h-6" />
          </button>
        </div>
        <ul className="mt-6">
          {menuItems.map((item, index) => (
            <li className="relative px-6 py-3" key={index}>
              {item.subItems ? (
                <div className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
                  <span className="inline-flex items-center">
                    {item.icon}
                    <span className="ml-4">{item.title}</span>
                  </span>
                </div>
              ) : (
                <Link
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                  to={item.to}
                >
                  {item.icon}
                  <span className="ml-4">{item.title}</span>
                </Link>
              )}
              {item.subItems && (
                <ul className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium rounded-md shadow-inner bg-gray-50">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subItem.href} className="w-full inline-block px-4 py-2 text-sm hover:text-gray-800">
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;