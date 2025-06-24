
import React from 'react';

interface MoodTrackerProps {
  currentMood: string;
  setCurrentMood: (mood: string) => void;
}

export const MoodTracker = ({ currentMood, setCurrentMood }: MoodTrackerProps) => {
  const moods = [
    { emoji: '😊', label: 'Happy', value: 'happy' },
    { emoji: '😌', label: 'Calm', value: 'calm' },
    { emoji: '😐', label: 'Neutral', value: 'neutral' },
    { emoji: '😔', label: 'Tired', value: 'tired' },
    { emoji: '😤', label: 'Stressed', value: 'stressed' },
  ];

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">How are you feeling?</h3>
      
      <div className="grid grid-cols-5 gap-2 mb-4">
        {moods.map((mood) => (
          <button
            key={mood.value}
            onClick={() => setCurrentMood(mood.value)}
            className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 ${
              currentMood === mood.value
                ? 'bg-gradient-to-br from-indigo-100 to-purple-100 border-2 border-indigo-300 shadow-lg'
                : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <div className="text-2xl mb-1">{mood.emoji}</div>
            <div className="text-xs text-gray-600">{mood.label}</div>
          </button>
        ))}
      </div>

      {currentMood && (
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-4">
          <p className="text-sm text-indigo-800">
            Thanks for sharing! Your mood helps our AI provide better suggestions.
          </p>
        </div>
      )}
    </div>
  );
};
