import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="mobile-container">
      <div className="flex flex-col items-center justify-center min-h-screen px-8 py-12">
        

        {/* Welcome Content */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-semibold text-foreground mb-4">
            Welcome to PopX
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-4">
          <Link to="/create-account" className="block">
            <button className="btn-primary">
              Create Account
            </button>
          </Link>
          
          <Link to="/signin" className="block">
            <button className="btn-secondary">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;