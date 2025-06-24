
import React, { useState } from 'react';
import { Bell, Shield, Palette, Brain, Moon, Sun, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [aiInsights, setAiInsights] = useState(true);

  const settingsSections = [
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        { label: 'Push Notifications', value: notifications, onChange: setNotifications },
        { label: 'Daily Reminders', value: true, onChange: () => {} },
        { label: 'Achievement Alerts', value: true, onChange: () => {} },
      ]
    },
    {
      title: 'AI Features',
      icon: Brain,
      items: [
        { label: 'AI Insights', value: aiInsights, onChange: setAiInsights },
        { label: 'Smart Scheduling', value: true, onChange: () => {} },
        { label: 'Predictive Alerts', value: false, onChange: () => {} },
      ]
    },
    {
      title: 'Privacy',
      icon: Shield,
      items: [
        { label: 'Share Progress with Friends', value: true, onChange: () => {} },
        { label: 'Anonymous Usage Data', value: false, onChange: () => {} },
        { label: 'App Usage Tracking', value: true, onChange: () => {} },
      ]
    }
  ];

  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Customize your FocusMate experience</p>
      </div>

      {/* Profile Section */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-6 text-white">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl">
            👤
          </div>
          <div>
            <h3 className="text-xl font-semibold">Alex Thompson</h3>
            <p className="text-purple-100">alex.thompson@email.com</p>
            <div className="flex items-center space-x-4 mt-2 text-sm">
              <span>🔥 7-day streak</span>
              <span>⭐ Level 5</span>
              <span>💎 1,840 XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Settings */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Settings</h3>
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-4 rounded-xl border-2 transition-colors ${
              darkMode 
                ? 'bg-gray-800 border-gray-600 text-white' 
                : 'bg-gray-50 border-gray-200 text-gray-800'
            }`}
          >
            {darkMode ? <Moon className="w-6 h-6 mx-auto mb-2" /> : <Sun className="w-6 h-6 mx-auto mb-2" />}
            <div className="text-sm font-medium">{darkMode ? 'Dark Mode' : 'Light Mode'}</div>
          </button>
          
          <button className="p-4 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-800">
            <Volume2 className="w-6 h-6 mx-auto mb-2" />
            <div className="text-sm font-medium">Sound Effects</div>
          </button>
        </div>
      </div>

      {/* Settings Sections */}
      {settingsSections.map((section, index) => {
        const Icon = section.icon;
        return (
          <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="flex items-center space-x-2 mb-4">
              <Icon className="w-5 h-5 text-indigo-500" />
              <h3 className="text-lg font-semibold text-gray-800">{section.title}</h3>
            </div>
            <div className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-800 font-medium">{item.label}</span>
                  <button
                    onClick={() => item.onChange(!item.value)}
                    className={`w-12 h-6 rounded-full transition-colors relative ${
                      item.value 
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600' 
                        : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform absolute top-0.5 ${
                      item.value ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* App Info */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">About</h3>
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>App Version</span>
            <span>1.0.0</span>
          </div>
          <div className="flex justify-between">
            <span>Privacy Policy</span>
            <Button variant="ghost" size="sm" className="text-indigo-600 p-0 h-auto">
              View
            </Button>
          </div>
          <div className="flex justify-between">
            <span>Terms of Service</span>
            <Button variant="ghost" size="sm" className="text-indigo-600 p-0 h-auto">
              View
            </Button>
          </div>
        </div>
      </div>

      {/* Sign Out */}
      <Button variant="outline" className="w-full py-3 text-red-600 border-red-200 hover:bg-red-50">
        Sign Out
      </Button>
    </div>
  );
};
