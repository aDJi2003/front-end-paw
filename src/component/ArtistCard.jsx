import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ArtistCard = ({ image, name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/artist/${name}`);
  };

  return (
    <div className="flex flex-col items-center" onClick={handleClick}>
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden hover:cursor-pointer">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-sm text-white font-medium mt-2">{name}</p>
    </div>
  );
};

ArtistCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ArtistCard;
