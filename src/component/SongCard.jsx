import PropTypes from "prop-types";

const SongCard = ({ image, title, artist }) => {
  return (
    <div className="w-[190px] flex-shrink-0 bg-[#1e1e1e] rounded-lg p-4 flex flex-col items-center hover:cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-[150px] object-cover rounded-md mb-3"
      />
      <div className="w-full">
        <h3 className="text-sm font-medium text-white">{title}</h3>
        <p className="text-xs text-gray-400">{artist}</p>
      </div>
    </div>
  );
};

SongCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

export default SongCard;
