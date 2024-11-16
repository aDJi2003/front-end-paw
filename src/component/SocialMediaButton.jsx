import PropTypes from "prop-types";

const SocialMediaButton = ({ icon, label, color, onClick }) => {
  return (
    <button
      className={`rounded-lg px-3 py-2 flex items-center gap-2 text-white`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <img src={icon} alt={`${label}_logo`} width={16} height={16} />
      <p>{label}</p>
    </button>
  );
};

export default SocialMediaButton;

SocialMediaButton.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func,
  };