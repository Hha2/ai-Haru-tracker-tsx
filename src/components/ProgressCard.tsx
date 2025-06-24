
import React from 'react';

interface ProgressCardProps {
  title: string;
  value: string;
  icon: string;
  color: string;
}

export const ProgressCard = ({ title, value, icon, color }: ProgressCardProps) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-white text-2xl shadow-lg`}>
          {icon}
        </div>
      </div>
    </div>
  );
};
