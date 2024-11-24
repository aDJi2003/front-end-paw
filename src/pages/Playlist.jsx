import Sidebar from "../component/Sidebar";
import SongCard from "../component/SongCard";

import { AiOutlinePlus } from "react-icons/ai";
import Song1 from "../assets/images/song_1_paw.png";
import Song2 from "../assets/images/song_2_paw.png";
import Song3 from "../assets/images/song_3_paw.png";
import Song4 from "../assets/images/song_4_paw.png";
import Song5 from "../assets/images/song_5_paw.png";

const Playlist = () => {
  const songs = [
    {
      image: Song1,
      title: "Whatever It Takes",
      artist: "Imagine Dragons",
    },
    {
      image: Song2,
      title: "Skyfall",
      artist: "Adele",
    },
    {
      image: Song3,
      title: "Superman",
      artist: "Eminem",
    },
    {
      image: Song4,
      title: "Softcore",
      artist: "The Neighbourhood",
    },
    {
      image: Song5,
      title: "The Lonliest",
      artist: "Måneskin",
    },
    {
      image: Song1,
      title: "Whatever It Takes",
      artist: "Imagine Dragons",
    },
    {
      image: Song2,
      title: "Skyfall",
      artist: "Adele",
    },
  ];
  return (
    <div className="min-h-screen max-w-screen flex font-jakarta overflow-y-auto">
      <div className="w-1/5 bg-[#181818] border-r-2 border-[#FF2DF7]">
        <Sidebar />
      </div>
      <div className="w-4/5 bg-[#181818] px-[3vw] py-[4vh]">
        <div className="w-full mb-[5vh]">
          <h2 className="text-3xl font-bold text-white">
            Playlist <span className="text-[#00F0FF]">A</span>
          </h2>
          <div className="mt-6 flex gap-4 overflow-x-auto custom-scroll pb-3">
            {songs.map((song, index) => (
              <SongCard
                key={index}
                image={song.image}
                title={song.title}
                artist={song.artist}
              />
            ))}
            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="flex items-center justify-center rounded-full w-[80px] h-[80px] bg-[#1E1E1E] hover:cursor-pointer">
                <AiOutlinePlus className="text-white text-2xl" />
              </div>
              <p className="text-sm text-white font-bold">View All</p>
            </div>
          </div>
        </div>
        <div className="w-full mb-[5vh]">
          <h2 className="text-3xl font-bold text-white">
            Playlist <span className="text-[#00F0FF]">B</span>
          </h2>
          <div className="mt-6 flex gap-4 overflow-x-auto custom-scroll pb-3">
            {songs.map((song, index) => (
              <SongCard
                key={index}
                image={song.image}
                title={song.title}
                artist={song.artist}
              />
            ))}
            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="flex items-center justify-center rounded-full w-[80px] h-[80px] bg-[#1E1E1E] hover:cursor-pointer">
                <AiOutlinePlus className="text-white text-2xl" />
              </div>
              <p className="text-sm text-white font-bold">View All</p>
            </div>
          </div>
        </div>
        <div className="w-full mb-[5vh]">
          <h2 className="text-3xl font-bold text-white">
            Playlist <span className="text-[#00F0FF]">C</span>
          </h2>
          <div className="mt-6 flex gap-4 overflow-x-auto custom-scroll pb-3">
            {songs.map((song, index) => (
              <SongCard
                key={index}
                image={song.image}
                title={song.title}
                artist={song.artist}
              />
            ))}
            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="flex items-center justify-center rounded-full w-[80px] h-[80px] bg-[#1E1E1E] hover:cursor-pointer">
                <AiOutlinePlus className="text-white text-2xl" />
              </div>
              <p className="text-sm text-white font-bold">View All</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
