import { useState } from "react";
import { IconContext } from "react-icons";
import { DiCodeigniter } from "react-icons/di";
import { FaFacebook, FaGithub, FaHtml5, FaInstagram, FaJs, FaLinkedin, FaNodeJs, FaPhp, FaReact, FaWhatsapp } from "react-icons/fa"

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      {/* Navbar */}
      <nav className="h-20">
        <div className="container border-b-2 h-full mx-auto px-4">
          <div className="flex justify-between items-center h-full">
            <div>
              <span className="text-2xl font-mono font-semibold text-blue-500">achmad</span>
            </div>
            <div className="hidden md:flex">
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                <li><a href="#" className="hover:text-gray-300">About</a></li>
                <li><a href="#" className="hover:text-gray-300">Skill</a></li>
                <li><a href="#" className="hover:text-gray-300">Experience</a></li>
                <li><a href="#" className="hover:text-gray-300">Gallery</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          <div className={`md:hidden transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="mt-2 flex flex-col">
              <li><a href="#" className="block hover:bg-slate-50 hover:text-gray-300 cursor-pointer py-2">Home</a></li>
              <li><a href="#" className="block hover:bg-slate-50 hover:text-gray-300 cursor-pointer py-2">About</a></li>
              <li><a href="#" className="block hover:bg-slate-50 hover:text-gray-300 cursor-pointer py-2">Skill</a></li>
              <li><a href="#" className="block hover:bg-slate-50 hover:text-gray-300 cursor-pointer py-2">Experience</a></li>
              <li><a href="#" className="block hover:bg-slate-50 hover:text-gray-300 cursor-pointer py-2">Gallery</a></li>
              <li><a href="#" className="block hover:bg-slate-50 hover:text-gray-300 cursor-pointer py-2">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero h-[50rem] flex items-center">
        <div className="container h-full flex items-center bg-right bg-contain bg-no-repeat mx-auto px-4" style={{ backgroundImage: 'url("ahmad.png")' }}>
          <div className="">
            <h1 className="text-4xl md:text-6xl font-bold">Hi I Am</h1>
            <h1 className="text-4xl md:text-6xl font-bold">Syihab Ahmad</h1>
            <p className="mt-4 text-xl md:text-2xl">Web developer passionate about creating beautiful and functional websites.</p>

            <a href="https://wa.me/6285220787517" target="_blank" className="inline-block bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-bold py-3 px-10 mt-5"> Contact Me </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-slate-200 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-xl text-blue-500 mb-2">About Me</h2>

          <div className="md:flex">
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl mb-5">3+ Years <br /> Programming Experienced</h3>
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-800">Experienced Full Stack Developer with expertise in JavaScript and PHP frameworks. Proficient in React, Next.js, Node.js, CodeIgniter4, jQuery, and HTML. Skilled in creating website management systems, API payment integrations, attendance systems, and cashless pocket money systems. Proven track record of delivering high-quality solutions to meet business needs.</p>

              <div className="columns-2 mt-5">
                <div>
                  <h5 className="font-semibold text-blue-500">Name:</h5>
                  <p>Ahmad Sihabudin</p>
                </div>
                <div className="mt-5">
                  <h5 className="font-semibold text-blue-500">Location:</h5>
                  <p>Lampung, Indonesia</p>
                </div>
                <div className="mt-5">
                  <h5 className="font-semibold text-blue-500">Email:</h5>
                  <p>syihab.net@gmail.com</p>
                </div>
                <div className="mt-5">
                  <h5 className="font-semibold text-blue-500">Whatsapp:</h5>
                  <p>+6285220787517</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-blue-500 text-center mb-2">Skills</h2>
          <h3 className="text-3xl md:text-3xl text-center mb-5">Creative and Professional Skill Experience on Few Area</h3>

          <ul className="grid grid-cols-3">
            <li className="text-center p-10">
              <div className="inline-block bg-blue-500 rounded-full p-5">
                <IconContext.Provider value={{ size: "2.5rem" }}>
                  <FaHtml5 className="text-white" />
                </IconContext.Provider>
              </div>
              <h3 className="text-xl font-semibold">HTML & CSS</h3>
            </li>
            <li className="text-center p-10">
              <div className="inline-block bg-blue-500 rounded-full p-5">
                <IconContext.Provider value={{ size: "2.5rem" }}>
                  <FaJs className="text-white" />
                </IconContext.Provider>
              </div>
              <h3 className="text-xl font-semibold">Javascript</h3>
            </li>
            <li className="text-center p-10">
              <div className="inline-block bg-blue-500 rounded-full p-5">
                <IconContext.Provider value={{ size: "2.5rem" }}>
                  <FaReact className="text-white" />
                </IconContext.Provider>
              </div>
              <h3 className="text-xl font-semibold">React</h3>
            </li>
            <li className="text-center p-10">
              <div className="inline-block bg-blue-500 rounded-full p-5">
                <IconContext.Provider value={{ size: "2.5rem" }}>
                  <FaNodeJs className="text-white" />
                </IconContext.Provider>
              </div>
              <h3 className="text-xl font-semibold">Node JS</h3>
            </li>
            <li className="text-center p-10">
              <div className="inline-block bg-blue-500 rounded-full p-5">
                <IconContext.Provider value={{ size: "2.5rem" }}>
                  <FaPhp className="text-white" />
                </IconContext.Provider>
              </div>
              <h3 className="text-xl font-semibold">PHP</h3>
            </li>
            <li className="text-center p-10">
              <div className="inline-block bg-blue-500 rounded-full p-5">
                <IconContext.Provider value={{ size: "2.5rem" }}>
                  <DiCodeigniter className="text-white" />
                </IconContext.Provider>
              </div>
              <h3 className="text-xl font-semibold">Codeigniter</h3>
            </li>
          </ul>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container grid md:grid-cols-2 mx-auto gap-20 px-4">
          <div>
            <h2 className="text-xl font-bold text-blue-500 mb-3">Education</h2>

            <ul className="ps-10">
              <li className="relative pb-10 before:bg-blue-400 before:inline-block before:absolute before:left-[-22px] before:top-[15px] before:w-[1px] before:h-full before:opacity-75">
                <span className="absolute inline-block bg-blue-500 rounded-full w-[12px] h-[12px] top-3 start-[-27px]"></span>
                <h3 className="inline-block text-xl font-semibold mb-2">Darussalam Islamic Institute &nbsp;</h3>
                <span className="text-gray-500">(2017-2021)</span>
                <p className="text-gray-700">Banyuwangi, East Java</p>
                <span className="inline-block bg-blue-100 text-blue-500 py-3 px-5 mt-5">English Education Program</span>
              </li>
              <li className="relative">
                <span className="absolute inline-block bg-blue-500 rounded-full w-[12px] h-[12px] top-3 start-[-27px]"></span>
                <h3 className="inline-block text-xl font-semibold mb-2">Darussalam Vocatinal High School &nbsp;</h3>
                <span className="text-gray-500">(2014-2017)</span>
                <p className="text-gray-700">Banyuwangi, East Java</p>
                <span className="inline-block bg-blue-100 text-blue-500 py-3 px-5 mt-5">Dept. Computer and Network Engineering</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-500 mb-3">Work Experience</h2>

            <ul className="ps-10">
              <li className="relative pb-10 before:bg-blue-400 before:inline-block before:absolute before:left-[-22px] before:top-[15px] before:w-[1px] before:h-full before:opacity-75">
                <span className="absolute inline-block bg-blue-500 rounded-full w-[12px] h-[12px] top-3 start-[-27px]"></span>
                <h3 className="inline-block text-xl font-semibold mb-2">Fullstack Web Developer &nbsp;</h3>
                <span className="text-gray-500">(2023-2024)</span>
                <p className="text-gray-700">Elabram, Jakarta</p>
                <p className="mt-2">Developed & maintained a Learning Management System (LMS) for DANA Indonesia, gathering requirements, translating into specs, & implementing features using modern tech. Ensured scalability, security, & performance, fostering collaboration in team meetings & knowledge sharing.</p>
              </li>
              <li className="relative">
                <span className="absolute inline-block bg-blue-500 rounded-full w-[12px] h-[12px] top-3 start-[-27px]"></span>
                <h3 className="inline-block text-xl font-semibold mb-2">Fullstack Web Developer &nbsp;</h3>
                <span className="text-gray-500">(2021-2023)</span>
                <p className="text-gray-700">Darussalam Islamic Boarding School, East Java</p>
                <p className="mt-2">Developed website data management system for internal use, parents, and students. Integrated API payment systems, enhanced attendance tracking, and implemented cashless pocket money system. Ensured cross-browser compatibility, optimized performance, and deployed on Google Cloud Platform for scalability</p>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container text-center mx-auto px-4">
          <h2 className="text-xl font-bold text-blue-500 mb-8">Galery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="rounded overflow-hidden shadow-lg">
              <img className="w-full" src="./gallery/IMG_001.png" alt="Gallery 1" />
            </div>
            <div className="rounded overflow-hidden shadow-lg">
              <img className="w-full" src="./gallery/IMG_002.png" alt="Gallery 2" />
            </div>
            <div className="rounded overflow-hidden shadow-lg">
              <img className="w-full" src="./gallery/IMG_006.png" alt="Gallery 3" />
            </div>
            <div className="rounded overflow-hidden shadow-lg">
              <img className="w-full" src="./gallery/IMG_003.png" alt="Gallery 1" />
            </div>
            <div className="rounded overflow-hidden shadow-lg">
              <img className="w-full" src="./gallery/IMG_004.png" alt="Gallery 2" />
            </div>
            <div className="rounded overflow-hidden shadow-lg">
              <img className="w-full" src="./gallery/IMG_005.png" alt="Gallery 3" />
            </div>
            <div className="rounded overflow-hidden shadow-lg">
              <img className="w-full" src="./gallery/IMG_007.png" alt="Gallery 3" />
            </div>
            <div className="rounded overflow-hidden shadow-lg">
              <img className="w-full" src="./gallery/IMG_009.png" alt="Gallery 3" />
            </div>
            <div className="rounded overflow-hidden shadow-lg">
              <img className="w-full" src="./gallery/IMG_008.png" alt="Gallery 3" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container text-center mx-auto px-4">
          <h5 className="text-xl font-semibold text-blue-500 mb-2">Contact Me</h5>
          <h5 className="text-3xl md:text-3xl">Got a Project? Lest Talk!</h5>
          <div className="h-auto">
            <a href="https://wa.me/6285220787517" target="_blank" className="inline-block bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-bold py-3 px-10 mt-5"> Whatsapp </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="h-20">
        <div className="container flex border-t-2 h-full mx-auto justify-between items-center">
          <ul className="flex gap-5">
            <li>
              <a href="https://github.com/syihab-net" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </li>
            <li>
              <a href="https://web.facebook.com/syihab.udin.9469" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/syihab-net" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/syihab_net" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </li>
            <li>
              <a href="https://wa.me/6285220787517" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </li>
          </ul>
          <p>&copy; 2024 Ahmad Sihabudin. All rights reserved.</p>
        </div>
      </footer >
    </>
  )
}

export default App
