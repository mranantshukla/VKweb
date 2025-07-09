import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { BookOpen, Heart, TrendingUp, Calendar, LogOut } from 'lucide-react';

const DashboardGuardian: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      {/* Header */}
      <header className="bg-neutral-800/50 backdrop-blur-sm border-b border-neutral-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold">VK Global Publications</h1>
                <p className="text-sm text-gray-400">Guardian Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-gray-400">Guardian</p>
              </div>
              <button
                onClick={logout}
                className="flex items-center space-x-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Welcome back, {user?.name}!</h2>
          <p className="text-gray-400">Track your child's educational progress.</p>
        </div>

        {/* Child Progress Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Overall Progress</p>
                <p className="text-2xl font-bold">87%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-orange-500" />
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Completed Assignments</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <BookOpen className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Attendance Rate</p>
                <p className="text-2xl font-bold">95%</p>
              </div>
              <Calendar className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Average Grade</p>
                <p className="text-2xl font-bold">A-</p>
              </div>
              <Heart className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Child Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Emma's Progress</h3>
            <div className="space-y-4">
              <div className="bg-neutral-700/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Mathematics</h4>
                  <span className="text-sm bg-green-500/20 text-green-400 px-2 py-1 rounded">A</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1 bg-neutral-600 rounded-full h-2 mr-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-5/6"></div>
                  </div>
                  <span className="text-sm text-gray-400">90%</span>
                </div>
              </div>
              
              <div className="bg-neutral-700/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Science</h4>
                  <span className="text-sm bg-blue-500/20 text-blue-400 px-2 py-1 rounded">B+</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1 bg-neutral-600 rounded-full h-2 mr-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-4/5"></div>
                  </div>
                  <span className="text-sm text-gray-400">85%</span>
                </div>
              </div>

              <div className="bg-neutral-700/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">English</h4>
                  <span className="text-sm bg-green-500/20 text-green-400 px-2 py-1 rounded">A-</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1 bg-neutral-600 rounded-full h-2 mr-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-5/6"></div>
                  </div>
                  <span className="text-sm text-gray-400">88%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-neutral-700/50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Assignment submitted</p>
                  <p className="text-xs text-gray-400">Math Quiz - Score: 92%</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-neutral-700/50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Attended class</p>
                  <p className="text-xs text-gray-400">Science Lab - Today</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-neutral-700/50 rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Teacher feedback</p>
                  <p className="text-xs text-gray-400">Great improvement in English</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-400 mb-3">Upcoming Events</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 p-2 bg-neutral-700/30 rounded-lg">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  <div>
                    <p className="text-sm">Parent-Teacher Conference</p>
                    <p className="text-xs text-gray-400">March 15, 2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-neutral-700/30 rounded-lg">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <div>
                    <p className="text-sm">Science Fair</p>
                    <p className="text-xs text-gray-400">March 20, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardGuardian;