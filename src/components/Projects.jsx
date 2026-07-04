import bin from "../assets/bin.png";
import ev from "../assets/ev.png";
import task from "../assets/task.png";
function Projects() {
  return (
    <section className="bg-slate-900 text-white px-10 py-8 border border-gray-800">
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>

      {/* bin card */}
      <div className="flex items-center justify-between">
        <div className=" w-96 rounded-2xl border border-gray-700 bg-slate-800 overflow-hidden hover:scale-105 transition-all duration-300">
          <div className=" border border-gray-800 rounded-2xl">
            <img src={bin} alt="About" className="border-blue-700 " />
          </div>
          <h1 className="font-bold">Smart Waste Bin Monitoring Dashboard</h1>
          <p>
            Built a real-time dashboard to monitor waste bins with CRUD
            operations, responsive tables, and location-based bin management.
          </p>
          <div className=" text-sm flex gap-1">
            <span className="rounded-full border border-gray-700 px-4 py-2">
              React.js
            </span>
            <span className="rounded-full border border-gray-700 px-2 py-2">
              JavaScript
            </span>
            <span className="rounded-full border border-gray-700 px-4 py-2">
              HTML5
            </span>
            <span className="rounded-full border border-gray-700 px-4 py-2">
              CSS3
            </span>
            <span className="rounded-full border border-gray-700 px-4 py-2">
              vite
            </span>
          </div>
          <div className="flex gap-3 mt-5">
            <button className=" rounded-full border border-blue-700 hover:bg-blue-700 px-4 ">
              Live Demo
            </button>
            <button className=" rounded-full border border-blue-700 hover:bg-blue-700  px-4">
              GitHub
            </button>
          </div>
        </div>
        {/* Ev Card */}

        <div className=" w-96 rounded-2xl border border-gray-700 bg-slate-800 overflow-hidden hover:scale-105 transition-all duration-300">
          <div className=" border border-gray-800 rounded-2xl">
            <img src={ev} alt="Ev" className="border-blue-700 h-40 w-96" />
          </div>
          <h1 className="font-bold">
            Electric Vehicle Charging Station System
          </h1>
          <p>
            Developed an EV charging station booking system with user
            authentication, slot booking, Round Robin scheduling, and Google
            Maps integration.
          </p>

          <div className=" text-sm flex gap-1">
            <span className="rounded-full border border-gray-700 px-4 py-2">
              Java
            </span>
            <span className="rounded-full border border-gray-700 px-2 py-2">
              JSP
            </span>
            <span className="rounded-full border border-gray-700 px-4 py-2">
              SQL Server
            </span>
            <span className="rounded-full border border-gray-700 px-4 py-2">
              HTML5
            </span>
            <span className="rounded-full border border-gray-700 px-4 py-2">
              CSS3
            </span>
          </div>
          <div className="flex gap-3 mt-8">
            <button className=" rounded-full border border-blue-700 hover:bg-blue-700  px-4  ">
              Live Demo
            </button>
            <button className=" rounded-full border border-blue-700 hover:bg-blue-700  px-4">
              GitHub
            </button>
          </div>
        </div>
        {/* Task Card */}

        <div className=" w-96 rounded-2xl border border-gray-700 bg-slate-800 overflow-hidden hover:scale-105 transition-all duration-300">
          <div className=" border border-gray-800 rounded-2xl">
            <img src={task} alt="Task" className="border-blue-700 " />
          </div>
          <h1 className="font-bold">Task Management App</h1>
          <p>
            Developed a MERN stack task management application with CRUD
            operations, task search, filtering, and priority management using
            REST APIs.
          </p>
          <div className=" text-sm flex gap-1">
            <span className="rounded-full border border-gray-700 px-2 py-2">
              React.js
            </span>
            <span className="rounded-full border border-gray-700 px-4 py-2">
              Express.js
            </span>
            <span className="rounded-full border border-gray-700 px-4 py-2">
              Node.js
            </span>
            <span className="rounded-full border border-gray-700 px-4 py-2">
              MongoDb
            </span>
          </div>
          <div className="flex gap-3 mt-8">
            <button className=" rounded-full border border-blue-700 hover:bg-blue-700  px-4  ">
              Live Demo
            </button>
            <button className=" rounded-full border border-blue-700 hover:bg-blue-700  px-4">
              GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;
