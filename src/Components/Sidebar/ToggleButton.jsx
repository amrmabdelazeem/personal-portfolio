import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
export function ToggleButton({ setOpen }) {
  return (
    <button
      className="size-12 rounded-full fixed top-6 right-4 flex items-center justify-center border-none bg-transparent"
      onClick={() => setOpen((prev) => !prev)}
      title="sidebar button"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d= "M 2 2.5 L 20 2.5"
          variants={{
            open: { d: "M 3 16.5 L 17 2.5" },
            closed: { d: "M 2 2.5 L 20 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d= "M 2 16.346 L 20 16.346"
          variants={{
            open: { d: "M 3 2.5 L 17 16.346" },
            closed: { d: "M 2 16.346 L 20 16.346" },
          }}
        />
      </svg>
    </button>
  );
}
