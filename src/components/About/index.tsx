import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "tailwindcss/tailwind.css";

const About: React.FC = () => {
  const [rise, setRise] = useState(false);
  const [color, setColor] = useState("#000000");
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setRise(true);
    }
  }, [inView]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor((prevColor) => {
        const hex =
          (parseInt(prevColor.substring(1), 16) + 0x00000f) % 0xffffff;
        return "#" + ("000000" + hex.toString(16)).substr(-6);
      });
    }, 1000); // Change the interval to 1000ms to change the color every 1 second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" h-full flex flex-col justify-center items-center scroll-smooth">
      <section
        id="about"
        ref={ref}
        className="lg:py-12 lg:w-2/3 w-full flex flex-col justify-center gap-10 p-3 py-6 lg:gap-16 h-screen"
      >
        <motion.h1
          className={`text-4xl lg:text-8xl font-bold ${
            rise ? "animate-rise" : ""
          }`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          Anvesh Vanam
        </motion.h1>
        <motion.h2
          className={`text-2xl lg:text-6xl font-bold ${
            rise ? "animate-rise" : ""
          }`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          style={{ color: color }} // Set the text color to the current value of the color state
        >
          Web Developer
        </motion.h2>
        <motion.p
          className={`lg:text-2xl mt-4 ${rise ? "animate-rise-delay" : ""}`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
        >
          I am an aspiring web developer with a passion for building full-stack
          web projects. I have expertise in React, Node.js, Express.js, Python,
          HTML5, CSS3, SQLITE, TailwindCSS, MongoDB, Next.js, and TypeScript,
          which have helped me create unique and responsive web applications.
          With my skills and dedication, I am ready to take on new challenges
          and deliver exceptional results.
        </motion.p>
        <motion.div
          className={`flex flex-wrap gap-3 lg:gap-10 font-bold items-center mt-5 mb-5 lg:mb-0 lg:mt-0 ${
            rise ? "animate-rise" : ""
          }`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        >
          <img
            src="\logos\html-5.png"
            className="w-10 lg:w-24 text-white hover:-translate-y-1"
            alt=""
            title="HTML"
          />
          <img
            src="\logos\css-3.png"
            className="w-10 lg:w-24 hover:-translate-y-1"
            alt=""
            title="CSS"
          />
          <img
            src="\logos\java-script.png"
            className="w-10 lg:w-24 hover:-translate-y-1"
            alt=""
            title="JavaScript"
          />
          <img
            src="\logos\python.png"
            className="w-10 lg:w-24 hover:-translate-y-1"
            alt=""
            title="Python"
          />
          <img
            src="\logos\react.png"
            className="w-10 lg:w-24 hover:-translate-y-1"
            alt=""
            title="React"
          />
          <img
            src="\logos\nodejs.png"
            className="w-10 lg:w-24 hover:-translate-y-1"
            alt=" "
            title="Node.js"
          />
          <img
            src="\logos\expressjs.png"
            className="w-10 lg:w-24 hover:-translate-y-1"
            alt=""
            title="Express.js"
          />
          <img
            src="\logos\sqlite.svg"
            className="w-10 lg:w-24 hover:-translate-y-1"
            alt=""
            title="SQLite"
          />
          <img
            src="\logos\tailwind.svg"
            className="w-10 lg:w-24 text-blue hover:-translate-y-1"
            alt=""
            title="TailwindCSS"
          />
          <img
            src="\logos\mongo.svg"
            className="w-10 lg:w-24 hover:-translate-y-1"
            alt=""
            title="MongoDB"
          />
          <img
            src="\logos\nextjs.png"
            className="w-10 lg:w-24 hover:-translate-y-1"
            alt=""
            title="Next.js"
          />
          <img
            src="\logos\typescript.png"
            className="w-10 lg:w-24 hover:-translate-y-1"
            alt=""
            title="TypeScript"
          />
        </motion.div>
        <div className="flex w-full justify-center gap-10 items-center">
          <motion.a
            className={`w-32 h-10 text-white hover:shadow-2xl border hover:border-blue-400 bg-black rounded-sm text-center p-2 self-center ${
              rise ? "animate-rise" : ""
            }`}
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 2, ease: "easeOut" }}
            href="#projects"
            onClick={() => {
              const projectsElement = document.getElementById("projects");
              if (projectsElement) {
                window.scrollTo({
                  top: projectsElement.offsetTop,
                  behavior: "smooth",
                });
              }
            }}
          >
            PROJECTS
          </motion.a>

          <motion.a
            className={`w-32 h-10 text-white hover:shadow-2xl border hover:border-blue-400 bg-black rounded-sm text-center p-2 self-center ${
              rise ? "animate-rise" : ""
            }`}
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 2, ease: "easeOut" }}
            href="#contact"
            onClick={() => {
              const contactsElement = document.getElementById("contact");
              if (contactsElement) {
                window.scrollTo({
                  top: contactsElement.offsetTop,
                  behavior: "smooth",
                });
              }
            }}
          >
            CONTACT
          </motion.a>
          <motion.a
            className={`w-32 h-10 text-white hover:shadow-2xl border hover:border-blue-400 bg-black rounded-sm text-center p-2 self-center ${
              rise ? "animate-rise" : ""
            }`}
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 2, ease: "easeOut" }}
            href="https://drive.google.com/uc?export=download&id=1YRKvP5RLgjKgnxHGYt4g5haaVOptKAAL"
          >
            RESUME
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default About;
