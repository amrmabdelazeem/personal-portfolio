import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.3,
    },
  },
};

const backVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.5,
    },
  },
};

export default function Skills() {
  return (
    <div className="skills flex h-full w-full flex-col items-center overflow-hidden bg-skills-bg px-5 ">
      <motion.div className="skills-header flex h-1/4 flex-col items-center justify-center">
        <motion.h2
          className="p-4 text-xl font-bold tracking-wide text-amber-400 md:text-2xl lg:text-4xl"
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="w-full border-b-4 border-dashed border-b-slate-500"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 2 }}
        ></motion.div>
      </motion.div>
      <div className="skills-icons h-full w-full">
        <div className="frontend mt-5">
          <motion.h3
            className="mb-5 font-semibold tracking-wider text-amber-500 md:text-2xl"
            variants={variants}
            initial="initial"
            whileInView="animate"
          >
            Frontend:
          </motion.h3>
          <motion.div
            className="frontend-skills grid grid-flow-row grid-cols-4 place-items-center gap-2 md:grid-cols-7 md:gap-4 md:pl-20 lg:grid-cols-12"
            variants={variants}
            initial="initial"
            whileInView="animate"
          >
            <motion.svg
              className="size-10 hover:scale-110 md:size-16"
              viewBox="0 0 124 141"
              variants={variants}
            >
              <title>HTML5</title>
              <path
                d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
                fill="#e34f26"
              />
              <path
                d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
                fill="#ef652a"
              />
              <path
                d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
                fill="#fff"
              />
            </motion.svg>

            <motion.img
              variants={variants}
              className="size-10 hover:scale-110 md:size-16"
              src="/assets/skills/css-3.svg"
              alt="CSS3 Icon"
              title="CSS3"
            />
            <motion.img
              variants={variants}
              className="size-10 rounded hover:scale-110 md:size-16"
              src="/assets/skills/js.png"
              alt="Javascript Icon"
              title="JavaScript"
            />
            <motion.img
              variants={variants}
              className="size-10 rounded hover:scale-110 md:size-16"
              src="/assets/skills/Typescript.png"
              alt="Typescript Icon"
              title="Typescript"
            />
            <motion.svg
              className="size-10 fill-blue-400 hover:scale-110 md:size-16"
              viewBox="0 0 122.88 121.74"
              variants={variants}
            >
              <title>JQuery</title>
              <g>
                <path d="M120.03,90.36l-0.55,1.43c-9.37,18.25-25.98,29.45-49.67,29.94c-11.07,0.23-21.63-2.61-28.52-5.7 C26.41,109.35,13.9,96.95,7.07,83.71c-9.8-18.98-11.57-45.39,8.81-65.11c0.31,0-2.47,4.28-2.16,4.28l-0.56,1.83 c-14.69,45.98,30.56,85.38,74.54,80.88C98.28,104.49,111.76,98.7,120.03,90.36L120.03,90.36L120.03,90.36z M120.03,90.36 L120.03,90.36L120.03,90.36L120.03,90.36z" />
                <path d="M93.41,71.35c11.07,0.08,22.62-5.1,29.47-12.36c-5.99,15.2-23.33,24.97-46.58,21.86 c-19.47-2.61-38.01-22.2-39.92-41.83c-1.4-14.29,3.58-22.81,11.79-33.16c-2.85,5.41-3.92,9.58-4.18,12.24 C40.86,49.02,68.67,71.19,93.41,71.35L93.41,71.35L93.41,71.35z M93.41,71.35L93.41,71.35L93.41,71.35L93.41,71.35z" />
                <path d="M121.77,32.97c-1.72,3.95-11.62,11.4-16,12.33c-17.32,3.69-28.41-4.52-34.22-13.87 c-0.86-1.4-2.46-5.21-2.75-6.18C66.55,17.59,67.58,6,74.3,0c-2.02,5.7-2.32,12.33-1.25,16.64c0.65,2.6,2.61,7.15,4.58,10.01 c3.58,5.21,5.85,6.47,10.46,9.24c2.07,1.24,4.3,2.24,5.26,2.52C97.71,39.69,106.92,43.07,121.77,32.97L121.77,32.97L121.77,32.97z M121.77,32.97L121.77,32.97L121.77,32.97L121.77,32.97z" />
              </g>
            </motion.svg>
            <motion.img
              variants={variants}
              className="size-10 hover:scale-110 md:size-16"
              src="/assets/skills/bootstrap.webp"
              alt="Bootstrap Icon"
              title="Bootstrap"
            />
            <motion.img
              variants={variants}
              className="size-10 hover:scale-110 md:size-16"
              src="/assets/skills/tailwind.svg"
              alt="TailwindCSS Icon"
              title="TailwindCSS"
            />
            <motion.svg
              className="size-8 hover:scale-110 md:size-12"
              variants={variants}
              viewBox="0 0 512 384"
            >
              <title>Sass</title>
              <path
                fill="#CF649A"
                d="M440.6 220.6c-17.9.1-33.4 4.4-46.4 10.8-4.8-9.5-9.6-17.8-10.4-24-.9-7.2-2-11.6-.9-20.2s6.1-20.8 6.1-21.8c-.1-.9-1.1-5.3-11.4-5.4-10.3-.1-19.2 2-20.2 4.7s-3 8.9-4.3 15.3c-1.8 9.4-20.6 42.7-31.3 60.2-3.5-6.8-6.5-12.8-7.1-17.6-.9-7.2-2-11.6-.9-20.2s6.1-20.8 6.1-21.8c-.1-.9-1.1-5.3-11.4-5.4-10.3-.1-19.2 2-20.2 4.7s-2.1 9.1-4.3 15.3c-2.1 6.2-27.1 61.8-33.6 76.3-3.3 7.4-6.2 13.3-8.3 17.3s-.1.3-.3.7c-1.8 3.4-2.8 5.3-2.8 5.3v.1c-1.4 2.5-2.9 4.9-3.6 4.9-.5 0-1.5-6.7.2-15.9 3.7-19.3 12.7-49.4 12.6-50.5 0-.5 1.7-5.8-5.8-8.5-7.3-2.7-9.9 1.8-10.5 1.8-.6 0-1.1 1.6-1.1 1.6s8.1-33.9-15.5-33.9c-14.8 0-35.2 16.1-45.3 30.8-6.4 3.5-20 10.9-34.4 18.8-5.5 3-11.2 6.2-16.6 9.1l-1.1-1.2c-28.6-30.5-81.5-52.1-79.3-93.1.8-14.9 6-54.2 101.6-101.8 78.3-39 141-28.3 151.9-4.5 15.5 34-33.5 97.2-114.9 106.3-31 3.5-47.3-8.5-51.4-13-4.3-4.7-4.9-4.9-6.5-4-2.6 1.4-1 5.6 0 8.1 2.4 6.3 12.4 17.5 29.4 23.1 14.9 4.9 51.3 7.6 95.3-9.4 49.3-19.1 87.8-72.1 76.5-116.4-11.5-45.1-86.3-59.9-157-34.8-42.1 15-87.7 38.4-120.5 69.1-39 36.4-45.2 68.2-42.6 81.4 9.1 47.1 74 77.8 100 100.5-1.3.7-2.5 1.4-3.6 2-13 6.4-62.5 32.3-74.9 59.7-14 31 2.2 53.3 13 56.3 33.4 9.3 67.6-7.4 86.1-34.9 18.4-27.5 16.2-63.2 7.7-79.5l-.3-.6 10.2-6c6.6-3.9 13.1-7.5 18.8-10.6-3.2 8.7-5.5 19-6.7 34-1.4 17.6 5.8 40.4 15.3 49.4 4.2 3.9 9.2 4 12.3 4 11 0 16-9.1 21.5-20 6.8-13.3 12.8-28.7 12.8-28.7s-7.5 41.7 13 41.7c7.5 0 15-9.7 18.4-14.7v.1s.2-.3.6-1c.8-1.2 1.2-1.9 1.2-1.9v-.2c3-5.2 9.7-17.1 19.7-36.8 12.9-25.4 25.3-57.2 25.3-57.2s1.2 7.8 4.9 20.6c2.2 7.6 7 15.9 10.7 24-3 4.2-4.8 6.6-4.8 6.6l.1.1c-2.4 3.2-5.1 6.6-7.9 10-10.2 12.2-22.4 26.1-24 30.1-1.9 4.7-1.5 8.2 2.2 11 2.7 2 7.5 2.4 12.6 2 9.2-.6 15.6-2.9 18.8-4.3 5-1.8 10.7-4.5 16.2-8.5 10-7.4 16.1-17.9 15.5-31.9-.3-7.7-2.8-15.3-5.9-22.5.9-1.3 1.8-2.6 2.7-4 15.8-23.1 28-48.5 28-48.5s1.2 7.8 4.9 20.6c1.9 6.5 5.7 13.6 9.1 20.6-14.8 12.1-24.1 26.1-27.3 35.3-5.9 17-1.3 24.7 7.4 26.5 3.9.8 9.5-1 13.7-2.8 5.2-1.7 11.5-4.6 17.3-8.9 10-7.4 19.6-17.7 19.1-31.6-.3-6.4-2-12.7-4.3-18.7 12.6-5.2 28.9-8.2 49.6-5.7 44.5 5.2 53.3 33 51.6 44.6-1.7 11.6-11 18-14.1 20-3.1 1.9-4.1 2.6-3.8 4 .4 2.1 1.8 2 4.5 1.6 3.7-.6 23.4-9.5 24.2-30.9 1.2-27.5-24.9-57.5-71.2-57.2zm-343.2 115.7c-14.7 16.1-35.4 22.2-44.2 17-9.5-5.5-5.8-29.2 12.3-46.3 11-10.4 25.3-20 34.7-25.9 2.1-1.3 5.3-3.2 9.1-5.5.6-.4 1-.6 1-.6.7-.4 1.5-.9 2.3-1.4 6.7 24.4.3 45.8-15.2 62.7zm107.5-73.1c-5.1 12.5-15.9 44.6-22.4 42.8-5.6-1.5-9-25.8-1.1-49.8 4-12.1 12.5-26.5 17.5-32.1 8.1-9 16.9-12 19.1-8.3 2.6 4.8-9.9 39.6-13.1 47.4zm88.7 42.4c-2.2 1.1-4.2 1.9-5.1 1.3-.7-.4.9-1.9.9-1.9s11.1-11.9 15.5-17.4c2.5-3.2 5.5-6.9 8.7-11.1v1.2c0 14.4-13.8 24-20 27.9zm68.4-15.6c-1.6-1.2-1.4-4.9 4-16.5 2.1-4.6 6.9-12.3 15.2-19.6 1 3 1.6 5.9 1.5 8.6-.1 18-12.9 24.7-20.7 27.5z"
              />
            </motion.svg>
            <motion.img
              variants={variants}
              className="size-10 hover:scale-110 md:size-16"
              src="/assets/skills/json.png"
              alt="JSON Icon"
              title="JSON"
            />
            <motion.svg
              variants={variants}
              className="size-10 hover:scale-110 md:size-16"
              viewBox="-11.5 -10.23174 23 20.46348"
            >
              <title>ReactJS</title>
              <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
              <g stroke="#61dafb" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </motion.svg>
            <motion.svg
              variants={variants}
              className="size-10 hover:scale-110 md:size-16"
              viewBox="0 0 36 32"
              fill="none"
            >
              <title>React MUI</title>
              <path
                d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
                fill="#007FFF"
              ></path>
            </motion.svg>
            <motion.svg
              variants={variants}
              className="size-10 hover:scale-110 md:size-16"
              viewBox="0 0 100 100"
            >
              <title>Redux</title>
              <g fill="#764ABC">
                <path d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z" />
                <path d="M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z" />
                <path d="M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z" />
              </g>
            </motion.svg>
            <motion.img
              variants={variants}
              className="size-10 hover:scale-110 md:size-16"
              src="/assets/skills/react-query.webp"
              alt="React Query Icon"
              title="React Query"
            />
            <motion.img
              variants={variants}
              className="size-10 hover:scale-110 md:size-16"
              src="/assets/skills/vite.png"
              alt="Vite Icon"
              title="Vite"
            />
            <motion.svg
              className="size-8 hover:scale-110 md:size-12"
              variants={variants}
              viewBox="3.7 3.7 43.6 43.6"
            >
              <title>Motion Framer</title>
              <path
                d="M47.3 3.7v21.8L36.4 36.4 25.5 47.3 14.6 36.4l10.9-10.9v.1-.1z"
                fill="#59529d"
              />
              <path d="M47.3 25.5v21.8L36.4 36.4z" fill="#5271b4" />
              <path
                d="M25.5 25.5 14.6 36.4 3.7 47.3V3.7l10.9 10.9z"
                fill="#bb4b96"
              />
            </motion.svg>
          </motion.div>
        </div>
        <div className="backend mt-5">
          <motion.h3
            className="mb-5 font-semibold tracking-wider text-amber-500 md:text-2xl"
            variants={variants}
            initial="initial"
            whileInView="animate"
          >
            Backend:
          </motion.h3>
          <motion.div
            className="backend-skills grid grid-flow-row grid-cols-3 place-items-center gap-2 md:grid-cols-5 md:gap-4 md:pl-20 lg:grid-cols-11"
            variants={backVariants}
            initial="initial"
            whileInView="animate"
          >
            <motion.img
              variants={backVariants}
              className="order-1 size-10 hover:scale-110 md:size-16"
              src="/assets/skills/nodejs.svg"
              alt="NodeJS Icon"
              title="NodeJS"
            />
            <motion.img
              variants={backVariants}
              className="order-2 w-20 place-self-center hover:scale-110 md:h-12 md:w-40"
              src="/assets/skills/express.webp"
              alt="Express js icon"
              title="ExpressJS"
            />
            <motion.svg
              variants={backVariants}
              className="order-3 size-10 fill-green-500 hover:scale-110 md:size-16"
              viewBox="0 0 32 32"
              stroke="#ffffff"
            >
              <title>EJS</title>
              <path d="M2,17.672V14.328l11.86-6.2V11.2L5.1,15.939l8.762,4.835v3.1Zm27.814-8.88L19.465,23.229H15.912L26.281,8.791ZM26.947,21.5a.794.794,0,0,0,.619-.278,1.061,1.061,0,0,0,.248-.732,1.141,1.141,0,0,0-.248-.753.768.768,0,0,0-1.217,0,1.141,1.141,0,0,0-.248.753,1.09,1.09,0,0,0,.237.732A.763.763,0,0,0,26.947,21.5Zm2.186,1.042a3.237,3.237,0,0,1-4.352-.01,2.864,2.864,0,0,1,0-4.1,3.223,3.223,0,0,1,4.352,0A2.773,2.773,0,0,1,30,20.486,2.74,2.74,0,0,1,29.134,22.538ZM18.821,13.061a.794.794,0,0,0,.619-.278,1.061,1.061,0,0,0,.248-.732,1.141,1.141,0,0,0-.248-.753.769.769,0,0,0-1.217,0,1.141,1.141,0,0,0-.248.753,1.09,1.09,0,0,0,.237.732A.763.763,0,0,0,18.821,13.061ZM21.007,14.1a3.237,3.237,0,0,1-4.352-.01,2.864,2.864,0,0,1,0-4.1,3.223,3.223,0,0,1,4.352,0,2.773,2.773,0,0,1,.866,2.063A2.74,2.74,0,0,1,21.007,14.1Z"></path>
            </motion.svg>
            <motion.img
              variants={backVariants}
              className="order-4 size-10 hover:scale-110 md:size-16"
              src="/assets/skills/api.svg"
              alt="Api icon"
              title="API"
            />
            <motion.img
              variants={backVariants}
              className="order-5 w-20 hover:scale-110 md:h-12 md:w-40"
              src="/assets/skills/mongodb.svg"
              alt="mongodb icon"
              title="MongoDB"
            />
            <motion.img
              variants={backVariants}
              className="order-6 size-10 hover:scale-110 md:size-16"
              src="/assets/skills/postgresql.png"
              alt="postgreSQL icon"
              title="PostgreSQL"
            />
            <motion.img
              variants={backVariants}
              className="order-6 size-10 hover:scale-110 md:size-16"
              src="/assets/skills/sql-server.png"
              alt="SQL Icon"
              title="SQL"
            />
          </motion.div>
        </div>
        <div className="mb-4 mt-5">
          <motion.h3
            className="mb-5 font-semibold tracking-wider text-amber-500 md:text-2xl"
            variants={variants}
            initial="initial"
            whileInView="animate"
          >
            Others:
          </motion.h3>

          <motion.div
            className="others-skills grid grid-flow-row grid-cols-4 place-items-center gap-2 md:grid-cols-5 md:gap-4 md:pl-20 lg:grid-cols-11"
            variants={backVariants}
            initial="initial"
            whileInView="animate"
          >
            <motion.svg
              variants={backVariants}
              className="size-10 fill-white hover:scale-110 md:size-16"
              viewBox="0 0 92 92"
            >
              <title>Git Version Control</title>
              <path d="M90.156 41.965 50.036 1.848a5.918 5.918 0 0 0-8.372 0l-8.328 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.034 7.034 0 0 1 1.669 7.277l10.187 10.184a7.028 7.028 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.05 7.05 0 0 1-9.965 0 7.044 7.044 0 0 1-1.528-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.06 7.06 0 0 1 2.304-1.539V33.926a7.049 7.049 0 0 1-3.82-9.234L29.242 14.272 1.73 41.777a5.925 5.925 0 0 0 0 8.371L41.852 90.27a5.925 5.925 0 0 0 8.37 0l39.934-39.934a5.925 5.925 0 0 0 0-8.371" />
            </motion.svg>
            <motion.svg
              variants={backVariants}
              className="size-10 fill-white hover:scale-110 md:size-16"
              viewBox="0 0 120 120"
            >
              <title>Github</title>
              <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
            </motion.svg>
            <motion.svg
              variants={backVariants}
              className="size-10 fill-white hover:scale-110  md:size-16"
              viewBox="0 0 780 250"
              aria-hidden="true"
            >
              <title>Node Package Manager</title>
              <path d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"></path>
            </motion.svg>
            <motion.svg
              variants={backVariants}
              className="size-10 fill-white hover:scale-110 md:size-16"
              viewBox="0 0 471.117 471.117"
            >
              <title>Responsive Web Design</title>
              <g id="SVGRepo_bgCarrier"></g>
              <g id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M447.564,129.817h-68.192c-8.213,0-14.871,6.675-14.871,14.872v129.155 c0,8.213,6.658,14.873,14.871,14.873h68.192c8.197,0,14.856-6.66,14.856-14.873V144.689 C462.42,136.492,455.761,129.817,447.564,129.817z M446.81,144.689v115.13h-66.776l-0.662-114.377L446.81,144.689z M406.025,273.461c0-4.076,3.321-7.429,7.428-7.429c4.122,0,7.443,3.353,7.443,7.429c0,4.107-3.321,7.444-7.443,7.444 C409.346,280.905,406.025,277.568,406.025,273.461z"></path>{" "}
                  <path d="M116.123,216.788v38.371h-12.365c-8.627,0-15.61,6.999-15.61,15.626 c0,8.629,6.983,15.609,15.61,15.609h101.765c8.629,0,15.626-6.98,15.626-15.609c0-8.627-6.997-15.626-15.626-15.626h-12.364 v-38.371H271.5c16.04,0,29.083-13.041,29.083-29.083V29.082C300.583,13.042,287.54,0,271.5,0H37.781 C21.739,0,8.697,13.042,8.697,29.082v158.623c0,16.042,13.042,29.083,29.084,29.083H116.123z M39.933,31.236h229.415v154.316 H39.933V31.236z"></path>{" "}
                  <path d="M345.138,298.622h-170.42c-16.118,0-29.237,13.118-29.237,29.235v114.024 c0,16.117,13.119,29.235,29.237,29.235h170.42c16.117,0,29.235-13.118,29.235-29.235V327.857 C374.374,311.74,361.255,298.622,345.138,298.622z M165.583,395.805c-6.044,0-10.935-4.876-10.935-10.936 c0-6.059,4.891-10.95,10.935-10.95c6.028,0,10.95,4.892,10.95,10.95C176.533,390.929,171.611,395.805,165.583,395.805z M350.951,441.882c0,3.198-2.614,5.813-5.813,5.813H184.577V322.045h160.562c3.198,0,5.813,2.614,5.813,5.813V441.882z"></path>{" "}
                  <path d="M49.36,399.558v-133.34v-25.452H25.937v170.511c0,6.46,5.244,11.704,11.705,11.704h78.48v-23.423 h-5.383H49.36z"></path>{" "}
                  <path d="M418.989,343.237v56.32h-20.485h-4.26v23.423h36.465c6.459,0,11.703-5.244,11.703-11.704V311.033 h-23.423V343.237z"></path>{" "}
                </g>{" "}
              </g>
            </motion.svg>
            <motion.img
              variants={backVariants}
              className="order-6 size-10 cursor-pointer hover:scale-110 md:size-16"
              src="/assets/skills/parceljs.avif"
              alt="Parcel Bundler"
              title="Parcel"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
