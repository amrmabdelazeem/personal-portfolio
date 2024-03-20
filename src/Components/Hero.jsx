import { motion } from "framer-motion";
import { useState } from "react";
import TitleChanger from "./TitleChanger";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollIcon: {
    opacity: 0,
    y: 10,
    transition: { duration: 2, repeat: Infinity },
  },
};
const imgVariants = {
  initial: {
    y: 350,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const sliderText = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

export default function Hero() {
  const [isHover, setIsHover] = useState(false);
  return (
    //
    <div className="hero relative h-[calc(100dvh-5.6rem)]  w-screen overflow-hidden bg-gradient-to-t from-gray-900 to-gray-700 px-5 md:h-[calc(100dvh-7rem)] md:px-12">
      <div className="wrapper flex h-full w-full max-w-4xl justify-center pt-5 sm:pt-10 xl:items-center">
        <motion.div
          className="textContainer flex flex-col gap-4 w-11/12"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.span
            variants={textVariants}
            className="text-2xl font-semibold tracking-wide text-yellow-200 sm:text-3xl sm:tracking-widest"
          >
            Hi, I&apos;m AMR ABDELAZEEM
          </motion.span>
          <motion.h1
            variants={textVariants}
            className="mb-5 w-full h-12 whitespace-nowrap text-2xl font-bold leading-snug tracking-wide text-orange-200 sm:w-2/4 md:w-2/3 md:text-5xl"
          >
            <TitleChanger/>
          </motion.h1>
          <motion.div
            variants={textVariants}
            className="buttons mb-8 flex gap-4"
          >
            <motion.button
              variants={textVariants}
              name="Linkedin Button"
              className="rounded-lg border border-white px-2 text-xl text-white"
              whileHover={{ scale: 1.2 }}
              onHoverStart={() => {
                setIsHover(!isHover);
              }}
              onHoverEnd={() => {
                setIsHover(!isHover);
              }}
            >
              <a
                href="https://www.linkedin.com/in/amrmabdelazeem/"
                target="__blank"
                rel="norefferer"
                aria-label="Visit my linkedin profile"
                
              >
                <svg className="h-14 w-28">
                  <g transform="matrix(.424533 0 0 .424533 8.778874 17.021191)">
                    <path
                      fill={isHover ? "#000" : "#fff"}
                      d="M26.896 43.398v8.704H0V9.043h9.433v34.355zM31.062 22.9h9.066v29.2h-9.066zm4.534-14.505a5.26 5.26 0 0 1 5.259 5.257c0 2.906-2.356 5.255-5.26 5.255s-5.256-2.35-5.256-5.255a5.26 5.26 0 0 1 5.256-5.257m61.76 14.502h11.1l-11.9 13.5L108.207 52.1H96.825l-9.62-14.425h-.117V52.1h-9.063V9.04h9.063v25.735zm-52.212.017h8.702v4h.12c1.208-2.297 4.17-4.713 8.58-4.713 9.188 0 10.88 6.043 10.88 13.898v16H64.36V37.903c0-3.386-.062-7.735-4.716-7.735-4.713 0-5.436 3.687-5.436 7.493v14.43h-9.066V22.914zm82.407 11.194c.06-3.022-2.298-5.56-5.564-5.56-3.987 0-6.164 2.72-6.403 5.56zm7.674 12.93c-2.9 3.687-7.673 5.804-12.4 5.804-9.064 0-16.317-6.047-16.317-15.414s7.253-15.4 16.317-15.4c8.468 0 13.78 6.043 13.78 15.4v2.84h-21.032c.72 3.445 3.323 5.68 6.83 5.68 2.962 0 4.955-1.5 6.467-3.567zm20.27-17.072c-4.53 0-7.248 3.024-7.248 7.432 0 4.416 2.72 7.434 7.248 7.434 4.536 0 7.257-3.018 7.257-7.434-.001-4.408-2.72-7.432-7.257-7.432m15.6 22.12h-8.342v-3.87h-.118c-1.395 2.115-4.897 4.594-9.008 4.594-8.706 0-14.446-6.283-14.446-15.17 0-8.16 5.076-15.654 13.416-15.654 3.75 0 7.255 1.027 9.3 3.867h.118V9.04h9.07z"
                    />
                    <path
                      d="M236.78 0h-52.107c-2.5 0-4.513 1.974-4.513 4.406v52.327c0 2.435 2.023 4.41 4.513 4.41h52.107c2.494 0 4.526-1.976 4.526-4.41V4.406C241.307 1.974 239.275 0 236.78 0z"
                      fill="#0177b5"
                    />
                    <path
                      d="M189.226 22.923h9.07v29.18h-9.07zm4.537-14.505a5.26 5.26 0 0 1 5.255 5.257 5.26 5.26 0 0 1-5.255 5.259 5.26 5.26 0 0 1-5.26-5.259 5.26 5.26 0 0 1 5.26-5.257m10.22 14.505h8.698V26.9h.12c1.2-2.294 4.17-4.713 8.58-4.713 9.184 0 10.88 6.044 10.88 13.9v16.005H223.2v-14.2c0-3.384-.062-7.737-4.713-7.737-4.72 0-5.443 3.686-5.443 7.492v14.435h-9.06v-29.18z"
                      fill={isHover ? "#fff" : "#000"}
                    />
                  </g>
                </svg>
              </a>
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.2 }}
              className="z-20 rounded-lg border border-white text-xl font-bold text-white"
            >
              <a
                className="px-5 py-3.5"
                href="https://drive.google.com/file/d/1Sxw2pvVoK3FjP3_TFHeFdx-fsiojBeIF/view"
                target="__blank"
                rel="norefferer"
                aria-label="Visit my google drive and check my resume"
              >
                Resume
              </a>
            </motion.button>
          </motion.div>
          <motion.img
            className="size-14 "
            src="/assets/mouse-scroll.png"
            alt="Scroll down icon"
            variants={textVariants}
            animate="scrollIcon"
          />
        </motion.div>
      </div>
      <motion.div
        className="backgroundText absolute bottom-0 overflow-hidden whitespace-nowrap text-9xl text-neutral-700/20"
        variants={sliderText}
        initial="initial"
        animate="animate"
      >
        Developer Passionate Writer
      </motion.div>
      <motion.div
        className="imageContainer absolute bottom-0 right-10"
        variants={imgVariants}
        initial="initial"
        animate="animate"
      >
        <motion.img
          variants={imgVariants}
          src="/assets/hero-image.webp"
          alt="Personal image of the developer"
          className="w-auto h-80 md:h-96 xl:h-full"
        />
      </motion.div>
    </div>
  );
}
