
import React from 'react';
import { ProgressCard } from '@/components/ProgressCard';
import { QuoteCard } from '@/components/QuoteCard';
import { LevelBadge } from '@/components/LevelBadge';
import { MoodTracker } from '@/components/MoodTracker';

interface HomePageProps {
  currentMood: string;
  setCurrentMood: (mood: string) => void;
}

export const HomePage = ({ currentMood, setCurrentMood }: HomePageProps) => {
  return (
    <div className="space-y-6 pb-20">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Good morning, Alex! 🌅</h2>
        <p className="text-purple-100">Ready to conquer your goals today?</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <ProgressCard 
          title="Current Streak" 
          value="7 days" 
          icon="🔥"
          color="from-orange-400 to-red-500"
        />
        <ProgressCard 
          title="Tasks Today" 
          value="12/15" 
          icon="✅"
          color="from-green-400 to-emerald-500"
        />
      </div>

      {/* Level Badge */}
      <LevelBadge level={5} xp={340} nextLevelXp={500} />

      {/* Daily Quote */}
      <QuoteCard />

      {/* Quick Mood Check */}
      <MoodTracker currentMood={currentMood} setCurrentMood={setCurrentMood} />

      {/* AI Insights */}
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
  );
};
