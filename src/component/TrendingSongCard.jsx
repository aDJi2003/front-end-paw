import { useState } from "react";
import PropTypes from "prop-types";
import { FaHeart, FaEllipsisV } from "react-icons/fa";

const TrendingSongCard = ({ songs, heading, highlight, initialDisplayCount }) => {
  const [showAll, setShowAll] = useState(false);
  const [likedSongs, setLikedSongs] = useState({});
  const [openMenu, setOpenMenu] = useState(null);
  const [playingSong, setPlayingSong] = useState(null);

  const toggleLike = (songId) => {
    setLikedSongs((prev) => ({
      ...prev,
      [songId]: !prev[songId],
    }));
  };

  const toggleMenu = (songId) => {
    setOpenMenu(openMenu === songId ? null : songId);
  };

  const togglePlayPause = (songId) => {
    setPlayingSong(playingSong === songId ? null : songId);
    setOpenMenu(null);
  };

  const addToPlaylist = (songId) => {
    console.log(`Added song ID: ${songId} to playlist`);
    setOpenMenu(null);
  };

  const displayedSongs = showAll ? songs : songs.slice(0, initialDisplayCount);

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-white">
        {heading} <span className="text-[#00F0FF]">{highlight}</span>
      </h2>
      <table className="w-full mt-4 text-left text-white">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="py-2">#</th>
            <th className="py-2">Song</th>
            <th className="py-2">Release Date</th>
            <th className="py-2">Album</th>
            <th className="text-center py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {displayedSongs.map((song, index) => (
            <tr
              key={song.id}
              className="border-b border-gray-800 hover:bg-gray-900"
            >
              <td className="align-middle">{`#${index + 1}`}</td>
              <td className="flex items-center gap-3 py-2">
                <img
                  src={song.image}
                  alt={song.title}
                  className="w-12 h-12 rounded-md object-cover"
                />
                <div>
                  <p className="font-bold">{song.title}</p>
                  <p className="text-sm text-gray-400">{song.artist}</p>
                </div>
              </td>
              <td className="align-middle">{song.releaseDate}</td>
              <td className="align-middle">{song.album}</td>
              <td className="align-middle pr-2 relative">
                <div className="flex items-center justify-center gap-4">
                  <FaHeart
                    className={`cursor-pointer transition-transform ${
                      likedSongs[song.id] ? "text-pink-500" : "text-gray-400"
                    } hover:scale-110`}
                    onClick={() => toggleLike(song.id)}
                  />
                  <span>{song.time}</span>
                  <FaEllipsisV
                    className="text-gray-400 cursor-pointer hover:scale-110 transition-transform"
                    onClick={() => toggleMenu(song.id)}
                  />
                </div>
                {/* Dropdown Menu */}
                {openMenu === song.id && (
                  <div className="absolute top-10 right-0 bg-gray-800 text-white rounded-md shadow-lg p-2 z-10">
                    <button
                      className="block w-full px-4 py-2 text-left hover:bg-gray-700"
                      onClick={() => togglePlayPause(song.id)}
                    >
                      {playingSong === song.id ? "Pause Song" : "Play Song"}
                    </button>
                    <button
                      className="block w-full px-4 py-2 text-left hover:bg-gray-700"
                      onClick={() => addToPlaylist(song.id)}
                    >
                      Add to Playlist
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-[#5200FF] rounded-md"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
    </div>
  );
};

TrendingSongCard.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      album: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  heading: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
  initialDisplayCount: PropTypes.number.isRequired,
};

export default TrendingSongCard;
