import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./About";
import Projects from "./Projects"; // Import the Projects component
import stones4uscreenshot from "./assets/stones4uscreenshot.png";
import azmotorsscreenshot from "./assets/azmotorsscreenshot.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const projects = [
    {
      img: stones4uscreenshot,
      alt: "Stones4U Project",
      title: "Stones4U",
      description:
        "E-commerce platform for premium stones and crystals. Features include product categories, shopping cart, user authentication, and responsive design built with React.",
    },
    {
      img: azmotorsscreenshot,
      alt: "AZ Motors Project",
      title: "AZ Motors",
      description:
        "Automotive dealership website with inventory browsing, vehicle details, and appointment scheduling.",
    },
  ];

  return (
    <Router>
      <main className="text-center px-0 min-h-screen flex flex-col">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <section>
                  <div className="flex justify-end">
                    <div className="text-right">
                      <ul className="gap-4 flex justify-center items-center text-2xl">
                        <a target="_blank" href="https://www.linkedin.com/in/am-swdeveloper/"><i className="fa-brands fa-linkedin icon-hover" style={{ color: "#ffffff" }}></i></a>
                        <a target="_blank" href="https://github.com/amrzv-dev"><i className="fa-brands fa-github-alt icon-hover" style={{ color: "#ffffff" }}></i></a>
                        <i className="fa-solid fa-envelopes-bulk icon-hover" style={{ color: "#ffffff" }}></i>
                      </ul>
                    </div>
                  </div>
                </section>
                <section className="animate-fade-in mt-10 pb-8 font-['Agrandir'] glass-effect w-full mx-auto">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-2">
                        A. Murzaev
                      </h1>
                      <h4 className="text-lg text-gray-200">
                        Software Developer (currently studying)
                      </h4>
                    </div>
                    <Link
                      to="/about"
                      className="px-6 py-3 text-neutral-900 bg-neutral-100 rounded-lg shadow-md hover:bg-neutral-600 hover:text-neutral-100 transition duration-300"
                    >
                      About me
                    </Link>
                  </div>
                </section>

                <section className="mt-16 pb-8 font-['Agrandir'] glass-effect shadow-md w-full mx-auto card-hover">
                  <div className="flex justify-between items-center h-auto">
                    <div className="p-2 rounded-lg mx-auto text-left">
                      <h1 className="pb-5">My archive</h1>
                      <p>
                        Here you'll find a selection of my software development
                        projects, each reflecting my passion for building
                        practical and engaging digital solutions. From clean
                        user interfaces to problem-solving behind the scenes,
                        these projects represent what I enjoy most about coding.
                        I’d love to hear your thoughts... feel free to reach out!
                      </p>
                    </div>
                    <Link
                      to="/projects"
                      className="text-neutral-900 px-6 py-3 bg-neutral-100 rounded-lg shadow-md hover:bg-neutral-600 hover:text-neutral-100 transition duration-300"
                    >
                      Projects
                    </Link>
                  </div>
                </section>
              </>
            }
          />
          {/* About Page */}
          <Route path="/about" element={<About />} />
          {/* Projects Page */}
          <Route path="/projects" element={<Projects projects={projects} />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="mt-auto glass-effect py-4 bg-neutral-700 text-white text-center">
        <p>&copy; 2025 A. Murzaev. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
