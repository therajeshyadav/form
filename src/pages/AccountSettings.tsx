import { Link } from "react-router-dom";

const AccountSettings = () => {
  return (
    <div className="mobile-container">
      <div className="flex flex-col justify-start min-h-screen px-8 py-12">
        <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-xl font-semibold text-foreground mb-6">
              Account Settings
            </h1>

            {/* User Profile Section */}
            <div className="flex items-start space-x-4">
              {/* Avatar */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
                    alt="Profile"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                {/* Online indicator */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              {/* User Info */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-foreground">
                  Marry Doe
                </h2>
                <p className="text-muted-foreground text-sm">
                  Marry@Gmail.Com
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Lorem Ipsum Dolor Sit Amet. Consectetur Adipiscing Elit, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat. Sed Diam
              </p>
            </div>
          </div>

          {/* Navigation Back */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/" className="text-primary text-sm hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;