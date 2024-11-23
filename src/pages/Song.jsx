import { useParams } from "react-router-dom";

const Song = () => {
  const { songTitle } = useParams();

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[#181818] text-white">
      <h1 className="text-4xl font-bold">{songTitle}</h1>
    </div>
  );
};

export default Song;
