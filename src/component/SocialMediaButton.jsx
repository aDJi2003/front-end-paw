import PropTypes from "prop-types";

const SocialMediaButton = ({ icon, label, color, onClick }) => {
  return (
    <button
      className="rounded-lg px-2 lg:px-4 py-1.5 lg:py-2 flex items-center justify-center gap-2 text-white"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <img
        src={icon}
        alt={`${label}_logo`}
        className="w-4 h-4 sm:w-3 sm:h-3"
      />
      <p className="text-center text-sm md:text-base">{label}</p>
    </button>
  );
};

SocialMediaButton.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default SocialMediaButton;
