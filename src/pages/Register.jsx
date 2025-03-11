import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
// import Sparkles from "react-sparkle";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState(""); // Added username field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [showSparkles, setShowSparkles] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show sparkles
    // setShowSparkles(true);

    // Hide sparkles after 1 second
    // setTimeout(() => setShowSparkles(false), 1000);

    if (!fullName || !username || !email || !password || !confirmPassword) {
      toast.error("All fields are required!");
      return;
    }

    if (username.includes(" ")) {
      toast.error("Username should not contain spaces!");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (!agreeTerms) {
      toast.error("You must agree to the Terms & Conditions!");
      return;
    }

    // Store user data in localStorage
    const userData = { fullName, username, email, password };
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("isAuthenticated", "true"); // Mark user as authenticated

    toast.success("Account created successfully!");
    navigate("/welcomeLetter"); // Redirect to the welcome page
  };

  return (
    <>
      {/* Hot Toast Notification */}
      <Toaster position="top-right" reverseOrder={false} />
      <div className="main bg-gradient-to-bl from-blueLight from-[-5%] via-blueLight via-[10%]  to-blueDark">
        <div className="min-h-screen overflow-auto bg-gradient-to-bl from-blueLight from-[-5%]  to-blueDark to-[40%] text-white content">
          <div className=" w-full max-w-md mx-auto px-4 py-8 min-h-screen flex flex-col justify-center">
            <div className="p-4 py-8 border rounded-2xl relative overflow-hidden bg-blue-950/40 backdrop-filter  border-white/10 shadow-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-shimmer">
              {/* App Header */}
              <div className="flex items-center justify-center mb-3">
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
                  <span className="ml-2 text-2xl font-bold text-white">
                    Cashly
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="mb-5 text-center">
                <h1 className="mb-2 text-2xl font-bold text-white">
                  Create Account
                </h1>
                <p className="text-sm text-blue-300">
                  Start your financial journey today
                </p>
              </div>

              {/* Registration Form */}
              <form onSubmit={handleSubmit} className="space-y-3 relative z-10">
                <div>
                  <label className="block mb-2 text-sm font-medium text-blue-300">
                    Full Name
                  </label>
                  <div className="relative box">
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2 bg-blue-900/40  border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/70 text-white shadow-lg"
                      placeholder="Enter your full name"
                    />
                    <div class="innerbox bg-blue-900/40"></div>
                    <div class="cursor" id="cursorBoxOne"></div>
                  </div>
                </div>

                {/* Username Field */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-blue-300">
                    Username
                  </label>
                  <div className="relative box">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-2 bg-blue-900/40  border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/70 text-white shadow-lg"
                      placeholder="Enter your username"
                    />
                    <div class="innerbox bg-blue-900/40"></div>
                    <div class="cursor" id="cursorBoxOne"></div>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-blue-300">
                    Email
                  </label>
                  <div className="relative box">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 bg-blue-900/40  border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/70 text-white shadow-lg"
                      placeholder="Enter your email"
                    />
                    <div class="innerbox bg-blue-900/40"></div>
                    <div class="cursor" id="cursorBoxOne"></div>
                  </div>
                </div>

                {/* Password Input */}
                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-blue-300">
                    Password
                  </label>
                  <div className="relative box">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 bg-blue-900/40  border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/70 text-white shadow-lg pr-10"
                      placeholder="Create a password"
                    />
                    <div class="innerbox bg-blue-900/40"></div>
                    <div class="cursor" id="cursorBoxOne"></div>
                  </div>
                  <button
                    type="button"
                    className="absolute inset-y-9 right-3 flex items-center text-white h-fit"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>

                {/* Confirm Password Input */}
                <div className="relative mt-4">
                  <label className="block mb-2 text-sm font-medium text-blue-300">
                    Confirm Password
                  </label>
                  <div className="relative box">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-2 bg-blue-900/40  border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/70 text-white shadow-lg pr-10"
                      placeholder="Confirm your password"
                    />
                    <div class="innerbox bg-blue-900/40"></div>
                    <div class="cursor" id="cursorBoxOne"></div>
                  </div>
                  <button
                    type="button"
                    className="absolute inset-y-9 right-3 flex items-center text-white h-fit"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>

                <div className="flex items-center ">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-4 h-4 border-blue-700 rounded text-blue-600 focus:ring-blue-500"
                  />
                  <label className="block ml-2 text-sm text-blue-300">
                    I agree to the{" "}
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                <div className="relative">
                  {/* Sparkles Effect */}
                  {/* {showSparkles && (
                    <Sparkles className="absolute inset-0" flicker={false} />
                  )} */}

                  <button
                    type="submit"
                    className="w-full py-3 font-medium text-blue-900 transition-colors bg-white rounded-lg hover:bg-blue-100"
                  >
                    Create Account
                  </button>
                </div>
                <div className="text-center">
                  <p className="text-sm text-blue-300">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="font-medium text-blue-400 hover:text-blue-300 underline"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </form>
              {/* Additional glass shine effect layers */}
              <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-white/10 to-transparent animate-[pulseGlow_6s_ease-in-out_infinite]"></div>
              <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white/5 to-transparent animate-fade"></div>

              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-xl animate-[floating_6s_ease-in-out_infinite]"></div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-xl animate-[pulseGlow_6s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
