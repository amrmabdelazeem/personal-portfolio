import GitHubIcon from '@mui/icons-material/GitHub';
import {motion} from "framer-motion";

export default function Links() {
    const links = [
        "Homepage",
        "About",
        "Skills",
        "Projects",
        "Contact"
];

const variants = {
    open:{
        transition:{
            staggerChildren:0.1,
        }
    },
    closed:{
        transition:{
            staggerChildren:0.05,
            staggerDirection:-1,
        }
    }
}
const itemVariants = {
    open:{
        y:0,
        opacity:1,
    },
    closed:{
        y:50,
        opacity:0
    }
}
    
  return (
    <motion.div className="links w-full h-full flex flex-col items-center justify-center gap-5 absolute"
    variants={variants}>
    {links.map((link)=>{
        return <motion.a className="text-xl font-semibold hover:text-yellow-400" variants={itemVariants} key={link} whileHover={{scale: 1.1}} href={`#${link}`}>{link}</motion.a>}
    )}
    <button
        id="mobileMenuBtn"
        className="flex items-center gap-3 text-lg bg-slate-200 px-4 w-fit h-12 rounded-full text-black font-semibold cursor-pointer absolute bottom-10 hover:bg-black hover:text-white"
      >
        <GitHubIcon/>
        <a href="https://github.com/amrmabdelazeem" target="_blank" rel="noreferrer">
          Github
        </a>
      </button>
    </motion.div>
    
  );
}
