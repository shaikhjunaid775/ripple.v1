import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WelcomeLetter = () => {
  const navigate = useNavigate();
  // Retrieve username and password from localStorage
  const [userData, setUserData] = useState({ username: "", password: "" });

  // Retrieve user data from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUserData(JSON.parse(savedUser));
    }
  }, []);

  // Motion values for swipe animation
  const x = useMotionValue(0);
  const width = useTransform(x, [0, 300 - 60], [300, 60]);
  const opacity = useTransform(x, [0, 300 - 60], [1, 0]);
  const rotate = useTransform(x, [0, 300 - 60], [-90, 0]);
  const dashOffset = useTransform(x, [0, 300 - 60], [192, 202]);
  const offsetX = useTransform(x, [0, 300 - 60], [0, -3]);
  const offsetY = useTransform(x, [0, 300 - 60], [0, 3]);

  // Handle drag end and redirect to login page
  const handleDragEnd = (event, info) => {
    const finalX = info.offset.x; // Get the final drag position from `info.offset.x`

    console.log("Final X:", finalX); // Debug log to check the final position

    // Check if the drag reached the rightmost position
    if (finalX >= 300 - 60) {
      navigate("/dashboard"); // Redirect to the login page when reached the end
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-gradient-to-tl from-blueLight  via-blueDark  to-blueLight  text-white p-4">
      {/* Animated Container */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative py-16 px-8 flex flex-col h-full justify-end"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-8"
        >
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
        </motion.div>

        {/* Welcome Message */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-white mb-1 font-semibold">
            Hi, {userData.username}
          </p>
          <p className="text-white text-xs leading-tight">
            Welcome! Your forex journey starts here. Harness the power
            of technology and AI to navigate the dynamic markets with
            confidence. Let’s grow together and achieve your trading goals.
            Happy trading!
          </p>
        </motion.div>

        {/* Login Information Box */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-yellow-50 rounded-xl p-4 border border-gray-400 mb-8"
        >
          <p className="text-gray-700 mb-4 font-semibold text-sm">
            {userData.username}, save your login information:
          </p>

          <div className="mb-4">
            <p className="text-gray-600 font-bold mb-1">Username</p>
            <p className="text-gray-800">{userData.username}</p>
          </div>

          <div>
            <p className="text-gray-600 font-bold mb-1">Password</p>
            <p className="text-gray-800">{userData.password}</p>
          </div>
        </motion.div>

        {/* Swipe Button */}
        <div className="flex justify-center mt-6">
          <div className="swipercontainer">
            <motion.div
              className="thumb"
              drag="x"
              dragConstraints={{ left: 0, right: 300 - 60 }}
              dragSnapToOrigin
              dragElastic={0.01}
              style={{ x }}
              onDragEnd={handleDragEnd} // Attach the drag end handler
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                style={{
                  rotate,
                  position: "relative",
                  top: offsetY,
                  left: offsetX
                }}
              >
                <motion.path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  strokeDasharray={100}
                  strokeDashoffset={dashOffset}
                  d="M23 4L17.5 9.5L12 15L7 10"
                />
              </motion.svg>
            </motion.div>

            <motion.div className="slider" style={{ width }}>
              <motion.div
                className="slider-text text-black"
                style={{ opacity }}
              >
                Swipe to dashboard
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeLetter;
