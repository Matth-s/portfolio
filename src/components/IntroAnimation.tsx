import { motion } from "motion/react";

type IntroAnimationProps = {
  setShowAnimation: () => void;
};

const IntroAnimation = ({ setShowAnimation }: IntroAnimationProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-3">
      <motion.p
        className="text-6xl font-bold text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Senosiain
      </motion.p>

      <motion.p
        className="text-6xl font-bold text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Matthieu
      </motion.p>

      <motion.p
        className="my-2 text-2xl font-bold text-white"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        Développeur web
      </motion.p>

      <motion.button
        className="flex w-auto cursor-pointer flex-row items-center gap-x-2 rounded-sm border-4 border-white p-4 font-extrabold text-white transition-colors duration-300"
        initial={{ opacity: 0, x: 50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.6,
            delay: 1.6,
          },
        }}
        onClick={setShowAnimation}
      >
        Découvrir
      </motion.button>
    </div>
  );
};

export default IntroAnimation;
