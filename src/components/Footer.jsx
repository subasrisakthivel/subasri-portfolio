import {FaArrowUp} from "react-icons/fa";
    function Footer() {
  return (
    <footer className="bg-slate-900 text-white px-10 py-8 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 Subasri Sakthivel. All Rights Reserved.</p>

        <p>Made with ❤️ using React & Tailwind CSS</p>

        <button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg transition"
>
  <FaArrowUp />
</button>
      </div>
    </footer>
  );
}

export default Footer;