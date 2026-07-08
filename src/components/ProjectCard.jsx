function ProjectCard({
  image,
  title,
  description,
  technologies,
  liveDemo,
  github,
}) {
  return (
    <div className=" w-96 rounded-2xl border border-gray-700 bg-slate-800 overflow-hidden hover:scale-105 transition-all duration-300">
      <div className=" border border-gray-800 rounded-2xl">
        <img src={image} alt={title} className="border-blue-700 h-60 " />
      </div>
      <h1 className="font-bold">{title}</h1>
      <p>{description}</p>
      <div className=" flex flex-wrap gap-2 text-sm">
        {technologies.map((tech) => (
          
          <span
            className="rounded-full border border-gray-700 px-4 py-2"
           
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-5">
        {liveDemo&&(
          <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className=" rounded-full border border-blue-700 hover:bg-blue-700 px-4 ">
            
          Live Demo
        </a>
        )
}

        <a
          className=" rounded-full border border-blue-700 hover:bg-blue-700 px-4 "
          href={github}
          target="-blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;
