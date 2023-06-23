import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../ProjectCard";

const backend_image =
  "https://res.cloudinary.com/dq9eefxnb/image/upload/v1683709290/dsBuffer.png_b3txfm.png";
const ProjectsList = [
  {
    id: uuidv4(),
    githubLink: "https://github.com/anveshvanam/Netflix-clone",
    source: "https://cinemora.vercel.app/",
    image: "https://i.imgur.com/R00tIUB.png", //  "https://i.imgur.com/Bc1Khrw.png",
    title: "Netflix Clone",
    tech: ["REACTJS", "TYPESCRIPT", "TAILWIND CSS"],
    description:
      "A Netflix clone built with React, Typescript and Tailwind using tmdb api. ",
    frontend: true,
    hasAuth: false,
  },
  {
    id: uuidv4(),
    githubLink: "https://github.com/anveshvanam/Book-Hub",
    source: "https://avbookhub.ccbp.tech/",
    image: "https://i.imgur.com/cKEqxo0.png",
    title: "BookHub",
    tech: ["REACTJS"],
    description:
      "A sample Goodreads clone app which fetches books from an API and lets you choose filters. Built with React. ",
    frontend: true,
    hasAuth: true,
  },
  // {
  //   id: uuidv4(),
  //   githubLink: "https://github.com/anveshvanam/IPL-Dashboard",
  //   source: "https://avipldashboard.ccbp.tech/",
  //   image: "https://i.imgur.com/d5mw0KW.png",
  //   title: "IPL Dashboard",
  //   tech: ["REACTJS"],
  //   description: "An IPL Dashboard web application built using React  ",
  //   frontend: true,
  //   hasAuth: false,
  // },
  {
    id: uuidv4(),
    githubLink: "https://github.com/anveshvanam/Emoji-Game",
    source: "https://avemojigame.ccbp.tech/",
    image: "https://i.imgur.com/V5SFRX4.png",
    title: "Emoji Game",
    tech: ["REACTJS"],
    description: "A simple Emoji Game built using React ",
    frontend: true,
    hasAuth: false,
  },
  {
    id: uuidv4(),
    githubLink: "https://github.com/anveshvanam/Jobby-App",
    source: "https://avjobbyapp.ccbp.tech/ ",
    image: "https://i.imgur.com/rQYZ6bt.png",
    title: "Jobby App",
    tech: ["REACTJS"],
    description: "Jobby - A Job search portal built using React ",
    frontend: true,
    hasAuth: true,
  },
  {
    id: uuidv4(),
    githubLink: "https://github.com/anveshvanam/Money-Manager",
    source: "https://avmoneymanager.ccbp.tech/",
    image: "https://i.imgur.com/eRCvIra.png",
    title: "Money Manager",
    tech: ["REACTJS"],
    description:
      "A simple Money Manager web application to store your income and expenses built using React  ",
    frontend: true,
    hasAuth: false,
  },
  {
    id: uuidv4(),
    githubLink: "https://github.com/anveshvanam/Todo-Application-NodeJS",
    source: "",
    image: backend_image,
    title: "Todo Application Backend",
    tech: ["NODE.JS", "EXPRESS.JS", "SQLITE"],
    description:
      "Samples APIs created for Todos Application using NodeJS, EpressJS and Sqlite3. The APIs allow user to perform GET, PUT, POST, DELETE operations on the todoApplication Database.  ",
    frontend: false,
  },
  {
    id: uuidv4(),
    githubLink: "https://github.com/anveshvanam/Covid-19-Authentication-NodeJS",
    source: "",
    image: backend_image,
    title: "Covid-19 Portal Backend",
    tech: ["NODE.JS", "EXPRESS.JS", "SQLITE"],
    description:
      "Sample APIs created using NodeJS, ExpressJs, SQLite3. the APIs allow user to perform GET, POST, PUT, DELETE operations on covid19IndiaPortal database after user authetication  ",
    frontend: false,
  },
  {
    id: uuidv4(),
    githubLink: "https://github.com/anveshvanam/Twitter-Clone-NodeJS",
    source: "",
    image: backend_image,
    title: "Twitter Clone Backend",
    tech: ["NODE.JS", "EXPRESS.JS", "SQLITE"],
    description:
      "Sample twitter clone APIs created using NodeJS, ExpressJS, SQLite3. the APIs allow user to perform operations on twitterClone database such as fetching tweets, replies, followers, likes and posting tweets. ",
    frontend: false,
  },
];

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger the animation when the element is 20% in view
    triggerOnce: false, // Only trigger the animation once
  });

  return (
    <motion.div
      id="projects"
      className="w-full"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      ref={ref} // Add the ref to the container element
    >
      <h1 className=" font-bold text-black text-2xl mt-6 mb-6 text-center">
        MY PROJECTS
      </h1>
      <ul className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center w-[-100%] gap-10 ">
        {ProjectsList.map((eachProject) => (
          <motion.div
            // Add the animation properties to each card element
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            key={eachProject.id}
          >
            <ProjectCard projectDetails={eachProject} />
          </motion.div>
        ))}
      </ul>
    </motion.div>
  );
};

export default Projects;
