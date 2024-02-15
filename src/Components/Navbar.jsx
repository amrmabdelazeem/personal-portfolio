import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import Sidebar from "./Sidebar/Sidebar";

export default function NavBar() {
  return (
    <nav
      id="navbar"
      className="flex min-w-72 max-w-full items-center justify-between p-5 text-white md:h-20 md:w-screen md:p-14"
    >
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, easeInOut: "easeOut", delay: 0.1 }}
        src="/assets/logo-no-background.png"
        alt="The main logo of the portfolio"
        className="w-20 h-auto md:w-28"
      />

      <div
        id="desktopMenu"
        className="mt-11 hidden h-16 gap-10 text-sm md:flex lg:text-xl"
      >
        <a
          href="#Homepage"
          className="pb-5 hover:border-b-4 hover:border-yellow-400 hover:text-yellow-400"
        >
          Homepage
        </a>
        <a
          className=" pb-5 hover:border-b-4 hover:border-yellow-400 hover:text-yellow-400"
          href="#About"
        >
          About
        </a>
        <a
          className="pb-5 hover:border-b-4 hover:border-yellow-400 hover:text-yellow-400"
          href="#Skills"
        >
          Skills
        </a>
        <a
          className=" pb-5 hover:border-b-4 hover:border-yellow-400 hover:text-yellow-400"
          href="#Projects"
        >
          Projects
        </a>
        <a
          className=" pb-5 hover:border-b-4 hover:border-yellow-400 hover:text-yellow-400"
          href="#Contact"
        >
          Contact
        </a>
      </div>
      <button
        id="desktopMenuBtn"
        className="hidden md:my-8 md:flex md:h-10 md:w-fit md:cursor-pointer md:items-center md:justify-center md:gap-2 md:rounded-full md:bg-slate-200 md:px-2 md:font-semibold md:text-black md:hover:bg-black md:hover:text-white lg:h-12 lg:px-4 lg:text-lg"
      >
        <GitHubIcon />
        <a
          href="https://github.com/amrmabdelazeem"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </button>
      <Sidebar />
    </nav>
  );
}
