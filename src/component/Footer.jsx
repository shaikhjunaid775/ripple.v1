import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", to: "/dashboard", label: "Home", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", active: activeTab === "home" },
    { id: "menu", to: "/dashboard", label: "Menu", icon: "M3 12h18M3 6h18M3 18h18", active: activeTab === "menu" },
    { id: "apps", to: "/dashboard", label: "Apps", icon: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z", active: activeTab === "apps" },
    { id: "settings", to: "/dashboard", label: "Settings", icon: "M12 3v3M12 18v3M4.6 8.6l2.1 2.1M17.3 17.3l2.1 2.1M3 12h3M18 12h3", active: activeTab === "settings" }
  ];

  return (
    <div className="fixed bottom-0 w-full max-w-[690px] px-4 py-3">
      <div className="flex items-center justify-between w-full mx-auto my-4 rounded-2xl bg-gradient-to-tr from-blue-200 to-transparent">
        <div className="w-full bg-black rounded-3xl">
          <div className="flex justify-around items-center w-full h-16 px-2 rounded-2xl bg-blueLight/50 backdrop-blur-md shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className={`flex items-center justify-center gap-1 px-4 py-2 text-white ${
                  item.active
                    ? "rounded-xl bg-gradient-to-b from-buttonBlue"
                    : ""
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon}></path>
                </svg>
                {item.active && <motion.span layoutId="underline" className=""></motion.span>}
                {item.active && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs">{item.label}</motion.span>}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
