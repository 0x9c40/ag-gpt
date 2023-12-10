import { useState } from "react";

import Sidebar from "./components/Sidebar";

function App() {
  const [showInvestigation, setShowInvestigation] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleInvestigation = () => {
    setShowInvestigation(!showInvestigation);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex h-screen">
      <Sidebar showSidebar={showSidebar}>look and mee</Sidebar>

      <div className="relative flex h-full flex-1 justify-center overflow-hidden border-8 border-red-500 @container">
        <main className="transition-width relative h-full w-full flex-1 overflow-auto border-8 border-yellow-500 @7xl:max-w-xl">
          <div
            className="h-full border-8 border-lime-500"
            onClick={toggleInvestigation}
          >
            <div className="h-10 w-full border-4 border-blue-500"></div>
          </div>
        </main>

        {showInvestigation && (
          <div className="transition-width absolute h-full w-full flex-1 overflow-auto border-8 border-blue-500 bg-blue-200 @7xl:relative @7xl:max-w-xl">
            <button
              onClick={toggleInvestigation}
              className="absolute right-2 top-2 text-xl"
            >
              ✖
            </button>
          </div>
        )}

        <div
          className="fixed left-0 top-1/2 h-10 w-10 border-2 border-black transition-all  data-[state=opened]:max-md:left-60"
          onClick={toggleSidebar}
          data-state={showSidebar ? "opened" : "hidden"}
        ></div>
      </div>
    </div>
  );
}

export default App;
