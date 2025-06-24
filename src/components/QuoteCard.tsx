
import React from 'react';
import { Sparkles } from 'lucide-react';

export const QuoteCard = () => {
  const quotes = [
    "The secret of getting ahead is getting started. - Mark Twain",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson"
  ];

  const todaysQuote = quotes[Math.floor(Date.now() / 86400000) % quotes.length];

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg">
      <div className="flex items-start space-x-3">
        <Sparkles className="w-6 h-6 mt-1 text-yellow-300" />
        <div>
          <h3 className="font-semibold mb-2">Daily Inspiration</h3>
          <p className="text-sm opacity-90 italic">{todaysQuote}</p>
        </div>
      </div>
    </div>
  );
};
