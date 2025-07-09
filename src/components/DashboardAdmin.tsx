import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { BookOpen, Users, Settings, BarChart3, LogOut } from 'lucide-react';

const DashboardAdmin: React.FC = () => {
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
                <p className="text-sm text-gray-400">Admin Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-gray-400">Administrator</p>
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
          <p className="text-gray-400">Manage your educational platform from here.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Users</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <Users className="w-8 h-8 text-orange-500" />
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Students</p>
                <p className="text-2xl font-bold">856</p>
              </div>
              <BookOpen className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Teachers</p>
                <p className="text-2xl font-bold">234</p>
              </div>
              <Settings className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Guardians</p>
                <p className="text-2xl font-bold">144</p>
              </div>
              <BarChart3 className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Create New User
              </button>
              <button className="w-full bg-neutral-700 hover:bg-neutral-600 text-white py-3 rounded-lg font-semibold transition-all duration-200">
                Manage Courses
              </button>
              <button className="w-full bg-neutral-700 hover:bg-neutral-600 text-white py-3 rounded-lg font-semibold transition-all duration-200">
                View Reports
              </button>
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-neutral-700/50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">New student registered</p>
                  <p className="text-xs text-gray-400">5 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-neutral-700/50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Course published</p>
                  <p className="text-xs text-gray-400">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-neutral-700/50 rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Teacher approved</p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardAdmin;