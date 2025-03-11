import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
// import Sparkles from "react-sparkle";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const hardcodedOTP = "1234";

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== email) {
      toast.error("No user found with this email.");
      return;
    }
    toast.success("OTP sent to your email.");
    setStep(2);
  };

  const handleOTPVerify = (e) => {
    e.preventDefault();
    if (otp === hardcodedOTP) {
      toast.success("OTP verified. Set your new password.");
      setStep(3);
    } else {
      toast.error("Invalid OTP. Try again.");
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    let storedUser = JSON.parse(localStorage.getItem("user"));
    storedUser.password = newPassword;
    localStorage.setItem("user", JSON.stringify(storedUser));
    toast.success("Password updated successfully!");
    navigate("/login");
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
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full shadow-lg">
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
              <div className="mb-8 text-center">
                <h1 className="mb-2 text-2xl font-bold text-white">
                  Welcome Back
                </h1>
                <p className="text-sm text-blue-300">
                  Login to manage your finances
                </p>
              </div>

              {step === 1 && (
                <form
                  onSubmit={handleEmailSubmit}
                  className="space-y-3 relative z-10"
                >
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-blue-300"
                  >
                    Email
                  </label>
                  <div className="relative box">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 bg-blue-900/40  border border-white/10 rounded-lg focus:outline-none text-white shadow-lg overflow-auto"
                      placeholder="Enter your email"
                      required
                    />
                    <div class="innerbox bg-blue-900/40"></div>
                    <div class="cursor" id="cursorBoxOne"></div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-white text-blue-900 rounded-lg hover:bg-blue-100"
                  >
                    Send OTP
                  </button>
                </form>
              )}
              {step === 2 && (
                <form
                  onSubmit={handleOTPVerify}
                  className="space-y-3 relative z-10"
                >
                  <label
                    htmlFor="otp"
                    className="block mb-2 text-sm font-medium text-blue-300"
                  >
                    Otp
                  </label>
                  <div className="relative box">
                    <input
                      id="otp"
                      type="number"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full px-4 py-2 bg-blue-900/40  border border-white/10 rounded-lg focus:outline-none text-white shadow-lg overflow-auto"
                      placeholder="Enter OTP"
                      required
                    />
                    <div class="innerbox bg-blue-900/40"></div>
                    <div class="cursor" id="cursorBoxOne"></div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-white text-blue-900 rounded-lg hover:bg-blue-100"
                  >
                    Verify OTP
                  </button>
                </form>
              )}
              {step === 3 && (
                <form
                  onSubmit={handlePasswordReset}
                  className="space-y-3 relative z-10"
                >
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-blue-300"
                  >
                    Change Password
                  </label>
                  <div className="relative box">
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full px-4 py-2 bg-blue-900/40  border border-white/10 rounded-lg focus:outline-none text-white shadow-lg overflow-auto"
                      placeholder="Enter new password"
                      required
                    />
                    <div class="innerbox bg-blue-900/40"></div>
                    <div class="cursor" id="cursorBoxOne"></div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 bg-white text-blue-900 rounded-lg hover:bg-blue-100"
                  >
                    Reset Password
                  </button>
                </form>
              )}
              <div className="flex justify-center w-full mt-3 relative z-10">
                <Link
                  to="/login"
                  className="text-sm text-blue-300 underline"
                >
                  Back to Login
                </Link>
              </div>
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

export default ForgotPassword;
