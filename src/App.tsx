import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Eye, Menu, X, Instagram, Facebook, Twitter, Youtube, Users, MapPin, Heart, Tent } from 'lucide-react';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import ThankYou from './pages/thank';

function StatCounter({ end, label, icon: Icon }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 rounded-full">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <div className="text-4xl font-bold text-blue-900 mb-2">{count}+</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <span className="font-bold text-xl">Louis Braille Association for Blind</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/" className="px-3 py-2 rounded-md hover:bg-blue-800">Home</Link>
                  <Link to="/events" className="px-3 py-2 rounded-md hover:bg-blue-800">Events</Link>
                  <Link to="/gallery" className="px-3 py-2 rounded-md hover:bg-blue-800">Gallery</Link>
                  <Link to="/about" className="px-3 py-2 rounded-md hover:bg-blue-800">About Us</Link>
                  <Link to="/contact" className="px-3 py-2 rounded-md hover:bg-blue-800">Contact</Link>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md hover:bg-blue-800"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="block px-3 py-2 rounded-md hover:bg-blue-800">Home</Link>
                <Link to="/events" className="block px-3 py-2 rounded-md hover:bg-blue-800">Events</Link>
                <Link to="/gallery" className="block px-3 py-2 rounded-md hover:bg-blue-800">Gallery</Link>
                <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-blue-800">About Us</Link>
                <Link to="/contact" className="block px-3 py-2 rounded-md hover:bg-blue-800">Contact</Link>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>

        {/* Statistics Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCounter end={500} label="Volunteers" icon={Users} />
              <StatCounter end={50} label="Cities Covered" icon={MapPin} />
              <StatCounter end={2000} label="Patients Helped" icon={Heart} />
              <StatCounter end={100} label="Camps Organized" icon={Tent} />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-900 text-white mt-12">
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Louis Braille Association</h3>
                <p className="text-blue-200">Empowering visually impaired individuals through education and support.</p>
                {/* Social Media Links */}
                <div className="mt-4 flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="https://www.facebook.com/lbwablinds" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="https://www.youtube.com/@louisbraillewelfareassocia1061" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white">
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/events" className="text-blue-200 hover:text-white">Events</Link></li>
                  <li><Link to="/gallery" className="text-blue-200 hover:text-white">Gallery</Link></li>
                  <li><Link to="/about" className="text-blue-200 hover:text-white">About Us</Link></li>
                  <li><Link to="/contact" className="text-blue-200 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <p className="text-blue-200">Email: lbwafortheblind2015@gmail.com</p>
                <p className="text-blue-200">Address: Jalandhar, PB, 144001, IN</p>
                <p className="text-blue-200">Phone: +919417329291</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-200">
              <p>&copy; {new Date().getFullYear()} Louis Braille Association. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
