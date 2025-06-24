
import React from 'react';
import { Star } from 'lucide-react';

interface LevelBadgeProps {
  level: number;
  xp: number;
  nextLevelXp: number;
}

export const LevelBadge = ({ level, xp, nextLevelXp }: LevelBadgeProps) => {
  const progress = (xp / nextLevelXp) * 100;

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Star className="w-5 h-5 text-yellow-500" />
          <span className="font-semibold text-gray-900">Level {level}</span>
        </div>
        <span className="text-sm text-gray-600">{xp}/{nextLevelXp} XP</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
        <div 
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className="text-xs text-gray-600">
        {nextLevelXp - xp} XP to level {level + 1}
      </p>
    </div>
  );
};
