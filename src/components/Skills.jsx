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
import { VscVscode } from "react-icons/vsc";
import SkillCard from "./SkillCard";

const frontendSkills = [
  {
    icon: FaHtml5,
    name: "HTML5",
    iconClass: "text-4xl text-orange-500",
  },
  {
    icon: FaCss3Alt,
    name: "CSS3",
    iconClass: "text-4xl text-blue-700",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
    iconClass: "text-4xl text-amber-300",
  },
  {
    icon: FaReact,
    name: "React.js",
    iconClass: "text-4xl text-blue-600",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    iconClass: "text-4xl text-blue-600",
  },
];

const BackendSkills = [
  {
    icon: FaNodeJs,
    name: "Node.js",
    iconClass: "text-4xl text-green-400",
  },
  {
    icon: SiExpress,
    name: "Express.js",
    iconClass: "text-3xl bg-black",
  },
];

const DataBaseSkills = [
  {
    icon: SiMongodb,
    name: "MongoDB",
    iconClass: "text-5xl text-green-800",
  },
  {
    icon: SiMysql,
    name: "MySql",
    iconClass: "text-3xl text-white-400 bg-amber-600",
  },
];

const ToolSkills = [
  {
    icon: FaGitAlt,
    name: "Git",
    iconClass: "text-4xl text-orange-700",
  },
  {
    icon: FaGithub,
    name: "GitHub",
    iconClass: "text-4xl text-white-700",
  },
  {
    icon: VscVscode,
    name: "Vs Code",
    iconClass: "text-3xl text-blue-500",
  },
];
const allSkills = [
  ...frontendSkills,
  ...BackendSkills,
  ...DataBaseSkills,
  ...ToolSkills,
];

function Skills() {
  return (
    <section
 id="skills"
 className="bg-white text-black dark:bg-slate-900 dark:text-white px-10 py-8 border border-gray-800"
>
      <h1 className="text-4xl font-bold text-center mb-10">My Skills</h1>
      <div className="flex gap-6 justify-center ">
        {allSkills.map((skill) => (
          <SkillCard
            key={skill.name}
            icon={skill.icon}
            name={skill.name}
            iconClass={skill.iconClass}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
