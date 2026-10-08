interface ProjectCardProps {
  projectName: string;
  projectDescription: string;
  projectImage: string;
  projectTechStack: string[];
  projectTechColors: string[];
  projectCodeLink: string;
  projectSiteLink: string;
}

export default function ProjectsCard({
  projectName,
  projectDescription,
  projectImage,
  projectTechStack = [],
  projectCodeLink,
  projectTechColors = [],
  projectSiteLink,
}: ProjectCardProps) {
  return (
    <div className="">
      <div className="h-full flex flex-col border-black dark:border-white dark:text-white border max-w-80 font-Poppins">
        <div className="">
          <img className="w-80" src={projectImage} />
        </div>
        <div className="text-center">
          <p className="font-bold text-xl my-3">{projectName}</p>
          <p className="font-regular text-sm text-justify mx-6">
            {projectDescription}
          </p>
        </div>
        <div className="text-center flex gap-3 mx-2 my-3 flex-wrap justify-center">
          {projectTechStack?.map((tech, index) => (
            <p
              key={index}
              className="font-regular text-sm h-7 rounded-xl py-1 px-3"
              style={{
                color: projectTechColors[index],
                backgroundColor: `${projectTechColors[index]}33`,
              }}
            >
              {tech}
            </p>
          ))}
        </div>
        <div className="flex my-3 mx-8 justify-between gap-3 mt-auto">
          <div className="flex w-1/2 border-[#0267ED] border p-1 rounded-md">
            <img className="w-7" src="/images/github.png" />
            <a 
            target="_blank"
        rel="noopener noreferrer"
            href={projectCodeLink}>
              <p className="font-regular text-sm mt-1 ml-2">View Code</p>
            </a>
          </div>
          <div className="flex w-1/2 border-[#0267ED] border py-1 rounded-md">
            <img className="w-7 ml-2 mr-3" src="/images/external-link.png" />
            <a
            target="_blank"
        rel="noopener noreferrer"
            href={projectSiteLink}>
              <p className="font-regular text-sm mt-1">Visit site</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
