
import React, { useState } from 'react';
import { CheckCircle, Circle, Clock, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  time: string;
  priority: 'high' | 'medium' | 'low';
}

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Complete React tutorial', completed: true, time: '9:00 AM', priority: 'high' },
    { id: '2', title: 'Review project proposal', completed: false, time: '11:00 AM', priority: 'medium' },
    { id: '3', title: 'Team standup meeting', completed: false, time: '2:00 PM', priority: 'high' },
    { id: '4', title: 'Write journal entry', completed: false, time: '8:00 PM', priority: 'low' },
    { id: '5', title: 'Plan tomorrow\'s goals', completed: false, time: '9:00 PM', priority: 'medium' },
  ]);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-300 bg-red-50';
      case 'medium': return 'border-yellow-300 bg-yellow-50';
      case 'low': return 'border-green-300 bg-green-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Today's Tasks</h2>
        <Button size="sm" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-full">
          <Plus className="w-4 h-4 mr-1" />
          Add Task
        </Button>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md ${
              task.completed 
                ? 'bg-green-50 border-green-300 opacity-75' 
                : getPriorityColor(task.priority)
            }`}
          >
            <button
              onClick={() => toggleTask(task.id)}
              className="mr-3 transition-transform hover:scale-110"
            >
              {task.completed ? (
                <CheckCircle className="w-6 h-6 text-green-600" />
              ) : (
                <Circle className="w-6 h-6 text-gray-400 hover:text-gray-600" />
              )}
            </button>
            
            <div className="flex-1">
              <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                {task.title}
              </h3>
              <div className="flex items-center mt-1 text-sm text-gray-500">
                <Clock className="w-3 h-3 mr-1" />
                {task.time}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  task.priority === 'high' ? 'bg-red-100 text-red-700' :
                  task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {task.priority}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
