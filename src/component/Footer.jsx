import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  // Local navigation data
  const navItems = [
    {
      id: "home",
      to: "/",
      icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>,
      iconExtra: <polyline points="9 22 9 12 15 12 15 22"></polyline>,
      label: "Home",
      active: true
    },
    {
      id: "menu",
      to: "/menu",
      icon: (
        <>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </>
      ),
      label: "Menu",
      active: false
    },
    {
      id: "apps",
      to: "/apps",
      icon: (
        <>
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </>
      ),
      label: "Apps",
      active: false
    },
    {
      id: "settings",
      to: "/settings",
      icon: (
        <>
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </>
      ),
      label: "Settings",
      active: false
    }
  ];

  return (
    <div className="flex items-center justify-center fixed bottom-0 w-full px-4 py-3">
      <div className="flex items-center justify-between w-full pt-[1px] mx-auto my-4 max-w-sm rounded-2xl bg-gradient-to-tr from-blue-200 from-45% ">
        <div className="w-full bg-black rounded-3xl">
          <div
            className=" flex justify-around items-center w-full max-w-md h-16 px-2 rounded-2xl bg-blueLight backdrop-blur-md shadow-lg"
            style={{
              background:
                "linear-gradient(to bottom, rgba(30,64,175,0.18), rgba(37,99,235,0.62), rgba(30,64,175,0.18))",
              boxShadow:
                "0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 1px #112a83"
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className={`flex items-center justify-center gap-1 px-4 py-2 text-white ${
                  item.active
                    ? "rounded-xl bg-gradient-to-b from-buttonBlue"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {item.icon}
                  {item.iconExtra}
                </svg>
                {/* Only render the label span if the item is active */}
                {item.active && <span className="text-xs">{item.label}</span>}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
