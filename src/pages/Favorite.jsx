import Sidebar from "../component/Sidebar";
import TrendingSongCard from "../component/TrendingSongCard";

import Song1 from "../assets/images/song_1_paw.png";
import Song2 from "../assets/images/song_2_paw.png";
import Song3 from "../assets/images/song_3_paw.png";
import Song4 from "../assets/images/song_4_paw.png";
import Song5 from "../assets/images/song_5_paw.png";

const Favorite = () => {
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
  ];
  return (
    <div className="min-h-screen max-w-screen flex font-jakarta overflow-y-auto">
      <div className="w-1/5 bg-[#181818] border-r-2 border-[#FF2DF7]">
        <Sidebar />
      </div>
      <div className="w-4/5 bg-[#181818] px-[3vw] py-[4vh]">
        <TrendingSongCard
          songs={trendingSongs}
          heading="Your Favorite"
          highlight="Songs"
          initialDisplayCount={10}
        />
      </div>
    </div>
  );
};

export default Favorite;
