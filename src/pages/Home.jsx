import SongCard from "../component/SongCard";
import { AiOutlinePlus } from "react-icons/ai";
import ArtistCard from "../component/ArtistCard";
import TrendingSongCard from "../component/TrendingSongCard";
import Sidebar from "../component/Sidebar";

import Song1 from "../assets/images/song_1_paw.png";
import Song2 from "../assets/images/song_2_paw.png";
import Song3 from "../assets/images/song_3_paw.png";
import Song4 from "../assets/images/song_4_paw.png";
import Song5 from "../assets/images/song_5_paw.png";
import Artist1 from "../assets/images/artist_1_paw.png";
import Artist2 from "../assets/images/artist_2_paw.png";
import Artist3 from "../assets/images/artist_3_paw.png";
import Artist4 from "../assets/images/artist_4_paw.png";
import Artist5 from "../assets/images/artist_5_paw.png";
import Artist6 from "../assets/images/artist_6_paw.png";

const Home = () => {
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

  const artists = [
    {
      image: Artist1,
      name: "Eminem",
    },
    {
      image: Artist2,
      name: "The Weekend",
    },
    {
      image: Artist3,
      name: "Adele",
    },
    {
      image: Artist4,
      name: "Lana Del Ray",
    },
    {
      image: Artist5,
      name: "Harry Styles",
    },
    {
      image: Artist6,
      name: "Billie Eilish",
    },
    {
      image: Artist1,
      name: "Eminem",
    },
    {
      image: Artist2,
      name: "The Weekend",
    },
    {
      image: Artist3,
      name: "Adele",
    },
  ];

  const trendingSongs = [
    {
      id: 1,
      title: "Sorfcore",
      artist: "The Neighbourhood",
      releaseDate: "Nov 4, 2023",
      album: "Hard to Imagine the Neighbourhood",
      time: "4:50",
      image: Song1,
    },
    {
      id: 2,
      title: "Skyfall Beats",
      artist: "Nightmares",
      releaseDate: "Oct 26, 2023",
      album: "Nightmares",
      time: "3:16",
      image: Song2,
    },
    {
      id: 3,
      title: "Greedy",
      artist: "Tate McRae",
      releaseDate: "Dec 30, 2023",
      album: "Greedy",
      time: "4:12",
      image: Song3,
    },
    {
      id: 4,
      title: "Lovin On Me",
      artist: "Jack Harlow",
      releaseDate: "Dec 30, 2023",
      album: "Lovin On Me",
      time: "2:56",
      image: Song4,
    },
    {
      id: 5,
      title: "Pain the Town Red",
      artist: "Doja Cat",
      releaseDate: "Dec 29, 2023",
      album: "Paint The Town Red",
      time: "3:32",
      image: Song5,
    },
    {
      id: 6,
      title: "New Song",
      artist: "Artist Name",
      releaseDate: "Jan 1, 2024",
      album: "New Album",
      time: "3:45",
      image: Song1,
    },
  ];  

  return (
    <div className="min-h-screen max-w-screen flex font-jakarta overflow-y-auto">
      {/* Sidebar */}
      <div className="w-1/5 bg-[#181818] border-r-2 border-[#FF2DF7]">
        <Sidebar />
      </div>
      {/* Main Home */}
      <div className="w-4/5 bg-[#181818] px-[3vw] py-[4vh]">
        {/* Top Songs */}
        <div className="w-full mb-[5vh]">
          <h2 className="text-3xl font-bold text-white">
            Weekly Top <span className="text-[#00F0FF]">Songs</span>
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
            Popular <span className="text-[#00F0FF]">Artist</span>
          </h2>
          <div className="flex items-center gap-6 mt-6 overflow-x-auto custom-scroll pb-3">
            {artists.map((artist, index) => (
              <ArtistCard key={index} image={artist.image} name={artist.name} />
            ))}
            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="flex items-center justify-center rounded-full w-[80px] h-[80px] bg-[#1E1E1E]">
                <AiOutlinePlus className="text-white text-2xl" />
              </div>
              <p className="text-sm text-white font-bold">View All</p>
            </div>
          </div>
        </div>
        <div className="w-full mb-[5vh]">
            <TrendingSongCard songs={trendingSongs} />
        </div>
      </div>
    </div>
  );
};

export default Home;
