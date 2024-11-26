import PropTypes from "prop-types";
import { FaHeart, FaPlay, FaStepBackward, FaStepForward } from "react-icons/fa";
import { useState } from "react";

const NowPlayingBar = ({ image, title, artist, duration }) => {
  const [likedSongs, setLikedSongs] = useState({});
  const [playingSong, setPlayingSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const toggleLike = () => {
    setLikedSongs((prev) => ({
      ...prev,
      1: !prev[1], // Asumsikan songId = 1
    }));
  };

  const togglePlayPause = () => {
    setPlayingSong(playingSong === 1 ? null : 1);
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds = 0) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#181818] text-white flex items-center px-8 py-4 shadow-lg z-50">
      <div className="flex items-center">
        <img
          src={image}
          alt={title}
          className="w-12 h-12 object-cover rounded-md mr-4"
        />
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-gray-400">{artist}</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center mx-4">
        <div className="flex items-center space-x-4">
          <FaStepBackward className="cursor-pointer hover:text-gray-400" />
          {isPlaying ? (
            <FaPlay
              className="cursor-pointer text-xl hover:text-gray-400"
              onClick={togglePlayPause}
            />
          ) : (
            <FaPlay
              className="cursor-pointer text-xl hover:text-gray-400"
              onClick={togglePlayPause}
            />
          )}
          <FaStepForward className="cursor-pointer hover:text-gray-400" />
        </div>
        <div className="flex items-center space-x-2 w-full mt-2">
          <span className="text-xs text-gray-400">{formatTime(currentTime)}</span>
          <div className="flex-1 h-1 bg-gray-600 rounded-full relative">
            <div
              className="absolute top-0 left-0 h-1 bg-green-500 rounded-full"
              style={{
                width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
              }}
            ></div>
          </div>
          <span className="text-xs text-gray-400">{formatTime(duration)}</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaHeart
          className={`cursor-pointer ${
            likedSongs[1] ? "text-[#FF2DF7]" : "hover:text-gray-400"
          }`}
          onClick={toggleLike}
        />
      </div>
    </div>
  );
};

NowPlayingBar.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default NowPlayingBar;
