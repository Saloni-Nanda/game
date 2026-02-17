import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-blue-900 flex flex-col items-center justify-center text-white p-4">
      {/* 404 Text with glow effect */}
      <div className="text-9xl font-bold mb-4 relative">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-[0_0_30px_rgba(255,0,0,0.8)]">
          404
        </span>
        <div className="absolute inset-0 blur-3xl bg-red-500/30 -z-10"></div>
      </div>
      
      {/* Error Message */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        <span className="text-red-400">Oops!</span> Page Not Found
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center max-w-2xl">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      
      {/* Decorative elements */}
      <div className="flex space-x-2 mb-8">
        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-75"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-150"></div>
      </div>
      
      {/* Back to Home Button */}
      <Link
        to="/"
        className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50"
      >
        Go Back Home
      </Link>
      
      {/* Additional decorative elements */}
      <div className="mt-12 flex space-x-4">
        <div className="w-2 h-2 bg-white/20 rounded-full"></div>
        <div className="w-2 h-2 bg-white/20 rounded-full"></div>
        <div className="w-2 h-2 bg-white/20 rounded-full"></div>
      </div>
    </div>
  );
};

export default NotFound;
