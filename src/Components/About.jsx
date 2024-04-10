import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: -150,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
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
      staggerChildren: 0.03,
      stiffness: 50,
    },
  },
};

const letterVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
const text =
  "I'm a BCS graduate of Computer Science and Information Technology, with +3 years of experience in Software Enginering. Proficient in a wide array of technologies, including HTML, CSS, and JavaScript, with expertise in frameworks such as ReactJS. With demonstrated proficiency in backend development using NodeJS, ExpressJS, MongoDB, and PostgreSQL, enabling the creation of robust and scalable web applications. I am dedicated to delivering optimal solutions to complex problems as I thrive in dynamic environments where innovation and collaboration are valued. Driven by a passion for continuous learning and improvement, I am committed to expanding my skill set through both formal education and practical experience. Aspiring to contribute to cutting-edge projects and teams.";
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
            {text.split("").map((letter, index) => {
              return (
                <motion.span
                  key={letter + "_" + index}
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              );
            })}
          </motion.p>
        </div>
      </div>
    </div>
  );
};
export default About;
