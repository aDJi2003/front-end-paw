import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../component/Sidebar";

const Setting = () => {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);

  const handleNotificationToggle = () => {
    setIsNotificationEnabled(!isNotificationEnabled);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const handleDarkModeToggle = () => {
    setIsDarkModeEnabled(!isDarkModeEnabled);
  };

  return (
    <div className="min-h-screen max-w-screen flex font-jakarta overflow-y-auto">
      <div className="w-1/5 bg-[#181818] border-r-2 border-[#FF2DF7]">
        <Sidebar />
      </div>
      <div className="w-4/5 bg-[#181818] px-[3vw] py-[4vh]">
        {/* Notification Settings */}
        <div>
          <h2 className="text-3xl font-semibold text-white mb-3">
            Notification <span className="text-[#00F0FF]">Settings</span>
          </h2>
          <div className="flex items-center w-full justify-between">
            <label className="text-lg text-white">Enable Notifications</label>
            <button
              className={`w-16 h-7 flex items-center rounded-full p-1 transition ${
                isNotificationEnabled ? "bg-[#00F0FF]" : "bg-[#3F3F3F]"
              }`}
              onClick={handleNotificationToggle}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${
                  isNotificationEnabled ? "translate-x-9" : ""
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Dark Mode Settings */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-white mb-3">
            Appearance <span className="text-[#00F0FF]">Settings</span>
          </h2>
          <div className="flex items-center w-full justify-between">
            <label className="text-lg text-white">Enable Dark Mode</label>
            <button
              className={`w-16 h-7 flex items-center rounded-full p-1 transition ${
                isDarkModeEnabled ? "bg-[#00F0FF]" : "bg-[#3F3F3F]"
              }`}
              onClick={handleDarkModeToggle}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${
                  isDarkModeEnabled ? "translate-x-9" : ""
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Language Settings */}
        <div className="mt-8 relative">
          <h2 className="text-3xl font-semibold text-white mb-3">
            Language <span className="text-[#00F0FF]">Settings</span>
          </h2>
          <div
            className="flex items-center bg-[#3F3F3F] text-white p-3 rounded cursor-pointer justify-between"
            onClick={toggleDropdown}
          >
            <span>{selectedLanguage}</span>
            <AiFillCaretDown
              size={20}
              className={`transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-2 bg-[#3F3F3F] text-white rounded shadow-lg w-full"
              >
                {["English", "Bahasa Indonesia", "Español", "Français", "Deutsch"].map(
                  (language) => (
                    <li
                      key={language}
                      className="px-3 py-2 hover:bg-[#00F0FF] hover:text-black transition"
                      onClick={() => handleLanguageChange(language)}
                    >
                      {language}
                    </li>
                  )
                )}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Setting;
