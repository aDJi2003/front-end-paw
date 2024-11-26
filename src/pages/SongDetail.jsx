import { useParams } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import SongDetailCard from "../component/SongDetailCard";
import NowPlayingBar from "../component/NowPlayingBar"; 
import { calling_BE } from "../services/method";

import { useEffect, useState } from "react";
import axios from "axios";

const SongDetail = () => {
  const { songId } = useParams();

  const [song, setSong] = useState({
    id: 1,
    title: "", // {songTitle}
    artist: "",
    releaseDate: "",
    album: "",
    time: "",
    image: "",
  });

  useEffect(() => {
    console.log(songId)
    axios.get(calling_BE + "/api/songs/" + songId, {
        withCredentials: true,
    })
    .then((res) => {
        console.log("Response Data:", res.data.data); // Gunakan res.data

        const data = res.data.data;

        const getSong = {
          id: data._id,
          title: data.name,
          artist: data.artist,
          releaseDate: data.date,
          album: data.album,
          time: data.duration,
          image: "/images/"+data.img,
          lyrics: data.lyrics,
          audio: "/audio/"+data.song
        };

        setSong(getSong);
    })
    .catch((err) => {
        console.error("Error:", err);
    });
  }, [songId]);

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[#181818] text-white">
      {/* Sidebar */}
      <div className="w-1/5 bg-[#181818] border-r-2 border-[#FF2DF7]">
        <Sidebar />
      </div>
      <div className="w-4/5 bg-[#181818] px-[3vw] py-[4vh] flex-row gap-6">
        <section className="flex-1">
          <SongDetailCard song={song}/>
        </section>
      </div>
      {/* <NowPlayingBar
          image={currentSong.image}
          title={currentSong.title}
          artist={currentSong.artist}
          duration={currentSong.duration}
      /> */}
       
    </div>
  );
};

export default SongDetail;

