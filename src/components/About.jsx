import about from "../assets/about.png"
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGraduationCap,
} from "react-icons/fa6";

function About(){
    return(
        <section 
 id="about" 
 className="bg-white text-black dark:bg-slate-900 dark:text-white"
>
            <div className="flex justify-between gap-10">
                <div className=" border border-gray-800 rounded-2xl">
                    <img src={about} alt="About" 
                    className="border-blue-700 h-80" />
                </div>
                <div>
                    <h1 className="border-b-2 font-bold text-2xl">About Me</h1>
                    <p className="py-5">I am an MCA graduate passionate about frontend development <br />
                    and building responsive, user-friendly web applications.</p> 
                    
                    <p className="py-4">I enjoy creating modern UI using React.js, JavaScript,<br />
                    Tailwind CSS and continuously learning new technologies.</p>
                   <div className="flex gap-4"> 
                    <span className="rounded-full border border-gray-800 px-4 py-2">🎓MCA Graduate</span> 
                    <span className="rounded-full border border-gray-800 px-4 py-2">🟢Available for work.</span> 
                    </div>
                    
                </div>
                <div  className="w-1 h-90 bg-gray-800"></div>
                <div className="space-y-6">
                    
                        <div className="flex items-center gap-5">
                            <FaUser className="text-blue-500 text-lg mr-4"/>
                            <span className="w-25 font-semibold">Name</span>
                            <span> Subasri Sakthivel</span>
                        </div>
                         <div className="flex items-center gap-5">
                            <FaEnvelope className="text-blue-500 text-lg mr-4"/>
                            <span className="w-25 font-semibold"> Email</span>
                            <span>subasrisakthivel10@gmail.com</span>
                        </div>
                         <div className="flex items-center gap-5">
                            <FaPhone className="text-blue-500 text-lg mr-4"/>
                            <span className="w-25 font-semibold">Phone</span>
                            <span>+91 6374304977</span>
                        </div>
                         <div className="flex items-center gap-5">
                            <FaLocationDot className="text-blue-500 text-lg mr-4"/>
                            <span className="w-25 font-semibold"> Location</span>
                            <span>Tamil Nadu,India</span>
                        </div>
                         <div className="flex items-center gap-5">
                            <FaGraduationCap className="text-blue-500 text-lg mr-4" />
                            <span className="w-25 font-semibold">Education</span>
                            <span>MCA</span>
                        </div>
                  
                </div>
            </div>
        </section>
    );
}
export default About;