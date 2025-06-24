
import React, { useState } from 'react';
import { MobileHeader } from '@/components/MobileHeader';
import { BottomNavigation } from '@/components/BottomNavigation';
import { HomePage } from '@/pages/HomePage';
import { TasksPage } from '@/pages/TasksPage';
import { ReportsPage } from '@/pages/ReportsPage';
import { FriendsPage } from '@/pages/FriendsPage';
import { SettingsPage } from '@/pages/SettingsPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentMood, setCurrentMood] = useState<string>('');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage currentMood={currentMood} setCurrentMood={setCurrentMood} />;
      case 'tasks':
        return <TasksPage />;
      case 'reports':
        return <ReportsPage />;
      case 'friends':
        return <FriendsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <HomePage currentMood={currentMood} setCurrentMood={setCurrentMood} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <MobileHeader currentPage={currentPage} />
      
      <main className="container mx-auto px-4 py-6 max-w-md">
        {renderCurrentPage()}
      </main>

      <BottomNavigation currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

export default Index;
