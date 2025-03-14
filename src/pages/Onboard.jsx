import { motion } from "framer-motion";
import avatar from "../assets/image/avatar.png";
import "../assets/css/style.css";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import { useRef } from "react";

function Onboard() {
  const splineRef = useRef();

  function handleLoad(splineApp) {
    // Store the spline instance
    splineRef.current = splineApp;

    console.log("Spline loaded:", splineApp);

    // Try to find the camera control methods
    if (splineApp) {
      // Examine what methods are available on the splineApp object
      console.log("Available methods:", Object.getOwnPropertyNames(splineApp));

      // Try to access the runtime object which often has camera controls
      if (splineApp.runtime) {
        console.log("Runtime available:", splineApp.runtime);

        // Some versions expose camera through runtime
        setTimeout(() => {
          try {
            // Try different methods that might be available
            if (typeof splineApp.runtime.zoomOut === "function") {
              splineApp.runtime.zoomOut();
              console.log("Used runtime.zoomOut()");
            } else if (
              splineApp.runtime.setZoom &&
              typeof splineApp.runtime.setZoom === "function"
            ) {
              splineApp.runtime.setZoom(0.5);
              console.log("Used runtime.setZoom()");
            } else {
              console.log("No standard zoom methods found");
            }
          } catch (error) {
            console.error("Error attempting zoom:", error);
          }
        }, 1000); // Slight delay to ensure scene is fully loaded
      }
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-between h-screen bg-gradient-to-b from-blueLight from-[-10%] via-blueDark via-10%]  to-blueLight to-[110%] text-white p-4"
      >
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-between items-center"
        >
          <div className="flex items-center">
            <div className="w-6 h-6 bg-white rounded-full"></div>
            <span className="ml-2 font-semibold">Cashly</span>
          </div>
        </motion.div>

        {/* User avatars */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { staggerChildren: 0.2 } // Stagger effect
            }
          }}
          className="w-full flex justify-center space-x-[-10px]"
        >
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: 150 },
                visible: { opacity: 1, x: 0, transition: { duration: 2 } }
              }}
              className="p-0.5 rounded-full bg-gradient-to-b from-[#739cee] via-transparent to-transparent"
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tl from-blueLight from-[50%] to-blueDark flex items-center justify-center text-xs shadow-[inset_1px_-6px_11px_0px_#81afff]">
                <img
                  className="w-10 h-10 rounded-sm"
                  src={avatar}
                  alt="User avatar"
                />
              </div>
            </motion.div>
          ))}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 150 },
              visible: { opacity: 1, x: 0, transition: { duration: 2 } }
            }}
            className="p-0.5 rounded-full -ml-2 bg-gradient-to-b from-[#739cee] via-transparent to-transparent"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tl from-blueLight from-[50%] to-blueDark flex items-center justify-center text-xs shadow-[inset_1px_-6px_11px_0px_#81afff]">
              <span>9k+</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center text-center mb-8"
        >
          <h1 className="text-[2.75rem] leading-none font-bold mb-2 bg-gradient-to-r from-[#6074ad] from-[-40px] via-white via-[30%] to-[#6074ad] to-[160%] text-transparent bg-clip-text">
            Take Control of
            <br />
            Your Finances
          </h1>
          <p className="text-sm text-[#6273a3] mb-8">
            Achieve your financial goals
          </p>
        </motion.div>
        <div className=" h-48">
          <Spline
            scene="https://prod.spline.design/fJ2ptJKzT-sDkpfO/scene.splinecode"
            onLoad={handleLoad}
          />
        </div>
        {/* Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="w-full space-y-3 authentic mb-3 z-10 flex flex-col gap-3"
        >
          <Link to="/login">
            <motion.button
              whileHover={{ scale: 1.01 }}
              className="w-full bg-white text-blue-900 py-4 rounded-2xl font-semibold"
            >
              Log In
            </motion.button>
          </Link>
          <Link to="/register ">
            <motion.button
              whileHover={{ scale: 1.01 }}
              className="w-full border border-white/50 text-white py-4 rounded-2xl font-semibold"
            >
              Sign Up
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
      <div className="reflect"></div>
    </>
  );
}

export default Onboard;
