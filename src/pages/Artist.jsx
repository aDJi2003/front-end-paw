import { useState } from "react";
import Sidebar from "../component/Sidebar";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import ArtistCard from "../component/ArtistCard";

import Artist1 from "../assets/images/artist_1_paw.png";
import Artist2 from "../assets/images/artist_2_paw.png";
import Artist3 from "../assets/images/artist_3_paw.png";
import Artist4 from "../assets/images/artist_4_paw.png";
import Artist5 from "../assets/images/artist_5_paw.png";
import Artist6 from "../assets/images/artist_6_paw.png";

const Artist = () => {
  const [search, setSearch] = useState("");

  const artists = [
    { image: Artist1, name: "Eminem" },
    { image: Artist2, name: "The Weekend" },
    { image: Artist3, name: "Adele" },
    { image: Artist4, name: "Lana Del Ray" },
    { image: Artist5, name: "Harry Styles" },
    { image: Artist6, name: "Billie Eilish" },
    { image: Artist1, name: "Eminem" },
    { image: Artist2, name: "The Weekend" },
    { image: Artist3, name: "Adele" },
  ];

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen max-w-screen flex font-jakarta overflow-y-auto">
      <div className="w-1/5 bg-[#181818] border-r-2 border-[#FF2DF7]">
        <Sidebar />
      </div>
      <div className="w-4/5 bg-[#181818] px-[3vw] py-[4vh]">
        {/* Search Bar */}
        <div className="mb-[5vh]">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search artist..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 bg-[#1E1E1E] text-white rounded-lg outline-none pr-12 
                         border border-transparent focus:border-[#00F0FF] transition-all cursor-pointer"
            />
            <AiOutlineSearch
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-xl cursor-pointer"
            />
          </div>
        </div>

        {/* Artist Cards */}
        <div className="w-full mb-[5vh]">
          <h2 className="text-3xl font-bold text-white">
            Artist of the <span className="text-[#00F0FF]">Month</span>
          </h2>
          <div className="flex items-center gap-6 mt-6 overflow-x-auto custom-scroll pb-3">
            {filteredArtists.map((artist, index) => (
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
          <h2 className="text-3xl font-bold text-white">
            Popular <span className="text-[#00F0FF]">Artist</span>
          </h2>
          <div className="flex items-center gap-6 mt-6 overflow-x-auto custom-scroll pb-3">
            {filteredArtists.map((artist, index) => (
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
      </div>
    </div>
  );
};

export default Artist;
