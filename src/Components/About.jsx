import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: -150,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: .5,
      delayChildren: 0.3,
      type: "spring",
      stiffness: 40,
    },
    y: 0,
  },
};
const textVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren:0.03,
      stiffness: 50,
    },
  },
};

const letterVariants = {
  initial:{
    opacity:0,
    y:20,
  },
  animate: {
    opacity:1,
    y:0
  }
}
const text =
  "I'm a BCS graduate of Computer Science and Information Technology, with +3 years of experience in Software Enginering. With professional expreince in HTML, CSS, Javascript with several frameworks including ReactJS and with NodeJS, ExpressJS, MongoDB and PostgreSQL in backend, I'm dedicated to achieving the best solutions. I am a detail-oriented, hard-working, and determined individual keen to excel and seeking to expand and develop my skills through education and professional experience.";
export const About = () => {
  return (
    <div className="relative flex h-dvh w-full items-center justify-center gap-5 overflow-hidden bg-gradient-to-b from-blue-400 to-green-400">
      <div className="wrapper relative flex  max-w-7xl flex-col items-center md:flex-row">
        <div className="imageContainer flex flex-1 items-center justify-center">
          <img
            className="h-32 w-32 rounded-full object-cover md:h-full md:w-80 xl:w-80"
            src="assets/personal-photo.jpg"
            alt="My personal photo"
          />
        </div>
        <div className="textContainer flex flex-1 flex-col px-5 md:pr-10">
          <motion.h1
            className="mb-10 text-lg font-extrabold tracking-wider text-green-700 md:text-3xl xl:text-5xl"
            variants={variants}
            initial="initial"
            whileInView="animate"
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-sm font-bold leading-6 text-blue-900 sm:text-base sm:leading-8 xl:text-xl"
            variants={textVariants}
            initial="initial"
            whileInView="animate"
          >
          {text.split("").map((letter, index)=> {
            return (
              <motion.span key={letter+"_"+index} variants={letterVariants}>{letter}</motion.span>
            )
          })}
          </motion.p>
        </div>
      </div>
    </div>
  );
};
export default About;
