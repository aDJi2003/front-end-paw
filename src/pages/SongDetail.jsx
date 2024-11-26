import { useParams } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import SongDetailCard from "../component/SongDetailCard";
import NowPlayingBar from "../component/NowPlayingBar"; 

import Song1 from "../assets/images/song_1_paw.png";
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
    axios.get("https://auths-backend.vercel.app/api/songs/" + songId, {
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
          image: "/assets/images/"+data.img,
          lyrics: data.lyrics
        };

        setSong(getSong);
    })
    .catch((err) => {
        console.error("Error:", err);
    });
  }, [songId]);

  // const lyrics = [
  //   "Falling too fast to prepare for this",  
  //   "Tripping in the world could be dangerous",  
  //   "Everybody circling, it's vulturous",  
  //   "Negative, nepotist",  
  //   "Everybody waiting for the fall of man",  
  //   "Everybody praying for the end of times",  
  //   "Everybody hoping they could be the one",  
  //   "I was born to run, I was born for this",  
  //   "Whip, whip",  
  //   "Run me like a racehorse",  
  //   "Pull me like a ripcord",  
  //   "Break me down and build me up",  
  //   "I wanna be the slip, slip",  
  //   "Word upon your lip, lip",  
  //   "Letter that you rip, rip",  
  //   "Break me down and build me up",  
  //   "Whatever it takes",  
  //   "'Cause I love the adrenaline in my veins",  
  //   "I do whatever it takes",  
  //   "'Cause I love how it feels when I break the chains",  
  //   "Whatever it takes",  
  //   "Yeah, take me to the top I'm ready for",  
  //   "Whatever it takes",  
  //   "'Cause I love the adrenaline in my veins",  
  //   "I do what it takes",  
  //   "Always had a fear of being typical",  
  //   "Looking at my body feeling miserable",  
  //   "Always hanging on to the visual",  
  //   "I wanna be invisible",  
  //   "Looking at my years like a martyrdom",  
  //   "Everybody needs to be a part of 'em",  
  //   "Never be enough, I'm the prodigal son",  
  //   "I was born to run, I was born for this",  
  //   "Whip, whip",  
  //   "Run me like a racehorse",  
  //   "Pull me like a ripcord",  
  //   "Break me down and build me up",  
  //   "I wanna be the slip, slip",  
  //   "Word upon your lip, lip",  
  //   "Letter that you rip, rip",  
  //   "Break me down and build me up",  
  //   "Whatever it takes",  
  //   "'Cause I love the adrenaline in my veins",  
  //   "I do whatever it takes",  
  //   "'Cause I love how it feels when I break the chains",  
  //   "Whatever it takes",  
  //   "Yeah, take me to the top, I'm ready for",  
  //   "Whatever it takes",  
  //   "'Cause I love the adrenaline in my veins",  
  //   "I do what it takes",  
  //   "Hypocritical, egotistical",  
  //   "Don't wanna be the parenthetical, hypothetical",  
  //   "Working onto something that I'm proud of, out of the box",  
  //   "An epoxy to the world and the vision we've lost",  
  //   "I'm an apostrophe",  
  //   "I'm just a symbol to remind you that there's more to see",  
  //   "I'm just a product of the system, a catastrophe",  
  //   "And yet a masterpiece, and yet I'm half-diseased",  
  //   "And when I am deceased",  
  //   "At least I go down to the grave and die happily",  
  //   "Leave the body and my soul to be a part of thee",  
  //   "I do what it takes",  
  //   "Whatever it takes",  
  //   "'Cause I love the adrenaline in my veins",  
  //   "I do whatever it takes",  
  //   "'Cause I love how it feels when I break the chains",  
  //   "Whatever it takes",  
  //   "Yeah, take me to the top, I'm ready for",  
  //   "Whatever it takes",  
  //   "'Cause I love the adrenaline in my veins",  
  //   "I do what it takes",
  // ];

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

