import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle className="h-16 w-16 text-green-600" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
      <p className="text-xl text-gray-600 mb-6">
        Your message has been sent successfully. We will get back to you as soon as possible.
      </p>
      <Link
        to="/"
        className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default ThankYou;
