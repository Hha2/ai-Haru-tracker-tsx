
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

export const ReportsPage = () => {
  const weeklyData = [
    { day: 'Mon', completed: 8, planned: 10 },
    { day: 'Tue', completed: 12, planned: 12 },
    { day: 'Wed', completed: 6, planned: 10 },
    { day: 'Thu', completed: 9, planned: 11 },
    { day: 'Fri', completed: 15, planned: 15 },
    { day: 'Sat', completed: 5, planned: 8 },
    { day: 'Sun', completed: 7, planned: 9 },
  ];

  const moodData = [
    { mood: 'Happy', tasks: 12 },
    { mood: 'Calm', tasks: 8 },
    { mood: 'Neutral', tasks: 6 },
    { mood: 'Tired', tasks: 4 },
    { mood: 'Stressed', tasks: 2 },
  ];

  const appUsageData = [
    { name: 'Productive Apps', value: 40, color: '#10B981' },
    { name: 'Social Media', value: 30, color: '#F59E0B' },
    { name: 'Entertainment', value: 20, color: '#EF4444' },
    { name: 'Other', value: 10, color: '#6B7280' },
  ];

  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Progress Reports</h1>
        <p className="text-gray-600">Track your productivity insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-4 text-white">
          <div className="text-2xl font-bold">85%</div>
          <div className="text-green-100 text-sm">Weekly Success Rate</div>
        </div>
        <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl p-4 text-white">
          <div className="text-2xl font-bold">42</div>
          <div className="text-blue-100 text-sm">Tasks This Week</div>
        </div>
      </div>

      {/* Weekly Performance */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Weekly Performance</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Bar dataKey="completed" fill="#10B981" radius={4} />
              <Bar dataKey="planned" fill="#E5E7EB" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Mood vs Productivity */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Mood vs Productivity</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={moodData}>
              <XAxis dataKey="mood" />
              <YAxis />
              <Line type="monotone" dataKey="tasks" stroke="#8B5CF6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* App Usage Breakdown */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Daily App Usage</h3>
        <div className="flex items-center space-x-4">
          <div className="h-32 w-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={appUsageData}
                  cx="50%"
                  cy="50%"
                  innerRadius={20}
                  outerRadius={60}
                  dataKey="value"
                >
                  {appUsageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1 space-y-2">
            {appUsageData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-gray-700">{item.name}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200">
        <h3 className="text-lg font-semibold text-purple-800 mb-4">🤖 AI Analysis</h3>
        <div className="space-y-3">
          <div className="bg-white rounded-xl p-4 border border-purple-100">
            <p className="text-sm text-gray-800">
              📊 Your productivity peaks on Fridays when you complete morning tasks first.
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-purple-100">
            <p className="text-sm text-gray-800">
              📱 Reducing social media usage by 30 minutes could boost task completion by 15%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
