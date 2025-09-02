import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="mobile-container">
      <div className="flex flex-col items-center justify-center min-h-screen px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
          <p className="text-xl text-muted-foreground mb-8">Oops! Page not found</p>
          <Link to="/" className="btn-primary inline-block text-center">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
