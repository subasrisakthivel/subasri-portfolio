import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-white text-black dark:bg-slate-900 dark:text-white px-10 py-8 border border-gray-800">

      <h1 className="text-4xl font-bold text-center">
        Contact <span className="text-blue-500">Me</span>
      </h1>

      <p className="text-center text-gray-400 mt-4 mb-12">
        Have a project in mind or want to work together? Feel free to reach out.
      </p>

      <div className="flex justify-between gap-10">

        {/* Left */}

        <div className="w-1/2 bg-slate-800 border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition duration-300">

          <h2 className="text-2xl font-semibold mb-8">
            Contact Information
          </h2>

          <div className="space-y-4">

            <div className="flex items-center gap-5">
              <FaEnvelope className="text-2xl text-blue-500" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">
                  subasrisakthivel10@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaPhoneAlt className="text-2xl text-blue-500" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400">
                  +91 6374304977
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaMapMarkerAlt className="text-2xl text-blue-500" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">
                  Tamil Nadu, India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaLinkedin className="text-2xl text-blue-500" />
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/subasri-sakthivel-76131a2a5/"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-400"
                >
                  linkedin.com/in/subasri
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaGithub className="text-2xl text-blue-500" />
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <a
                  href="https://github.com/subasrisakthivel"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-400"
                >
                  github.com/subasrisakthivel
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="w-1/2 bg-slate-800 border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition duration-300">

          <h2 className="text-2xl font-semibold mb-8">
            Send Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-900 border border-gray-700 rounded-lg py-3 px-4 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-900 border border-gray-700 rounded-lg py-3 px-4 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-slate-900 border border-gray-700 rounded-lg py-3 px-4 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full bg-slate-900 border border-gray-700 rounded-lg py-3 px-4 outline-none"
            />

            <button
              className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 hover:scale-105"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;