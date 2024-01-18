/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
export default function Contact() {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [sucess, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();
    // It won't cause problems to use your keys publicly with emailjs, don't worry.
    emailjs
      .sendForm(
        "service_6gohyrp",
        "template_wn4fcj6",
        formRef.current,
        "iA7pj-8YQWbsBfzoB",
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        },
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact m-auto flex h-[calc(100%-3rem)] max-w-5xl flex-col items-center gap-12 overflow-hidden sm:flex-row sm:p-10 md:gap-0 lg:gap-12"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div
        className="textContainer flex:1 flex flex-col gap-5 pt-10 text-center sm:text-left md:gap-10"
        variants={variants}
      >
        <motion.h1
          className="text-3xl font-bold leading-snug text-white sm:w-3/4 sm:text-5xl"
          variants={variants}
        >
          Let&apos;s get in touch
        </motion.h1>
        <motion.div className="item" variants={variants}>
          <h2 className="text-white">Mail</h2>
          <span className="font-medium text-gray-400">
            amr.abdelazeem22@gmail.com
          </span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2 className="text-white">Address</h2>
          <span className="font-medium text-gray-400">Istanbul, Turkeyie</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2 className="text-white">Phone</h2>
          <span className="font-medium text-gray-400">+90 552 361 26 94</span>
        </motion.div>
      </motion.div>
      <div className="formContainer relative w-4/5 flex-1">
        <motion.div
          className="contactSVG absolute -z-10 flex w-full justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0, y: 200 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            className="size-64 stroke-amber-300 md:size-96"
            viewBox="0 0 192.97 192.97"
          >
            <g>
              <g>
                <g>
                  <motion.path
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={isInView && { pathLength: 1 }}
                    transition={{ delay: 2, duration: 4 }}
                    d="M34.517,100h123.938c6.633,0,12.031-5.385,12.031-12.004V12.004c0-6.588-5.35-11.943-11.94-11.994     c-0.021-0.001-0.04-0.01-0.06-0.01h-0.031H34.517h-0.031c-0.021,0-0.04,0.009-0.06,0.01c-6.59,0.051-11.94,5.406-11.94,11.994     v75.992C22.484,94.615,27.883,100,34.517,100z M35.773,92l40.999-44.416l17.034,15.385C94.567,63.656,95.525,64,96.484,64     c0.96,0,1.918-0.344,2.68-1.031l17.033-15.385L157.197,92H35.773z M159.737,8.257c1.586,0.539,2.748,1.99,2.748,3.746v73.935     l-40.352-43.715L159.737,8.257z M148.091,8L96.484,54.609L44.88,8H148.091z M30.484,12.004c0-1.756,1.162-3.207,2.748-3.746     l37.604,33.966L30.484,85.938V12.004z"
                  />
                  <motion.path
                    initial={{ x: 100, pathLength: 0 }}
                    animate={isInView && { x: 0, pathLength: 1 }}
                    transition={{ duration: 1 }}
                    fill="none"
                    d="M176.486,128h-0.001H99.172l10.141-10.142c1.562-1.562,1.562-4.094,0-5.656c-1.562-1.562-4.094-1.562-5.656,0     l-16.969,16.971c-1.562,1.562-1.562,4.094,0,5.656l16.969,16.971c0.781,0.781,1.805,1.172,2.828,1.172s2.047-0.391,2.828-1.172     c1.562-1.562,1.562-4.094,0-5.656L99.172,136h77.313V128z"
                  />
                  <motion.path
                    initial={{ x: -100, pathLength: 0 }}
                    animate={isInView && { x: 0, pathLength: 1 }}
                    transition={{ duration: 2 }}
                    fill="none"
                    d="M89.312,152.201c-1.562-1.562-4.094-1.562-5.656,0c-1.562,1.562-1.562,4.094,0,5.656L93.797,168H16.484v8h77.313     l-10.141,10.142c-1.562,1.562-1.562,4.094,0,5.656c0.781,0.781,1.805,1.172,2.828,1.172c1.023,0,2.047-0.391,2.828-1.172     l16.969-16.971c1.562-1.562,1.562-4.094,0-5.656L89.312,152.201z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-2 sm:gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input
            className="rounded-md border bg-transparent p-2 text-white sm:p-5"
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="on"
            required
          />
          <input
            className="rounded-md border bg-transparent p-2 text-white sm:p-5"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="on"
            required
          />
          <textarea
            className="h-32 rounded-md border bg-transparent p-2 text-white sm:p-5 md:h-auto  "
            name="message"
            rows="8"
            placeholder="Message"
          ></textarea>
          <button className=" rounded-md border-none bg-amber-400 p-2 font-bold sm:p-5">
            Submit
          </button>
          {error && <p className="text-red-500">Error!</p>}
          {sucess && <p className="text-green-400">Success!</p>}
        </motion.form>
      </div>
      <div
        role="contentinfo"
        className="absolute bottom-0 left-0 flex h-10 w-full items-center justify-around overflow-hidden mt-10 bg-gray-400"
      >
        <span className="text-sm font-semibold tracking-wider md:text-base">
          &copy; Developed by Amr Abdelazeem
        </span>
        <div className="icons flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/amrmabdelazeem/"
            target="__blank"
            rel="norefferer"
            className="fa-brands fa-linkedin fa-xl cursor-pointer hover:text-blue-900"
          ></a>
          <a
            href="https://github.com/amrmabdelazeem"
            target="_blank"
            rel="noreferrer"
            className="fa-brands fa-github fa-xl cursor-pointer hover:text-white"
          ></a>
          <a
            href="https://www.instagram.com/amrismyname/"
            target="__blank"
            rel="norefferer"
            className="fa-brands fa-instagram fa-xl cursor-pointer hover:text-rose-200"
          ></a>
        </div>
      </div>
    </motion.div>
  );
}
