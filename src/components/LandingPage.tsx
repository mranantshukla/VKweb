import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg mr-3">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">VK Global Publications</span>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="relative group">
                  <button className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    E-Books
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <a href="#" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">About us</a>
                <a href="#" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">Blog</a>
                <div className="relative group">
                  <button className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    Support
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Login Button */}
            <div className="flex items-center">
              <Link
                to="/login"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering education through innovation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive digital tools designed for students, educators, and parents. Navigate effortlessly and engage with interactive features tailored for every learner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                Explore
              </button>
              <button className="bg-white border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Feature Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Empowering every learner's journey</h3>
                <p className="text-lg mb-6 opacity-90">
                  Discover a wide range of interactive tools designed for students, educators, and guardians. Access essential educational resources and support for all learning stages.
                </p>
                <button className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Learn more
                </button>
              </div>
              <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Resources for students</h3>
                <p className="text-gray-300 mb-4">
                  Access digital books, quizzes, and study aids to boost your academic performance.
                </p>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200">
                  Explore
                </button>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Support for teachers</h3>
                <p className="text-gray-300 mb-4">
                  Find lesson plans, educational resources, and tools to enhance your teaching experience.
                </p>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200">
                  Discover
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Feature Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold mb-2">For students, parents, and teachers</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learn. Grow. Achieve. Together.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access interactive resources, study tools, and expert guidance for every learner and educator.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-orange-500" />
              </div>
              <p className="text-orange-500 font-semibold text-sm mb-2">Personalized learning tools</p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Empower every student's journey</h3>
              <p className="text-gray-600 mb-6">
                Discover adaptive study aids, progress tracking, and engaging content for all grade levels.
              </p>
              <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                Discover →
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-orange-500" />
              </div>
              <p className="text-orange-500 font-semibold text-sm mb-2">Support for educators</p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Teach with confidence, inspire minds</h3>
              <p className="text-gray-600 mb-6">
                Find curriculum resources, sample requests, and classroom-ready materials for effective teaching.
              </p>
              <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                View →
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-orange-500" />
              </div>
              <p className="text-orange-500 font-semibold text-sm mb-2">Guidance for families</p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Stay involved, support success</h3>
              <p className="text-gray-600 mb-6">
                Access parent guides, progress updates, and tools to help your child thrive in school.
              </p>
              <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                Get started →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore our interactive gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Browse curated visuals in a modern, organized layout. Switch between tabs to view collections designed for students, teachers, and parents.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button className="bg-white text-gray-900 px-6 py-2 rounded-md font-semibold shadow-sm">
                Students
              </button>
              <button className="text-gray-600 hover:text-gray-900 px-6 py-2 rounded-md font-semibold">
                Teachers
              </button>
              <button className="text-gray-600 hover:text-gray-900 px-6 py-2 rounded-md font-semibold">
                Parents
              </button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <div className="bg-gray-200 rounded-lg aspect-square"></div>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-square"></div>
            <div className="bg-gray-200 rounded-lg aspect-square"></div>
            <div className="bg-gray-200 rounded-lg aspect-square"></div>
            <div className="bg-gray-200 rounded-lg aspect-square"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Series</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-200 rounded-lg aspect-video"></div>
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  "The platform's interactive features keep me engaged and make learning more enjoyable. Resources are readily available, and the user-friendly design enhances my focus."
                </p>
                <div>
                  <p className="font-bold text-gray-900">Taylor Smith</p>
                  <p className="text-gray-600">Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold mb-2">Frequently Asked Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find quick solutions to your queries
            </h2>
            <p className="text-xl text-gray-600">
              Explore our FAQ section for answers or reach out to our support team for further assistance.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Who can use your resources?</h3>
              <p className="text-gray-600">
                Students, parents, and teachers can access our study materials. Use the catalogue or search to find what you need.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How do I get a sample book?</h3>
              <p className="text-gray-600">
                Go to 'Sample Request' under 'For Educators' in the menu and fill out the form to request a sample.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Are e-books available for all classes?</h3>
              <p className="text-gray-600">
                Most classes have digital textbooks. Check the E-book dropdown or search for your class to see available options.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What help is there for parents?</h3>
              <p className="text-gray-600">
                Parents can find guides and support tools in the 'For Learners' and 'Resources' sections to assist their children.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
              Get Help →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg mr-3">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">VK Global Publications</span>
              </div>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            {/* VK Global Group */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-300">VK Global Group</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Packaging</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Printing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Holographic</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FutureKids</a></li>
              </ul>
            </div>

            {/* For Learners */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-300">For Learners</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Catalogue</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Resources</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* For Educators */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-300">For Educators</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Publish</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sample</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Teachers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blogs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VK Global Publications. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;