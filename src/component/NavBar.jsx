import { FaHome, FaMusic, FaMicrophone, FaClock, FaHeadphones, FaCog, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
import Logo from "../assets/images/logo_paw.png";
import SidebarButton from "./NavBarButton";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen hidden lg:flex flex-col bg-gray-900 text-gray-300 w-64 p-6 font-jakarta">
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
        <SidebarButton to="/logout" icon={FaSignOutAlt} label="Logout" />
      </ul>
    </aside>
  );
};

export default Sidebar;