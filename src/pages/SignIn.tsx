import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      // Save user data in localStorage
      const userData = {
        name: email.split("@")[0], // simple username from email
        email,
      };
      localStorage.setItem("popxUser", JSON.stringify(userData));

      // Navigate to account page
      navigate("/account");
    }
  };

  return (
    <div className="mobile-container">
      <div className="flex flex-col justify-center min-h-screen px-8 py-12">
        <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-xl font-semibold text-foreground mb-3">
              Sign in to your PopX account
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="popx-label">Email Address</label>
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="popx-input"
                required
              />
            </div>

            <div>
              <label className="popx-label">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="popx-input"
                required
              />
            </div>

            <button type="submit" className="btn-primary mt-8">
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/create-account"
              className="text-primary text-sm hover:underline"
            >
              Don&apos;t have an account? Create one
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
