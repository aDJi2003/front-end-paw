import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import music from '../assets/audio/u-said-it-v13-1167.mp3';

const SoundBar = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play().catch((error) => {
        console.error('Audio play error:', error);
      });
    } else {
      ref.current.pause();
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      className="z-10 flex cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`h-4 w-[4px] mx-[0.1rem] bg-white border border-transparent ${
            click ? `animate-wave-${index + 1}` : 'paused'
          }`}
        ></span>
      ))}

      <audio src={music} ref={ref} loop />
    </motion.div>
  );
};

export default SoundBar;
