
import React from 'react';
import { Home, CheckSquare, BarChart3, Users, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BottomNavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const BottomNavigation = ({ currentPage, onPageChange }: BottomNavigationProps) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'tasks', icon: CheckSquare, label: 'Tasks' },
    { id: 'reports', icon: BarChart3, label: 'Reports' },
    { id: 'friends', icon: Users, label: 'Friends' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 px-4 py-2 safe-area-pb">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => onPageChange(item.id)}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-colors ${
                isActive 
                  ? 'bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-700' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-600' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
