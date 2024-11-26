import { FaHeart, FaPlay, FaPlus } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import PropTypes from "prop-types";
import { useState, useRef } from "react";
import music from '../assets/audio/BohemianRhapsody.mp3';

const SongDetailCard = ({ song }) => {
  const [likedSongs, setLikedSongs] = useState({});
  const [playingSong, setPlayingSong] = useState(null);
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);
  const audioRef = useRef(null); // Ref for the audio element

  const ref = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play().catch((error) => {
        console.error('Audio play error:', error);
      });
    } else {
      ref.current.pause();
    }
  };

  const toggleLike = (songId) => {
    setLikedSongs((prev) => ({
      ...prev,
      [songId]: !prev[songId],
    }));
  };

  const togglePlayPause = (songId) => {
    if (playingSong === songId) {
      // Pause the audio if it's currently playing
      audioRef.current.pause();
      setPlayingSong(null);
    } else {
      // Play the audio and set the current song as playing
      audioRef.current.play().catch((error) => {
        console.error("Audio play error:", error);
      });
      setPlayingSong(songId);
    }
  };

  const addToPlaylist = (songId) => {
    console.log(`Added song ID: ${songId} to playlist`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  const closePopup = () => {
    setIsSharePopupOpen(false);
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg relative">
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
                onClick={() => toggleLike(song.id)}
              />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF2DF7] text-white"
              onClick={handleClick}
              
            >
              <FaPlay />
              <audio src={music} ref={ref} loop />
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-[#FF2DF7]">
              <FaPlus
                className="text-gray-400 text-3xl cursor-pointer hover:scale-110 transition-transform"
                onClick={() => addToPlaylist(song.id)}
              />
            </button>
          </div>
        </div>

        <div className="flex-1">
          {/* Title and Artist */}
          <div className="items-center gap-4 my-4">
            <h2 className="text-4xl font-bold">{song.title}</h2>
            <h3 className="text-2xl text-gray-400">{song.artist}</h3>
          </div>
          {/* Song Information */}
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

        {/* Share Song Button */}
        <div className="flex place-self-start">
          <button
            onClick={() => setIsSharePopupOpen(true)}
            className="text-[#FF2DF7] bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 flex gap-x-2"
          >
            Share Song
            <CiShare2 className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Lyrics */}
      <div className="mt-1 max-h-48 overflow-auto">
        <h2 className="text-2xl font-bold mb-4">Lyrics</h2>
        <p className="text-sm text-gray-300 mb-2">{song.lyrics}</p>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src={song.audio} />

      {/* Share Popup */}
      {isSharePopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={closePopup}
        >
          <div
            className="bg-gray-700 text-white p-6 rounded-lg shadow-lg relative w-[90%] md:w-[40%]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={closePopup}
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold mb-4">Share This Song</h3>
            <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-lg">
              <span className="truncate">{window.location.href}</span>
              <button
                className="ml-4 text-[#FF2DF7] bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
                onClick={copyToClipboard}
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      )}
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
    audio: PropTypes.string.isRequired,
    lyrics: PropTypes.string.isRequired,
  }).isRequired,
};

export default SongDetailCard;
