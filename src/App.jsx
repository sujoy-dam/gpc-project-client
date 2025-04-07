import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Function to close sidebar
  const closeSidebar = () => setIsSidebarOpen(false);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar(); // Sidebar er baire click korle close hobe
      }
    };

    // Event listener add kora holo
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function - Event listener remove korar jonno
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <>
      <div className="min-h-screen flex">
        {/* Sidebar Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="m-4 p-2 bg-blue-500 text-white rounded"
        >
          Open Sidebar
        </button>

        {/* Sidebar */}
        {isSidebarOpen && (
          <div
            ref={sidebarRef}
            className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white shadow-lg p-4"
          >
            <h2 className="text-2xl mb-4">Sidebar</h2>
            <ul>
              <li className="mb-2 cursor-pointer">Home</li>
              <li className="mb-2 cursor-pointer">About</li>
              <li className="mb-2 cursor-pointer">Contact</li>
              <li className="mb-2 cursor-pointer">Settings</li>
            </ul>
            <button
              onClick={closeSidebar}
              className="mt-4 bg-red-500 px-4 py-2 rounded"
            >
              Close Sidebar
            </button>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-grow p-8">
          <h1 className="text-4xl">Main Content Area</h1>
          <p>Click anywhere outside the sidebar to close it.</p>
        </div>
      </div>
    </>
  )
}

export default App
