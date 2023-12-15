import Sidebar from "./components/Sidebar.tsx";
import Conversation from "./components/Converstaion.tsx";
import Dashboard from "./components/Dashboard.tsx";
import SidebarToggler from "./components/SidebarToggler.tsx";

export default function App() {
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
