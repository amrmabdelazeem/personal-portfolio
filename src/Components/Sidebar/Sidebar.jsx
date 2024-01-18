import { motion } from "framer-motion";
import { useState } from "react";
import Links from "./Links";
import { ToggleButton } from "./ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 80% 45px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(25px at 80% 45px)",
    transition: {
      delay: 0.1 ,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="sidebar flex flex-col items-center justify-center bg-white text-black md:hidden z-40"
      animate={open ? "open" : "closed"}
    >
      <motion.div className="bg fixed top-0 right-0 bottom-0 w-52 bg-white" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}
