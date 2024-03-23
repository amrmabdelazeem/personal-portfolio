/* eslint-disable react/prop-types */
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Personal Books Management System",
    image: "/assets/book-collection-preview.png",
    description:
      "This project is a web application that allows users to manage their personal books collection. It was built usingThis project is a web application that allows users to keep up with their own personal books, reviews and notes.",
    link: "https://github.com/amrmabdelazeem/book-notes",
    skills: [
      "NodeJS",
      "ExpressJS",
      "EJS",
      "JavaScript",
      "PostgreSQL",
      "Axios",
      "Sass",
    ],
  },
  {
    id: 2,
    title: "Todo App Lists",
    image: "/assets/todo-app-preview.jpg",
    description:
      "Create Todo Lists for different times as daily, monthly or yearly, store them into database and perform CRUD operations.",
    link: "https://github.com/amrmabdelazeem/Permalist-Project",
    skills: ["NodeJS", "ExpressJS", "EJS", "JavaScript", "PostgreSQL"],
  },
  {
    id: 3,
    title: "E-Commerce Product Page",
    image: "/assets/e-commerce-desktop-preview.jpg",
    description:
      "Choose the number of sneakers you want, add them to cart and remove them when done. In the desktop version, you can open a lightbox by clicking the main image and choose the product photo you wish for using navigation or thumbnails ",
    link: "https://amrmabdelazeem.github.io/ecommerce-product-page/",
    skills: [
      "ReactJS",
      "JSX",
      "TailwindCSS",
      "JavaScript",
      "Hooks",
      "Components",
      "Vite",
    ],
  },
  {
    id: 4,
    title: "Rick and Morty",
    image: "/assets/rick-morty.png?lazy=load",
    description:
      "Welcome to the Rick and Morty empire! This is a simple search application built using Node.js, ExpressJS, EJS (Embedded JavaScript templates), TailwindCSS Axios and Rick and Morty API. This project allows you to search with over 800+ indices of Rick and Morty characters, and search by name if it's the right name you'll get a random character from list of chars with the same name.",
    link: "https://github.com/amrmabdelazeem/rick-and-morty-app",
    skills: [
      "EJS",
      "CSS3",
      "JavaScript",
      "TailwindCSS",
      "NodeJS",
      "ExpressJS",
      "Axios",
      "REST API",
    ],
  },
  {
    id: 5,
    title: "Blogr Landing Page",
    image: "/assets/blogr-desktop-preview.jpg",
    description:
      "Discover a modern and user-friendly interface, that you can use as your homepage. Elevate your blogging experience with Blogr!",
    link: "https://amrmabdelazeem.github.io/blogr-landing-page/",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "DOM",
      "Respnosive-Design",
    ],
  },
  {
    id: 6,
    title: "Expenses Chart Component",
    image: "assets/expenses-chart-preview.jpg",
    description:
      "An expense report showing bar charts of the provided JSON data.",
    link: "https://amrmabdelazeem.github.io/expenses-chart-component/",
    skills: [
      "ReactJS",
      "JSX",
      "HTML5",
      "CSS3",
      "Sass",
      "JavaScript",
      "JSON",
      "Vite",
    ],
  },
  {
    id: 7,
    title: "Social links profile",
    image: "assets/social-media-links-preview.jpg",
    description: " Add all your social links into one place!",
    link: "https://amrmabdelazeem.github.io/social-links-profile/",
    skills: ["HTML5", "CSS3", "Sass", "Parcel"],
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  return (
    <section className="flex h-dvh snap-start justify-center">
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <div className="wrapper flex h-full flex-col items-center justify-center gap-12 pt-32 md:w-4/5 md:flex-row md:pt-20">
          <div
            className="imageContainer relative max-h-80 w-full flex-1 md:h-1/2"
            ref={ref}
          >
            <img
              src={item.image}
              className=" h-full w-full object-contain xl:object-cover"
              loading="lazy"
              alt="Project preview of the final result of the app"
            />
            <div className="usedSkiils absolute mt-2 hidden flex-wrap gap-x-2 gap-y-1 md:flex">
              {item.skills.map((skill, id) => {
                return (
                  <p
                    key={id}
                    className="mt-1 cursor-pointer rounded-2xl border-none bg-gray-400 px-2 py-1 text-xs text-black hover:bg-blue-900 hover:text-white"
                  >
                    {skill}
                  </p>
                );
              })}
            </div>
          </div>
          <motion.div
            className="textContainer mx-5 flex flex-1 transform-none flex-col items-center gap-3 text-center md:mx-0 md:items-start md:gap-7 md:text-left"
            style={{ y }}
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              {item.title}
            </h2>
            <p className="text-sm text-gray-400 md:text-base">
              {item.description}
            </p>
            <button className="w-44 cursor-pointer rounded-lg bg-amber-400 p-2">
              <a href={item.link} target="__blank" rel="noreferrer">
                See Demo
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default function Projects() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div id="Projects" className="portfolio relative h-full" ref={ref}>
      <div className="progress sticky left-0 top-0 pt-5 md:pt-12">
        <h1 className="mb-5 text-center text-2xl font-bold tracking-wide text-amber-400 sm:text-4xl">
          Projects
        </h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar mt-2 h-2 bg-white"
        ></motion.div>
      </div>
      {projects.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
}
