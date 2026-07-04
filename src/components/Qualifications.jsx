import Certification from "./Certification";
import Education from "./Education";
import Experience from "./Experience";

function Qualifications(){
    return(
        <section className="bg-slate-900 text-white px-10 py-10 border border-gray-800">
            <h1 className="text-4xl font-bold text-center mb-10">Career Journey</h1>
<div className="flex gap-6">
    <Experience/>
    <Education/>
    <Certification/>
</div>
</section>
    );
}
export default Qualifications;