import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has selected "Remember Me"
    const rememberedUser = localStorage.getItem("rememberedUser");
    if (rememberedUser) {
      const { email, password } = JSON.parse(rememberedUser);
      setEmail(email);
      setPassword(password);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
    if (!storedUser) {
      toast.error("No registered user found. Please sign up first.");
      return;
    }
  
    if (email === storedUser.email && password === storedUser.password) {
      toast.success("Login successful!");
  
      if (rememberMe) {
        localStorage.setItem("rememberedUser", JSON.stringify({ email, password }));
      } else {
        localStorage.removeItem("rememberedUser");
      }
  
      localStorage.setItem("isAuthenticated", "true"); // Set authentication status
      navigate("/dashboard");
    } else {
      toast.error("Invalid email or password!");
    }
  };
  

  return (
    <>
      {/* Hot Toast Notification */}
      <Toaster position="top-right" reverseOrder={false} />
      <div className="min-h-screen overflow-auto bg-gradient-to-bl from-blueLight from-[-5%]  to-blueDark to-[40%] text-white">
        <div className="w-full max-w-md mx-auto px-4 py-8 min-h-screen flex flex-col justify-center">
          {/* App Header */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <span className="ml-2 text-2xl font-bold text-white">Cashly</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-2xl font-bold text-white">Welcome Back</h1>
            <p className="text-sm text-blue-300">
              Login to manage your finances
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-blue-300"
              >
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-blue-900/40 backdrop-blur-md border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/70 text-white shadow-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-blue-300"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-blue-400 hover:text-blue-300"
                >
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-blue-900/40 backdrop-blur-md border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/70 text-white shadow-lg"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-9 right-3 flex items-center text-white h-fit"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 border-blue-700 rounded text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="remember-me"
                className="block ml-2 text-sm text-blue-300"
              >
                Remember me
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 font-medium text-blue-900 transition-colors bg-white rounded-lg hover:bg-blue-100"
              >
                Log In
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-blue-300">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-blue-400 hover:text-blue-300"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
