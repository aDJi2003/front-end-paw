import { useParams, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Sidebar from "../component/Sidebar";
import ArtistSongCard from "../component/ArtistSongCard";

import Song1 from "../assets/images/song_1_paw.png";
import Song2 from "../assets/images/song_2_paw.png";
import Song3 from "../assets/images/song_3_paw.png";
import Song4 from "../assets/images/song_4_paw.png";
import Song5 from "../assets/images/song_5_paw.png";

const ArtistDetail = () => {
  const { artistName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { image } = location.state || {};

  const handleBack = () => {
    navigate(-1);
  };

  const artistSongs = [
    {
      id: 1,
      title: "Sorfcore",
      artist: "The Neighbourhood",
      releaseDate: "Nov 4, 2023",
      played: "123.456.789 times",
      time: "4:50",
      image: Song1,
    },
    {
      id: 2,
      title: "Skyfall Beats",
      artist: "Nightmares",
      releaseDate: "Oct 26, 2023",
      played: "123.456.789 times",
      time: "3:16",
      image: Song2,
    },
    {
      id: 3,
      title: "Greedy",
      artist: "Tate McRae",
      releaseDate: "Dec 30, 2023",
      played: "123.456.789 times",
      time: "4:12",
      image: Song3,
    },
    {
      id: 4,
      title: "Lovin On Me",
      artist: "Jack Harlow",
      releaseDate: "Dec 30, 2023",
      played: "123.456.789 times",
      time: "2:56",
      image: Song4,
    },
    {
      id: 5,
      title: "Pain the Town Red",
      artist: "Doja Cat",
      releaseDate: "Dec 29, 2023",
      played: "123.456.789 times",
      time: "3:32",
      image: Song5,
    },
    {
      id: 6,
      title: "New Song",
      artist: "Artist Name",
      releaseDate: "Jan 1, 2024",
      played: "123.456.789 times",
      time: "3:45",
      image: Song1,
    },
  ];  

  return (
    <div className="min-h-screen max-w-screen flex font-jakarta overflow-y-auto">
      <div className="w-1/5 bg-[#181818] border-r-2 border-[#FF2DF7]">
        <Sidebar />
      </div>
      <div className="w-4/5 bg-[#181818] px-[3vw] py-[4vh]">
        <div className="min-h-[30vh] w-full bg-[#1e1e1e] rounded-lg px-[2vw] py-[3vh] flex justify-between mb-[5vh]">
          <div className="min-w-1/4 h-[24vh] flex flex-col justify-between">
            <button
              onClick={handleBack}
              className="text-white hover:text-gray-400"
            >
              <AiOutlineArrowLeft className="text-2xl" />
            </button>
            <div className="flex flex-col gap-3">
              <p className="text-6xl font-bold text-white">{artistName}</p>
              <p className="text-lg text-white"><span className="font-bold">Monthly play: </span>123.456 plays</p>
            </div>
          </div>
          <div className="min-w-1/4 h-[24vh] flex items-center">
            {image && (
              <div className="w-[150px] h-[150px] scale-110 rounded-full overflow-hidden mb-4">
                <img
                  src={image}
                  alt={artistName}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
        <div className="w-full mb-[5vh]">
            <ArtistSongCard songs={artistSongs} />
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
