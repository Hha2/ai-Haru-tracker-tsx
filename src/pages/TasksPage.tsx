
import React from 'react';
import { TaskList } from '@/components/TaskList';
import { Plus, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const TasksPage = () => {
  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Tasks</h1>
          <p className="text-gray-600">Manage your daily goals</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="rounded-full">
            <Filter className="w-4 h-4" />
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full">
            <Plus className="w-4 h-4 mr-1" />
            Add
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">12</div>
          <div className="text-xs text-blue-800">Completed</div>
        </div>
        <div className="bg-orange-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-orange-600">3</div>
          <div className="text-xs text-orange-800">Pending</div>
        </div>
        <div className="bg-green-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-green-600">80%</div>
          <div className="text-xs text-green-800">Success Rate</div>
        </div>
      </div>

      {/* Task List */}
      <TaskList />

      {/* AI Module Suggestions */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200">
        <h3 className="text-lg font-semibold text-purple-800 mb-3">🤖 AI Module Suggestions</h3>
        <div className="space-y-3">
          <div className="bg-white rounded-xl p-4 border border-purple-100">
            <h4 className="font-medium text-gray-800">Learn React.js</h4>
            <p className="text-sm text-gray-600 mt-1">7-day module • 2 hours daily</p>
            <Button size="sm" variant="outline" className="mt-2 text-purple-600 border-purple-200">
              Start Module
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
