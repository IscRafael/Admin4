import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center">
      <div className="p-3 rounded-full bg-blue-100 text-blue-500">
        {icon}
      </div>
      <div className="mx-5">
        <h4 className="text-2xl font-semibold text-gray-700">{value}</h4>
        <div className="text-gray-500">{title}</div>
      </div>
    </div>
  </div>
);

export default StatCard;