import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface UserData {
  fullName: string;
  email: string;
  company?: string;
  isAgency?: string;
  image?: string;
}

const AccountSettings = () => {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("popxUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      if (user) {
        const updatedUser = { ...user, image: base64String };
        setUser(updatedUser);
        localStorage.setItem("popx-user", JSON.stringify(updatedUser));
      }
    };
    reader.readAsDataURL(file);
  };

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
            {user ? (
              <div className="flex items-start space-x-4">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center overflow-hidden">
                    {user.image ? (
                      <img
                        src={user.image}
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-white text-lg">
                        {user.fullName?.charAt(0) || "U"}
                      </span>
                    )}
                  </div>
                  {/* Upload Button */}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute bottom-0 right-0 w-6 h-6 opacity-0 cursor-pointer"
                    title="Upload profile picture"
                  />
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-foreground">
                    {user.fullName}
                  </h2>
                  <p className="text-muted-foreground text-sm">{user.email}</p>
                  {user.company && (
                    <p className="text-muted-foreground text-xs">
                      {user.company} {user.isAgency === "yes" ? "(Agency)" : ""}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground">No user found. Please sign in.</p>
            )}

            {/* Description */}
            <div className="mt-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Welcome to your account settings. You can update your details and
                upload a profile picture.
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
