import bin from "../assets/bin.png";
import ev from "../assets/ev.png";
import task from "../assets/task.png";
import ProjectCard from "./ProjectCard";
function Projects() {
  const projects = [
    {
      image:bin,
          title:"Smart Waste Bin Monitoring Dashboard",
          description:"Built a real-time dashboard to monitor waste bins with CRUD operations, responsive tables, and location-based bin management.",
          technologies:["React.js", "JavaScript", "HTML5", "CSS3", "Vite"],
          liveDemo:"",
          github:"https://github.com/subasrisakthivel/Imp",

    },
    {
      image:ev,
          title:"Electric Vehicle Charging Station System",
          description:"Developed an EV charging station booking system with user authentication, slot booking, Round Robin scheduling, and Google Maps integration.",
          technologies:["Java", "JSP", "SQL Server", "HTML5", "CSS3"],
          liveDemo:"",
          github:"https://github.com/subasrisakthivel/ElectricVehicle",

    },
    {
      image:task,
          title:"Task Management App",
          description:"Developed a MERN stack task management application with CRUD operations, task search, filtering, and priority management using REST APIs.",
          technologies:["React.js", "Node.js", "Express.js", "MongoDB","HTML5",],
          liveDemo:"https://task-demo.vercel.app",
          github:"https://github.com/subasrisakthivel/task",

    },
]
  
  return (
    <section 
 id="projects"
 className="bg-white text-black dark:bg-slate-900 dark:text-white py-10"
>
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
      <div className="flex items-center justify-between">
        {projects.map((project) =>(
          <ProjectCard 
          key={project.title}
    image={project.image}
    title={project.title}
    description={project.description}
    technologies={project.technologies}
    github={project.github}
    liveDemo={project.liveDemo}
    />
    ))}
      </div> 
    </section>
  );
}
export default Projects;
