import { useState, useEffect } from "react";
import SongCard from "../component/SongCard";
import { AiOutlinePlus } from "react-icons/ai";
import ArtistCard from "../component/ArtistCard";
import TrendingSongCard from "../component/TrendingSongCard";
import Sidebar from "../component/Sidebar";
import axios from "axios";
import { calling_BE } from "../services/method";

const Home = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get(calling_BE + "/api/songs", {
      withCredentials: true
    }).then((res) => {
      const data = res.data.data;
      console.log(data);

      const newArr = [];

      data.map(dat => {
        const newData = {
          id: dat._id,
          image: "../assets/images/"+dat.img,
          title: dat.name,
          artist: dat.artist,
        }

        newArr.push(newData);
      })

      setSongs(newArr);
    }).catch((e) => {
      console.log(e);
    })
  }, []);

  // const artists = [
    
  // ];

  // useEffect(() => {
  //   const fetchArtists = async () => {
  //     try {
  //       const response = await fetch("https://auths-backend.vercel.app/api/artists");
  //       const data = await response.json();
  //       setMyArtists(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching artists:", error);
  //     }
  //   };

  //   fetchArtists();
  // }, []);

  const trendingSongs = [
    
  ];  

  // const formatDriveUrl = (url) => {
  //   const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)\//);
  //   if (fileIdMatch && fileIdMatch[1]) {
  //     return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
  //   }
  //   return url;
  // };

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
                id={song.id}
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
            {/* {artists.map((artist, index) => (
              <ArtistCard key={index} image={artist.image} name={artist.name} />
            ))} */}
            {/* {myArtists.map((artist) => (
              <ArtistCard
                key={artist._id}
                image={artist.image}
                name={artist.name}
              />
            ))} */}
            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="flex items-center justify-center rounded-full w-[80px] h-[80px] bg-[#1E1E1E]">
                <AiOutlinePlus className="text-white text-2xl" />
              </div>
              <p className="text-sm text-white font-bold">View All</p>
            </div>
          </div>
        </div>
        <div className="w-full mb-[5vh]">
            <TrendingSongCard songs={trendingSongs} heading="Trending" highlight="Songs" initialDisplayCount={5} />
        </div>
      </div>
    </div>
  );
};

export default Home;
