import PropTypes from "prop-types";
import { FaHeart, FaPlay, FaPause, FaPlus } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

const NowPlayingBar = ({ songId, image, title, artist, audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [likedSongs, setLikedSongs] = useState({});

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      audioRef.current.play().catch((error) => console.error("Audio play error:", error));
    } else {
      audioRef.current.pause();
    }
  };

  const addToPlaylist = (songId) => {
    console.log(`Added song ID: ${songId} to playlist`);
  };

  const toggleLike = (songId) => {
    setLikedSongs((prev) => ({
      ...prev,
      [songId]: !prev[songId],
    }));
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
      }
    };

    if (isPlaying) {
      const interval = setInterval(updateProgress, 500);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  useEffect(() => {
    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };

    const audioElement = audioRef.current;
    audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audioElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#1e1e1e] text-white flex items-center px-8 py-4 shadow-lg z-50">
      {/* Song Image */}
      <div className="flex items-center">
        <img
          src={image}
          alt={title}
          className="w-12 h-12 object-cover rounded-md mr-4"
        />
        {/* Song Info */}
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-gray-400">{artist}</p>
        </div>
      </div>

      {/* Player Controls */}
      <div className="flex-1 flex flex-col items-center justify-center mx-4">
        <div className="flex items-center space-x-4">
          {/* Heart Icon for Like */}
          <FaHeart
            className={`cursor-pointer text-xl ${
              likedSongs[songId] ? "text-[#FF2DF7] text-xl" : "text-white"
            } hover:text-gray-400`}
            //onClick={() => onLike(title)
            onClick={() => toggleLike(songId)}
          />
          
          {/* Play/Pause Button */}
          {isPlaying ? (
            <FaPause
              className="cursor-pointer text-xl hover:text-gray-400"
              onClick={togglePlayPause}
            />
          ) : (
            <FaPlay
              className="cursor-pointer text-xl hover:text-gray-400"
              onClick={togglePlayPause}
            />
          )}
          {/* Plus Icon for Add to Playlist */}
          <FaPlus
            className="cursor-pointer text-xl hover:text-gray-400"
            onClick={() => addToPlaylist(title)}
          />
        </div>
        {/* Progress Bar */}
        <div className="flex items-center space-x-2 w-full mt-2">
          <span className="text-xs text-gray-400">{formatTime(currentTime)}</span>
          <div className="flex-1 h-1 bg-gray-600 rounded-full relative">
            <div
              className="absolute top-0 left-0 h-1 bg-green-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-xs text-gray-400">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Audio Element */}
      <audio src={audioSrc} ref={audioRef} />
    </div>
  );
};

NowPlayingBar.propTypes = {
  songId: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  audioSrc: PropTypes.string.isRequired,
};

export default NowPlayingBar;