import { FaHeart, FaPlay, FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";
import { useState } from "react";

const SongDetailCard = ({ song, lyrics }) => {
  const [likedSongs, setLikedSongs] = useState({});
  const [playingSong, setPlayingSong] = useState(null);

  const toggleLike = (songId) => {
    setLikedSongs((prev) => ({
      ...prev,
      [songId]: !prev[songId],
    }));
  };

  const togglePlayPause = (songId) => {
    setPlayingSong(playingSong === songId ? null : songId);
    setOpenMenu(null);
  };

  const addToPlaylist = (songId) => {
    console.log(`Added song ID: ${songId} to playlist`);
    setOpenMenu(null);
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg">
      {/* Song Details */}
      <div className="flex items-center">
        <div className="flex flex-col items-center mr-6">
          <img
            src={song.image}
            alt={`${song.title} cover`}
            className="w-48 h-48 md:w-64 md:h-64 rounded-lg"
          />

          {/* Buttons */}
          <div className="flex items-center gap-4 my-4">
            <button className="w-10 h-10 flex items-center justify-center text-[#FF2DF7]">
              <FaHeart 
                className={`cursor-pointer transition-transform ${
                  likedSongs[song.id] ? "text-[#FF2DF7] text-3xl" : "text-gray-400 text-3xl"
                } hover:scale-110`}
                onClick={() => toggleLike(song.id)} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF2DF7] text-white">
              <FaPlay />
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-[#FF2DF7]">
              <FaPlus 
                className="text-gray-400 text-3xl cursor-pointer hover:scale-110 transition-transform"
                onClick={() => addToPlaylist(song.id)}  />
            </button>
          </div>
        </div>
        
        <div className="flex-1">
          {/* Title dan Artist */}
          <div className="items-center gap-4 my-4">
            <h2 className="text-4xl font-bold">{song.title}</h2>
            <h3 className="text-2xl text-gray-400">{song.artist}</h3>
          </div>
          {/* Song Informations */}
          <ul className="text-md text-gray-400 space-y-1">
            <li>
              <strong>Album:</strong> {song.album}
            </li>
            <li>
              <strong>Release Date:</strong> {song.releaseDate}
            </li>
            <li>
              <strong>Time:</strong> {song.time}
            </li>
          </ul>
        </div>
      </div>

      {/* Lyrics */}
      <div className="mt-1 max-h-48 overflow-auto">
        <h2 className="text-2xl font-bold mb-4">Lyrics</h2>
        {lyrics.map((line, index) => (
          <p key={index} className="text-sm text-gray-300 mb-2">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

SongDetailCard.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
  }).isRequired,
  lyrics: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SongDetailCard;
