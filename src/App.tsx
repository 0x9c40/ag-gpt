import { useEffect } from "react";
import { useWindowSize } from "usehooks-ts";

import Sidebar from "./components/Sidebar.tsx";
import Conversation from "./components/Converstaion.tsx";
import Dashboard from "./components/Dashboard.tsx";
import SidebarToggler from "./components/SidebarToggler.tsx";

export default function App() {
  // const { width } = useWindowSize();
  // useEffect(() => {
  //   dispatch(hideSidebar());
  // }, [width, dispatch]);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="relative h-full flex-1 overflow-hidden">
        <Conversation />

        <Dashboard />

        <SidebarToggler />
      </div>
    </div>
  );
}
