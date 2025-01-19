import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from '../images/events.jpg';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xl md:text-2l mb-3 text-blue-100 mb-10">
                "Access to communication in the widest sense is access to knowledge, 
                 and that is vitally important for us if we are not to go on being despised
                or patronized by condescending sighted people" 
                - By Louis Braille
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-blue-800 animate-pulse"></div>
                <img
                  src="https://i.postimg.cc/YCbZkKKV/louis.png"
                  alt="Louis Braille"
                  className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              To create an inclusive world where visual impairment is not a barrier to achievement, 
              education, or full participation in society.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Sections */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://i.postimg.cc/vm4qs4vg/events.jpg" 
                alt="Recent events" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Recent Events</h3>
                <p className="text-gray-600 mb-4">
                  Explore our recent activities and community gatherings that make a difference.
                </p>
                <Link
                  to="/events"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  View Events <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://i.postimg.cc/k5LjX7jj/gallery.jpg" 
                alt="Our gallery" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Photo Gallery</h3>
                <p className="text-gray-600 mb-4">
                  See the impact we're making through our visual journey.
                </p>
                <Link
                  to="/gallery"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  View Gallery <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;