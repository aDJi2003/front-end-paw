import Logo from "../assets/images/logo_paw.png";
import SoundBar from "../component/SoundBar";
import StartLogo from "../assets/images/start_paw.png";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-black pl-[8vw] pr-[6vw] py-[5vh] flex justify-center flex-col">
      <div className="w-full h-[6vh] flex justify-between items-center">
        <div className="flex gap-3 items-center justify-center">
          <img src={Logo} alt="app_logo" width={30} height={30} />
          <h2 className="text-3xl text-white">Melodify</h2>
        </div>
        <SoundBar />
      </div>
      <div className="w-full h-[84vh] flex gap-5 items-center justify-center">
        <div className="flex items-center gap-5 justify-between">
          <motion.div
            className="flex flex-col gap-10 max-w-[50%]"
            {...fadeInLeft}
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] leading-relaxed overflow-visible">
                Start your journey with melodify
              </h1>
              <p className="text-4xl text-white">Connect world through music</p>
            </div>
            <p className="text-2xl text-white">
              Our vision is to revolutionize the way brands and advertisers
              target, reach
            </p>
            <hr className="h-[2.5px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] rounded-full" />
            <div className="rounded-full">
              <button
                className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-black rounded-full border border-[#00F0FF]"
                onClick={() => navigate("/login")}
              >
                Get Started
                <FaArrowRight className="text-[#00F0FF]" />
              </button>
            </div>
          </motion.div>
          <motion.img
            src={StartLogo}
            alt="start_logo"
            className="-translate-y-[15px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Start;
