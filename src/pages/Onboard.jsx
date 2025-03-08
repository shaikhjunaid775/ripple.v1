import avatar from "../assets/image/avatar.png"
import "../assets/css/style.css"

function Onboard() {
  return (
    <>
      <>
        {/* <iframe
                src="/frontasset/index-1.html"
                title="HTML Page"
                style={{
                    width: '100%',
                    height: '100vh',
                    border: 'none'
                }}
            /> */}
        <div className="flex flex-col items-center justify-between h-screen bg-gradient-to-b from-blueLight from-[-10%] via-blueDark via-10%]  to-blueLight to-[110%]  text-white p-6">
          {/* Header */}
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
              <span className="ml-2 font-semibold">Cashly</span>
            </div>
            <button className="text-white text-sm">Skip</button>
          </div>

          {/* User avatars */}
          <div className="w-full">
            <div className="flex justify-center">
              <div class=" p-0.5 rounded-full  bg-gradient-to-b from-[#739cee] via-transparent to-transparent">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tl from-blueLight from-[50%] to-blueDark  flex items-center justify-center text-xs shadow-[inset_1px_-6px_11px_0px_#81afff]">
                  <img
                    data-tooltip-target="tooltip-roberta"
                    class="relative w-10 h-10 rounded-sm"
                    src={avatar}
                    alt="Medium avatar"
                  />
                </div>
              </div>{" "}
              <div class=" p-0.5 rounded-full  -ml-2 bg-gradient-to-b from-[#739cee] via-transparent to-transparent">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tl from-blueLight from-[50%] to-blueDark  flex items-center justify-center text-xs shadow-[inset_1px_-6px_11px_0px_#81afff]">
                  <img
                    data-tooltip-target="tooltip-roberta"
                    class="w-10 h-10 rounded-sm"
                    src={avatar}
                    alt="Medium avatar"
                  />
                </div>
              </div>
              <div class=" p-0.5 rounded-full  -ml-2 bg-gradient-to-b from-[#739cee] via-transparent to-transparent">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tl from-blueLight from-[50%] to-blueDark  flex items-center justify-center text-xs shadow-[inset_1px_-6px_11px_0px_#81afff]">
                  <img
                    data-tooltip-target="tooltip-roberta"
                    class="w-10 h-10 rounded-sm"
                    src={avatar}
                    alt="Medium avatar"
                  />
                </div>
              </div>
              <div class=" p-0.5 rounded-full  -ml-2 bg-gradient-to-b from-[#739cee] via-transparent to-transparent">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tl from-blueLight from-[50%] to-blueDark  flex items-center justify-center text-xs shadow-[inset_1px_-6px_11px_0px_#81afff]">
                  <span>9k+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center text-center mb-8">
            <h1 className="text-[2.75rem] leading-none font-bold mb-2  bg-gradient-to-r from-[#6074ad] from-[-40px] via-white via-[30%] to-[#6074ad] to-[160%] text-transparent bg-clip-text">
              Take Control of
              <br />
              Your Finances
            </h1>
            <p className="text-sm text-[#6273a3] mb-8">
              Achieve your financial goals
            </p>

            <div class="animation_main_div relative z-0">
              <div class="symbolContainer relative flex items-center justify-center w-20 h-20  rounded-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 stroke-[#2673f8]"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m43.5 14.957l-14.696-4.004c-9.938.518-16.862 2.214-24.304 9.373l15.214 4.852C24 18.913 33.609 14.486 43.5 14.957"
                    strokeWidth={1}
                  ></path>
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M43.5 16.244c-10.472.283-18.558 7.662-23.362 14.868L7.185 26.355c.707-2.677 2.846-4.265 2.846-4.265"
                    strokeWidth={1}
                  ></path>
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M43.123 17.688c-6.547.283-19.688 12.624-22.42 19.36c0 0-6.223-2.88-10.645-4.334c-.016-3.251 1.41-4.786 1.41-4.786"
                    strokeWidth={1}
                  ></path>
                  <ellipse
                    cx={22.87}
                    cy={14.674}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    rx={4.899}
                    ry={1.413}
                    strokeWidth={1}
                  ></ellipse>
                </svg>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="w-full relative">
            {/* Page indicator */}
            <div className="w-full flex justify-between items-center mb-2">
              <div className="flex justify-center items-center">
                <div className="w-12 h-1 bg-white rounded-full mr-1"></div>
                <div className="w-3 h-1 bg-gray-500 rounded-full mr-1"></div>
                {/* <div className="w-3 h-1 bg-gray-500 rounded-full mr-1"></div>
                  <div className="w-3 h-1 bg-gray-500 rounded-full"></div> */}
              </div>
              <div className=" right-6 p-1 px-2 text-xs text-gray-400 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg">
                1/1
              </div>
            </div>
            <div className="w-full space-y-3 authentic mb-3">
              <button className="w-full bg-white text-blue-900 py-4 rounded-2xl font-semibold">
                Log In
              </button>
              <button className="w-full border border-white/50 text-white py-4 rounded-2xl font-semibold">
                Sign Up
              </button>
            </div>
            <div className="reflect"></div>
          </div>
        </div>
      </>
    </>
  );
}

export default Onboard;
