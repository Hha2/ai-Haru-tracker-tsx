
import React from 'react';
import { Users, Trophy, UserPlus, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FriendsPage = () => {
  const friends = [
    { id: 1, name: 'Sarah Chen', streak: 12, level: 8, xp: 2340, avatar: '👩‍💻' },
    { id: 2, name: 'Mike Johnson', streak: 8, level: 6, xp: 1820, avatar: '👨‍🎓' },
    { id: 3, name: 'Emma Davis', streak: 15, level: 9, xp: 2890, avatar: '👩‍🎨' },
    { id: 4, name: 'Alex Kim', streak: 5, level: 4, xp: 1200, avatar: '👨‍💼' },
  ];

  const leaderboard = [...friends].sort((a, b) => b.xp - a.xp);

  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Friends</h1>
          <p className="text-gray-600">Stay motivated together</p>
        </div>
        <Button size="sm" className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full">
          <UserPlus className="w-4 h-4 mr-1" />
          Add Friend
        </Button>
      </div>

      {/* My Stats */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Your Progress</h3>
            <div className="flex items-center space-x-4 mt-2">
              <div>
                <div className="text-2xl font-bold">7</div>
                <div className="text-purple-100 text-xs">Day Streak</div>
              </div>
              <div>
                <div className="text-2xl font-bold">5</div>
                <div className="text-purple-100 text-xs">Level</div>
              </div>
              <div>
                <div className="text-2xl font-bold">1,840</div>
                <div className="text-purple-100 text-xs">Total XP</div>
              </div>
            </div>
          </div>
          <div className="text-4xl">🚀</div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
        <div className="flex items-center space-x-2 mb-4">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <h3 className="text-lg font-semibold text-gray-800">Weekly Leaderboard</h3>
        </div>
        <div className="space-y-3">
          {leaderboard.map((friend, index) => (
            <div key={friend.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white font-bold text-sm">
                {index === 0 ? <Crown className="w-4 h-4" /> : index + 1}
              </div>
              <div className="text-2xl">{friend.avatar}</div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">{friend.name}</h4>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <span>🔥 {friend.streak} days</span>
                  <span>⭐ Level {friend.level}</span>
                  <span>💎 {friend.xp} XP</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Friends List */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
        <div className="flex items-center space-x-2 mb-4">
          <Users className="w-5 h-5 text-indigo-500" />
          <h3 className="text-lg font-semibold text-gray-800">My Friends</h3>
        </div>
        <div className="space-y-3">
          {friends.map((friend) => (
            <div key={friend.id} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="text-2xl">{friend.avatar}</div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">{friend.name}</h4>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <span>🔥 {friend.streak} days</span>
                  <span>⭐ Level {friend.level}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="text-indigo-600 border-indigo-200">
                View
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Motivational Challenges */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
        <h3 className="text-lg font-semibold text-green-800 mb-4">🎯 Group Challenges</h3>
        <div className="space-y-3">
          <div className="bg-white rounded-xl p-4 border border-green-100">
            <h4 className="font-medium text-gray-800">30-Day Consistency Challenge</h4>
            <p className="text-sm text-gray-600 mt-1">Complete daily tasks for 30 days straight</p>
            <div className="flex items-center justify-between mt-3">
              <div className="text-sm text-green-600">3 friends joined</div>
              <Button size="sm" variant="outline" className="text-green-600 border-green-200">
                Join Challenge
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
