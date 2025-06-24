
import React from 'react';
import { Bell, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileHeaderProps {
  currentPage: string;
}

export const MobileHeader = ({ currentPage }: MobileHeaderProps) => {
  const getPageTitle = (page: string) => {
    switch (page) {
      case 'home': return 'FocusMate';
      case 'tasks': return 'Tasks';
      case 'reports': return 'Reports';
      case 'friends': return 'Friends';
      case 'settings': return 'Settings';
      default: return 'FocusMate';
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">{getPageTitle(currentPage)}</h1>
            {currentPage === 'home' && (
              <p className="text-sm text-gray-600">Good morning, Alex! 🌅</p>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="rounded-full">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
