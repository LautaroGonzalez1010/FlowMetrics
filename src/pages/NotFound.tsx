import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-light-bg flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-accent-terracota to-accent-mustard bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-3xl font-bold text-light-text mb-4">Page Not Found</h2>
        <p className="text-light-muted mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-terracota to-accent-mustard text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-terracota/30 transition-all whitespace-nowrap cursor-pointer"
        >
          <i className="ri-home-line"></i>
          Back to Home
        </Link>
      </div>
    </div>
  );
}