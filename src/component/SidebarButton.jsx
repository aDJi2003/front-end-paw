import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const SidebarButton = ({ to, icon: Icon, label, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick}
      className={({ isActive }) =>
        `flex items-center px-4 py-2 rounded transition ${
          isActive
            ? "bg-[#FF2DF7] text-white"
            : "hover:bg-[#fb77f6] hover:text-gray-900"
        }`
      }
    >
      <Icon className="mr-3" size={20} /> {label}
    </NavLink>
  );
};

SidebarButton.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default SidebarButton;
