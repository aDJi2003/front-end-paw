import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import Logo from "../assets/images/logo_paw.png";
import SoundBar from "../component/SoundBar";
import StartLogo from "../assets/images/start_paw.png";
import { FaArrowRight } from "react-icons/fa";

const Start = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState("");
  const currentTextIndexRef = useRef(0);
  const charIndexRef = useRef(0);

  const textArray = [
    "Discover new beats.",
    "Share your favorite tracks.",
    "Create the soundtrack of your life.",
    "With Melodify, every song tells a story.",
    "Ready to tune in?",
  ];

  useEffect(() => {
    const typeNextChar = () => {
      const currentTextIndex = currentTextIndexRef.current;
      const charIndex = charIndexRef.current;
      const currentText = textArray[currentTextIndex];

      if (charIndex < currentText.length) {
        setTypedText((prev) => prev + currentText[charIndex]);
        charIndexRef.current += 1;
      } else if (currentTextIndex < textArray.length - 1) {
        clearInterval(typingInterval);
        setTimeout(() => {
          currentTextIndexRef.current += 1;
          charIndexRef.current = 0;
          setTypedText("");
          startTyping();
        }, 1000);
      } else {
        clearInterval(typingInterval);
      }
    };

    const startTyping = () => {
      typingInterval = setInterval(typeNextChar, 100);
    };

    let typingInterval = setInterval(typeNextChar, 100);
    return () => clearInterval(typingInterval);
  }, []);

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-black px-[4vw] py-[5vh] flex flex-col relative">
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
          <p className="text-lg sm:text-xl lg:text-2xl text-white">
            {typedText}
          </p>
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
            className="w-80 sm:w-[400px] lg:w-[500px] h-auto -translate-y-2 lg:-translate-y-[15px]"
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
