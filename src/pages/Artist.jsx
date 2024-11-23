import { useParams } from "react-router-dom";

const Artist = () => {
  const { artistName } = useParams();

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[#181818] text-white">
      <h1 className="text-4xl font-bold">{artistName}</h1>
    </div>
  );
};

export default Artist;
