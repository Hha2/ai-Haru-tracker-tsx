
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { TaskList } from '@/components/TaskList';
import { MoodTracker } from '@/components/MoodTracker';
import { ProgressCard } from '@/components/ProgressCard';
import { QuoteCard } from '@/components/QuoteCard';
import { LevelBadge } from '@/components/LevelBadge';

const Index = () => {
  const [currentMood, setCurrentMood] = useState<string>('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Top Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <ProgressCard 
            title="Current Streak" 
            value="7 days" 
            icon="🔥"
            color="from-orange-400 to-red-500"
          />
          <ProgressCard 
            title="Tasks Completed" 
            value="12/15" 
            icon="✅"
            color="from-green-400 to-emerald-500"
          />
          <LevelBadge level={5} xp={340} nextLevelXp={500} />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Tasks */}
          <div className="lg:col-span-2 space-y-6">
            <QuoteCard />
            <TaskList />
          </div>

          {/* Right Column - Mood & Insights */}
          <div className="space-y-6">
            <MoodTracker currentMood={currentMood} setCurrentMood={setCurrentMood} />
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">AI Insights</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-sm text-blue-800">
                    🤖 You tend to skip evening tasks. Consider moving them to morning!
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-sm text-green-800">
                    🎯 Great job! You're 40% more productive on days you complete morning tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
