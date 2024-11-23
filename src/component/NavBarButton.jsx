import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavBarButton = ({ to, icon: Icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-4 py-2 rounded transition ${
          isActive
            ? "bg-purple-600 text-white"
            : "hover:bg-purple-200 hover:text-gray-900"
        }`
      }
    >
      <Icon className="mr-3" size={20} /> {label}
    </NavLink>
  );
};

NavBarButton.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavBarButton;
