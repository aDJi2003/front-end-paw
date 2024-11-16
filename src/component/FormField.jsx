import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormField = ({
  id,
  type,
  label,
  value,
  onChange,
  showToggle,
  toggleValue,
  onToggle,
}) => (
  <div className="relative">
    <input
      type={type}
      id={id}
      placeholder=" "
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="block cursor-pointer w-full py-2 text-lg bg-transparent border-b-2 border-[#8c8b91] text-white focus:outline-none focus:border-[#00F0FF] peer"
    />
    <label
      htmlFor={id}
      className="absolute text-lg text-[#8c8b91] duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {label}
    </label>
    {showToggle && (
      <span
        className="absolute right-2 top-3 text-white cursor-pointer"
        onClick={onToggle}
      >
        {toggleValue ? <FaEyeSlash /> : <FaEye />}
      </span>
    )}
  </div>
);

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  showToggle: PropTypes.bool,
  toggleValue: PropTypes.bool,
  onToggle: PropTypes.func,
};

FormField.defaultProps = {
  showToggle: false,
  toggleValue: false,
  onToggle: null,
};

export default FormField;
