function Navbar(){
    return (
        <header className="bg-slate-950 text-white px-10 py-4">
        <div  className="flex item-center justify-between py-4 mx-auto" >
             <h1 className="text-2xl font-bold">Subasri.</h1>
             <nav>
                <ul className="flex gap-8">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Experience</a></li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Certification</a></li>
                    <li><a href="#">Contact</a></li>         
                </ul>
             </nav>
             <div className="flex items-center gap-4">
             <button className="w-10 h-10 rounded-full bg-slate-800">
            🌙
             </button>
             <button className="px-5 py-2 border rounded-2xl bg-purple-700 hover:bg-blue-700">
                Download Resume
            </button>
        </div>
        </div>
        </header>
       

    );

}
export default Navbar;