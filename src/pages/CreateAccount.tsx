import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.fullName && formData.email && formData.password) {
      // Save user data to localStorage
      const userData = {
        name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        company: formData.company,
        isAgency: formData.isAgency,
      };
      localStorage.setItem("popxUser", JSON.stringify(userData));

      // Redirect to account page
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
              Create your PopX account
            </h1>
          </div>

          {/* Create Account Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="popx-label">Full Name*</label>
              <input
                type="text"
                name="fullName"
                placeholder="Marry Doe"
                value={formData.fullName}
                onChange={handleInputChange}
                className="popx-input"
                required
              />
            </div>

            <div>
              <label className="popx-label">Phone number*</label>
              <input
                type="tel"
                name="phone"
                placeholder="9876543210"
                value={formData.phone}
                onChange={handleInputChange}
                className="popx-input"
                required
              />
            </div>

            <div>
              <label className="popx-label">Email address*</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleInputChange}
                className="popx-input"
                required
              />
            </div>

            <div>
              <label className="popx-label">Password*</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInputChange}
                className="popx-input"
                required
              />
            </div>

            <div>
              <label className="popx-label">Company name</label>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleInputChange}
                className="popx-input"
              />
            </div>

            {/* Agency Radio Buttons */}
            <div className="space-y-3">
              <label className="popx-label">Are you an Agency?*</label>
              <div className="flex space-x-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={formData.isAgency === "yes"}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-primary"
                  />
                  <span className="text-foreground">Yes</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={formData.isAgency === "no"}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-primary"
                  />
                  <span className="text-foreground">No</span>
                </label>
              </div>
            </div>

            <button type="submit" className="btn-primary mt-8">
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/signin" className="text-primary text-sm hover:underline">
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
