import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="mobile-container">
      <div className="flex flex-col items-center justify-center min-h-screen px-8 py-12">
        {/* Step Indicators */}
        <div className="flex flex-col items-center space-y-4 mb-16">
          <div className="relative">
            <div className="step-indicator absolute -top-4 -left-4">1</div>
            <div className="step-indicator absolute -top-8 left-8">2</div>
            <div className="step-indicator absolute -top-4 left-20">3</div>
            <div className="step-indicator absolute top-4 left-12">4</div>
          </div>
          <div className="h-16"></div> {/* Spacer for positioned elements */}
        </div>

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