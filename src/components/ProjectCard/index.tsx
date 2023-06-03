interface Props {
  projectDetails: {
    githubLink: string;
    source: string;
    image: string;
    title: string;
    description: string;
    tech: string[];
    frontend: boolean;
  };
}

const ProjectCard = (props: Props): JSX.Element => {
  const { projectDetails } = props;
  const { githubLink, source, image, title, description, tech, frontend } =
    projectDetails;
  return (
    <li className="flex flex-col w-[22rem] h-96 lg:w-[30rem] lg:h-auto bg-slate-200 rounded-md border hover:border-blue-500 hover:shadow-2xl hover:delay-100 hover:ease-in transition duration-150 ease-in-out shadow-white">
      <img
        src={image}
        alt={title}
        className="w-full h-44 lg:w-[500px] lg:h-[250px]"
      />
      <div className="h-52 w-full p-2 gap-3 lg:p-5 lg:gap-5 lg:h-60 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h1 className="text-black font-bold ">{title}</h1>
          <a href={githubLink}>
            <img
              src="\logos\github-mark.png"
              className="h-4 w-4 lg:h-8 lg:w-8 rounded-lg"
            />
          </a>
        </div>
        <ul className="flex">
          {tech.map((eachItem) => (
            <li
              className=" bg-slate-500 px-2 rounded-md text-white text-xs mr-2"
              key={eachItem}
            >
              {eachItem}
            </li>
          ))}
        </ul>
        <p className="text-sm">{description}</p>
        {frontend ? (
          <a
            href={source}
            className="text-white bg-indigo-600 w-20 text-xs lg:text-sm h-7 p-1 lg:w-28 lg:h-8 text-center lg:p-1 lg:font-semibold rounded-md self-start hover:bg-blue-800"
          >
            Visit Site
          </a>
        ) : (
          ""
        )}
      </div>
    </li>
  );
};

export default ProjectCard;
