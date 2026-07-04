 import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
 
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
 import {VscVscode} from "react-icons/vsc";
function Skills() {
  return (
    <section className="bg-slate-900 text-white px-10 py-8 border border-gray-800">

      <h1 className="text-4xl font-bold text-center mb-10">
        My Skills
      </h1>

      <div className="flex justify-between items-start">

        {/* Frontend */}
        <div>
          <h2 className="text-blue-500 font-semibold mb-3">Frontend</h2>

          <div className="flex gap-3">
            
            <div className="w-24 h-24 border border-gray-700 rounded-xl flex items-center justify-center hover:border-blue-500 hover:scale-105 duration-300">
              <FaHtml5 className="text-4xl text-orange-500" />
              HTML5
            </div>

            <div className="w-24 h-24 border border-gray-700 rounded-xl flex items-center justify-center hover:border-blue-500 hover:scale-105 duration-300">
              <FaCss3Alt className="text-4xl text-blue-700"/>
              CSS3
            </div>

            <div className="w-24 h-24 border border-gray-700 rounded-xl flex items-center justify-center hover:border-blue-500 hover:scale-105 duration-300">
              <SiJavascript className="text-4xl text-amber-300"/>
              JavaScript
            </div>

            <div className="w-24 h-24 border border-gray-700 rounded-xl flex items-center justify-center hover:border-blue-500 hover:scale-105 duration-300">
              <FaReact className="text-4xl text-blue-600"/>
              React.js
            </div>

            <div className="w-24 h-24 border border-gray-700 rounded-xl flex items-center justify-center hover:border-blue-500 hover:scale-105 duration-300">
              <SiTailwindcss className="text-4xl text-blue-600"/>
              Tailwind
            </div>
          </div>
        </div>

        {/* Backend */}
        <div>
          <h2 className="text-blue-500 font-semibold mb-3">Backend</h2>

          <div className="flex gap-3">
            <div className="w-24 h-24 border border-gray-700 rounded-xl flex items-center justify-center hover:border-green-500 hover:scale-105 duration-300">
              <FaNodeJs className="text-4xl text-green-400"/>
              Node.js
            </div>

            <div className="w-24 h-24 border border-gray-700 rounded-xl flex items-center justify-center hover:border-green-500 hover:scale-105 duration-300">
              <SiExpress className="text-3xl bg-black"/>
              Express.js
            </div>
          </div>
        </div>

        {/* Database */}
        <div>
          <h2 className="text-blue-500 font-semibold mb-3">Database</h2>

          <div className="flex gap-3">
            <div className="w-24 h-24 border border-gray-700 rounded-xl flex items-center justify-center hover:border-green-500 hover:scale-105 duration-300">
              <SiMongodb className="text-5xl text-green-800"/>
              MongoDB
            </div>

            <div className="w-24 h-24 border border-gray-700 rounded-xl flex items-center justify-center hover:border-green-500 hover:scale-105 duration-300">
              <SiMysql className="text-3xl text-white-400 bg-amber-600"/>
              MySQL
            </div>
          </div>
        </div>

        {/* Tools */}
        <div>
          <h2 className="text-blue-500 font-semibold mb-3">Tools</h2>

          <div className="flex gap-3">
            <div className="w-24 h-24 border border-gray-700 rounded-xl flex items-center justify-center hover:border-purple-500 hover:scale-105 duration-300">
              <FaGitAlt className="text-4xl text-orange-700"/>
              Git
            </div>

            <div className="w-24 h-24 border border-gray-700 rounded-xl flex items-center justify-center hover:border-purple-500 hover:scale-105 duration-300">
              <FaGithub className="text-4xl text-white-700"/>
              GitHub
            </div>

            <div className="w-24 h-24 border border-gray-700 rounded-xl flex items-center justify-center hover:border-purple-500 hover:scale-105 duration-300">
              <VscVscode className="text-3xl text-blue-500"/>
              VS Code
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;