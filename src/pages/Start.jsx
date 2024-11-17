import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ReactTyped } from "react-typed";

import Logo from "../assets/images/logo_paw.png";
import SoundBar from "../component/SoundBar";
import StartLogo from "../assets/images/start_paw.png";
import { FaArrowRight } from "react-icons/fa";
import particleImage from "../assets/images/star_particles_paw.png";

const Start = () => {
  const navigate = useNavigate();

  const textArray = [
    "Discover new beats.",
    "Share your favorite tracks.",
    "Create the soundtrack of your life.",
    "With Melodify, every song tells a story.",
    "Ready to tune in?",
  ];

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      shape: {
        type: "image",
        image: {
          src: particleImage,
          width: 3,
          height: 3,
        },
      },
      opacity: { value: 0.55 },
      size: { value: 30, random: true },
      move: {
        enable: true,
        speed: 0.5,
        direction: "bottom-left",
        random: false,
        outModes: { default: "out" },
      },
    },
    interactivity: { events: { onHover: { enable: false } } },
    retina_detect: true,
  }), []);

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-black px-[4vw] py-[5vh] flex flex-col relative">
      {/* Particles Effect */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Navbar */}
      <div className="w-full h-[6vh] flex justify-between items-center mb-5 lg:mb-0 z-10">
        <button
          className="flex gap-2 items-center justify-center"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="app_logo" className="w-8 h-8 lg:w-10 lg:h-10" />
          <h2 className="text-2xl lg:text-3xl text-white">Melodify</h2>
        </button>
        <SoundBar />
      </div>

      {/* Main Content */}
      <div className="w-full lg:h-[80vh] flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-5 lg:pl-[5vw] z-10">
        {/* Text Section */}
        <motion.div
          className="flex flex-col gap-6 lg:max-w-[50%]"
          {...fadeInLeft}
        >
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] leading-normal pb-3">
              Start your journey with Melodify
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white">
              Connect world through music
            </p>
          </div>
          <ReactTyped
            strings={textArray}
            typeSpeed={50}
            backSpeed={30}
            backDelay={1000}
            loop
            className="text-lg sm:text-xl lg:text-2xl text-white"
          />
          <hr className="h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] rounded-full" />
          <div className="flex justify-center lg:justify-start">
            <button
              className="flex items-center gap-2 px-5 py-2 text-sm sm:text-lg font-semibold text-white bg-black rounded-full border border-[#00F0FF] hover:shadow-lg transition-shadow duration-300"
              onClick={() => navigate("/login")}
            >
              Get Started
              <FaArrowRight className="text-[#00F0FF]" />
            </button>
          </div>
        </motion.div>

        {/* Image Section */}
        <div className="flex justify-center items-center lg:w-[50%]">
          <motion.img
            src={StartLogo}
            alt="start_logo"
            className="w-[250px] sm:w-[400px] lg:w-[500px] h-auto -translate-y-2 lg:-translate-y-[15px]"
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
