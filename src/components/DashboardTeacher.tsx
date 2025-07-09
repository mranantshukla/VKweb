import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { BookOpen, Users, FileText, Calendar, LogOut } from 'lucide-react';

const DashboardTeacher: React.FC = () => {
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
                <p className="text-sm text-gray-400">Teacher Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-gray-400">Teacher</p>
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
          <p className="text-gray-400">Manage your courses and students.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Students</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <Users className="w-8 h-8 text-orange-500" />
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Active Courses</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <BookOpen className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Assignments</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <FileText className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Pending Reviews</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <Calendar className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Course Management */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">My Courses</h3>
            <div className="space-y-4">
              <div className="bg-neutral-700/50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Mathematics Grade 10</h4>
                    <p className="text-sm text-gray-400">45 students enrolled</p>
                  </div>
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                    Manage
                  </button>
                </div>
              </div>
              
              <div className="bg-neutral-700/50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Advanced Algebra</h4>
                    <p className="text-sm text-gray-400">32 students enrolled</p>
                  </div>
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                    Manage
                  </button>
                </div>
              </div>

              <div className="bg-neutral-700/50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Geometry Basics</h4>
                    <p className="text-sm text-gray-400">28 students enrolled</p>
                  </div>
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                    Manage
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-neutral-700/50 rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Assignment submitted</p>
                  <p className="text-xs text-gray-400">John Doe - Math Quiz</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-neutral-700/50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">New student enrolled</p>
                  <p className="text-xs text-gray-400">Jane Smith - Algebra</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-neutral-700/50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Course material updated</p>
                  <p className="text-xs text-gray-400">Geometry Chapter 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardTeacher;