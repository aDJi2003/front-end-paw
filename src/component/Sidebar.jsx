import { useState } from "react";
import {
  FaHome,
  FaMusic,
  FaMicrophone,
  FaClock,
  FaHeadphones,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
import Logo from "../assets/images/logo_paw.png";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmLogout = () => {
    window.location.href = "/";
  };

  return (
    <>
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen hidden lg:flex flex-col bg-[#181818] text-gray-300 w-[19vw] p-6 font-jakarta">
        {/* Title */}
        <div className="flex items-center space-x-2 mb-5">
          <img src={Logo} alt="app_logo" className="w-6 h-6 lg:w-8 lg:h-8" />
          <h2 className="text-2xl lg:text-3xl text-white">Melodify</h2>
        </div>

        {/* Menu */}
        <h2 className="text-sm font-semibold text-gray-500 uppercase mt-1">Menu</h2>
        <ul className="space-y-1 mt-1">
          <SidebarButton to="/Home" icon={FaHome} label="Home" />
          <SidebarButton to="/Song" icon={FaMusic} label="Songs" />
          <SidebarButton to="/artists" icon={FaMicrophone} label="Artists" />
        </ul>

        {/* Library Section */}
        <h2 className="text-sm font-semibold text-gray-500 uppercase mt-4">Library</h2>
        <ul className="space-y-1 mt-1">
          <SidebarButton to="/recently-added" icon={FaClock} label="Recently Added" />
          <SidebarButton to="/most-played" icon={FaHeadphones} label="Most Played" />
        </ul>

        {/* Playlist Section */}
        <h2 className="text-sm font-semibold text-gray-500 uppercase mt-4">Playlist and Favorite</h2>
        <ul className="space-y-1 mt-2">
          <SidebarButton to="/favorites" icon={AiOutlineHeart} label="Your Favorites" />
          <SidebarButton to="/add-playlist" icon={AiOutlinePlus} label="Add Playlist" />
        </ul>

        {/* General Section */}
        <h2 className="text-sm font-semibold text-gray-500 uppercase mt-4">General</h2>
        <ul className="space-y-1 mt-1">
          <SidebarButton to="/settings" icon={FaCog} label="Settings" />
          <SidebarButton
            to="/"
            icon={FaSignOutAlt}
            label="Logout"
            onClick={handleLogoutClick}
          />
        </ul>
      </aside>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#181818] text-gray-300 w-[20vw] p-6 rounded-md shadow-lg text-center border border-[#FF2DF7]">
            <h3 className="text-lg font-semibold mb-4">Are you sure you want to log out?</h3>
            <div className="flex justify-center space-x-4">
              <button
                onClick={confirmLogout}
                className="bg-[#5200FF] text-white px-4 py-2 rounded-md"
              >
                Confirm
              </button>
              <button
                onClick={closeModal}
                className="bg-[#2E2E2E] text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
