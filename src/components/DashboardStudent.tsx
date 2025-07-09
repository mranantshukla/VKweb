import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { BookOpen, Award, Calendar, Cross as Progress, LogOut } from 'lucide-react';

const DashboardStudent: React.FC = () => {
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
                <p className="text-sm text-gray-400">Student Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-gray-400">Student</p>
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
          <p className="text-gray-400">Continue your learning journey.</p>
        </div>

        {/* Progress Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Courses Enrolled</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <BookOpen className="w-8 h-8 text-orange-500" />
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Completed</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <Award className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Overall Progress</p>
                <p className="text-2xl font-bold">78%</p>
              </div>
              <Progress className="w-8 h-8 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Continue Learning</h3>
            <div className="space-y-4">
              <div className="bg-neutral-700/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Mathematics - Algebra</h4>
                <div className="flex items-center justify-between">
                  <div className="flex-1 bg-neutral-600 rounded-full h-2 mr-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-3/4"></div>
                  </div>
                  <span className="text-sm text-gray-400">75%</span>
                </div>
              </div>
              
              <div className="bg-neutral-700/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Science - Chemistry</h4>
                <div className="flex items-center justify-between">
                  <div className="flex-1 bg-neutral-600 rounded-full h-2 mr-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-1/2"></div>
                  </div>
                  <span className="text-sm text-gray-400">50%</span>
                </div>
              </div>

              <div className="bg-neutral-700/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">English - Literature</h4>
                <div className="flex items-center justify-between">
                  <div className="flex-1 bg-neutral-600 rounded-full h-2 mr-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-5/6"></div>
                  </div>
                  <span className="text-sm text-gray-400">85%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Upcoming Assignments</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-neutral-700/50 rounded-lg">
                <Calendar className="w-5 h-5 text-orange-500" />
                <div>
                  <p className="text-sm font-medium">Math Quiz Chapter 5</p>
                  <p className="text-xs text-gray-400">Due: Tomorrow</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-neutral-700/50 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-sm font-medium">Science Lab Report</p>
                  <p className="text-xs text-gray-400">Due: Friday</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-neutral-700/50 rounded-lg">
                <Calendar className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-sm font-medium">English Essay</p>
                  <p className="text-xs text-gray-400">Due: Next Monday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardStudent;