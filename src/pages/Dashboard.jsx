import React from "react";
import avatar from "../assets/image/avatar.png";

function Dashboard() {
  const percentFilled = 16; // Percentage filled
  return (
    <>
      <div className="flex flex-col items-center justify-between h-screen bg-gradient-to-bl from-blueLight from-[-5%]  to-blueDark to-[40%]    text-white p-2 px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-3 w-full">
          <div>
            <h2 className="text-white text-md">Hi Eaton!</h2>
            <p className="text-gray-300/70 text-xs">Let's manage your budget</p>
          </div>
          <div className="flex gap-4">
            <div class=" p-0.5 rounded-full  -ml-2 bg-gradient-to-b from-[#739cee] via-transparent to-transparent">
              <div className="w-9 h-9 rounded-full bg-[#142d68]   flex items-center justify-center text-xs ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                  >
                    <g>
                      <path
                        strokeDasharray={4}
                        strokeDashoffset={4}
                        d="M12 3v2"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.2s"
                          values="4;0"
                        ></animate>
                      </path>
                      <path
                        strokeDasharray={28}
                        strokeDashoffset={28}
                        d="M12 5c-3.31 0 -6 2.69 -6 6l0 6c-1 0 -2 1 -2 2h8M12 5c3.31 0 6 2.69 6 6l0 6c1 0 2 1 2 2h-8"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.2s"
                          dur="0.4s"
                          values="28;0"
                        ></animate>
                      </path>
                      <animateTransform
                        fill="freeze"
                        attributeName="transform"
                        begin="0.9s"
                        dur="6s"
                        keyTimes="0;0.05;0.15;0.2;1"
                        type="rotate"
                        values="0 12 3;3 12 3;-3 12 3;0 12 3;0 12 3"
                      ></animateTransform>
                    </g>
                    <path
                      strokeDasharray={8}
                      strokeDashoffset={8}
                      d="M10 20c0 1.1 0.9 2 2 2c1.1 0 2 -0.9 2 -2"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.6s"
                        dur="0.2s"
                        values="8;0"
                      ></animate>
                      <animateTransform
                        fill="freeze"
                        attributeName="transform"
                        begin="1.1s"
                        dur="6s"
                        keyTimes="0;0.05;0.15;0.2;1"
                        type="rotate"
                        values="0 12 8;6 12 8;-6 12 8;0 12 8;0 12 8"
                      ></animateTransform>
                    </path>
                  </g>
                </svg>
              </div>
            </div>
            <div class=" p-0.5 rounded-full  -ml-2 bg-gradient-to-b from-[#739cee] via-transparent to-transparent">
              <div className="w-9 h-9 rounded-full bg-gradient-to-t from-blueLight from-[30%] to-blueDark  flex items-center justify-center text-xs ">
                <img
                  class="w-10 h-10 rounded-sm"
                  src={avatar}
                  alt="Medium avatar"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Balance Section */}
        <div className=" mb-3 w-full">
          <p className="text-gray-400 text-xs mb-1">Total balance</p>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl">
              $12,840.<span className="text-[25px]">00</span>
            </h1>
            <div class=" p-0.5 rounded-full  -ml-2 bg-gradient-to-b from-[#739cee] via-transparent to-transparent">
              <div className="w-9 h-9 rounded-full bg-[#142d68]   flex items-center justify-center text-xs ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="m18.364 8.05l-.707-.707a8 8 0 1 0 2.28 4.658m-1.573-3.95h-4.243m4.243 0V3.807"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-2 stroke-green-500 "
              viewBox="0 0 9 16"
            >
              <path
                fill="#fff"
                d="M4.5 14c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5"
              ></path>
              <path
                fill="#fff"
                d="M8 7.5a.47.47 0 0 1-.35-.15L4.5 4.2L1.35 7.35c-.2.2-.51.2-.71 0s-.2-.51 0-.71l3.5-3.5c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15"
              ></path>
            </svg>
            <p className="text-xs">
              <span className="text-green-500 ">1.75% </span>1 day
            </p>
          </div>
        </div>

        {/* Card Section */}
        <div className=" rounded-xl  mb-6 w-full">
          <div className="flex justify-between items-center mb-4 px-2">
            <div className="flex items-center">
              <div className="w-10 h-10 mr-2 text-gray-400">
                <svg viewBox="0 0 48 48" fill="currentColor" className="">
                  <path d="M45 35c0 2.209-1.791 4-4 4H7c-2.209 0-4-1.791-4-4V13c0-2.209 1.791-4 4-4h34c2.209 0 4 1.791 4 4v22z" />
                </svg>
              </div>
              <div>
                <p className="leading-none">Silver Visa Card</p>
                <div className="flex items-center text-xs text-gray-400 ">
                  <span className="mr-1">••••</span>
                  <span>7212</span>
                </div>
              </div>
            </div>
            <button class="group relative flex  bg-[#00285b]  gap-2 rounded-xl px-2 py-2 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
              <div class="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#00285b]/50 via-white/60 to-[#00285b]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"></div>

              <span class="inline animate-gradient whitespace-pre text-white text-center">
                + New Card
              </span>
            </button>
          </div>
          <div className=" shadow-2xl  shadow-cyan-500/50 mb-2 rounded-b-3xl rounded-t-none">
            <div className="flex justify-between items-center px-5">
              <div>
                <span className="text-xl">$3,670.00</span>
                <div className="text-xs text-gray-400 mb-2">November</div>
              </div>
              <div className="text-xs">
                <span className="opacity-85">Spend Limit</span>
                <p className="opacity-55">$2,000.00</p>
              </div>
            </div>
            <div class="relative ">
              <div class="absolute -inset-1 rounded-t-lg rounded-b-none bg-gradient-to-r from-[#3aea69] via-[#7affff] to-[#0f51ff] opacity-75 blur"></div>
              <div class="relative flex h-5 w-full items-center justify-center rounded-b-3xl rounded-t-none bg-gradient-to-r from-[#3aea69] via-[#7affff] to-[#0f51ff] text-slate-300"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white rounded-xl py-3 px-4 flex items-center justify-center gap-1">
              <span className="text-gray-800  font-semibold text-sm">Send</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 rotate-45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m12 5l6 6m-6-6l-6 6m6-6v14"
                ></path>
              </svg>
            </button>
            <button className="bg-white rounded-xl py-3 px-4 flex items-center justify-center gap-1">
              <span className="text-gray-800  font-semibold text-sm">
                Recieve
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 rotate-45"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                  <path
                    fill="#000"
                    d="m11 17.243l-3.95-3.95a1 1 0 1 0-1.414 1.414l5.657 5.657a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0-1.414-1.414L13 17.243V4a1 1 0 1 0-2 0z"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </div>

        {/* Goals Section */}
        <div className="mb-6 w-full bg-gradient-to-b from-[#00285b] p-4 rounded-2xl">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Goals</h3>
          </div>

          {/* Travel Goal */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm">Travel</span>
              <span className="text-sm">
                <span className="opacity-70">$1,430.40 /</span> $2,000.00
              </span>
            </div>
            <div className="w-full   rounded-lg">
              <div className="w-full bg-green-500/30 rounded-full h-2 mb-1 relative overflow-hidden">
                <div
                  className="bg-gradient-to-r  from-green-500 to-green-400 h-2 rounded-full"
                  style={{
                    width: `${percentFilled}%`,
                    transform: "scale(1.2)",
                    top: "-1px",
                    bottom: "-1px",
                    left: "0",
                  }}
                ></div>
                <div
                  class="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-green-500 to-green-400 opacity-75 blur"
                  style={{ width: `${percentFilled}%` }}
                ></div>
              </div>
            </div>
            <div className="flex text-xs justify-between">
              <div className="flex items-center text-green-500 mr-6">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                <span>Saved</span>
              </div>
              <div className="flex items-center text-gray-400">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-1"></div>
                <span>Savings Goal</span>
              </div>
            </div>
          </div>

          {/* Technique Goal */}
          <div className="">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm">Technique</span>
              <span className="text-sm">
                <span className="opacity-70">$130.40 /</span> $800.00
              </span>
            </div>
            <div className="w-full   rounded-lg">
              <div className="w-full bg-yellow-600/30 rounded-full h-2 mb-1 relative overflow-hidden">
                {/* Shadow element - matches width of progress */}
                <div
                  className="absolute h-2  rounded-full blur-sm bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-75"
                  style={{
                    width: `${percentFilled}%`,
                    transform: "scale(1.2)",
                    top: "-1px",
                    bottom: "-1px",
                    left: "0",
                  }}
                ></div>

                {/* Actual progress bar */}
                <div
                  className="absolute bg-gradient-to-r  from-yellow-500 to-red-500 h-2 rounded-full z-10"
                  style={{ width: `${percentFilled}%` }}
                ></div>
              </div>

              {/* Optional percentage text */}
              <div className="text-white text-sm mt-1">
                {percentFilled}% complete
              </div>
            </div>
            <div className="flex text-xs justify-between">
              <div className="flex items-center text-yellow-500 mr-6">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                <span>Saved</span>
              </div>
              <div className="flex items-center text-gray-400">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-1"></div>
                <span>Savings Goal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-between pt-4 border-t border-gray-800">
          <button className="flex flex-col items-center text-blue-500">
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <span className="text-xs mt-1"></span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="currentColor"
                fill="none"
              >
                <path
                  d="M12 5v14M5 12h14"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xs mt-1"></span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <span className="text-xs mt-1"></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
