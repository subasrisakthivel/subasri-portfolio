import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { TbView360 } from "react-icons/tb";
import { RiSendPlaneFill } from "react-icons/ri";
import profile from "../assets/profile.png";

const downloadResume = ()=>{
  window.open("./Subasri_Resume.pdf");
}

function Hero() {
  return (
    <section className="bg-white text-black dark:bg-slate-900 dark:text-white px-10 py-8 border border-gray-800">
      <div className="flex item-center justify-between">
        <div>
          <p className="w-25 h-7 rounded-2xl bg-blue-950 "> 👋Hello, I'm </p>
          <h1 className="font-bold text-6xl">
            Subasri <span className="text-blue-500">Sakthivel</span>
          </h1>
          <h2 className="font-bold text-xl py-4">
            Frontend Developer |
            <span className="text-blue-500"> React Developer</span>
          </h2>
          <p className="py-3 ">
            I build responcive, fast and modern web applications <br /> using
            React.js,Javascript, TailwindCSS and Node.js.
          </p>

          <button onClick={downloadResume}
          className="px-5 py-2 border rounded-2xl bg-purple-700 hover:bg-blue-700 ">
            <FaDownload />Download Resume
          </button>
          <button className="px-5 py-2 border rounded-2xl border-blue-800 hover:bg-blue-700">
            <TbView360 />View Project
          </button>
          <button className="px-5 py-2 border rounded-2xl border-green-800 hover:bg-green-700">
            <RiSendPlaneFill />Hire Me
          </button>
          <div className="mt-6">
            <p className="mb-3">Connect with me</p>
            <div className="flex gap-5 ttext-2xl">
              <a
                href="https://github.com/subasrisakthivel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-blue-500" />
              </a>

              <a
                href="https://www.linkedin.com/in/subasri-sakthivel-76131a2a5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-500 " />
              </a>

              <a href="mailto:subasrisakthivel10@gmail.com">
                <FaEnvelope className="hover:text-blue-500" />
              </a>
            </div>
          </div>
        </div>
        <div>
            <img src={profile} alt="Subasri"
            className="w-95 rounded-full border-4 border-blue-500" />
        </div>
      </div>
    </section>
  );
}
export default Hero;






















