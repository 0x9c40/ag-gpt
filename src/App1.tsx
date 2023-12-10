import "./App.css";
import PieChart from "./components/PieChart";
import DoughnutChart from "./components/DoughnutChart2";

function App() {
  // const myData = [
  //   { key: "A", value: 10 },
  //   { key: "B", value: 20 },
  //   { key: "C", value: 30 },
  // ];
  return (
    <div className="flex h-screen overflow-hidden">
      {/* <!-- Sidebar --> */}
      <div className="hidden md:flex md:flex-shrink-0 md:w-64">
        <div className="flex flex-col w-full h-full p-4 bg-gray-800">
          <div className="flex items-center mb-6 text-white">
            <span className="text-xl font-semibold">Chats</span>
          </div>
          {/* <!-- Chat List --> */}
          <div className="flex flex-col space-y-2 overflow-y-auto">
            {/* <!-- Replace these with actual chat list items --> */}
            <div className="p-2 bg-gray-700 rounded hover:bg-gray-600 cursor-pointer">
              Chat 1
            </div>
            <div className="p-2 bg-gray-700 rounded hover:bg-gray-600 cursor-pointer">
              Chat 2
            </div>
            {/* <!-- More chat items --> */}
          </div>
        </div>
      </div>

      {/* <!-- Main Content --> */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* <!-- Conversation Side --> */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4">
            {/* <!-- Chat messages --> */}
            <div className="flex items-end space-x-2 mb-2">
              <div className="p-2 bg-blue-600 text-white rounded-lg">
                Hello!
              </div>
            </div>
            <div className="flex flex-row-reverse items-end space-x-reverse space-x-2 mb-2">
              <div className="p-2 bg-gray-300 rounded-lg">Hi there!</div>
            </div>
            {/* <!-- More messages --> */}
          </div>
          <div className="p-4 border-t-2 border-gray-200">
            {/* <!-- Message input --> */}
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="Type a message..."
            ></input>
          </div>
        </div>

        {/* <!-- Data Inspector Side --> */}
        <div className="md:w-1/2 p-4 bg-white border-l-2 border-gray-200">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          {/* <!-- More content here --> */}
        </div>
      </div>
    </div>
  );
}

export default App;
