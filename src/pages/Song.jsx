import SongCard from "../component/SongCard";
import { AiOutlinePlus } from "react-icons/ai";
import TrendingSongCard from "../component/TrendingSongCard";
import Sidebar from "../component/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { calling_BE } from "../services/method";

const Song = () => {
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
          image: "/images/"+dat.img,
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


  const [trendingSongs, setTrendingSongs] = useState([]);
  
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
          image: "/images/"+dat.img,
          title: dat.name,
          artist: dat.artist,
        }

        newArr.push(newData);
      })

      setTrendingSongs(newArr);
    }).catch((e) => {
      console.log(e);
    })
  }, []);

  return (
    <div className="min-h-screen max-w-screen flex font-jakarta overflow-y-auto">
      {/* Sidebar */}
      <div className="w-1/5 bg-[#181818] border-r-2 border-[#FF2DF7]">
        <Sidebar />
      </div>
      {/* Main Song Page */}
      <div className="w-4/5 bg-[#181818] px-[3vw] py-[4vh]">
        {/* Trending Songs */}
        <div className="w-full mb-[5vh]">
            <TrendingSongCard songs={trendingSongs} heading="Trending" highlight="Songs" initialDisplayCount={5} />
        </div>
        {/* New Release Songs */}
        <div className="w-full mb-[5vh]">
          <h2 className="text-3xl font-bold text-white">
            New Release <span className="text-[#00F0FF]">Songs</span>
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
      </div>
    </div>
  );
};

export default Song;
